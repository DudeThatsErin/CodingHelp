import Link from 'next/link';
import { Smartphone, Code, Users, Star, Globe, Zap, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const mobileFrameworks = [
  {
    name: 'React Native',
    description: 'Build native mobile apps using React and JavaScript',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    useCases: ['Cross-platform apps', 'Social media', 'E-commerce', 'Productivity'],
    href: '/mobile-development/react-native',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700',
    icon: '⚛️',
    companies: ['Facebook', 'Instagram', 'Uber', 'Discord']
  },
  {
    name: 'Expo & EAS',
    description: 'The fastest way to build React Native apps with cloud services',
    difficulty: 'Beginner',
    popularity: 'High',
    useCases: ['Rapid prototyping', 'Startups', 'MVPs', 'Over-the-air updates'],
    href: '/mobile-development/expo',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700',
    icon: '🚀',
    companies: ['Expo', 'Many startups', 'Indie developers']
  },
  {
    name: 'Flutter',
    description: 'Google\'s UI toolkit for building natively compiled applications',
    difficulty: 'Intermediate',
    popularity: 'High',
    useCases: ['Cross-platform apps', 'High-performance UI', 'Custom designs'],
    href: '/mobile-development/flutter',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700',
    icon: '🐦',
    companies: ['Google', 'Alibaba', 'BMW', 'eBay']
  },
  {
    name: 'Native iOS',
    description: 'Build iOS apps using Swift and Xcode for optimal performance',
    difficulty: 'Advanced',
    popularity: 'High',
    useCases: ['iOS-only apps', 'Performance-critical', 'Platform-specific features'],
    href: '/mobile-development/ios',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700',
    icon: '🍎',
    companies: ['Apple', 'Most iOS apps']
  },
  {
    name: 'Native Android',
    description: 'Build Android apps using Kotlin/Java and Android Studio',
    difficulty: 'Advanced',
    popularity: 'High',
    useCases: ['Android-only apps', 'Performance-critical', 'Platform-specific features'],
    href: '/mobile-development/android',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700',
    icon: '🤖',
    companies: ['Google', 'Most Android apps']
  }
];

const mobileFeatures = [
  {
    title: 'Cross-Platform Development',
    description: 'Write once, deploy to multiple platforms',
    icon: <Globe className="w-5 h-5" />,
    details: 'Reduce development time and costs by sharing code between iOS and Android'
  },
  {
    title: 'Native Performance',
    description: 'Access to device hardware and native APIs',
    icon: <Zap className="w-5 h-5" />,
    details: 'Leverage camera, GPS, sensors, and other device capabilities'
  },
  {
    title: 'Large User Base',
    description: 'Reach billions of mobile users worldwide',
    icon: <Users className="w-5 h-5" />,
    details: 'Mobile apps have massive reach and engagement potential'
  },
  {
    title: 'Rich Ecosystem',
    description: 'Extensive libraries and development tools',
    icon: <Code className="w-5 h-5" />,
    details: 'Mature development environments and third-party integrations'
  }
];

export default function MobileDevelopmentPage() {
  return (
    <PageLayout
      title="Mobile Development"
      description="Build native and cross-platform mobile applications for iOS and Android. Learn the tools, frameworks, and best practices for mobile app development."
      icon={<Smartphone className="w-8 h-8 text-blue-600" />}
    >
      {/* Header */}
      <div className="flex flex-col items-start p-4">
        <div className="flex items-center gap-[1rem]">
          <Smartphone className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white pb-2">
            Mobile Development
          </h1>
        </div>
        <p className="pt-4 text-lg text-gray-600 dark:text-gray-300">
          Mobile development encompasses creating applications for smartphones and tablets. 
          Choose from cross-platform frameworks like React Native and Flutter, or go native 
          with platform-specific tools for optimal performance and platform integration.
        </p>
      </div>


      {/* Why Mobile Development */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Why Mobile Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mobileFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Frameworks */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Choose Your Mobile Framework</h2>
        <div className="flex flex-col gap-4">
          {mobileFrameworks.map((framework, index) => (
            <Link key={index} href={framework.href} className="block bg-gray-50/50 dark:bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-lg">{framework.icon}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {framework.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 mb-2">
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
                  <p className="text-gray-600 dark:text-gray-300 mt-1 mb-3">
                    {framework.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {framework.useCases.map((useCase, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Used by:</h4>
                    <div className="flex flex-wrap gap-1">
                      {framework.companies.map((company, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Framework Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Framework</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Learning Curve</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-8 md:gap-12">React Native</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">JavaScript/TypeScript</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Good</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Moderate</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Web developers, rapid development</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-8 md:gap-12">Expo</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">JavaScript/TypeScript</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Good</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Easy</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Beginners, prototypes, MVPs</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-8 md:gap-12">Flutter</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Dart</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Moderate</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Custom UI, high performance</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-8 md:gap-12">Native iOS</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Swift</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Steep</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">iOS-only, platform features</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-8 md:gap-12">Native Android</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Kotlin/Java</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 flex flex-col gap-8 md:gap-12">Steep</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Android-only, platform features</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with Mobile Development
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your Approach</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Cross-platform for faster development, native for maximum performance</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Set Up Development Environment</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Install required tools, SDKs, and emulators/simulators</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Your First App</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with a simple "Hello World" app and gradually add features</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn Platform Guidelines</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Study iOS Human Interface Guidelines and Android Material Design</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
