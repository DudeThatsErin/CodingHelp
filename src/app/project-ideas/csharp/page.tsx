import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Square, Gamepad2, Globe } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'Windows Forms Calculator',
    description: 'GUI calculator with advanced operations and memory functions',
    skills: ['Windows Forms', 'Event Handling', 'UI Design', 'Mathematical Operations'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Student Information System',
    description: 'Manage student records with CRUD operations and file storage',
    skills: ['OOP Concepts', 'File I/O', 'Data Validation', 'Collections'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Library Management System',
    description: 'Book checkout system with member management',
    skills: ['Classes & Objects', 'Inheritance', 'Data Structures', 'Business Logic'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Simple Text Editor',
    description: 'Notepad-like application with file operations and formatting',
    skills: ['Windows Forms', 'File Operations', 'Text Processing', 'Menu Systems'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Unit Converter',
    description: 'Convert between different units with a modern WPF interface',
    skills: ['WPF', 'Data Binding', 'XAML', 'Mathematical Conversions'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Track expenses and income with basic reporting',
    skills: ['Data Management', 'File Storage', 'Basic Calculations', 'User Interface'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable options',
    skills: ['Random Generation', 'String Manipulation', 'Security Concepts', 'GUI Design'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Quiz Application',
    description: 'Multiple-choice quiz with scoring and results',
    skills: ['Collections', 'Logic Implementation', 'Score Calculation', 'User Interaction'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Contact Manager',
    description: 'Store and manage contacts with search functionality',
    skills: ['Data Structures', 'Search Algorithms', 'File Persistence', 'UI Controls'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Simple Drawing Application',
    description: 'Basic paint program with shapes and colors',
    skills: ['Graphics Programming', 'Event Handling', 'Drawing APIs', 'User Interface'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  }
];

const intermediateProjects = [
  {
    title: 'Web API with ASP.NET Core',
    description: 'RESTful API with Entity Framework and authentication',
    skills: ['ASP.NET Core', 'Entity Framework', 'REST APIs', 'Authentication'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'WPF Inventory Management',
    description: 'Complete inventory system with database integration',
    skills: ['WPF', 'MVVM Pattern', 'Database Integration', 'Data Binding'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat using SignalR with user authentication',
    skills: ['SignalR', 'Real-time Communication', 'Authentication', 'Web Development'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'File Encryption Tool',
    description: 'Encrypt and decrypt files with various algorithms',
    skills: ['Cryptography', 'File Processing', 'Security', 'Algorithm Implementation'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Task Scheduler',
    description: 'Windows service for scheduling and executing tasks',
    skills: ['Windows Services', 'Task Scheduling', 'Background Processing', 'Configuration'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Image Processing Application',
    description: 'Apply filters and effects to images with preview',
    skills: ['Image Processing', 'Graphics Programming', 'File Formats', 'UI Design'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'E-commerce Web Application',
    description: 'Online store with shopping cart and payment integration',
    skills: ['ASP.NET MVC', 'Database Design', 'Payment Processing', 'Web Security'],
    difficulty: 'Medium',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Log File Analyzer',
    description: 'Parse and analyze log files with pattern detection',
    skills: ['Regular Expressions', 'File Processing', 'Data Analysis', 'Reporting'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Music Player',
    description: 'Media player with playlist management and visualization',
    skills: ['Media APIs', 'Audio Processing', 'Playlist Management', 'UI Design'],
    difficulty: 'Medium',
    timeEstimate: '3 weeks'
  },
  {
    title: 'Database Migration Tool',
    description: 'Tool to migrate data between different database systems',
    skills: ['Database Programming', 'Data Migration', 'Multiple DB Support', 'Error Handling'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Microservices Architecture',
    description: 'Distributed system with Docker, API Gateway, and service discovery',
    skills: ['Microservices', 'Docker', 'API Gateway', 'Service Discovery'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Game Engine with Unity',
    description: '2D/3D game engine with physics and scripting support',
    skills: ['Unity Engine', 'Game Development', 'Physics Programming', 'Scripting'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Enterprise CRM System',
    description: 'Customer relationship management with workflow automation',
    skills: ['Enterprise Architecture', 'Workflow Engines', 'Complex UI', 'Integration'],
    difficulty: 'Hard',
    timeEstimate: '8-12 weeks'
  },
  {
    title: 'Real-time Analytics Platform',
    description: 'Process and visualize real-time data streams',
    skills: ['Real-time Processing', 'Data Visualization', 'Stream Processing', 'Performance'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Machine Learning Platform',
    description: 'ML.NET-based platform for model training and deployment',
    skills: ['ML.NET', 'Machine Learning', 'Model Deployment', 'Data Processing'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Cloud-Native Application',
    description: 'Azure-based application with serverless functions and storage',
    skills: ['Azure Services', 'Serverless Computing', 'Cloud Architecture', 'DevOps'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Compiler for DSL',
    description: 'Domain-specific language compiler with code generation',
    skills: ['Compiler Design', 'Language Processing', 'Code Generation', 'Parsing'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'High-Performance Trading System',
    description: 'Low-latency trading platform with real-time market data',
    skills: ['High Performance', 'Financial Systems', 'Real-time Processing', 'Optimization'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'IoT Management Platform',
    description: 'Manage IoT devices with real-time monitoring and control',
    skills: ['IoT Programming', 'Real-time Systems', 'Device Management', 'Cloud Integration'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Blockchain Implementation',
    description: 'Custom blockchain with smart contracts and consensus',
    skills: ['Blockchain Technology', 'Cryptography', 'Distributed Systems', 'Smart Contracts'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  }
];

export default function CSharpProjectsPage() {
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
          <div className="text-4xl">🔷</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">C# Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master .NET development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          C# is Microsoft's flagship programming language for .NET development, perfect for Windows applications, 
          web development, game development with Unity, and enterprise solutions. These projects cover WPF, 
          ASP.NET Core, and modern .NET features.
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
            Learn C# and .NET basics
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
            Advanced .NET development
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
            Enterprise .NET solutions
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
          C# Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="hover:underline">C# Documentation</a></li>
              <li>• <a href="https://dotnet.microsoft.com/" className="hover:underline">.NET Platform</a></li>
              <li>• <a href="https://docs.microsoft.com/en-us/aspnet/core/" className="hover:underline">ASP.NET Core Docs</a></li>
              <li>• <a href="https://docs.microsoft.com/en-us/dotnet/desktop/wpf/" className="hover:underline">WPF Documentation</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Development Tools</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://visualstudio.microsoft.com/" className="hover:underline">Visual Studio</a></li>
              <li>• <a href="https://code.visualstudio.com/" className="hover:underline">VS Code</a></li>
              <li>• <a href="https://www.jetbrains.com/rider/" className="hover:underline">JetBrains Rider</a></li>
              <li>• <a href="https://www.nuget.org/" className="hover:underline">NuGet Packages</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Frameworks</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://docs.microsoft.com/en-us/ef/" className="hover:underline">Entity Framework</a></li>
              <li>• <a href="https://docs.microsoft.com/en-us/aspnet/signalr/" className="hover:underline">SignalR</a></li>
              <li>• <a href="https://unity.com/" className="hover:underline">Unity Game Engine</a></li>
              <li>• <a href="https://www.newtonsoft.com/json" className="hover:underline">Newtonsoft.Json</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Build with C#?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install Visual Studio Community (free)</li>
              <li>• Start with "Windows Forms Calculator"</li>
              <li>• Learn C# syntax and OOP concepts</li>
              <li>• Practice with console applications first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Development Paths:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Web Development
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Desktop Apps
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                Game Development
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                Enterprise Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
