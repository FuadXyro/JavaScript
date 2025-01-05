import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';
import {
  PhotoIcon,
  ArrowLeftIcon,
  SparklesIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const { setLoading } = useLoading();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const id = '12345'; // Ganti dengan logika ID dinamis jika diperlukan

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      alert('Pesan berhasil disalin ke clipboard!');
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.zenkey.my.id/api/openai/ai4o?text=${encodeURIComponent(
          input.trim()
        )}&apikey=zenkey&userId=AI-${id}`
      );
      const result = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: result.result || 'Maaf, ada masalah dalam memproses permintaan.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan saat menghubungi server.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] mt-16 bg-gray-900">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <h1 className="text-xl font-bold text-white">ZENITH - CHAT</h1>
              </div>
            </div>
            <Link
              to="/generation"
              className="inline-flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              <SparklesIcon className="h-5 w-5 mr-2" />
              ZENITH - GENERATION
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <PhotoIcon className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Belum ada pesan</p>
            <p className="text-sm">Mulai percakapan dengan asisten AI</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs opacity-75">
                      {message.role === 'user' ? 'I\'am' : 'Ai Assistent'}
                    </span>
                    <span className="text-xs opacity-75">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm md:text-base whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <button
                    onClick={() => handleCopy(message.content)}
                    className="mt-2 text-xs text-blue-400 hover:underline"
                  >
                    Salin
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan Anda..."
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 resize-none"
            />
            {input.trim() && (
              <button type="submit" className="absolute right-2 bottom-2 p-2 text-blue-500">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
