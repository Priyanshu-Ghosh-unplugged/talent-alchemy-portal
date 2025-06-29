import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { 
  ArrowLeft, Bell, BarChart3, Mail, Zap, BookOpen, Award, 
  TrendingUp, Share2, Database, Link2, Mic, Volume2, 
  Accessibility, Settings, PieChart, Download, Heart, 
  Calendar, Network, Video, Users 
} from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Feature Pages
import ResumeReader from "./pages/features/ResumeReader";
import InterviewScheduler from "./pages/features/InterviewScheduler";
import OfferClarifier from "./pages/features/OfferClarifier";
import EmotionalIntelligence from "./pages/features/EmotionalIntelligence";
import TalentPoolReengagement from "./pages/features/TalentPoolReengagement";
import PersonalizedJobMatching from "./pages/features/PersonalizedJobMatching";
import GamifiedAssessments from "./pages/features/GamifiedAssessments";
import VideoInterviewBooking from "./pages/features/VideoInterviewBooking";
import OnboardingSupport from "./pages/features/OnboardingSupport";
import ReferralManagement from "./pages/features/ReferralManagement";
import FeedbackCollection from "./pages/features/FeedbackCollection";
import BiasReduction from "./pages/features/BiasReduction";
import BrandCustomization from "./pages/features/BrandCustomization";

const queryClient = new QueryClient();

