
import React, { useState } from 'react';
import { MessageSquare, Voice } from 'lucide-react';

interface BotToggleProps {
  onModeChange: (mode: 'chat' | 'voice') => void;
}

export const BotToggle: React.FC<BotToggleProps> = ({ onModeChange }) => {
  const [mode, setMode] = useState<'chat' | 'voice'>('chat');

  const handleToggle = () => {
    const newMode = mode === 'chat' ? 'voice' : 'chat';
    setMode(newMode);
    onModeChange(newMode);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className={`text-sm font-medium transition-colors ${mode === 'chat' ? 'text-primary' : 'text-muted-foreground'}`}>
        Chat
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-12 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="Toggle bot mode"
      >
        <div
          className={`absolute left-1 top-1 h-10 w-10 rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            mode === 'voice' ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
        <MessageSquare className={`absolute left-2 h-6 w-6 text-blue-600 transition-opacity duration-300 ${mode === 'voice' ? 'opacity-0' : 'opacity-100'}`} />
        <Voice className={`absolute right-2 h-6 w-6 text-cyan-600 transition-opacity duration-300 ${mode === 'voice' ? 'opacity-100' : 'opacity-0'}`} />
      </button>
      <span className={`text-sm font-medium transition-colors ${mode === 'voice' ? 'text-primary' : 'text-muted-foreground'}`}>
        Voice
      </span>
    </div>
  );
};
