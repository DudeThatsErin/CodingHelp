import Link from 'next/link';
import { Server, Database, Shield, Globe, Star, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const backendFrameworks = [
  {
    name: 'Express.js',
    language: 'JavaScript/Node.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    icon: '🟨',
    difficulty: 'Beginner',
    popularity: 'Very High',
    features: ['Minimal setup', 'Middleware support', 'RESTful APIs', 'Large ecosystem'],
    useCases: ['REST APIs', 'Web applications', 'Microservices', 'Real-time apps'],
    pros: ['Simple and flexible', 'Large community', 'Fast development', 'Extensive middleware'],
    cons: ['Minimal structure', 'Security setup required', 'Callback complexity']
  },
  {
    name: 'Django',
    language: 'Python',
    description: 'High-level Python web framework that encourages rapid development',
    icon: '🐍',
    difficulty: 'Intermediate',
    popularity: 'High',
    features: ['ORM included', 'Admin interface', 'Authentication', 'Security features'],
    useCases: ['Web applications', 'Content management', 'E-commerce', 'Data-driven sites'],
    pros: ['Batteries included', 'Excellent documentation', 'Security focused', 'Scalable'],
    cons: ['Learning curve', 'Monolithic structure', 'Less flexible']
  },
  {
    name: 'Spring Boot',
    language: 'Java',
    description: 'Java-based framework for building production-ready applications',
    icon: '☕',
    difficulty: 'Intermediate',
    popularity: 'High',
    features: ['Auto-configuration', 'Embedded servers', 'Production metrics', 'Security'],
    useCases: ['Enterprise applications', 'Microservices', 'REST APIs', 'Web services'],
    pros: ['Enterprise-ready', 'Strong ecosystem', 'Excellent tooling', 'Scalable'],
    cons: ['Complex setup', 'Verbose code', 'Memory usage']
  },
  {
    name: 'ASP.NET Core',
    language: 'C#',
    description: 'Cross-platform, high-performance framework for modern applications',
    icon: '🔷',
    difficulty: 'Intermediate',
    popularity: 'High',
    features: ['Cross-platform', 'High performance', 'Built-in DI', 'Cloud-ready'],
    useCases: ['Web APIs', 'Web applications', 'Microservices', 'Cloud applications'],
    pros: ['High performance', 'Strong typing', 'Excellent tooling', 'Microsoft support'],
    cons: ['Microsoft ecosystem', 'Learning curve', 'Licensing costs']
  },
  {
    name: 'Ruby on Rails',
    language: 'Ruby',
    description: 'Web application framework that emphasizes convention over configuration',
    icon: '💎',
    difficulty: 'Intermediate',
    popularity: 'Medium',
    features: ['Convention over configuration', 'Active Record ORM', 'Scaffolding', 'Testing'],
    useCases: ['Web applications', 'Rapid prototyping', 'Startups', 'Content sites'],
    pros: ['Rapid development', 'Convention-based', 'Great for MVPs', 'Strong community'],
    cons: ['Performance concerns', 'Monolithic', 'Learning curve']
  },
  {
    name: 'FastAPI',
    language: 'Python',
    description: 'Modern, fast web framework for building APIs with Python',
    icon: '⚡',
    difficulty: 'Beginner',
    popularity: 'Growing',
    features: ['Automatic API docs', 'Type hints', 'Async support', 'High performance'],
    useCases: ['REST APIs', 'GraphQL APIs', 'Microservices', 'Data APIs'],
    pros: ['Very fast', 'Easy to learn', 'Automatic documentation', 'Modern Python'],
    cons: ['Newer framework', 'Smaller ecosystem', 'Limited templates']
  }
];

export default function BackendFrameworksPage() {
  return (
    <PageLayout
      title="Backend Frameworks"
      description="Backend frameworks provide the foundation for server-side development, handling requests, database interactions, authentication, and business logic. Choose the right framework based on your language preference, project requirements, and team expertise."
      icon={<div className="text-4xl">🖥️</div>}
      previousLink={{
        href: "/frameworks/frontend",
        label: "Previous: Frontend Frameworks"
      }}
      nextLink={{
        href: "/frameworks/css",
        label: "Next: CSS Frameworks"
      }}
    >

      {/* Quick Reference */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Server className="w-5 h-5 mr-2" />
          Quick Reference: Choosing a Backend Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">For Beginners:</h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li><strong>Express.js:</strong> Simple and flexible</li>
              <li><strong>FastAPI:</strong> Modern Python with docs</li>
              <li><strong>Flask:</strong> Minimal Python framework</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">For Enterprise:</h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li><strong>Spring Boot:</strong> Java enterprise standard</li>
              <li><strong>ASP.NET Core:</strong> Microsoft ecosystem</li>
              <li><strong>Django:</strong> Python with batteries included</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">For Rapid Development:</h3>
            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li><strong>Ruby on Rails:</strong> Convention over configuration</li>
              <li><strong>Django:</strong> Admin interface included</li>
              <li><strong>Express.js:</strong> Quick API development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Backend Frameworks</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {backendFrameworks.map((framework, index) => (
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">JavaScript/Node.js</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://expressjs.com/" className="hover:underline">Express.js Official</a></li>
              <li>• <a href="https://nestjs.com/" className="hover:underline">NestJS Framework</a></li>
              <li>• <a href="https://koajs.com/" className="hover:underline">Koa.js</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Python</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://www.djangoproject.com/" className="hover:underline">Django</a></li>
              <li>• <a href="https://fastapi.tiangolo.com/" className="hover:underline">FastAPI</a></li>
              <li>• <a href="https://flask.palletsprojects.com/" className="hover:underline">Flask</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-white mb-3">Java & C#</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://spring.io/projects/spring-boot" className="hover:underline">Spring Boot</a></li>
              <li>• <a href="https://docs.microsoft.com/en-us/aspnet/core/" className="hover:underline">ASP.NET Core</a></li>
              <li>• <a href="https://rubyonrails.org/" className="hover:underline">Ruby on Rails</a></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
