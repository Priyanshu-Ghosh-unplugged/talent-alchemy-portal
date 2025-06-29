
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Sparkles } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after a brief moment to show loading
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="text-center text-white">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Bot className="h-16 w-16 text-cyan-400 pulse-glow" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Talent Alchemy
          </h1>
          <Sparkles className="h-16 w-16 text-purple-400 pulse-glow" />
        </div>
        <p className="text-xl text-purple-200 mb-8">Initializing AI Portal...</p>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
