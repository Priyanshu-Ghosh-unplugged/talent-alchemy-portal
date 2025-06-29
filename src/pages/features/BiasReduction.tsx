import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, BarChart3, AlertTriangle, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BiasReduction = () => {
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
            className="text-slate-200 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-12 w-12 text-slate-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
              Bias-Reduction
            </h1>
          </div>
          <p className="text-slate-100 text-lg max-w-2xl mx-auto">
            Ensure fair and unbiased hiring with anonymous screening, analytics, and diversity insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-slate-400/20 hover:border-gray-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-slate-300 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Anonymous Screening
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100">Remove identifying information to reduce unconscious bias in screening.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-slate-400/20 hover:border-gray-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-slate-300 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Fairness Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100">Analyze hiring data for fairness and identify potential bias trends.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-slate-400/20 hover:border-gray-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-slate-300 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Bias Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100">Get real-time alerts when bias is detected in the hiring process.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-slate-400/20 hover:border-gray-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-slate-300 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Diversity Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100">Gain insights into diversity metrics and promote inclusive hiring practices.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BiasReduction; 