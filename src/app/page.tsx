import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Code, Zap, Star, Globe, Brain, Database, Settings, Lightbulb, HelpCircle, MessageCircle, Bot } from 'lucide-react';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const quickStartCards = [
  {
    title: 'Getting Started',
    description: 'New to programming? Start here to learn the basics and choose your first language.',
    href: '/getting-started',
    icon: <BookOpen className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Programming Languages',
    description: 'Explore different programming languages and find the one that suits your goals.',
    href: '/languages',
    icon: <Code className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Web Development',
    description: 'Learn to build websites and web applications with modern technologies.',
    href: '/web-development',
    icon: <Globe className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Mobile Development',
    description: 'Create mobile apps for iOS and Android using various frameworks.',
    href: '/mobile-development',
    icon: <Brain className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Data & Databases',
    description: 'Learn about data storage, databases, and data analysis techniques.',
    href: '/data-databases',
    icon: <Database className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'DevOps & Tools',
    description: 'Master the tools and practices that make development more efficient.',
    href: '/devops-tools',
    icon: <Settings className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Resources',
    description: 'Find learning platforms, books, practice problems, and communities.',
    href: '/resources',
    icon: <Lightbulb className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'FAQ',
    description: 'Get answers to frequently asked questions about programming.',
    href: '/faq',
    icon: <HelpCircle className="w-8 h-8 text-gray-700 dark:text-white" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20">
        <div className="flex justify-center mb-6">
          <div className="text-6xl md:text-8xl">📚</div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          CodingHelp Wiki
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Your comprehensive guide to programming. From beginner tutorials to advanced concepts, 
          we've got everything you need to become a better developer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Get Started
          </Link>
          <Link
            href="/languages"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
          >
            <Code className="w-5 h-5 mr-2" />
            Browse Languages
          </Link>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {quickStartCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`p-6 rounded-lg border transition-all hover:border-gray-600 ${card.color}`}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3 xl:flex-col xl:items-start xl:gap-2">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 md:p-8 text-center flex flex-col gap-4 md:gap-6 border border-gray-200/50 dark:border-gray-700">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Join Our Community
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-white max-w-2xl mx-auto">
          Connect with fellow developers, get help with your coding questions, and share your knowledge 
          with others in our supportive community.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Discord Server</span>
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>Visit r/CodingHelp</span>
          </a>
        </div>
      </div>

      {/* Recent Updates or Featured Content */}
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Getting Started Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Complete beginner's guide to programming with step-by-step instructions.
            </p>
            <Link
              href="/getting-started"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
          <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              💡 Best Practices
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Learn industry best practices and coding standards for clean, maintainable code.
            </p>
            <Link
              href="/resources"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Explore Resources →
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
