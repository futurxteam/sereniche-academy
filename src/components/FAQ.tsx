import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, GraduationCap } from 'lucide-react';

const faqs = [
  {
    question: "1. Who is this course for?",
    answer: "The course has 12+ hours of content. Most students complete it in 2-4 weeks studying 1-2 hours per day at their own pace."
  },
  {
    question: "2. How long does it take to complete the course?",
    answer: "You have lifetime access to the course materials, including all future updates and additions."
  },
  {
    question: "3. What tools will I need for this course?",
    answer: "You will need a computer with internet access and a free Figma account. No prior software experience is required."
  },
  {
    question: "4. What kind of projects will I work on?",
    answer: "You will build a complete portfolio including a mobile app design, a responsive website, and a complex dashboard interface."
  },
  {
    question: "5. Is there a refund policy?",
    answer: "Yes, we offer a 14-day money-back guarantee if you are not completely satisfied with the course content."
  },
  {
    question: "6. What if I get stuck or need help?",
    answer: "You'll have access to our private Discord community where instructors and peers are available to help answer your questions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F8F7FC] text-gray-900 rounded-t-[3rem] relative z-20 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div className="sticky top-32 h-fit">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Frequently Asked <br /> Questions!
          </h2>
          <p className="text-gray-600 mb-8 max-w-md text-lg">
            It's your gateway to a career in design. With Sereniche, you'll gain the skills, confidence, and portfolio to stand out in the competitive world of UI/UX design.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-4 rounded-xl font-semibold text-white shadow-lg shadow-purple-200">
            View Courses
          </button>
        </div>

        {/* Right Side - Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#F1EFF8] rounded-2xl overflow-hidden transition-colors hover:bg-[#EAE7F2]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
