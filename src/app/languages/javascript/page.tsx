import Link from 'next/link';
import { Globe, Smartphone, Server, Zap, Code, Users, Layers, BookOpen, Clock, ArrowRight, Star } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { ContentList } from '@/components/ContentList';

const jsFeatures = [
  {
    title: 'Versatile & Ubiquitous',
    description: 'The only language that runs natively in web browsers, with expanding reach everywhere',
    icon: <Globe className="w-5 h-5" />,
    details: 'From frontend to backend, mobile apps to desktop applications, JavaScript is everywhere'
  },
  {
    title: 'Dynamic & Flexible',
    description: 'Dynamically typed with first-class functions and multiple programming paradigms',
    icon: <Zap className="w-5 h-5" />,
    details: 'Supports procedural, object-oriented, and functional programming styles'
  },
  {
    title: 'Event-Driven',
    description: 'Built for handling user interactions and asynchronous operations',
    icon: <Code className="w-5 h-5" />,
    details: 'Perfect for creating interactive user interfaces and real-time applications'
  },
  {
    title: 'Massive Ecosystem',
    description: 'Largest package ecosystem in the world with npm containing over 2 million packages',
    icon: <Layers className="w-5 h-5" />,
    details: 'Find libraries and frameworks for virtually any functionality you need'
  },
  {
    title: 'Rapid Development',
    description: 'No compilation step needed - write code and see results immediately',
    icon: <BookOpen className="w-5 h-5" />,
    details: 'Hot reloading and live editing capabilities speed up development cycles'
  },
  {
    title: 'Active Community',
    description: 'Largest programming community with extensive resources and support',
    icon: <Users className="w-5 h-5" />,
    details: 'Over 17 million developers worldwide, extensive documentation, and helpful forums'
  }
];

const jsUseCases = [
  {
    category: 'Frontend Web Development',
    description: 'Create interactive, dynamic user interfaces for websites and web applications',
    examples: ['Facebook', 'Netflix', 'Airbnb', 'Google Maps'],
    frameworks: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js'],
    popularity: 'Very High',
    difficulty: 'Beginner to Advanced'
  },
  {
    category: 'Backend Development',
    description: 'Build scalable server-side applications and APIs with Node.js',
    examples: ['Netflix API', 'Uber backend', 'WhatsApp', 'LinkedIn'],
    frameworks: ['Node.js', 'Express.js', 'Koa.js', 'Fastify', 'NestJS'],
    popularity: 'Very High',
    difficulty: 'Intermediate to Advanced'
  },
  {
    category: 'Mobile App Development',
    description: 'Cross-platform mobile applications using JavaScript frameworks',
    examples: ['Instagram', 'Discord', 'Skype', 'Tesla app'],
    frameworks: ['React Native', 'Ionic', 'Cordova', 'NativeScript'],
    popularity: 'High',
    difficulty: 'Intermediate to Advanced'
  },
  {
    category: 'Desktop Applications',
    description: 'Cross-platform desktop applications using web technologies',
    examples: ['VS Code', 'Discord', 'Slack', 'WhatsApp Desktop'],
    frameworks: ['Electron', 'Tauri', 'NW.js'],
    popularity: 'Medium to High',
    difficulty: 'Intermediate'
  }
];

const jsSections = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Master variables, functions, objects, arrays, and control flow',
    href: '/languages/javascript/fundamentals',
    icon: <BookOpen className="w-6 h-6" />,
    topics: ['Variables & Data Types', 'Functions & Scope', 'Objects & Arrays', 'Control Flow', 'Error Handling'],
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours'
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Explore React, Vue, Angular, Node.js and popular JavaScript tools',
    href: '/languages/javascript/frameworks',
    icon: <Layers className="w-6 h-6" />,
    topics: ['React Deep Dive', 'Vue.js Basics', 'Angular Overview', 'Node.js & Express', 'Framework Comparison'],
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours'
  },
  {
    title: 'Asynchronous Programming',
    description: 'Learn callbacks, promises, async/await, and the event loop',
    href: '/languages/javascript/async',
    icon: <Clock className="w-6 h-6" />,
    topics: ['Callbacks & Callback Hell', 'Promises & Promise Chaining', 'Async/Await', 'Fetch API', 'Event Loop'],
    difficulty: 'Intermediate to Advanced',
    estimatedTime: '2-3 hours'
  }
];

