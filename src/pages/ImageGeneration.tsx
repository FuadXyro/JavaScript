import React, { useState, useEffect, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  PhotoIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  content: string;
  timestamp: Date;
}

const ImageGeneration: React.FC = () => {
  const { setLoading } = useLoading();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simulated response
      const newImages = [
        'https://via.placeholder.com/512x512?text=Generated+Image+1',
        'https://via.placeholder.com/512x512?text=Generated+Image+2'
      ];

      setImages(prevImages => [...newImages, ...prevImages]);
      setPrompt('');
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] mt-16 bg-gray-900">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <Link
                to="/generation"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse" />
                <h1 className="text-xl font-bold text-white">Zenith Image Generation</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">ZENITH AI Image Creation</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into stunning visuals using ZENITH advanced AI image generation technology.
              Simply describe what you want to see, and watch as our AI brings your vision to life.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium mb-2">
                Describe the image you want to create
              </label>
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <textarea
                  ref={textareaRef}
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="A detailed description of the image you want to generate..."
                />
                {prompt && (
                  <button
                    type="button"
                    onClick={() => setPrompt('')}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={`
                  inline-flex items-center px-6 py-3 rounded-lg text-white font-medium
                  ${!prompt.trim() || isGenerating
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700'
                  }
                  transition-colors duration-200
                `}
              >
                {isGenerating ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <PhotoIcon className="h-5 w-5 mr-2" />
                    Generate Image
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
              {error}
            </div>
          )}

          {images.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Generated Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((imageUrl, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={imageUrl}
                      alt={`Generated image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                      <button
                        onClick={() => window.open(imageUrl, '_blank')}
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium"
                      >
                        View Full Size
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <PhotoIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No images generated yet</h3>
              <p className="text-sm">
                Start by describing the image you want to create in the prompt above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGeneration;
