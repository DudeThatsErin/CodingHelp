import Link from 'next/link';
import { Code, Users, Star, Zap, Globe, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const languages = [
  {
    name: 'Python',
    description: 'Versatile, beginner-friendly language perfect for web development, data science, and AI',
    difficulty: 'Beginner',
    popularity: 'Very High',
    useCases: ['Web Development', 'Data Science', 'AI/ML', 'Automation'],
    href: '/languages/python',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🐍'
  },
  {
    name: 'JavaScript',
    description: 'The language of the web - essential for frontend and increasingly popular for backend',
    difficulty: 'Beginner',
    popularity: 'Very High',
    useCases: ['Web Development', 'Mobile Apps', 'Desktop Apps', 'Server-side'],
    href: '/languages/javascript',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🟨'
  },
  {
    name: 'Java',
    description: 'Enterprise-grade language known for its stability, security, and cross-platform compatibility',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    useCases: ['Enterprise Apps', 'Android Development', 'Web Backend', 'Desktop Apps'],
    href: '/languages/java',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '☕'
  },
  {
    name: 'C++',
    description: 'Powerful, high-performance language for system programming and game development',
    difficulty: 'Advanced',
    popularity: 'High',
    useCases: ['Game Development', 'System Programming', 'Embedded Systems', 'High-Performance Apps'],
    href: '/languages/cpp',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '⚡'
  },
  {
    name: 'C#',
    description: 'Microsoft\'s modern, object-oriented language for .NET development',
    difficulty: 'Intermediate',
    popularity: 'High',
    useCases: ['Windows Apps', 'Web Development', 'Game Development', 'Enterprise Software'],
    href: '/languages/csharp',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '#️⃣'
  },
  {
    name: 'Go',
    description: 'Google\'s fast, simple language designed for modern cloud and network programming',
    difficulty: 'Intermediate',
    popularity: 'Growing',
    useCases: ['Cloud Services', 'Microservices', 'Network Programming', 'DevOps Tools'],
    href: '/languages/go',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🐹'
  },
  {
    name: 'Rust',
    description: 'Systems programming language focused on safety, speed, and concurrency',
    difficulty: 'Advanced',
    popularity: 'Growing',
    useCases: ['System Programming', 'Web Assembly', 'Blockchain', 'Performance-Critical Apps'],
    href: '/languages/rust',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🦀'
  },
  {
    name: 'PHP',
    description: 'Server-side scripting language powering most of the web, including WordPress',
    difficulty: 'Beginner',
    popularity: 'Very High',
    useCases: ['Web Development', 'CMS', 'E-commerce', 'Server-side Scripting'],
    href: '/languages/php',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🐘'
  },
  {
    name: '.NET',
    description: 'Microsoft\'s cross-platform framework for building modern applications',
    difficulty: 'Intermediate',
    popularity: 'High',
    useCases: ['Web Apps', 'Desktop Apps', 'Cloud Services', 'Enterprise Solutions'],
    href: '/languages/dotnet',
    color: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    icon: '🔷'
  }
];

const languageStats = [
  { label: 'Most Popular', value: 'JavaScript', icon: <Star className="w-4 h-4" suppressHydrationWarning /> },
  { label: 'Best for Beginners', value: 'Python', icon: <Users className="w-4 h-4" suppressHydrationWarning /> },
  { label: 'Fastest Growing', value: 'Rust', icon: <Globe className="w-4 h-4" suppressHydrationWarning /> },
  { label: 'Highest Performance', value: 'C++', icon: <Zap className="w-4 h-4" suppressHydrationWarning /> }
];

export default function LanguagesPage() {
  return (
    <PageLayout
      title="Programming Languages"
      description="Explore different programming languages, their strengths, use cases, and learning paths. Choose the right language for your projects and career goals."
      icon={<Code className="w-8 h-8 text-blue-600" />}
    >

      {/* How to Choose */}
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          How to Choose Your First Programming Language
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Consider Your Goals:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>Web development → JavaScript</li>
              <li>Data science → Python</li>
              <li>Mobile apps → Java/Kotlin or Swift</li>
              <li>Game development → C# or C++</li>
              <li>System programming → Rust or C++</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Market Demand:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>JavaScript - Highest demand</li>
              <li>Python - Growing rapidly</li>
              <li>Java - Enterprise standard</li>
              <li>C# - Microsoft ecosystem</li>
              <li>Go - Cloud/DevOps focus</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Learning Curve:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>Python - Very beginner-friendly</li>
              <li>JavaScript - Good for beginners</li>
              <li>Java - Moderate complexity</li>
              <li>C# - Moderate complexity</li>
              <li>C++/Rust - More challenging</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Programming Resources */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Programming Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              All Programming Languages
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore our comprehensive database of programming languages with detailed comparisons, 
              use cases, difficulty levels, and more.
            </p>
            <Link
              href="/resources/programming-languages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <span>View Languages Database</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Development Tools & IDEs
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Discover essential development tools, IDEs, and software with features, 
              pricing, platform support, and download links.
            </p>
            <Link
              href="/resources/development-tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <span>View Tools Database</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Learning Resources */}
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          General Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Free Resources:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>freeCodeCamp - Interactive coding lessons</li>
              <li>Codecademy - Hands-on programming courses</li>
              <li>MDN Web Docs - Comprehensive web development</li>
              <li>W3Schools - Quick reference and tutorials</li>
              <li>YouTube channels and coding tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Practice Platforms:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>LeetCode - Algorithm and data structure problems</li>
              <li>HackerRank - Programming challenges</li>
              <li>Codewars - Coding kata and challenges</li>
              <li>Project Euler - Mathematical programming problems</li>
              <li>GitHub - Build and share real projects</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
