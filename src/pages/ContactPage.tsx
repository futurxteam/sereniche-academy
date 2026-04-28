import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'course-enquiry') {
        setFormData(prev => ({ ...prev, message: "I'm interested in applying for this program." }));
        setIsHighlighted(true);
        setTimeout(() => {
          const el = document.getElementById('contact-container');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
        
        setTimeout(() => {
          setIsHighlighted(false);
        }, 2000);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[800px] mx-auto relative z-10"
    >
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Touch</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Have questions? Reach out to us and we'll get back to you soon.
        </p>
      </div>

      <div id="contact-container" className={`bg-white backdrop-blur-xl border ${isHighlighted ? 'border-purple-600 shadow-[0_0_50px_rgba(124,58,237,0.3)]' : 'border-gray-200 shadow-[0_0_50px_rgba(124,58,237,0.1)]'} rounded-[32px] p-8 md:p-12 relative z-10 transition-all duration-700`}>
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 text-lg">
              We have received your message and will contact you soon.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }); }}
              className="mt-8 text-purple-600 hover:text-yellow-600 font-medium transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <User className="w-4 h-4 text-purple-600" /> Full Name
              </label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500/50' : 'border-gray-200'} focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 text-gray-900 transition-all duration-300 outline-none`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-600" /> Contact Number
                </label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-500/50' : 'border-gray-200'} focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 text-gray-900 transition-all duration-300 outline-none`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-600" /> Email ID
                </label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500/50' : 'border-gray-200'} focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 text-gray-900 transition-all duration-300 outline-none`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-600" /> Message (Optional)
              </label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-xl px-4 py-3 text-gray-900 transition-all duration-300 outline-none resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-gray-900 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]  flex items-center justify-center gap-2 mt-4"
            >
              Submit <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
