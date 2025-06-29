import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Building, Phone, Mail, Briefcase, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title: string;
  phone: string;
  avatar_url: string;
}

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    job_title: '',
    phone: '',
    avatar_url: ''
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
      } else {
        // Create profile if it doesn't exist
        setProfile(prev => ({
          ...prev,
          id: user.id,
          email: user.email || ''
        }));
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          company: profile.company,
          job_title: profile.job_title,
          phone: profile.phone,
          avatar_url: profile.avatar_url,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
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
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
          <CardHeader className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24 border-4 border-cyan-400/30">
                <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl">
                  {profile.first_name?.charAt(0) || profile.email?.charAt(0) || 'U'}
                  {profile.last_name?.charAt(0) || ''}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                User Profile
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first_name" className="text-purple-200 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  First Name
                </Label>
                <Input
                  id="first_name"
                  name="first_name"
                  value={profile.first_name}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="John"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="last_name" className="text-purple-200 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  name="last_name"
                  value={profile.last_name}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="Doe"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-200 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-purple-200 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-purple-200 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={profile.company}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="job_title" className="text-purple-200 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Job Title
                </Label>
                <Input
                  id="job_title"
                  name="job_title"
                  value={profile.job_title}
                  onChange={handleInputChange}
                  className="bg-black/50 border-purple-500/30 text-white placeholder:text-purple-300"
                  placeholder="HR Manager"
                />
              </div>
            </div>
            
            <div className="flex justify-center pt-6">
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-2"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Profile'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