export default function JavaScriptPage() {
  return (
    <PageLayout
      title="JavaScript"
      description="JavaScript is the programming language of the web. Originally created for browsers, it now powers servers, mobile apps, desktop applications, and more. It's versatile, beginner-friendly, and essential for modern web development."
    >

      <QuickStats stats={[
        { 
          value: "1995", 
          label: "First Released",
          icon: <Code className="w-5 h-5" />
        },
        { 
          value: "Beginner", 
          label: "Difficulty Level",
          icon: <Users className="w-5 h-5" />
        },
        { 
          value: "Very High", 
          label: "Popularity",
          icon: <Star className="w-5 h-5" />
        },
        { 
          value: "Everywhere", 
          label: "Platform",
          icon: <Globe className="w-5 h-5" />
        }
      ]} />

      {/* Learning Sections */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          JavaScript Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {jsSections.map((section, index) => (
            <Link key={index} href={section.href} className="block group">
              <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-start flex flex-col gap-3">
                  <div className="text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {section.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          section.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          section.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {section.difficulty}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{section.estimatedTime}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{section.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {section.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose JavaScript?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-yellow-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with JavaScript?
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {jsUseCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{useCase.category}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.difficulty.includes('Beginner') ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.difficulty.includes('Intermediate') && useCase.difficulty.includes('Advanced') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    useCase.difficulty.includes('Intermediate') ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {useCase.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {useCase.popularity}
                  </span>
                </div>
              </div>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-4">{useCase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Real-World Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">Popular Frameworks:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.frameworks.map((framework, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-yellow-200 dark:bg-yellow-800/30 text-yellow-800 dark:text-yellow-200 rounded-full">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          JavaScript Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Beginner Projects */}
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🟢 Beginner Projects</h3>
            <ul className="flex flex-col gap-2 text-green-800 dark:text-green-200 text-sm">
              <li>• <strong>To-Do List App:</strong> Add, edit, delete tasks with local storage</li>
              <li>• <strong>Calculator:</strong> Basic arithmetic operations with a clean UI</li>
              <li>• <strong>Digital Clock:</strong> Real-time clock with date display</li>
              <li>• <strong>Random Quote Generator:</strong> Fetch and display inspirational quotes</li>
              <li>• <strong>Color Palette Generator:</strong> Generate random color schemes</li>
              <li>• <strong>Simple Weather App:</strong> Display weather using an API</li>
            </ul>
          </div>

          {/* Intermediate Projects */}
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🟡 Intermediate Projects</h3>
            <ul className="flex flex-col gap-2 text-yellow-800 dark:text-yellow-200 text-sm">
              <li>• <strong>Expense Tracker:</strong> Track income/expenses with charts</li>
              <li>• <strong>Movie Search App:</strong> Search movies using TMDB API</li>
              <li>• <strong>Memory Card Game:</strong> Interactive card matching game</li>
              <li>• <strong>Recipe Finder:</strong> Search and save recipes with filters</li>
              <li>• <strong>Chat Application:</strong> Real-time messaging with Socket.io</li>
              <li>• <strong>Portfolio Website:</strong> Responsive personal portfolio</li>
            </ul>
          </div>

          {/* Advanced Projects */}
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🔴 Advanced Projects</h3>
            <ul className="flex flex-col gap-2 text-red-800 dark:text-red-200 text-sm">
              <li>• <strong>E-commerce Platform:</strong> Full shopping cart with payments</li>
              <li>• <strong>Social Media Dashboard:</strong> Analytics and post management</li>
              <li>• <strong>Video Streaming App:</strong> Upload and stream videos</li>
              <li>• <strong>Project Management Tool:</strong> Kanban boards with teams</li>
              <li>• <strong>Real-time Collaboration:</strong> Google Docs-like editor</li>
              <li>• <strong>Cryptocurrency Tracker:</strong> Live prices with portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Getting Started with JavaScript
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">No Installation Needed</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">JavaScript runs in any web browser - just open the developer console</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your Environment</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Browser console, CodePen, VS Code, or Node.js for server-side</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Start with HTML</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Create an HTML file and add &lt;script&gt; tags to begin coding</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, functions, DOM manipulation, and asynchronous programming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
    </PageLayout>
  );
}
