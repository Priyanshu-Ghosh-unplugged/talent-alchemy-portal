import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Smile, MessageSquareHeart, TrendingUp, ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmotionalIntelligence = () => {
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
            className="text-orange-100 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Brain className="h-12 w-12 text-yellow-200" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-200 to-pink-200 bg-clip-text text-transparent">
              Emotional Intelligence
            </h1>
          </div>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            AI-powered system for detecting and adapting to candidate mood, providing personalized and empathetic interview experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-orange-400/20 hover:border-yellow-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-orange-300 flex items-center">
                <Smile className="h-5 w-5 mr-2" />
                Mood Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-100">Analyze candidate responses in real-time to detect mood and emotional state using AI.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-orange-400/20 hover:border-yellow-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-orange-300 flex items-center">
                <MessageSquareHeart className="h-5 w-5 mr-2" />
                Adaptive Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-100">Provide interviewers with adaptive question suggestions based on detected candidate sentiment.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-orange-400/20 hover:border-yellow-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-orange-300 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-100">Visualize sentiment trends throughout the interview process for better decision making.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-orange-400/20 hover:border-yellow-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-orange-300 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Empathy Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-100">Generate an empathy score for each candidate to promote fair and human-centric hiring.</p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-black/40 backdrop-blur-md border-orange-400/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Brain className="h-6 w-6 mr-2 text-yellow-200" />
              Emotional Intelligence Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-300">Live Mood Detection</h3>
                <div className="border-2 border-dashed border-orange-400/30 rounded-lg p-8 text-center hover:border-yellow-300/50 transition-all duration-300 cursor-pointer">
                  <Smile className="h-12 w-12 text-orange-200 mx-auto mb-4" />
                  <p className="text-orange-100 mb-2">Start a live mood analysis session</p>
                  <Button className="mt-4 bg-gradient-to-r from-orange-400 to-pink-400">
                    Start Analysis
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-300">Sentiment Overview</h3>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-100">Empathy Score</span>
                      <span className="text-yellow-200 font-bold">8.7/10</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-200 to-orange-400 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-100">Positive Sentiment</span>
                      <span className="text-orange-200 font-bold">76%</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-200 to-pink-400 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-100">Neutral Sentiment</span>
                      <span className="text-orange-200 font-bold">18%</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-200 to-yellow-400 h-2 rounded-full" style={{width: '18%'}}></div>
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-100">Negative Sentiment</span>
                      <span className="text-orange-200 font-bold">6%</span>
                    </div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full" style={{width: '6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 pt-6">
              <Button className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500">
                Download Report
              </Button>
              <Button variant="outline" className="border-orange-400/50 text-orange-100 hover:bg-orange-400/20">
                View All Candidates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmotionalIntelligence; 