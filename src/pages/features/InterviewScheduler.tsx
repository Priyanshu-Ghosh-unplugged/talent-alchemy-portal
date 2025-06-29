
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Video, MapPin } from 'lucide-react';

const InterviewScheduler = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Interview Scheduler
            </h1>
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Intelligent scheduling system that manages, syncs, and optimizes interview appointments with automatic calendar integration and conflict resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-cyan-400" />
                Schedule New Interview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm">Candidate</label>
                  <select className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-3 py-2 text-white">
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                    <option>Mike Johnson</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm">Interviewer</label>
                  <select className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-3 py-2 text-white">
                    <option>Sarah Wilson</option>
                    <option>David Chen</option>
                    <option>Lisa Anderson</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-3 py-2 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-purple-200 text-sm">Time</label>
                  <input 
                    type="time" 
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-3 py-2 text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-purple-200 text-sm">Interview Type</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                    <Video className="h-4 w-4 mr-1" />
                    Video
                  </Button>
                  <Button variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                    <MapPin className="h-4 w-4 mr-1" />
                    In-Person
                  </Button>
                  <Button variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                    <Users className="h-4 w-4 mr-1" />
                    Panel
                  </Button>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                Schedule Interview
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="h-6 w-6 mr-2 text-green-400" />
                Upcoming Interviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Doe", time: "10:00 AM", date: "Today", type: "Video", status: "Confirmed" },
                  { name: "Jane Smith", time: "2:30 PM", date: "Tomorrow", type: "In-Person", status: "Pending" },
                  { name: "Mike Johnson", time: "11:00 AM", date: "Dec 31", type: "Panel", status: "Confirmed" },
                ].map((interview, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{interview.name}</h4>
                        <p className="text-purple-200 text-sm">{interview.date} at {interview.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        interview.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {interview.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {interview.type === 'Video' && <Video className="h-4 w-4 text-cyan-400" />}
                        {interview.type === 'In-Person' && <MapPin className="h-4 w-4 text-purple-400" />}
                        {interview.type === 'Panel' && <Users className="h-4 w-4 text-pink-400" />}
                        <span className="text-purple-200 text-sm">{interview.type}</span>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                          Edit
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600">
                          Join
                        </Button>
                      </div>
                    </div>
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

export default InterviewScheduler;
