import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, DollarSign, Shield, PenTool, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OfferClarifier = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard', { replace: true })}
            className="text-purple-200 hover:text-purple-100 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Offer Clarifier
            </h1>
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            AI-powered compensation advisor and digital signature manager that answers benefits questions and streamlines offer acceptance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Compensation Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Detailed breakdown of salary, bonuses, equity, and total compensation packages.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Benefits Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Interactive guide explaining health insurance, retirement plans, and other benefits.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <PenTool className="h-5 w-5 mr-2" />
                Digital Signatures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Secure electronic signature collection and document management system.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                Offer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Base Salary</span>
                    <span className="text-green-400 font-bold text-xl">$120,000</span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Annual Bonus</span>
                    <span className="text-cyan-400 font-bold">$15,000</span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Stock Options</span>
                    <span className="text-purple-400 font-bold">5,000 shares</span>
                  </div>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 border border-green-500/30">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200 font-semibold">Total Package</span>
                    <span className="text-green-400 font-bold text-2xl">$185,000</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                Accept Offer
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-400" />
                Benefits Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Health Insurance", coverage: "100% Premium Covered", status: "Premium" },
                  { name: "Dental & Vision", coverage: "Full Coverage", status: "Included" },
                  { name: "401(k) Match", coverage: "6% Company Match", status: "Excellent" },
                  { name: "PTO", coverage: "25 Days + Holidays", status: "Above Average" },
                  { name: "Remote Work", coverage: "Hybrid Policy", status: "Flexible" },
                ].map((benefit, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">{benefit.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        benefit.status === 'Premium' || benefit.status === 'Excellent' ? 'bg-green-500/20 text-green-400' :
                        benefit.status === 'Above Average' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {benefit.status}
                      </span>
                    </div>
                    <p className="text-purple-200 text-sm">{benefit.coverage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OfferClarifier;
