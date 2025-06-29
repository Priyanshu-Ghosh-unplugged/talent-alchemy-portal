import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ListChecks, Heart, Bell, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PersonalizedJobMatching = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Mandala overlay */}
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
            <Sparkles className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Personalized Job Matching
            </h1>
          </div>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Deliver tailored job recommendations and alerts to candidates using AI and real-time data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                AI Job Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Leverage AI to recommend the best-fit jobs for each candidate.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <ListChecks className="h-5 w-5 mr-2" />
                Skill Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Match candidate skills to open roles for higher placement success.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Candidate Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Incorporate candidate preferences for location, salary, and culture.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Real-Time Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Notify candidates instantly about new matches and opportunities.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedJobMatching; 