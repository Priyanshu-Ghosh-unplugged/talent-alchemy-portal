
import { useAuth } from '@/hooks/useAuth';
import { HeroSection } from '@/components/HeroSection';
import { CapabilityCard } from '@/components/CapabilityCard';
import Navbar from '@/components/Navbar';
import { 
  FileText, Calendar, DollarSign, Brain, Users, Target, 
  Gamepad2, Video, GraduationCap, Gift, MessageSquare, 
  Shield, Palette, Bell, BookOpen, Share2, Mic, 
  BarChart3, Heart, Network 
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const capabilities = [
    {
      title: "Resume Reader",
      description: "Auto-screening and ranking candidates with AI-powered resume analysis",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      href: "/features/resume-reader"
    },
    {
      title: "Interview Scheduler",
      description: "Scheduling, managing, and syncing interviews seamlessly",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      href: "/features/interview-scheduler"
    },
    {
      title: "Offer Clarifier",
      description: "Answering compensation questions and managing e-signatures",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      href: "/features/offer-clarifier"
    },
    {
      title: "Emotional Intelligence",
      description: "Detecting and adapting to candidate mood for personalized interactions",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      href: "/features/emotional-intelligence"
    },
    {
      title: "Talent Pool Re-engagement",
      description: "Re-engaging past candidates and keeping them updated",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      href: "/features/talent-pool-reengagement"
    },
    {
      title: "Personalized Job Matching",
      description: "Suggesting best-fit job roles using advanced algorithms",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      href: "/features/personalized-job-matching"
    },
    {
      title: "Gamified Assessments",
      description: "Assessing skills through fun and engaging mini-games",
      icon: Gamepad2,
      color: "from-pink-500 to-rose-500",
      href: "/features/gamified-assessments"
    },
    {
      title: "Video Interview Booking",
      description: "Self-scheduling video interviews with automated coordination",
      icon: Video,
      color: "from-blue-500 to-indigo-500",
      href: "/features/video-interview-booking"
    },
    {
      title: "Onboarding Support",
      description: "Guiding new hires through comprehensive onboarding",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
      href: "/features/onboarding-support"
    },
    {
      title: "Referral Management",
      description: "Tracking and rewarding employee referrals automatically",
      icon: Gift,
      color: "from-emerald-500 to-teal-500",
      href: "/features/referral-management"
    },
    {
      title: "Feedback Collection",
      description: "Collecting candidate feedback for continuous process improvement",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-500",
      href: "/features/feedback-collection"
    },
    {
      title: "Bias-Reduction",
      description: "Ensuring anonymous, fair screening to reduce unconscious bias",
      icon: Shield,
      color: "from-slate-500 to-gray-500",
      href: "/features/bias-reduction"
    },
    {
      title: "Brand Customization",
      description: "Customizing look, feel, and language to match your brand",
      icon: Palette,
      color: "from-violet-500 to-purple-500",
      href: "/features/brand-customization"
    },
    {
      title: "Real-Time Updates",
      description: "Providing instant application status notifications",
      icon: Bell,
      color: "from-amber-500 to-yellow-500",
      href: "/features/real-time-updates"
    },
    {
      title: "Skill Mapping",
      description: "Recommending relevant training and certifications",
      icon: BookOpen,
      color: "from-lime-500 to-green-500",
      href: "/features/skill-mapping"
    },
    {
      title: "Social Media/ATS Integration",
      description: "Integrating with social platforms and applicant tracking systems",
      icon: Share2,
      color: "from-sky-500 to-cyan-500",
      href: "/features/social-media-ats-integration"
    },
    {
      title: "Voice Interaction",
      description: "Supporting voice commands and accessibility features",
      icon: Mic,
      color: "from-fuchsia-500 to-pink-500",
      href: "/features/voice-interaction"
    },
    {
      title: "Analytics Dashboard",
      description: "Delivering real-time analytics and insights for recruiters",
      icon: BarChart3,
      color: "from-red-500 to-pink-500",
      href: "/features/analytics-dashboard"
    },
    {
      title: "Candidate Nurturing",
      description: "Automating engagement and nurturing campaigns",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      href: "/features/candidate-nurturing"
    },
    {
      title: "Virtual Career Fair",
      description: "Hosting in-chat networking and live career events",
      icon: Network,
      color: "from-emerald-500 to-cyan-500",
      href: "/features/virtual-career-fair"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <Navbar />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI-Powered Talent Management
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Transform your recruitment process with our comprehensive suite of AI capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              title={capability.title}
              description={capability.description}
              icon={capability.icon}
              color={capability.color}
              href={capability.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
