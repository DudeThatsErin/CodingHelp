'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, Search, BookOpen, Users, MessageCircle } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';

const faqData = [
  {
    id: '1',
    question: "What programming language should I learn first?",
    answer: "For complete beginners, we recommend starting with Python. It has simple, readable syntax and is used in many fields including web development, data science, and automation. JavaScript is also a great choice if you're interested in web development specifically."
  },
  {
    id: '2',
    question: "How long does it take to learn programming?",
    answer: "This varies greatly depending on your goals and how much time you dedicate. You can write simple programs within a few weeks, but becoming proficient typically takes 6-12 months of consistent practice. Mastering programming is a lifelong journey as technology constantly evolves."
  },
  {
    id: '3',
    question: "Do I need a computer science degree to become a programmer?",
    answer: "No, a computer science degree is not required to become a programmer. Many successful developers are self-taught or have completed coding bootcamps. What matters most is your ability to solve problems and write clean, functional code."
  },
  {
    id: '4',
    question: "What's the difference between programming and coding?",
    answer: "The terms are often used interchangeably, but programming typically refers to the entire process of creating software (planning, designing, coding, testing), while coding specifically refers to writing the actual code instructions."
  },
  {
    id: '5',
    question: "Can I learn programming for free?",
    answer: "Absolutely! There are many free resources available including online tutorials, documentation, YouTube videos, and platforms like freeCodeCamp, Codecademy (free tier), and Khan Academy. Our community also provides free help and support."
  },
  {
    id: '6',
    question: "What equipment do I need to start programming?",
    answer: "You just need a computer (Windows, Mac, or Linux) and an internet connection. Most programming tools and editors are free. You don't need an expensive or powerful computer to start learning - even basic laptops work fine for beginners."
  },
  {
    id: '7',
    question: "Is programming difficult to learn?",
    answer: "Programming can be challenging, especially at first, but it's definitely learnable with patience and practice. The key is to start with basics, practice regularly, and not get discouraged by initial difficulties. Everyone struggles at first - it's part of the learning process."
  },
  {
    id: '8',
    question: "Is programming difficult to learn?",
    answer: "Programming can be challenging, especially at first, but it's definitely learnable with patience and practice. The key is to start with basics, practice regularly, and not get discouraged by initial difficulties. Everyone struggles at first - it's part of the learning process."
  },
  {
    id: '9',
    question: "What career opportunities are available for programmers?",
    answer: "Programming opens doors to many careers: web developer, mobile app developer, software engineer, data scientist, game developer, cybersecurity specialist, DevOps engineer, and many more. The tech industry offers excellent salaries and job security."
  },
  {
    id: '10',
    question: "Should I specialize in one programming language or learn multiple?",
    answer: "Start by becoming proficient in one language first. Once you're comfortable with programming concepts, learning additional languages becomes much easier. Different languages are better for different purposes, so eventually learning multiple languages is beneficial."
  },
  {
    id: '11',
    question: "How do I stay motivated while learning programming?",
    answer: "Set small, achievable goals and celebrate your progress. Build projects that interest you, join communities like ours for support, and remember that every expert was once a beginner. Focus on the problem-solving aspect and the satisfaction of creating something functional."
  },
  {
    id: '12',
    question: "What's the best way to practice programming?",
    answer: "The best practice is building projects. Start with simple programs and gradually increase complexity. Practice coding challenges on platforms like LeetCode or HackerRank, contribute to open source projects, and try to code a little bit every day."
  },
  {
    id: '13',
    question: "How do I debug my code when it doesn't work?",
    answer: "Debugging is a crucial skill. Read error messages carefully, use print statements to check variable values, break your code into smaller parts, and use debugging tools in your IDE. Don't hesitate to ask for help in our community when you're stuck."
  }
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { id: string; question: string; answer: string }; isOpen: boolean; onToggle: () => void; }) {
  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm">
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={contentId}
        aria-describedby={contentId}
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">
          {faq.question}
        </span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0 transition-transform" aria-hidden="true" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0 transition-transform" aria-hidden="true" />
        )}
      </button>
      {isOpen && (
        <div
          id={contentId}
          className="px-6 pb-4 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-750"
          aria-labelledby={buttonId}
          role="region"
        >
          <div className="pt-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about programming, learning to code, and using this wiki effectively."
      icon={<HelpCircle className="w-8 h-8 text-blue-600" />}
    >
      <div className="flex flex-col gap-8 bg-gray-50/30 dark:bg-gray-900/30 rounded-xl p-6">
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Can't find the answer you're looking for? Our community is here to help! 
            Join our Discord server or visit our subreddit to get personalized help from experienced developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://discord.gg/geQEUBm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              💬 Ask on Discord
            </a>
            <a
              href="https://reddit.com/r/CodingHelp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              🤝 Post on Reddit
            </a>
          </div>
        </div>

        {/* Contributing */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-gray-300 dark:border-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Help Improve This FAQ
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Notice a question that should be added? Have a better answer for an existing question? 
            We welcome contributions from the community to make this resource better for everyone.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You can suggest improvements by reaching out to us on Discord or Reddit.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
