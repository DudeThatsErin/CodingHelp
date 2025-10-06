import Link from 'next/link';
import { Layers, Code, Globe, Users, Star, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const fullStackFrameworks = [
  {
    name: 'Next.js',
    language: 'JavaScript/TypeScript',
    description: 'React framework with server-side rendering and full-stack capabilities',
    icon: '⚫',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    features: ['Server-side rendering', 'API routes', 'Static generation', 'Image optimization'],
    useCases: ['Web applications', 'E-commerce sites', 'Blogs', 'Landing pages'],
    pros: ['Great performance', 'SEO friendly', 'Vercel deployment', 'Large community'],
    cons: ['Learning curve', 'Build complexity', 'Vendor lock-in potential']
  },
  {
    name: 'Nuxt.js',
    language: 'JavaScript/TypeScript',
    description: 'Vue.js framework for building universal applications',
    icon: '💚',
    difficulty: 'Intermediate',
    popularity: 'High',
    features: ['Server-side rendering', 'Static generation', 'Auto-routing', 'Module ecosystem'],
    useCases: ['Vue applications', 'Static sites', 'PWAs', 'Universal apps'],
    pros: ['Vue.js simplicity', 'Great documentation', 'Module system', 'Performance'],
    cons: ['Smaller ecosystem', 'Vue.js dependency', 'Less job market']
  },
  {
    name: 'SvelteKit',
    language: 'JavaScript/TypeScript',
    description: 'Full-stack framework built on Svelte with modern web standards',
    icon: '🧡',
    difficulty: 'Intermediate',
    popularity: 'Growing',
    features: ['No virtual DOM', 'Server-side rendering', 'File-based routing', 'Adapters'],
    useCases: ['Modern web apps', 'Static sites', 'Progressive web apps', 'Performance-critical apps'],
    pros: ['Small bundle size', 'Fast performance', 'Simple syntax', 'Modern approach'],
    cons: ['Newer ecosystem', 'Smaller community', 'Limited resources']
  },
  {
    name: 'T3 Stack',
    language: 'TypeScript',
    description: 'Full-stack TypeScript framework with Next.js, tRPC, Prisma, and Tailwind',
    icon: '🔷',
    difficulty: 'Advanced',
    popularity: 'Growing',
    features: ['End-to-end type safety', 'tRPC APIs', 'Prisma ORM', 'NextAuth.js'],
    useCases: ['Type-safe applications', 'Modern web apps', 'Startups', 'SaaS products'],
    pros: ['Full type safety', 'Modern stack', 'Great DX', 'Opinionated'],
    cons: ['Complex setup', 'Learning curve', 'TypeScript required']
  },
  {
    name: 'Remix',
    language: 'JavaScript/TypeScript',
    description: 'Full-stack web framework focused on web standards and modern UX',
    icon: '💿',
    difficulty: 'Intermediate',
    popularity: 'Growing',
    features: ['Web standards', 'Nested routing', 'Data loading', 'Progressive enhancement'],
    useCases: ['Web applications', 'Data-heavy apps', 'Progressive enhancement', 'Modern UX'],
    pros: ['Web standards', 'Great UX', 'Performance', 'Progressive enhancement'],
    cons: ['Newer framework', 'Learning curve', 'Smaller ecosystem']
  },
  {
    name: 'Meteor',
    language: 'JavaScript',
    description: 'Full-stack platform for building modern web and mobile applications',
    icon: '☄️',
    difficulty: 'Intermediate',
    popularity: 'Medium',
    features: ['Real-time updates', 'MongoDB integration', 'Build tool', 'Package system'],
    useCases: ['Real-time apps', 'Rapid prototyping', 'Chat applications', 'Collaborative tools'],
    pros: ['Rapid development', 'Real-time by default', 'Full-stack solution', 'MongoDB integration'],
    cons: ['Opinionated stack', 'Performance concerns', 'Smaller community']
  }
];

export default function FullStackFrameworksPage() {
  return (
    <PageLayout
      title="Full-Stack Frameworks"
      description="Full-stack frameworks provide everything you need to build complete web applications, from frontend user interfaces to backend APIs and database integration."
      icon={<div className="text-4xl">🚀</div>}
      previousLink={{
        href: "/frameworks/css",
        label: "Previous: CSS Frameworks"
      }}
      nextLink={{
        href: "/frameworks/mobile",
        label: "Next: Mobile Frameworks"
      }}
    >

      {/* Quick Reference */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2" />
          Quick Reference: Full-Stack Framework Selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">For React Developers:</h3>
            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li><strong>Next.js:</strong> Most popular, great ecosystem</li>
              <li><strong>Remix:</strong> Web standards focused</li>
              <li><strong>T3 Stack:</strong> Type-safe development</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">For Vue Developers:</h3>
            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li><strong>Nuxt.js:</strong> Vue.js full-stack solution</li>
              <li><strong>Quasar:</strong> Vue with mobile support</li>
              <li><strong>Gridsome:</strong> Static site generation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">For Performance:</h3>
            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li><strong>SvelteKit:</strong> Minimal bundle size</li>
              <li><strong>Astro:</strong> Static-first approach</li>
              <li><strong>Next.js:</strong> Optimized by default</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Full-Stack Frameworks</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {fullStackFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{framework.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{framework.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                      framework.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {framework.difficulty}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      framework.popularity === 'Very High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      framework.popularity === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      framework.popularity === 'Medium' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                    }`}>
                      {framework.popularity}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{framework.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.useCases.map((useCase, i) => (
                        <li key={i}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pros</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cons</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">React-Based</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://nextjs.org/" className="hover:underline">Next.js Official</a></li>
              <li>• <a href="https://remix.run/" className="hover:underline">Remix Framework</a></li>
              <li>• <a href="https://create.t3.gg/" className="hover:underline">T3 Stack</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Vue-Based</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://nuxtjs.org/" className="hover:underline">Nuxt.js</a></li>
              <li>• <a href="https://quasar.dev/" className="hover:underline">Quasar Framework</a></li>
              <li>• <a href="https://gridsome.org/" className="hover:underline">Gridsome</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Other</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://kit.svelte.dev/" className="hover:underline">SvelteKit</a></li>
              <li>• <a href="https://astro.build/" className="hover:underline">Astro</a></li>
              <li>• <a href="https://www.meteor.com/" className="hover:underline">Meteor</a></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
