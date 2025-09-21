import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Component, Layers, Smartphone } from 'lucide-react';

const frameworks = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces with components',
    pros: ['Large ecosystem', 'Virtual DOM', 'Flexible', 'Great job market'],
    cons: ['Steep learning curve', 'Frequent updates', 'JSX syntax'],
    bestFor: 'Complex applications, SPAs, when you need flexibility',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    name: 'Vue.js',
    description: 'The progressive JavaScript framework that\'s approachable and versatile',
    pros: ['Easy to learn', 'Great documentation', 'Flexible', 'Small bundle size'],
    cons: ['Smaller ecosystem', 'Less job opportunities', 'Composition API complexity'],
    bestFor: 'Beginners, rapid prototyping, progressive enhancement',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    name: 'Angular',
    description: 'A platform for building mobile and desktop web applications',
    pros: ['Full framework', 'TypeScript by default', 'Enterprise-ready', 'Powerful CLI'],
    cons: ['Complex', 'Heavy', 'Steep learning curve', 'Verbose'],
    bestFor: 'Large enterprise applications, teams that prefer structure',
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  },
  {
    name: 'Svelte',
    description: 'A radical new approach to building user interfaces with compile-time optimization',
    pros: ['No virtual DOM', 'Small bundle size', 'Easy to learn', 'Great performance'],
    cons: ['Smaller ecosystem', 'Less tooling', 'Newer framework', 'Limited job market'],
    bestFor: 'Performance-critical apps, developers who want simplicity',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
  }
];

const concepts = [
  { title: 'Components', description: 'Reusable UI building blocks', icon: <Component className="w-5 h-5" /> },
  { title: 'State Management', description: 'Managing application data and UI state', icon: <Layers className="w-5 h-5" /> },
  { title: 'Routing', description: 'Navigation between different views/pages', icon: <Smartphone className="w-5 h-5" /> },
  { title: 'Lifecycle Methods', description: 'Hooks into component creation, updates, and destruction', icon: <Zap className="w-5 h-5" /> }
];

export default function FrontendPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/web-development/html-css"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: HTML & CSS</span>
        </Link>
        <Link
          href="/web-development/backend"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Backend Development</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Frontend Frameworks
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master modern JavaScript frameworks and libraries to build dynamic, interactive 
          web applications with component-based architecture and reactive data flow.
        </p>
      </div>

      {/* Why Use Frameworks */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🤔 Why Use Frontend Frameworks?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Benefits:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Component-based architecture for reusability</li>
              <li>• Reactive data binding and state management</li>
              <li>• Virtual DOM for better performance</li>
              <li>• Rich ecosystem of tools and libraries</li>
              <li>• Better code organization and maintainability</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">When to Use:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
              <li>• Building Single Page Applications (SPAs)</li>
              <li>• Complex user interfaces with lots of interactivity</li>
              <li>• Applications that need real-time updates</li>
              <li>• Large-scale projects with multiple developers</li>
              <li>• When you need a structured development approach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core Frontend Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-blue-600">{concept.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Frontend Frameworks
        </h2>
        <div className="space-y-6">
          {frameworks.map((framework, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${framework.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {framework.name}
                </h3>
                <span className="text-sm px-3 py-1 bg-white dark:bg-gray-800 rounded-full font-medium">
                  #{index + 1}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {framework.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Pros:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {framework.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Cons:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {framework.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Best For:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {framework.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Getting Started
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Recommended Learning Path
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Master JavaScript Fundamentals</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">ES6+, async/await, modules, destructuring</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Choose Your First Framework</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">React for flexibility, Vue for ease of learning, Angular for enterprise</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Build Projects</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Todo app, weather app, e-commerce site</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Learn Advanced Concepts</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">State management, testing, performance optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Ecosystem */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Tools & Libraries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🛠️ Development Tools</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Vite / Create React App</li>
              <li>• Webpack / Parcel</li>
              <li>• ESLint / Prettier</li>
              <li>• Browser DevTools</li>
              <li>• React/Vue DevTools</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📦 State Management</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Redux / Redux Toolkit</li>
              <li>• Zustand / Jotai</li>
              <li>• Vuex / Pinia</li>
              <li>• Context API</li>
              <li>• MobX</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🎨 UI Libraries</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Material-UI / Ant Design</li>
              <li>• Chakra UI / Mantine</li>
              <li>• Tailwind CSS</li>
              <li>• Styled Components</li>
              <li>• Headless UI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practice Projects */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          💡 Practice Project Ideas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Beginner Projects:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• Todo List with CRUD operations</li>
              <li>• Weather App with API integration</li>
              <li>• Calculator with complex operations</li>
              <li>• Quiz App with score tracking</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Advanced Projects:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• E-commerce site with cart functionality</li>
              <li>• Social media dashboard</li>
              <li>• Real-time chat application</li>
              <li>• Project management tool</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/web-development/html-css"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: HTML & CSS</span>
        </Link>
        <Link
          href="/web-development/backend"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Backend Development</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
