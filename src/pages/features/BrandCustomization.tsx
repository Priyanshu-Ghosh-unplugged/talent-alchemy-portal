import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Globe, Mail, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BrandCustomization = () => {
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
            className="text-violet-200 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Palette className="h-12 w-12 text-violet-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Brand Customization
            </h1>
          </div>
          <p className="text-violet-100 text-lg max-w-2xl mx-auto">
            Personalize your hiring platform with custom themes, branding, and communication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-violet-400/20 hover:border-purple-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-violet-300 flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Custom Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-violet-100">Choose from a variety of themes or create your own to match your brand.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-violet-400/20 hover:border-purple-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-violet-300 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Logo & Colors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-violet-100">Upload your logo and set brand colors for a fully branded experience.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-violet-400/20 hover:border-purple-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-violet-300 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Language Personalization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-violet-100">Customize language and tone to reflect your company culture.</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-violet-400/20 hover:border-purple-300/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-violet-300 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Branded Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-violet-100">Send branded emails and notifications to candidates and employees.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrandCustomization; 