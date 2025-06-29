import React from 'react';
import { BotToggle } from './BotToggle';
import { Bot, Sparkles, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  onBotModeChange: (mode: 'chat' | 'voice') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBotModeChange }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-white">
      {/* Mandala overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/mandala-bg.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          opacity: 0.4,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl float-animation" />
        <div className="absolute top-40 right-20 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl float-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 h-28 w-28 rounded-full bg-pink-500/20 blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8 flex items-center justify-center space-x-2">
            <Bot className="h-12 w-12 text-cyan-400 pulse-glow" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
              Talent Alchemy
            </h1>
            <Sparkles className="h-12 w-12 text-purple-400 pulse-glow" />
          </div>
          
          <p className="mx-auto mb-12 max-w-3xl text-xl text-purple-100 sm:text-2xl">
            Revolutionary AI-powered talent management platform that transforms recruitment, 
            onboarding, and employee engagement with intelligent automation and empathetic interactions.
          </p>
          
          {/* Stats */}
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-cyan-400 mr-2" />
                <span className="text-3xl font-bold text-white">20+</span>
              </div>
              <p className="text-purple-200">AI Capabilities</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-purple-200">Efficiency Boost</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Bot className="h-8 w-8 text-pink-400 mr-2" />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-purple-200">AI Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