// Placeholder component for features that don't have dedicated pages yet
const PlaceholderFeature = ({ title, description, icon: Icon, features }: {
  title: string;
  description: string;
  icon: any;
  features: { title: string; description: string; icon: any }[];
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/mandala-bg.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          opacity: 0.4,
        }}
      />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard', { replace: true })}
            className="text-cyan-200 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-300 flex items-center">
                  <feature.icon className="h-5 w-5 mr-2" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Feature Routes */}
              <Route path="/features/resume-reader" element={
                <ProtectedRoute>
                  <ResumeReader />
                </ProtectedRoute>
              } />
              <Route path="/features/interview-scheduler" element={
                <ProtectedRoute>
                  <InterviewScheduler />
                </ProtectedRoute>
              } />
              <Route path="/features/offer-clarifier" element={
                <ProtectedRoute>
                  <OfferClarifier />
                </ProtectedRoute>
              } />
              <Route path="/features/emotional-intelligence" element={
                <ProtectedRoute>
                  <EmotionalIntelligence />
                </ProtectedRoute>
              } />
              <Route path="/features/talent-pool-reengagement" element={
                <ProtectedRoute>
                  <TalentPoolReengagement />
                </ProtectedRoute>
              } />
              <Route path="/features/personalized-job-matching" element={
                <ProtectedRoute>
                  <PersonalizedJobMatching />
                </ProtectedRoute>
              } />
              <Route path="/features/gamified-assessments" element={
                <ProtectedRoute>
                  <GamifiedAssessments />
                </ProtectedRoute>
              } />
              <Route path="/features/video-interview-booking" element={
                <ProtectedRoute>
                  <VideoInterviewBooking />
                </ProtectedRoute>
              } />
              <Route path="/features/onboarding-support" element={
                <ProtectedRoute>
                  <OnboardingSupport />
                </ProtectedRoute>
              } />
              <Route path="/features/referral-management" element={
                <ProtectedRoute>
                  <ReferralManagement />
                </ProtectedRoute>
              } />
              <Route path="/features/feedback-collection" element={
                <ProtectedRoute>
                  <FeedbackCollection />
                </ProtectedRoute>
              } />
              <Route path="/features/bias-reduction" element={
                <ProtectedRoute>
                  <BiasReduction />
                </ProtectedRoute>
              } />
              <Route path="/features/brand-customization" element={
                <ProtectedRoute>
                  <BrandCustomization />
                </ProtectedRoute>
              } />
              <Route path="/features/real-time-updates" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Real-Time Updates"
                    description="Providing instant application status notifications and real-time updates."
                    icon={Bell}
                    features={[
                      { title: "Instant Notifications", description: "Send real-time notifications for application status changes.", icon: Bell },
                      { title: "Status Tracking", description: "Track application progress in real-time with live updates.", icon: BarChart3 },
                      { title: "Email Alerts", description: "Automated email alerts for important status changes.", icon: Mail },
                      { title: "Push Notifications", description: "Mobile push notifications for urgent updates.", icon: Zap }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/skill-mapping" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Skill Mapping"
                    description="Recommending relevant training and certifications for skill development."
                    icon={BookOpen}
                    features={[
                      { title: "Training Recommendations", description: "Recommend relevant training programs based on skill gaps.", icon: BookOpen },
                      { title: "Certification Tracking", description: "Track and recommend relevant certifications for candidates.", icon: Award },
                      { title: "Skill Analytics", description: "Analyze skill gaps and development opportunities.", icon: BarChart3 },
                      { title: "Progress Tracking", description: "Track skill development progress over time.", icon: TrendingUp }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/social-media-ats-integration" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Social Media/ATS Integration"
                    description="Integrating with social platforms and applicant tracking systems."
                    icon={Share2}
                    features={[
                      { title: "Social Media Sync", description: "Sync with LinkedIn, Twitter, and other social platforms.", icon: Share2 },
                      { title: "ATS Integration", description: "Integrate with popular ATS systems for seamless data flow.", icon: Database },
                      { title: "API Connections", description: "Connect with third-party APIs for enhanced functionality.", icon: Link2 },
                      { title: "Data Analytics", description: "Analyze data from integrated platforms for insights.", icon: BarChart3 }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/voice-interaction" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Voice Interaction"
                    description="Supporting voice commands and accessibility features for enhanced user experience."
                    icon={Mic}
                    features={[
                      { title: "Voice Commands", description: "Navigate and control the platform using voice commands.", icon: Mic },
                      { title: "Voice Feedback", description: "Receive audio feedback and notifications.", icon: Volume2 },
                      { title: "Accessibility", description: "Enhanced accessibility features for all users.", icon: Accessibility },
                      { title: "Voice Settings", description: "Customize voice interaction preferences and settings.", icon: Settings }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/analytics-dashboard" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Analytics Dashboard"
                    description="Delivering real-time analytics and insights for recruiters and hiring managers."
                    icon={BarChart3}
                    features={[
                      { title: "Real-Time Analytics", description: "View real-time hiring metrics and performance data.", icon: BarChart3 },
                      { title: "Performance Metrics", description: "Track key performance indicators and hiring success rates.", icon: TrendingUp },
                      { title: "Data Visualization", description: "Visualize hiring data with interactive charts and graphs.", icon: PieChart },
                      { title: "Report Generation", description: "Generate comprehensive reports for stakeholders.", icon: Download }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/candidate-nurturing" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Candidate Nurturing"
                    description="Automating engagement and nurturing campaigns to keep candidates engaged."
                    icon={Heart}
                    features={[
                      { title: "Engagement Campaigns", description: "Automated campaigns to keep candidates engaged and interested.", icon: Heart },
                      { title: "Personalized Communication", description: "Send personalized messages based on candidate preferences.", icon: Mail },
                      { title: "Follow-up Scheduling", description: "Automatically schedule follow-up communications.", icon: Calendar },
                      { title: "Engagement Analytics", description: "Track engagement metrics and campaign effectiveness.", icon: BarChart3 }
                    ]}
                  />
                </ProtectedRoute>
              } />
              <Route path="/features/virtual-career-fair" element={
                <ProtectedRoute>
                  <PlaceholderFeature
                    title="Virtual Career Fair"
                    description="Hosting in-chat networking and live career events for candidates and employers."
                    icon={Network}
                    features={[
                      { title: "Virtual Networking", description: "Connect candidates with employers in virtual networking sessions.", icon: Network },
                      { title: "Live Events", description: "Host live career fairs and recruitment events.", icon: Video },
                      { title: "Booth Management", description: "Manage virtual booths for different companies and departments.", icon: Users },
                      { title: "Event Analytics", description: "Track engagement and success metrics for virtual events.", icon: BarChart3 }
                    ]}
                  />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
