import Link from 'next/link';
import { BookOpen, Code, Users, Lightbulb, Target, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { GettingStartedSection } from '@/components/GettingStartedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

const gettingStartedSteps = [
  {
    title: 'What is Programming?',
    description: 'Understand the fundamentals of programming and how computers work.',
    href: '/getting-started/what-is-programming',
    completed: false
  },
  {
    title: 'Choosing Your First Language',
    description: 'Learn about different programming languages and which one to start with.',
    href: '/getting-started/choosing-language',
    completed: false
  },
  {
    title: 'Setting Up Your Environment',
    description: 'Install the necessary tools and set up your development environment.',
    href: '/getting-started/setup',
    completed: false
  },
  {
    title: 'Your First Program',
    description: 'Write and run your very first program - the traditional "Hello, World!"',
    href: '/getting-started/first-program',
    completed: false
  }
];

export default function GettingStartedPage() {
  return (
    <PageLayout
      title="Getting Started"
      description="Welcome to your programming journey! This section will guide you through the basics of programming, from understanding what programming is to writing your first program."
      icon={<BookOpen className="w-8 h-8 text-blue-600" />}
    >

      {/* Learning Path */}
      <div className="flex flex-col gap-6 md:gap-8 py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Your Learning Path
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {gettingStartedSteps.map((step, index) => (
            <Link
              key={step.href}
              href={step.href}
              className="block p-6 bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700 transition-all hover:border-gray-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          Tips for Success
        </h3>
        <ul className="flex flex-col gap-2 text-blue-800 dark:text-blue-200">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Take your time - programming is a skill that develops gradually</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Practice regularly, even if it's just 15-30 minutes a day</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Don't be afraid to make mistakes - they're part of learning</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Join our community for help and support when you get stuck</span>
          </li>
        </ul>
      </div>

      {/* Community Support */}
      <div className="my-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Need Help?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Learning to program can be challenging, but you're not alone! Our community is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 mr-2" />
            Ask on Discord
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faReddit} className="w-4 h-4 mr-2" />
            Post on Reddit
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
