import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, BarChart3, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeedbackCollection = () => {
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
            <MessageSquare className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Feedback Collection
            </h1>
          </div>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Collect feedback from candidates and interviewers to drive continuous improvement in your hiring process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Candidate Surveys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Send automated surveys to candidates after each stage for valuable insights.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Interviewer Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Collect structured feedback from interviewers to improve candidate experience.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Visualize feedback trends and identify areas for improvement with analytics.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-cyan-400/20 hover:border-blue-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-300 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Continuous Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-100">Use feedback data to drive ongoing improvements in your hiring process.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCollection; 