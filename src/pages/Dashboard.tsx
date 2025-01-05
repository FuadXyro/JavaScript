import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const letters = 'ZENITH - AI'.split('');

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        {/* Main animated text */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className={`text-7xl md:text-9xl font-bold ${
                letter === ' ' ? 'w-8' : ''
              }`}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                {letter}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mt-4"
        >
          Experience the Future of AI
        </motion.p>

        {/* Animated decorative elements */}
        <div className="relative mt-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Animated buttons */}
        <div className="flex items-center justify-center space-x-4 mt-12 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="px-8 py-3 border border-gray-700 rounded-lg text-gray-300 font-semibold hover:bg-gray-800/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}
