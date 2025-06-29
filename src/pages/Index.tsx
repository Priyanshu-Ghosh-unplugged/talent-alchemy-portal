
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const handleGetStarted = () => {
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="text-center text-white relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Bot className="h-20 w-20 text-cyan-400 animate-bounce" />
          <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Talent Alchemy
          </h1>
          <Sparkles className="h-20 w-20 text-purple-400 animate-pulse" />
        </div>
        
        <p className="text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Transform your recruitment process with AI-powered talent management solutions
        </p>
        
        <div className="space-y-4 mb-12">
          <p className="text-lg text-purple-300">
            🤖 Intelligent Resume Screening • 📅 Smart Interview Scheduling • 💼 Automated Offer Management
          </p>
          <p className="text-lg text-purple-300">
            🧠 Emotional Intelligence • 🎯 Personalized Job Matching • 🎮 Gamified Assessments
          </p>
        </div>
        
        <div className="space-x-4">
          <Button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/auth')}
            className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20 py-4 px-8 text-lg"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
