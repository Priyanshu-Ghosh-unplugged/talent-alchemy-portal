# 🎯 Talent Alchemy Portal

> **AI-Powered Talent Management Platform** - Transform your recruitment process with our comprehensive suite of AI capabilities

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://talent-alchemy-portal.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-React%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Supabase-brightgreen?style=for-the-badge)](https://talent-alchemy-portal.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## 🌟 Live Demo

**Visit the live application:** [https://talent-alchemy-portal.vercel.app/](https://talent-alchemy-portal.vercel.app/)

### 🔐 Demo Credentials
- **Email:** `admin@myapp.in`
- **Password:** `admin123`

---

## 📋 Table of Contents

- [Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎯 Usage](#-usage)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 UI Components](#-ui-components)
- [🔧 Development](#-development)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Authentication](#-authentication)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

Talent Alchemy Portal is a modern, AI-powered talent management platform designed to revolutionize the recruitment process. Built with cutting-edge technologies, it provides a comprehensive suite of tools for recruiters, HR professionals, and hiring managers to streamline their hiring workflows.

### 🎨 Design Philosophy
- **Modern UI/UX** with beautiful gradients and mandala overlays
- **Responsive Design** that works seamlessly across all devices
- **Dark/Light Mode** support for enhanced user experience
- **Accessibility First** approach with proper ARIA labels and keyboard navigation

---

## ✨ Features

### 🧠 Core AI Capabilities

#### 📄 **Resume Reader**
- AI-powered resume parsing and analysis
- Automatic skill extraction and matching
- Candidate ranking based on job requirements
- Support for PDF and Word document formats

#### 📅 **Interview Scheduler**
- Smart scheduling with AI-powered time optimization
- Calendar integration (Google, Outlook, etc.)
- Automated reminders and notifications
- Time zone support for global teams

#### 💰 **Offer Clarifier**
- Comprehensive offer comparison tools
- Total rewards breakdown visualization
- Negotiation support and guidance
- Acceptance tracking and management

#### 🧠 **Emotional Intelligence**
- Real-time mood detection during interactions
- Personalized communication adaptation
- Candidate experience optimization
- Emotional analytics and insights

### 🔄 **Talent Management**

#### 👥 **Talent Pool Re-engagement**
- Automated outreach campaigns
- Smart segmentation and targeting
- Re-engagement analytics
- Candidate lifecycle management

#### 🎯 **Personalized Job Matching**
- AI-driven job recommendations
- Skill-based matching algorithms
- Candidate preference integration
- Real-time opportunity alerts

#### 🎮 **Gamified Assessments**
- Interactive skill evaluation games
- Real-time leaderboards and rankings
- Instant feedback and learning
- Adaptive challenge difficulty

#### 🎥 **Video Interview Booking**
- One-click interview scheduling
- Multi-platform video integration
- Automated calendar invites
- Recording and playback capabilities

### 🚀 **Operational Tools**

#### 📋 **Onboarding Support**
- Digital paperwork completion
- Task checklist management
- Buddy system integration
- Progress tracking and analytics

#### 🎁 **Referral Management**
- Employee referral tracking
- Automated reward systems
- Employee portal access
- Referral program analytics

#### 💬 **Feedback Collection**
- Candidate survey automation
- Interviewer feedback collection
- Analytics dashboard
- Continuous improvement insights

### 🛡️ **Compliance & Customization**

#### ⚖️ **Bias Reduction**
- Anonymous screening processes
- Fairness analytics and monitoring
- Bias detection alerts
- Diversity insights and reporting

#### 🎨 **Brand Customization**
- Custom theme selection
- Logo and color customization
- Language personalization
- Branded communication templates

### 📊 **Analytics & Integration**

#### 📈 **Real-Time Updates**
- Instant application status notifications
- Live progress tracking
- Email and push notifications
- Status change alerts

#### 📚 **Skill Mapping**
- Training recommendations
- Certification tracking
- Skill gap analysis
- Progress monitoring

#### 🔗 **Social Media/ATS Integration**
- LinkedIn and social platform sync
- ATS system integration
- API connections
- Data analytics and insights

#### 🎤 **Voice Interaction**
- Voice command support
- Audio feedback systems
- Accessibility features
- Voice settings customization

#### 📊 **Analytics Dashboard**
- Real-time hiring metrics
- Performance indicators
- Data visualization
- Report generation

#### ❤️ **Candidate Nurturing**
- Engagement campaign automation
- Personalized communication
- Follow-up scheduling
- Engagement analytics

#### 🌐 **Virtual Career Fair**
- Virtual networking sessions
- Live event hosting
- Booth management
- Event analytics

---

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### **UI Components**
- **Shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations

### **Backend & Database**
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Reliable database
- **Row Level Security** - Data protection

### **Authentication**
- **Supabase Auth** - Secure authentication
- **Protected Routes** - Route-level security

### **Deployment**
- **Vercel** - Fast, global deployment
- **GitHub** - Version control and CI/CD

---

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**
- **Git**

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu-Ghosh-unplugged/talent-alchemy-portal.git
   cd talent-alchemy-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics
VITE_ANALYTICS_ID=your_analytics_id
```

### Supabase Setup

1. **Create a Supabase project**
   - Visit [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key

2. **Database Schema**
   The project includes migration files in `supabase/migrations/`

3. **Authentication**
   - Enable email authentication in Supabase
   - Configure email templates
   - Set up Row Level Security policies

---

## 🎯 Usage

### 🏠 **Dashboard Overview**
The main dashboard provides access to all AI-powered features:

- **Feature Cards** - Click any card to access specific functionality
- **Navigation** - Use the navbar for quick access to different sections
- **Theme Toggle** - Switch between light and dark modes
- **User Profile** - Access account settings and preferences

### 🔐 **Authentication**
1. **Sign Up** - Create a new account with email verification
2. **Sign In** - Use your credentials to access the platform
3. **Password Reset** - Reset forgotten passwords via email
4. **Profile Management** - Update personal information and preferences

### 📱 **Mobile Experience**
- **Responsive Design** - Optimized for all screen sizes
- **Touch-Friendly** - Large touch targets and intuitive gestures
- **Progressive Web App** - Install as a native app on mobile devices

---

## 🏗️ Project Structure

```
talent-alchemy-portal/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── mandala_bg.jpg     # Background image
│   └── robots.txt
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CapabilityCard.tsx
│   │   └── ThemeProvider.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useAuth.tsx
│   │   └── useMobile.tsx
│   ├── pages/            # Page components
│   │   ├── features/     # Feature-specific pages
│   │   ├── Dashboard.tsx
│   │   ├── Auth.tsx
│   │   └── Profile.tsx
│   ├── integrations/     # External service integrations
│   │   └── supabase/
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── supabase/             # Database migrations and config
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

---

## 🎨 UI Components

### **Design System**
- **Color Palette** - Consistent color scheme with gradients
- **Typography** - Modern, readable fonts
- **Spacing** - Systematic spacing scale
- **Components** - Reusable, accessible components

### **Key Components**
- **CapabilityCard** - Feature showcase cards
- **Navbar** - Main navigation component
- **ThemeToggle** - Dark/light mode switcher
- **ProtectedRoute** - Authentication wrapper
- **PlaceholderFeature** - Reusable feature page template

---

## 🔧 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Database
npm run db:generate  # Generate Supabase types
npm run db:push      # Push schema changes
```

### **Code Style**
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety
- **Conventional Commits** - Commit message format

### **Testing**
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Features**
- **Mobile-First** approach
- **Flexible Grid** system
- **Touch-Optimized** interactions
- **Progressive Enhancement**

---

## 🔒 Authentication

### **Security Features**
- **JWT Tokens** - Secure session management
- **Row Level Security** - Database-level protection
- **Protected Routes** - Route-level access control
- **Email Verification** - Account security

### **User Roles**
- **Admin** - Full platform access
- **Recruiter** - Hiring management
- **HR Manager** - Team oversight
- **Candidate** - Application tracking

---

## 🌐 Deployment

### **Vercel Deployment**

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings

2. **Environment Variables**
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Deploy**
   - Automatic deployment on push to main branch
   - Preview deployments for pull requests

### **Custom Domain**
- Configure custom domain in Vercel dashboard
- Set up DNS records
- Enable HTTPS

### **Performance**
- **CDN** - Global content delivery
- **Edge Functions** - Serverless API endpoints
- **Image Optimization** - Automatic image compression
- **Caching** - Intelligent caching strategies

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### **Getting Started**
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### **Development Guidelines**
- **Code Style** - Follow existing patterns
- **Testing** - Add tests for new features
- **Documentation** - Update docs as needed
- **Commits** - Use conventional commit format

### **Pull Request Process**
1. **Description** - Clear description of changes
2. **Screenshots** - Visual changes if applicable
3. **Testing** - Confirm all tests pass
4. **Review** - Address review comments

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **License Summary**
- ✅ **Commercial Use** - Use for commercial purposes
- ✅ **Modification** - Modify and distribute
- ✅ **Distribution** - Distribute copies
- ✅ **Private Use** - Use privately
- ❌ **Liability** - No warranty provided
- ❌ **Warranty** - No warranty provided

---

## 🆘 Support

### **Getting Help**
- **Documentation** - Check this README first
- **Issues** - Create a GitHub issue
- **Discussions** - Join GitHub discussions
- **Email** - Contact the development team

### **Common Issues**
- **Build Errors** - Check Node.js version and dependencies
- **Authentication** - Verify Supabase configuration
- **Styling** - Ensure Tailwind CSS is properly configured
- **Deployment** - Check environment variables

---

## 🎉 Acknowledgments

- **Shadcn/ui** - Beautiful component library
- **Supabase** - Backend infrastructure
- **Vercel** - Deployment platform
- **Tailwind CSS** - Styling framework
- **React Community** - Amazing ecosystem

---

## 📈 Roadmap

### **Upcoming Features**
- [ ] **Advanced Analytics** - Enhanced reporting
- [ ] **Mobile App** - Native iOS/Android apps
- [ ] **AI Chatbot** - Intelligent candidate support
- [ ] **Video Interviews** - Built-in video platform
- [ ] **Integration Hub** - Third-party integrations

### **Performance Improvements**
- [ ] **Caching** - Redis integration
- [ ] **CDN** - Global content delivery
- [ ] **Optimization** - Bundle size reduction
- [ ] **Monitoring** - Performance tracking

---

**Made with ❤️ by the Talent Alchemy Team**

[![GitHub](https://img.shields.io/badge/GitHub-View%20Source-black?style=for-the-badge&logo=github)](https://github.com/Priyanshu-Ghosh-unplugged/talent-alchemy-portal)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://talent-alchemy-portal.vercel.app/)
