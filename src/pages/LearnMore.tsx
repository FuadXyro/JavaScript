import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';
import {
  BeakerIcon,
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export default function LearnMore() {
  const { setLoading } = useLoading();

  useEffect(() => {
    // Simulate loading for better UX
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const features = [
    {
      title: "Advanced AI Technology",
      description: "State-of-the-art machine learning models powering intelligent solutions",
      icon: CpuChipIcon,
    },
    {
      title: "Data Analytics",
      description: "Deep insights and analytics to make informed decisions",
      icon: ChartBarIcon,
    },
    {
      title: "Innovation Labs",
      description: "Continuous research and development for cutting-edge solutions",
      icon: BeakerIcon,
    },
  ];

  const benefits = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks with intelligent workflows",
      icon: SparklesIcon,
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security measures to protect your data",
      icon: ShieldCheckIcon,
    },
    {
      title: "Intelligent Insights",
      description: "AI-powered analytics for better decision making",
      icon: LightBulbIcon,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Discover the Power of AI
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
              Explore how our advanced AI technology can transform the way you work,
              create, and interact.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Advanced Features
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Cutting-edge capabilities powered by next-generation AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="relative p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10" />
                <feature.icon className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Key Benefits
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Transform your workflow with our powerful AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="relative p-8 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-10" />
                <benefit.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
