import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, ExternalLink, Github, Globe } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'To-Do List App',
    description: 'Create a simple task management app with add, edit, delete, and mark complete functionality',
    skills: ['DOM Manipulation', 'Local Storage', 'Event Listeners', 'CSS Styling'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Calculator',
    description: 'Build a functional calculator with basic arithmetic operations and a clean UI',
    skills: ['Functions', 'Event Handling', 'Math Operations', 'UI Design'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Digital Clock',
    description: 'Display current time with date, including different time zones and formats',
    skills: ['Date Object', 'setInterval', 'String Formatting', 'CSS Animation'],
    difficulty: 'Easy',
    timeEstimate: '1 day'
  },
  {
    title: 'Random Quote Generator',
    description: 'Fetch and display inspirational quotes with sharing functionality',
    skills: ['API Calls', 'JSON Handling', 'DOM Updates', 'Social Sharing'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Color Palette Generator',
    description: 'Generate random color schemes and allow users to copy hex codes',
    skills: ['Color Theory', 'Random Generation', 'Clipboard API', 'CSS Variables'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Weather App',
    description: 'Display current weather conditions using a weather API',
    skills: ['API Integration', 'Geolocation', 'Error Handling', 'Responsive Design'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Tip Calculator',
    description: 'Calculate tips and split bills among multiple people',
    skills: ['Form Validation', 'Mathematical Calculations', 'User Input', 'Results Display'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable length and character sets',
    skills: ['Random Generation', 'String Manipulation', 'Security Concepts', 'User Preferences'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate Body Mass Index with health recommendations',
    skills: ['Form Processing', 'Conditional Logic', 'Health Data', 'Result Interpretation'],
    difficulty: 'Easy',
    timeEstimate: '1 day'
  },
  {
    title: 'Simple Quiz App',
    description: 'Create a multiple-choice quiz with scoring and feedback',
    skills: ['Arrays', 'Object Handling', 'Score Tracking', 'Conditional Rendering'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  }
];

const intermediateProjects = [
  {
    title: 'Expense Tracker',
    description: 'Track income and expenses with categories, charts, and budget alerts',
    skills: ['Chart.js', 'Local Storage', 'Data Filtering', 'Budget Logic'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Movie Search App',
    description: 'Search movies using TMDB API with detailed information and favorites',
    skills: ['API Integration', 'Search Functionality', 'Data Persistence', 'UI/UX Design'],
    difficulty: 'Medium',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Memory Card Game',
    description: 'Interactive card matching game with levels and high scores',
    skills: ['Game Logic', 'Animation', 'State Management', 'Timer Functions'],
    difficulty: 'Medium',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Recipe Finder',
    description: 'Search and save recipes with ingredient filters and meal planning',
    skills: ['Recipe API', 'Advanced Filtering', 'Meal Planning', 'Shopping Lists'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app using Socket.io with rooms and user authentication',
    skills: ['Socket.io', 'Real-time Communication', 'User Authentication', 'Chat Rooms'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio with project showcase and contact form',
    skills: ['Responsive Design', 'Portfolio Presentation', 'Contact Forms', 'SEO Basics'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Music Player',
    description: 'Web-based music player with playlists, controls, and visualizations',
    skills: ['Audio API', 'Playlist Management', 'Audio Visualization', 'Media Controls'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Kanban Board',
    description: 'Project management tool with drag-and-drop functionality',
    skills: ['Drag & Drop API', 'State Management', 'Project Organization', 'Data Persistence'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'URL Shortener',
    description: 'Create short URLs with analytics and custom aliases',
    skills: ['URL Processing', 'Analytics Tracking', 'Database Design', 'Custom Domains'],
    difficulty: 'Medium',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Image Gallery',
    description: 'Photo gallery with filters, lightbox, and upload functionality',
    skills: ['File Upload', 'Image Processing', 'Gallery Layout', 'Lightbox Effects'],
    difficulty: 'Medium',
    timeEstimate: '5-6 days'
  }
];

const advancedProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with cart, payments, and admin dashboard',
    skills: ['Payment Integration', 'Shopping Cart', 'User Management', 'Admin Panel'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media with data visualization and scheduling',
    skills: ['Data Visualization', 'API Integration', 'Analytics', 'Content Scheduling'],
    difficulty: 'Hard',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Video Streaming App',
    description: 'Netflix-like platform with video upload, streaming, and user profiles',
    skills: ['Video Streaming', 'User Authentication', 'Content Management', 'Recommendation Engine'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Project Management Tool',
    description: 'Comprehensive project management with teams, tasks, and time tracking',
    skills: ['Team Management', 'Task Scheduling', 'Time Tracking', 'Reporting'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Real-time Collaboration Editor',
    description: 'Google Docs-like collaborative text editor with real-time sync',
    skills: ['Real-time Sync', 'Operational Transform', 'Collaborative Editing', 'Conflict Resolution'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Cryptocurrency Tracker',
    description: 'Track crypto prices with portfolio management and trading alerts',
    skills: ['Crypto APIs', 'Portfolio Tracking', 'Price Alerts', 'Trading Analysis'],
    difficulty: 'Hard',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Learning Management System',
    description: 'Online education platform with courses, quizzes, and progress tracking',
    skills: ['Course Management', 'Quiz System', 'Progress Tracking', 'Video Integration'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing site with search, filters, and virtual tours',
    skills: ['Property Search', 'Map Integration', 'Virtual Tours', 'Advanced Filtering'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Stock Trading Simulator',
    description: 'Virtual trading platform with real market data and portfolio analysis',
    skills: ['Stock APIs', 'Trading Logic', 'Portfolio Analysis', 'Market Data'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'AI Chatbot Interface',
    description: 'Intelligent chatbot with natural language processing and learning capabilities',
    skills: ['AI Integration', 'Natural Language Processing', 'Machine Learning', 'Conversation Flow'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  }
];

export default function JavaScriptProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center space-x-2">
        <Link
          href="/project-ideas"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Project Ideas</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🟨</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JavaScript Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 hands-on projects to master JavaScript development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          JavaScript is the language of the web, powering everything from simple websites to complex web applications. 
          These projects will help you master DOM manipulation, API integration, modern ES6+ features, and popular frameworks.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">10</div>
          <div className="text-sm text-green-700 dark:text-green-300">Beginner Projects</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">10</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Intermediate Projects</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">10</div>
          <div className="text-sm text-red-700 dark:text-red-300">Advanced Projects</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Total Projects</div>
        </div>
      </div>

      {/* Beginner Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Beginner Projects
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">
            Perfect for learning fundamentals
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Intermediate Projects
          </h2>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
            Build more complex applications
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intermediateProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Advanced Projects
          </h2>
          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium">
            Professional-level applications
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Helpful Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Learning Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:underline">MDN JavaScript Guide</a></li>
              <li>• <a href="https://javascript.info/" className="hover:underline">JavaScript.info</a></li>
              <li>• <a href="https://www.freecodecamp.org/" className="hover:underline">FreeCodeCamp</a></li>
              <li>• <a href="https://eloquentjavascript.net/" className="hover:underline">Eloquent JavaScript</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Tools & Libraries</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://code.visualstudio.com/" className="hover:underline">VS Code Editor</a></li>
              <li>• <a href="https://nodejs.org/" className="hover:underline">Node.js Runtime</a></li>
              <li>• <a href="https://www.npmjs.com/" className="hover:underline">NPM Package Manager</a></li>
              <li>• <a href="https://git-scm.com/" className="hover:underline">Git Version Control</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Frameworks</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://reactjs.org/" className="hover:underline">React</a></li>
              <li>• <a href="https://vuejs.org/" className="hover:underline">Vue.js</a></li>
              <li>• <a href="https://angular.io/" className="hover:underline">Angular</a></li>
              <li>• <a href="https://expressjs.com/" className="hover:underline">Express.js</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Start Building?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started Tips:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Start with beginner projects to build confidence</li>
              <li>• Set up a GitHub repository for each project</li>
              <li>• Focus on completing projects fully</li>
              <li>• Add your own creative features</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Next Languages to Explore:</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="/project-ideas/python" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                Python
              </Link>
              <Link href="/project-ideas/java" className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors">
                Java
              </Link>
              <Link href="/project-ideas/cpp" className="text-xs px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                C++
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
