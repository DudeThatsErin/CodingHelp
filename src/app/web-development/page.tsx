import Link from 'next/link';
import { Globe, Code, Users, Star, Layers, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const learningPaths = [
  {
    title: 'HTML & CSS',
    description: 'Learn the building blocks of web development - structure and styling.',
    href: '/web-development/html-css',
    difficulty: 'Beginner',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Frontend Frameworks',
    description: 'Master modern JavaScript frameworks like React, Vue, and Angular.',
    href: '/web-development/frontend',
    difficulty: 'Intermediate',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Backend Development',
    description: 'Build server-side applications, APIs, and databases.',
    href: '/web-development/backend',
    difficulty: 'Intermediate',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Full Stack',
    description: 'Combine frontend and backend skills to build complete web applications.',
    href: '/web-development/fullstack',
    difficulty: 'Advanced',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const webDevConcepts = [
  'Responsive Design',
  'Progressive Web Apps',
  'Web Performance',
  'SEO Optimization',
  'Web Security',
  'Testing & Debugging'
];

export default function WebDevelopmentPage() {
  return (
    <PageLayout
      title="Web Development"
      description="Learn to build modern web applications from frontend user interfaces to backend APIs. Master the technologies that power the internet."
      icon={<Globe className="w-8 h-8 text-blue-600" />}
    >
      {/* Header */}
      <div className="flex flex-col items-start p-4">
        <div className="flex items-center gap-3">
          <Globe className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Web Development
          </h1>
        </div>
        <p className="pt-4 text-lg text-gray-600 dark:text-gray-300">
          Build modern, responsive websites and web applications. From basic HTML/CSS 
          to full-stack development with modern frameworks and tools.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Paths
        </h2>
        <div className="flex flex-col gap-4">
          {learningPaths.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className={`block p-6 rounded-lg border transition-all hover:border-gray-600 ${path.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {path.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Key Web Development Concepts
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {webDevConcepts.map((concept) => (
            <div key={concept} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{concept}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Getting Started with Web Development
        </h3>
        <div className="flex flex-col gap-3 text-gray-700 dark:text-purple-200">
          <p>
            <strong>New to web development?</strong> Start with HTML & CSS to learn the fundamentals 
            of web page structure and styling.
          </p>
          <p>
            <strong>Have some experience?</strong> Jump into JavaScript and modern frameworks 
            like React or Vue to build interactive applications.
          </p>
          <p>
            <strong>Want to go full-stack?</strong> Learn backend technologies like Node.js, 
            Python, or PHP to handle server-side logic and databases.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="/web-development/html-css"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Start with HTML & CSS →
          </Link>
        </div>
      </div>

    </PageLayout>
  );
}
