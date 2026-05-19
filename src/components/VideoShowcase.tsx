import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Users, ArrowRight, Volume2, VolumeX } from 'lucide-react';

const VideoShowcase = () => {
  const [isMuted, setIsMuted] = useState(true);
  const features = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Hospital-Integrated Training",
      description: "Your training happens alongside a real psychiatrist, clinical psychologist, counselling psychologist, psychiatric social worker, and special educator."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "10+ Expert Clinicians",
      description: "Guided by psychiatrists, RCI-registered clinical psychologists, and specialist faculty    not visiting lecturers, but your actual clinical team."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Graduate with Proof",
      description: "Clinical portfolio, case diary, therapy skill logs, and a letter of recommendation that no employer can ignore."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Experience Sereniche</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-indigo-950">
            See Our <span className="text-purple-600">Learning</span> <br className="hidden md:block" />
            <span className="text-[#D4A017]">Ecosystem</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Train inside the real hospital ecosystem, not a classroom.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            {/* Minimal Video Card */}
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white group">
              <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-cover shadow-2xl pointer-events-none"
              >
                <source src="/Sereniche.mp4" type="video/mp4" />
              </video>

              {/* Subtle Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Mute/Unmute Control */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-6 right-6 w-12 h-12 bg-black/20 backdrop-blur-md hover:bg-black/40 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-30"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Main Heading */}
            <h3 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-6">
              Inside Sereniche
            </h3>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
              Sereniche Academy operates within the Sereniche Centre for Behaviour Medicine, Futureace Hospital, Kerala    the only finishing school in Kerala where your learning environment is an active, functioning mental health system.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  {/* Icon Background */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {feature.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-indigo-950 mb-1 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-fit px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <span>Explore the Ecosystem</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
