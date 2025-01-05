import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <InformationCircleIcon className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">About NEXON</h1>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              NEXON is a cutting-edge AI platform that combines powerful language
              processing and image generation capabilities. Our mission is to make
              advanced AI technology accessible and user-friendly.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced AI chat capabilities with natural language understanding</li>
                <li>State-of-the-art image generation using latest AI models</li>
                <li>User-friendly interface with real-time responses</li>
                <li>Secure and private conversations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Technology</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Built with React and TypeScript for robust performance</li>
                <li>Modern UI design with Tailwind CSS</li>
                <li>Powered by advanced language models</li>
                <li>Real-time messaging system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Privacy & Security</h2>
              <p>
                We take your privacy seriously. All conversations are encrypted and
                we never store sensitive personal information. Your data is handled
                according to the highest security standards.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                2025 NEXON. All rights reserved. For more information about our
                terms of service and privacy policy, please visit our documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
