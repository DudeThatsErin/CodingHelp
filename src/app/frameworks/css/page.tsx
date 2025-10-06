import Link from 'next/link';
import { Palette, Zap, Users, Star, Code, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const cssFrameworks = [
  {
    name: 'Tailwind CSS',
    type: 'Utility-First',
    description: 'Utility-first CSS framework for rapidly building custom designs',
    icon: '🎨',
    difficulty: 'Beginner',
    popularity: 'Very High',
    features: ['Utility classes', 'Customizable', 'Small bundle', 'JIT compilation'],
    useCases: ['Custom designs', 'Rapid prototyping', 'Component libraries', 'Modern web apps'],
    pros: ['Highly customizable', 'Small production builds', 'Great developer experience', 'No CSS conflicts'],
    cons: ['HTML can look cluttered', 'Learning curve', 'Requires build process']
  },
  {
    name: 'Bootstrap',
    type: 'Component-Based',
    description: 'Popular CSS framework with pre-built components and grid system',
    icon: '🅱️',
    difficulty: 'Beginner',
    popularity: 'Very High',
    features: ['Pre-built components', 'Responsive grid', 'JavaScript plugins', 'Themes'],
    useCases: ['Rapid development', 'Admin dashboards', 'Business websites', 'Prototyping'],
    pros: ['Easy to learn', 'Comprehensive components', 'Large community', 'Good documentation'],
    cons: ['Generic look', 'Large file size', 'Hard to customize', 'jQuery dependency']
  },
  {
    name: 'Bulma',
    type: 'Component-Based',
    description: 'Modern CSS framework based on Flexbox with no JavaScript',
    icon: '💚',
    difficulty: 'Beginner',
    popularity: 'Medium',
    features: ['Flexbox-based', 'No JavaScript', 'Modular', 'Modern syntax'],
    useCases: ['Modern layouts', 'Clean designs', 'CSS-only projects', 'Flexbox learning'],
    pros: ['No JavaScript required', 'Modern Flexbox', 'Clean syntax', 'Modular'],
    cons: ['Smaller community', 'Limited components', 'Less customization']
  },
  {
    name: 'Foundation',
    type: 'Component-Based',
    description: 'Advanced responsive front-end framework for professional websites',
    icon: '🏗️',
    difficulty: 'Intermediate',
    popularity: 'Medium',
    features: ['Mobile-first', 'Semantic', 'Customizable', 'Accessibility'],
    useCases: ['Professional websites', 'Complex layouts', 'Accessibility-focused', 'Enterprise'],
    pros: ['Highly customizable', 'Semantic HTML', 'Great for complex layouts', 'Accessibility focused'],
    cons: ['Steeper learning curve', 'Smaller community', 'More complex setup']
  },
  {
    name: 'Chakra UI',
    type: 'React Component Library',
    description: 'Simple, modular and accessible component library for React',
    icon: '⚡',
    difficulty: 'Beginner',
    popularity: 'High',
    features: ['React components', 'Theme system', 'Accessibility', 'TypeScript'],
    useCases: ['React applications', 'Design systems', 'Accessible UIs', 'TypeScript projects'],
    pros: ['Great developer experience', 'Accessibility built-in', 'TypeScript support', 'Themeable'],
    cons: ['React only', 'Opinionated design', 'Bundle size']
  },
  {
    name: 'Material-UI (MUI)',
    type: 'React Component Library',
    description: 'React components implementing Google\'s Material Design',
    icon: '🎯',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    features: ['Material Design', 'React components', 'Theming', 'TypeScript'],
    useCases: ['Material Design apps', 'React projects', 'Enterprise applications', 'Admin panels'],
    pros: ['Material Design compliance', 'Comprehensive components', 'Great documentation', 'TypeScript'],
    cons: ['Material Design only', 'Large bundle size', 'Opinionated styling']
  }
];

export default function CSSFrameworksPage() {
  return (
    <PageLayout
      title="CSS Frameworks"
      description="CSS frameworks provide pre-written CSS code to help you build responsive, consistent, and visually appealing websites faster. Choose based on your design needs, customization requirements, and development approach."
      icon={<div className="text-4xl">🎨</div>}
      previousLink={{
        href: "/frameworks/backend",
        label: "Previous: Backend Frameworks"
      }}
      nextLink={{
        href: "/frameworks/fullstack",
        label: "Next: Full-Stack Frameworks"
      }}
    >

      {/* Quick Reference */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2" />
          Quick Reference: CSS Framework Selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">For Custom Designs:</h3>
            <ul className="list-disc list-inside text-pink-800 dark:text-pink-200 text-sm [&>li]:mb-1">
              <li><strong>Tailwind CSS:</strong> Utility-first approach</li>
              <li><strong>Styled Components:</strong> CSS-in-JS</li>
              <li><strong>Emotion:</strong> Performant CSS-in-JS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">For Rapid Development:</h3>
            <ul className="list-disc list-inside text-pink-800 dark:text-pink-200 text-sm [&>li]:mb-1">
              <li><strong>Bootstrap:</strong> Pre-built components</li>
              <li><strong>Bulma:</strong> Modern CSS framework</li>
              <li><strong>Foundation:</strong> Professional framework</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">For React Projects:</h3>
            <ul className="list-disc list-inside text-pink-800 dark:text-pink-200 text-sm [&>li]:mb-1">
              <li><strong>Material-UI:</strong> Material Design</li>
              <li><strong>Chakra UI:</strong> Simple and accessible</li>
              <li><strong>Ant Design:</strong> Enterprise components</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Framework Types */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Framework Types</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Utility-First</h3>
            <p className="text-gray-300 text-sm mb-3">
              Provide low-level utility classes to build custom designs directly in HTML.
            </p>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Tailwind CSS</li>
              <li>• Tachyons</li>
              <li>• Atomic CSS</li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Component-Based</h3>
            <p className="text-gray-300 text-sm mb-3">
              Offer pre-built components and design systems for rapid development.
            </p>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• Bootstrap</li>
              <li>• Bulma</li>
              <li>• Foundation</li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Framework-Specific</h3>
            <p className="text-gray-300 text-sm mb-3">
              Built for specific JavaScript frameworks with component libraries.
            </p>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• Material-UI (React)</li>
              <li>• Chakra UI (React)</li>
              <li>• Vuetify (Vue)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular CSS Frameworks</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {cssFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{framework.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{framework.type}</p>
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
                
                <p className="text-gray-600 dark:text-grflex flex-col gap-300 mb-6">{framework.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                    <ul className="text-gray-600 dark:text-grflex flex-col gap-300 text-sm [&>li]:mb-1">
                      {framework.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h4>
                    <ul className="text-gray-600 dark:text-grflex flex-col gap-300 text-sm [&>li]:mb-1">
                      {framework.useCases.map((useCase, i) => (
                        <li key={i}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pros</h4>
                    <ul className="text-gray-600 dark:text-grflex flex-col gap-300 text-sm [&>li]:mb-1">
                      {framework.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cons</h4>
                    <ul className="text-gray-600 dark:text-grflex flex-col gap-300 text-sm [&>li]:mb-1">
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
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Utility-First</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a></li>
              <li>• <a href="https://tachyons.io/" className="hover:underline">Tachyons</a></li>
              <li>• <a href="https://windicss.org/" className="hover:underline">Windi CSS</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Component-Based</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://getbootstrap.com/" className="hover:underline">Bootstrap</a></li>
              <li>• <a href="https://bulma.io/" className="hover:underline">Bulma</a></li>
              <li>• <a href="https://get.foundation/" className="hover:underline">Foundation</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">React Libraries</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://mui.com/" className="hover:underline">Material-UI</a></li>
              <li>• <a href="https://chakra-ui.com/" className="hover:underline">Chakra UI</a></li>
              <li>• <a href="https://ant.design/" className="hover:underline">Ant Design</a></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
