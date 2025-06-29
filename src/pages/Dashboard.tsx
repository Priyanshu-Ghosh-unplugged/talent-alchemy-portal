
import React, { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { CapabilityCard } from '../components/CapabilityCard';
import { ThemeToggle } from '../components/ThemeToggle';
import { 
  FileText, Calendar, Award, Heart, Users, Target, 
  Gamepad2, Video, UserPlus, Gift, MessageSquare, 
  Shield, Palette, Bell, BookOpen, Share2, Mic, 
  BarChart3, Mail, Globe
} from 'lucide-react';

const capabilities = [
  {
    icon: FileText,
    title: "Resume Reader",
    description: "Auto-screening and ranking candidates with advanced AI analysis of resumes and qualifications.",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: Calendar,
    title: "Interview Scheduler",
    description: "Scheduling, managing, and syncing interviews with smart calendar integration.",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Award,
    title: "Offer Clarifier",
    description: "Answering compensation and benefits questions, managing electronic signatures.",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Detecting and adapting to candidate mood for personalized, empathetic interactions.",
    gradient: "from-red-400 to-pink-400"
  },
  {
    icon: Users,
    title: "Talent Pool Re-engagement",
    description: "Re-engaging past candidates and keeping them updated with relevant opportunities.",
    gradient: "from-indigo-400 to-purple-400"
  },
  {
    icon: Target,
    title: "Personalized Job Matching",
    description: "Suggesting best-fit job roles based on skills, experience, and preferences.",
    gradient: "from-orange-400 to-red-400"
  },
  {
    icon: Gamepad2,
    title: "Gamified Assessments",
    description: "Assessing skills through fun mini-games and interactive challenges.",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    icon: Video,
    title: "Video Interview Booking",
    description: "Self-scheduling video interviews with seamless integration and reminders.",
    gradient: "from-cyan-400 to-blue-400"
  },
  {
    icon: UserPlus,
    title: "Onboarding Support",
    description: "Guiding new hires through comprehensive onboarding processes.",
    gradient: "from-teal-400 to-cyan-400"
  },
  {
    icon: Gift,
    title: "Referral Management",
    description: "Tracking and rewarding employee referrals with automated incentive systems.",
    gradient: "from-pink-400 to-rose-400"
  },
  {
    icon: MessageSquare,
    title: "Feedback Collection",
    description: "Collecting candidate feedback for continuous process improvement.",
    gradient: "from-violet-400 to-purple-400"
  },
  {
    icon: Shield,
    title: "Bias-Reduction",
    description: "Ensuring anonymous, fair screening to reduce unconscious bias in hiring.",
    gradient: "from-emerald-400 to-teal-400"
  },
  {
    icon: Palette,
    title: "Brand Customization",
    description: "Customizing look, feel, and language to match your company brand.",
    gradient: "from-fuchsia-400 to-pink-400"
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Providing instant application status notifications and progress tracking.",
    gradient: "from-amber-400 to-yellow-400"
  },
  {
    icon: BookOpen,
    title: "Skill Mapping",
    description: "Recommending relevant training and certifications for career development.",
    gradient: "from-lime-400 to-green-400"
  },
  {
    icon: Share2,
    title: "Social Media/ATS Integration",
    description: "Integrating with social media platforms and applicant tracking systems.",
    gradient: "from-sky-400 to-blue-400"
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Supporting voice commands and accessibility features for inclusive experiences.",
    gradient: "from-rose-400 to-red-400"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Delivering real-time analytics and insights for recruiters and HR teams.",
    gradient: "from-indigo-400 to-blue-400"
  },
  {
    icon: Mail,
    title: "Candidate Nurturing",
    description: "Automating engagement and nurturing campaigns to maintain candidate interest.",
    gradient: "from-purple-400 to-violet-400"
  },
  {
    icon: Globe,
    title: "Virtual Career Fair",
    description: "Hosting in-chat networking and live events for candidate engagement.",
    gradient: "from-teal-400 to-emerald-400"
  }
];

const Dashboard: React.FC = () => {
  const [botMode, setBotMode] = useState<'chat' | 'voice'>('chat');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Load the appropriate script based on bot mode
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=c32e8da3e485de1111b74eae0cd2485e';
    
    // Remove existing script if any
    const existingScript = document.getElementById('omnidimension-web-widget');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [botMode]);

  const handleBotModeChange = (mode: 'chat' | 'voice') => {
    setBotMode(mode);
    console.log(`Bot mode changed to: ${mode}`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
              Talent Alchemy
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Current Mode: {botMode}</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onBotModeChange={handleBotModeChange} />

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
              AI-Powered Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive suite of AI tools designed to revolutionize your talent management process
            </p>
          </div>
          
          <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                gradient={capability.gradient}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-500 to-pink-500" />
              <span className="text-lg font-semibold">Talent Alchemy Portal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powered by advanced AI technology for next-generation talent management
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Current Bot Mode: <span className="font-semibold text-primary">{botMode.toUpperCase()}</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
