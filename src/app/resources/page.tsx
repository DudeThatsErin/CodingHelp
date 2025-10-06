import Link from 'next/link';
import { Lightbulb, ArrowRight, BookOpen, Users, Code, HelpCircle, Search, Target, Database, Settings } from 'lucide-react';

const resourceDatabases = [
  {
    title: 'Programming Languages',
    description: 'Comprehensive database of programming languages with difficulty, popularity, and use cases',
    examples: ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'Rust'],
    href: '/resources/programming-languages',
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: 'Development Tools',
    description: 'Essential tools and IDEs for programming with features and download links',
    examples: ['VS Code', 'IntelliJ', 'Git', 'Docker', 'Postman', 'Figma'],
    href: '/resources/development-tools',
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: 'Programming Books',
    description: 'Curated collection of programming books with ratings, prices, and purchase links',
    examples: ['Clean Code', 'Python for Dummies', 'You Don\'t Know JS', 'Design Patterns'],
    href: '/resources/books',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: 'Learning Platforms',
    description: 'Online learning platforms with pricing, features, and course information',
    examples: ['freeCodeCamp', 'Codecademy', 'Coursera', 'Udemy', 'Pluralsight'],
    href: '/resources/learning-platforms',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Practice Platforms',
    description: 'Coding challenge platforms for interview prep and skill development',
    examples: ['LeetCode', 'HackerRank', 'Codewars', 'AtCoder', 'Codeforces'],
    href: '/resources/practice-platforms',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Communities',
    description: 'Developer communities and forums for networking and getting help',
    examples: ['Stack Overflow', 'Reddit', 'Discord', 'GitHub', 'Dev.to'],
    href: '/resources/communities',
    icon: <Users className="w-6 h-6" />,
  }
];

const additionalResources = [
  {
    title: 'Learning Guides',
    description: 'Comprehensive guides on learning styles and study techniques',
    href: '/resources/learning-guides',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Getting Help',
    description: 'How to ask questions effectively and find solutions online',
    href: '/resources/getting-help',
    icon: <HelpCircle className="w-6 h-6" />,
  },
  {
    title: 'Search Tips',
    description: 'Master the art of googling programming problems',
    href: '/resources/search-tips',
    icon: <Search className="w-6 h-6" />,
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Database className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Programming Resource Databases
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comprehensive, searchable databases of programming resources. Find languages, tools, books, 
          learning platforms, practice sites, and communities with detailed comparisons and direct links.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">12+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Languages</div>
        </div>
        <div className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">12+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Dev Tools</div>
        </div>
        <div className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">45+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Books</div>
        </div>
        <div className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">24+</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Platforms</div>
        </div>
      </div>

      {/* Main Resource Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Main Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceDatabases.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className="block p-6 bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 transition-all hover:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-gray-600 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Learning Guides & Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalResources.map((resource, index) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="block p-6 bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 transition-all hover:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{resource.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200/50 dark:border-gray-700 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Start Learning?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Choose a category above to explore curated resources, or dive into our detailed guides 
          for learning tips, getting help online, and mastering search techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources/platforms"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Platforms
          </Link>
          <Link
            href="/resources/getting-help"
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            Learn How to Get Help
          </Link>
        </div>
      </div>
    </div>
  );
}
