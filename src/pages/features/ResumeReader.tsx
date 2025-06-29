
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Search, Star, TrendingUp } from 'lucide-react';

const ResumeReader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Resume Reader
            </h1>
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            AI-powered resume screening and candidate ranking system that automatically analyzes, scores, and ranks candidates based on job requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload & Parse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Automatically extract and parse resume data from various formats including PDF, DOC, and images.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Skill Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Match candidate skills with job requirements using advanced NLP and semantic analysis.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Candidate Scoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-200">Generate comprehensive scores based on experience, skills, education, and cultural fit.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
              Resume Analysis Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Upload Resume</h3>
                <div className="border-2 border-dashed border-purple-500/30 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-all duration-300 cursor-pointer">
                  <Upload className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-purple-200 mb-2">Drag and drop resume files here</p>
                  <p className="text-purple-300 text-sm">Supports PDF, DOC, DOCX, TXT</p>
                  <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600">
                    Choose Files
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-400">Analysis Results</h3>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">Overall Score</span>
                      <span className="text-green-400 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">Skill Match</span>
                      <span className="text-cyan-400 font-bold">87%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-purple-200">Experience Level</span>
                      <span className="text-purple-400 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-6">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                Start Analysis
              </Button>
              <Button variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                View All Candidates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeReader;
