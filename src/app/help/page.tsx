import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { MessageCircle, Mail, Github, Book, HelpCircle, Users, Zap, Search } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

export default function HelpSupportPage() {
  const supportStats = [
    { label: 'Community Members', value: '10,000+' },
    { label: 'Questions Answered', value: '50,000+' },
    { label: 'Response Time', value: '< 2 hours' },
    { label: 'Success Rate', value: '95%' }
  ];

  const supportChannels = [
    {
      title: 'Discord Community',
      description: 'Join our active Discord server for real-time help and discussions with fellow developers.',
      icon: <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />,
      link: 'https://discord.gg/geQEUBm',
      color: 'blue'
    },
    {
      title: 'Reddit Community',
      description: 'Visit our subreddit for in-depth discussions, code reviews, and community support.',
      icon: <FontAwesomeIcon icon={faReddit} className="w-6 h-6" />,
      link: 'https://reddit.com/r/CodingHelp',
      color: 'orange'
    },
    {
      title: 'GitHub Issues',
      description: 'Report bugs, request features, or contribute to the CodingHelp Wiki development.',
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/CodingHelp',
      color: 'gray'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive documentation and guides for detailed information.',
      icon: <Book className="w-6 h-6" />,
      link: '/getting-started',
      color: 'green'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with programming?',
      answer: 'Check out our Getting Started guide which covers the basics of programming, choosing your first language, and setting up your development environment.'
    },
    {
      question: 'What programming language should I learn first?',
      answer: 'For beginners, we recommend starting with Python or JavaScript. Python is great for learning programming concepts, while JavaScript is essential for web development.'
    },
    {
      question: 'How can I get help with my code?',
      answer: 'Join our Discord server or Reddit community where experienced developers are ready to help. Make sure to format your code properly and provide context about your problem.'
    },
    {
      question: 'Is CodingHelp Wiki free to use?',
      answer: 'Yes! CodingHelp Wiki is completely free and open source. All our content is community-driven and available to everyone.'
    },
    {
      question: 'How can I contribute to the wiki?',
      answer: 'You can contribute by submitting issues or pull requests on our GitHub repository, participating in community discussions, or sharing your knowledge in our Discord server.'
    },
    {
      question: 'What topics does CodingHelp Wiki cover?',
      answer: 'We cover a wide range of programming topics including languages, frameworks, web development, mobile development, databases, DevOps tools, and more.'
    }
  ];

  const helpTips = [
    {
      title: 'Use Search',
      description: 'Use the search function to quickly find specific topics',
      icon: <Search className="w-5 h-5" />
    },
    {
      title: 'Join Discord',
      description: 'Join our Discord for real-time help and community support',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      title: 'Check FAQ',
      description: 'Check the FAQ section before asking questions',
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      title: 'Provide Examples',
      description: 'Provide code examples when asking for help',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Be Specific',
      description: 'Be specific about error messages and expected behavior',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Browse Related',
      description: 'Browse related topics for additional context',
      icon: <Book className="w-5 h-5" />
    }
  ];

  return (
    <PageLayout
      title="Help & Support"
      description="Get help, find answers, and connect with the CodingHelp community"
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <HelpCircle className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions, get support from our community, and access resources to help you on your coding journey.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats stats={supportStats} />

        {/* Support Channels */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportChannels.map((channel, index) => (
              <InfoCard
                key={index}
                title={channel.title}
                description={channel.description}
                icon={channel.icon}
                link={channel.link}
                color={channel.color as any}
                external={channel.link.startsWith('http')}
              />
            ))}
          </div>
        </div>

        {/* Quick Help Tips */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Getting Help Tips
          </h2>
          <FeatureList
            title=""
            features={helpTips}
          />
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our community is here to help! Join thousands of developers who are learning, building, and growing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/geQEUBm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </a>
            <a
              href="https://reddit.com/r/CodingHelp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faReddit} className="w-5 h-5 mr-2" />
              Visit Subreddit
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
