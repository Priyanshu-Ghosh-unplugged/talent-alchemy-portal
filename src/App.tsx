
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Feature Pages
import ResumeReader from "./pages/features/ResumeReader";
import InterviewScheduler from "./pages/features/InterviewScheduler";
import OfferClarifier from "./pages/features/OfferClarifier";

const queryClient = new QueryClient();

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
              
              {/* Placeholder routes for remaining features */}
              <Route path="/features/*" element={
                <ProtectedRoute>
                  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">Feature Coming Soon</h1>
                      <p className="text-purple-200">This feature is currently under development.</p>
                    </div>
                  </div>
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
