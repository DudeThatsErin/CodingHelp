import Link from 'next/link';
import { Code, Zap, Globe, Users, ArrowRight, CheckCircle, Layers, Settings } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const jsBasics = [
  { title: 'Variables & Data Types', description: 'let, const, strings, numbers, booleans, arrays, objects' },
  { title: 'Functions', description: 'Function declarations, expressions, arrow functions, parameters' },
  { title: 'Control Flow', description: 'if/else statements, loops, switch statements' },
  { title: 'DOM Manipulation', description: 'Selecting elements, event handling, dynamic content' },
  { title: 'Async Programming', description: 'Promises, async/await, fetch API, callbacks' },
  { title: 'ES6+ Features', description: 'Destructuring, template literals, modules, classes' }
];

const jsFrameworks = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    useCases: ['Single Page Applications', 'Component-based UIs', 'Mobile apps with React Native'],
    href: '/frameworks/frontend'
  },
  {
    name: 'Vue.js',
    description: 'The progressive JavaScript framework',
    difficulty: 'Beginner',
    popularity: 'High',
    useCases: ['Progressive enhancement', 'Small to medium apps', 'Rapid prototyping'],
    href: '/frameworks/frontend'
  },
  {
    name: 'Angular',
    description: 'Platform for building mobile and desktop web applications',
    difficulty: 'Advanced',
    popularity: 'High',
    useCases: ['Enterprise applications', 'Complex business logic', 'Large-scale projects'],
    href: '/frameworks/frontend'
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for server-side development',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    useCases: ['Backend APIs', 'Real-time applications', 'Microservices'],
    href: '/web-development/backend'
  }
];

const learningPath = [
  {
    step: 1,
    title: 'JavaScript Fundamentals',
    description: 'Variables, functions, control flow, and basic syntax',
    duration: '2-4 weeks'
  },
  {
    step: 2,
    title: 'DOM Manipulation',
    description: 'Interact with HTML elements and handle user events',
    duration: '1-2 weeks'
  },
  {
    step: 3,
    title: 'Asynchronous JavaScript',
    description: 'Promises, async/await, and API calls',
    duration: '2-3 weeks'
  },
  {
    step: 4,
    title: 'Modern JavaScript (ES6+)',
    description: 'Arrow functions, destructuring, modules, and classes',
    duration: '1-2 weeks'
  },
  {
    step: 5,
    title: 'Choose Your Path',
    description: 'Frontend frameworks, Node.js backend, or full-stack development',
    duration: 'Ongoing'
  }
];

export default function JavaScriptPage() {
  return (
    <PageLayout
      title="JavaScript for Web Development"
      description="Master JavaScript, the programming language that powers the modern web. From basic syntax to advanced concepts and popular frameworks."
      icon={<Code className="w-8 h-8 text-yellow-500" />}
      previousLink={{
        href: "/web-development/html-css",
        label: "Previous: HTML & CSS"
      }}
      nextLink={{
        href: "/web-development/frontend",
        label: "Next: Frontend Frameworks"
      }}
    >

      {/* What You'll Learn */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          📚 What You'll Learn
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jsBasics.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JavaScript Fundamentals */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          JavaScript Fundamentals
        </h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-white mb-4">🧭 Hands-on Tutorial: Using JavaScript</h3>
          <div className="flex flex-col gap-6 text-gray-600 dark:text-gray-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <h4 className="font-semibold text-white text-sm">Run JavaScript in your browser</h4>
              </div>
              <p className="text-sm mb-3">Open your browser's DevTools (F12 or Cmd/Ctrl+Shift+I) and go to the Console tab. Try these:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`console.log('Hello from JavaScript!')
2 + 2
'hi'.toUpperCase()`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <h4 className="font-semibold text-white text-sm">Add JavaScript to a web page</h4>
              </div>
              <p className="text-sm mb-3">Create an <code className="bg-gray-700 px-1 rounded">index.html</code> and include a script:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`<!doctype html>
<html>
  <body>
    <h1 id="title">Hello!</h1>
    <button id="btn">Click me</button>
    <script>
      console.log('Page loaded');
    </script>
  </body>
  </html>`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <h4 className="font-semibold text-white text-sm">Select and change elements (DOM)</h4>
              </div>
              <p className="text-sm mb-3">Use selectors to read and update the page:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`const title = document.querySelector('#title')
title.textContent = 'Welcome to JavaScript'`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <h4 className="font-semibold text-white text-sm">Listen for user events</h4>
              </div>
              <p className="text-sm mb-3">Respond to clicks, input, submit, and more:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`document.querySelector('#btn').addEventListener('click', () => {
  alert('Button clicked!')
})`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <h4 className="font-semibold text-white text-sm">Work with data</h4>
              </div>
              <p className="text-sm mb-3">Store values in arrays/objects and transform them:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`const skills = ['HTML', 'CSS', 'JavaScript']
const user = { name: 'Alex', skills }
const upper = skills.map(s => s.toUpperCase())`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <h4 className="font-semibold text-white text-sm">Fetch data asynchronously</h4>
              </div>
              <p className="text-sm mb-3">Use <code className="bg-gray-700 px-1 rounded">fetch</code> with async/await to load data:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users)
  } catch (err) {
    console.error('Request failed', err)
  }
}
loadUsers()`}</pre>
            </div>

            <div className="text-xs text-gray-400 mt-4">
              💡 Use your browser DevTools to inspect elements, step through code in the Sources tab, and watch variables in the Console.
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          JavaScript Learning Path
        </h2>
        
        <div className="flex flex-col gap-4">
          {learningPath.map((phase, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{phase.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{phase.duration}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular JavaScript Frameworks */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular JavaScript Frameworks & Libraries
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jsFrameworks.map((framework, index) => (
            <Link key={index} href={framework.href} className="block bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{framework.description}</p>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  framework.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                  'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {framework.difficulty}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  framework.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {framework.popularity}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {framework.useCases.map((useCase, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🚀 Getting Started with JavaScript
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Set Up Your Environment</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Use a code editor like VS Code and open your browser's developer tools</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Practice with Interactive Tutorials</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Try freeCodeCamp, Codecademy, or JavaScript.info for hands-on learning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Build Projects</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Create a calculator, to-do list, or interactive webpage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Learn a Framework</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Once comfortable with vanilla JavaScript, explore React, Vue, or Angular</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          📖 Recommended Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Free Resources:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• MDN Web Docs (JavaScript Guide)</li>
              <li>• freeCodeCamp (Interactive Lessons)</li>
              <li>• JavaScript.info (Comprehensive Tutorial)</li>
              <li>• Eloquent JavaScript (Free Book)</li>
              <li>• YouTube: Traversy Media, The Net Ninja</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Practice Projects:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Calculator with basic operations</li>
              <li>• To-do list with local storage</li>
              <li>• Weather app using API</li>
              <li>• Interactive quiz application</li>
              <li>• Simple game (tic-tac-toe, memory)</li>
            </ul>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
