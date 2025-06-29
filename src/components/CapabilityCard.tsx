import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
  href?: string;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-purple-400 to-pink-400',
  delay = 0,
  href
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <div 
      className="group relative glass-card rounded-2xl p-6 hover-lift cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Icon container */}
      <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
    </div>
  );
};
