import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftIcon,
  PhotoIcon,
  CodeBracketIcon,
  MusicalNoteIcon,
  DocumentTextIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { useLoading } from '../context/LoadingContext';

interface GenerationOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  link: string;
  status: 'active' | 'coming-soon';
  badgeText?: string;
}

const generationOptions: GenerationOption[] = [
  {
    id: 'image',
    title: 'Image Generation',
    description: 'Create unique and stunning images from text descriptions using advanced AI models',
    icon: PhotoIcon,
    link: '/image-generation',
    status: 'active',
    badgeText: 'Popular',
  },
  {
    id: 'code',
    title: 'Code Generation',
    description: 'Generate code snippets, debug issues, and get programming assistance',
    icon: CodeBracketIcon,
    link: '/code-generation',
    status: 'active',
    badgeText: 'New',
  },
  {
    id: 'text',
    title: 'Text Generation',
    description: 'Create articles, stories, and creative writing with AI assistance',
    icon: DocumentTextIcon,
    link: '/text-generation',
    status: 'coming-soon',
  },
  {
    id: 'music',
    title: 'Music Generation',
    description: 'Compose unique musical pieces and melodies using AI technology',
    icon: MusicalNoteIcon,
    link: '/music-generation',
    status: 'coming-soon',
  },
  {
    id: 'video',
    title: 'Video Generation',
    description: 'Create and edit videos with AI-powered tools and effects',
    icon: VideoCameraIcon,
    link: '/video-generation',
    status: 'coming-soon',
  },
];

const Generation: React.FC = () => {
  const { setLoading } = useLoading();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  useEffect(() => {
    // Initial page load effect
    const initializePage = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate initial load
        // Add your actual initialization logic here
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [setLoading]);

  const activeOptions = generationOptions.filter(opt => opt.status === 'active');
  const comingSoonOptions = generationOptions.filter(opt => opt.status === 'coming-soon');

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] mt-16 bg-gray-900 custom-scrollbar">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
                <h1 className="text-xl font-bold text-white">ZENITH - AI Hub</h1>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Link
                to="/chat"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
                ZENITH - CHAT
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto max-w-5xl p-4 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Zenith Ai Generation Hub</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our suite of AI-powered generation tools. Create images, code, text, and more with
            Zenith's state-of-the-art artificial intelligence.
          </p>
        </div>

        {/* Active Options */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Available Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeOptions.map((option) => (
              <Link
                key={option.id}
                to={option.link}
                className={`
                  relative p-6 rounded-xl border transition-all duration-200 transform hover:scale-[1.02]
                  ${
                    selectedOption === option.id
                      ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500'
                      : hoveredOption === option.id
                      ? 'bg-gray-800/80 border-blue-500/50'
                      : 'bg-gray-800/50 border-gray-700'
                  }
                `}
                onClick={() => setSelectedOption(option.id)}
                onMouseEnter={() => setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {option.badgeText && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {option.badgeText}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg">
                    <option.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 text-sm">{option.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonOptions.map((option) => (
              <div
                key={option.id}
                className="p-6 rounded-xl border border-gray-700 bg-gray-800/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-gray-700/50 rounded-lg">
                    <option.icon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-400">{option.title}</h3>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                        Soon
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
