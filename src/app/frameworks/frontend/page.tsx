import Link from 'next/link';
import { Code, Users, Star, TrendingUp, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const frontendFrameworks = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces with a component-based architecture',
    maintainer: 'Meta (Facebook)',
    firstRelease: '2013',
    language: 'JavaScript/TypeScript',
    popularity: 'Very High',
    difficulty: 'Intermediate',
    pros: ['Large ecosystem', 'Virtual DOM', 'Flexible', 'Strong job market', 'Excellent tooling'],
    cons: ['Steep learning curve', 'Frequent updates', 'JSX syntax', 'Configuration complexity'],
    useCases: ['Single Page Applications', 'Complex UIs', 'Enterprise applications', 'Mobile apps (React Native)'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Vue.js',
    description: 'The progressive JavaScript framework that\'s approachable, versatile, and performant',
    maintainer: 'Evan You & Core Team',
    firstRelease: '2014',
    language: 'JavaScript/TypeScript',
    popularity: 'High',
    difficulty: 'Beginner',
    pros: ['Easy to learn', 'Great documentation', 'Flexible', 'Small bundle size', 'Template syntax'],
    cons: ['Smaller ecosystem', 'Less job opportunities', 'Composition API complexity', 'Language barrier'],
    useCases: ['Rapid prototyping', 'Progressive enhancement', 'Small to medium apps', 'Enterprise applications'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Angular',
    description: 'A platform and framework for building single-page client applications using HTML and TypeScript',
    maintainer: 'Google',
    firstRelease: '2016',
    language: 'TypeScript',
    popularity: 'High',
    difficulty: 'Advanced',
    pros: ['Full framework', 'TypeScript by default', 'Enterprise-ready', 'Powerful CLI', 'Dependency injection'],
    cons: ['Complex', 'Heavy', 'Steep learning curve', 'Verbose', 'Frequent breaking changes'],
    useCases: ['Large enterprise applications', 'Complex business logic', 'Teams preferring structure', 'Long-term projects'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Svelte',
    description: 'A radical new approach to building user interfaces with compile-time optimization',
    maintainer: 'Rich Harris & Core Team',
    firstRelease: '2016',
    language: 'JavaScript/TypeScript',
    popularity: 'Growing',
    difficulty: 'Beginner',
    pros: ['No virtual DOM', 'Small bundle size', 'Easy to learn', 'Great performance', 'Less boilerplate'],
    cons: ['Smaller ecosystem', 'Less tooling', 'Newer framework', 'Limited job market', 'Smaller community'],
    useCases: ['Performance-critical apps', 'Small to medium projects', 'Developers wanting simplicity', 'Static sites'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'AngularJS',
    description: 'The original Angular framework (now legacy) - superseded by Angular 2+',
    maintainer: 'Google (Legacy)',
    firstRelease: '2010',
    language: 'JavaScript',
    popularity: 'Declining',
    difficulty: 'Intermediate',
    pros: ['Two-way data binding', 'Dependency injection', 'Mature ecosystem', 'MVC architecture'],
    cons: ['Legacy framework', 'Performance issues', 'Complex digest cycle', 'No longer maintained'],
    useCases: ['Legacy applications', 'Maintenance projects', 'Not recommended for new projects'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'jQuery',
    description: 'A fast, small, and feature-rich JavaScript library for DOM manipulation',
    maintainer: 'jQuery Foundation',
    firstRelease: '2006',
    language: 'JavaScript',
    popularity: 'Declining',
    difficulty: 'Beginner',
    pros: ['Easy to learn', 'Cross-browser compatibility', 'Large plugin ecosystem', 'Simple syntax'],
    cons: ['DOM-heavy approach', 'Not suitable for complex apps', 'Performance issues', 'Outdated patterns'],
    useCases: ['Simple websites', 'Legacy projects', 'Quick DOM manipulation', 'Learning JavaScript'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const frameworkStats = [
  { label: 'Most Popular', value: 'React', icon: <Star className="w-4 h-4" /> },
  { label: 'Best for Beginners', value: 'Vue.js', icon: <Users className="w-4 h-4" /> },
  { label: 'Fastest Growing', value: 'Svelte', icon: <TrendingUp className="w-4 h-4" /> },
  { label: 'Best Performance', value: 'Svelte', icon: <Zap className="w-4 h-4" /> }
];

export default function FrontendFrameworksPage() {
  return (
    <PageLayout
      title="Frontend Frameworks"
      description="Modern JavaScript frameworks and libraries for building interactive user interfaces and single-page applications."
      previousLink={{
        href: "/frameworks",
        label: "Back to Frameworks"
      }}
      nextLink={{
        href: "/frameworks/backend",
        label: "Next: Backend Frameworks"
      }}
    >

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {frameworkStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-blue-600">{stat.icon}</div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* What are Frontend Frameworks */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎨 What are Frontend Frameworks?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-blue-100 mb-2">Purpose:</h4>
            <ul className="text-gray-700 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Structure and organize frontend code</li>
              <li>• Provide reusable UI components</li>
              <li>• Handle state management and data flow</li>
              <li>• Optimize rendering and performance</li>
              <li>• Enable reactive user interfaces</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Features:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Component-based architecture</li>
              <li>• Virtual DOM or efficient rendering</li>
              <li>• Data binding and state management</li>
              <li>• Routing for single-page applications</li>
              <li>• Development tools and debugging</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Frontend Frameworks
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {frontendFrameworks.map((framework, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${framework.color}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {framework.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      by {framework.maintainer}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Since {framework.firstRelease}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    framework.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {framework.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.popularity === 'Very High' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                    framework.popularity === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                    framework.popularity === 'Growing' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {framework.popularity}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {framework.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Pros:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {framework.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Cons:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {framework.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Best For:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {framework.useCases.map((useCase, i) => (
                      <li key={i}>• {useCase}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Details:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    <li>• Language: {framework.language}</li>
                    <li>• First Release: {framework.firstRelease}</li>
                    <li>• Maintainer: {framework.maintainer}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🎯 Frontend Framework Learning Path
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Master JavaScript Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">ES6+, DOM manipulation, async/await, modules</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your First Framework</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Vue.js for beginners, React for job market, Angular for enterprise</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Projects</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Todo app, weather app, e-commerce site</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn Advanced Concepts</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">State management, testing, performance optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          💡 Framework Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🔰 For Beginners:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• <strong>Vue.js</strong> - Gentle learning curve</li>
              <li>• <strong>Svelte</strong> - Less complexity</li>
              <li>• Start with official tutorials</li>
              <li>• Focus on core concepts first</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💼 For Job Market:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• <strong>React</strong> - Highest demand</li>
              <li>• <strong>Angular</strong> - Enterprise focus</li>
              <li>• Build a strong portfolio</li>
              <li>• Learn related ecosystem tools</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚀 For Performance:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• <strong>Svelte</strong> - Compile-time optimization</li>
              <li>• <strong>Vue.js</strong> - Efficient rendering</li>
              <li>• Consider bundle size</li>
              <li>• Optimize for your use case</li>
            </ul>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
