'use client';

import { SignInButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Guest = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="font-sans bg-gray-50 text-gray-900"
    >
      {/* Hero Section */}
      <motion.section
        variants={slideLeft}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-10 md:pt-10 lg:pt-10 bg-white"
      >
        <motion.div variants={fadeUp} className="flex-1 space-y-6 max-w-xl md:mr-12">
          <motion.h1 variants={zoomIn} className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
            Sleep Better, Live Better
          </motion.h1>
          <motion.p variants={slideRight} className="text-lg md:text-xl text-gray-600">
            SleepTracker helps you monitor your sleep, understand patterns, and wake up feeling refreshed.
          </motion.p>
          <SignInButton>
            <motion.button
              variants={zoomIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:opacity-90 transition-all"
            >
              Get Started For Free
            </motion.button>
          </SignInButton>
        </motion.div>

        <motion.div variants={slideRight} className="flex-1 flex justify-center mt-12 md:mt-0">
          <motion.img
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            className="w-full max-w-sm md:max-w-md rounded-3xl shadow-xl"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </motion.section>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        className="h-[1px] bg-gray-200 my-10 mx-auto w-4/5"
      />

      {/* FAQ Section */}
      <motion.section
        variants={zoomIn}
        className="py-16 bg-gray-50 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div variants={container} className="max-w-3xl mx-auto space-y-10">
          {[
            {
              question: 'What is SleepTracker?',
              answer: 'SleepTracker is a smart app that tracks your sleep data, offering insights to improve your health and mood.',
            },
            {
              question: 'How does it work?',
              answer: 'Just log your sleep duration and mood each day. We’ll visualize your sleep-mood correlation to help you build better habits.',
            },
            {
              question: 'Is it free?',
              answer: 'Yes! SleepTracker is free to use with all essential features. Premium features are available for power users.',
            },
          ].map((faq, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3 className="text-xl font-semibold text-purple-600">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Divider */}
      <motion.div
        variants={slideLeft}
        className="h-[1px] bg-gray-200 my-10 mx-auto w-4/5"
      />

      {/* Testimonials Section */}
      <motion.section
        variants={fadeUp}
        className="py-16 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <motion.div
          variants={container}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: 'SleepTracker completely transformed my sleep. I now wake up energized every single morning!',
              name: 'Sarah L.',
            },
            {
              quote: 'With SleepTracker, I finally understood how my mood was linked to my sleep. Life-changing!',
              name: 'John D.',
            },
            {
              quote: 'It’s easy to use, insightful, and beautifully designed. A must-have for night owls like me!',
              name: 'Emily R.',
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              variants={zoomIn}
              className="bg-gray-100 hover:bg-purple-50 transition-colors p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="text-purple-600 font-semibold">- {t.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        variants={slideUp}
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-16 text-white text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Take Control of Your Sleep?
        </h2>
        <SignInButton>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Join Now — It is Free
          </motion.button>
        </SignInButton>
      </motion.section>
    </motion.div>
  );
};

export default Guest;
