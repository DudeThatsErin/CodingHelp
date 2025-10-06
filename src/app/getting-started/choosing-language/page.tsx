import Link from 'next/link';
import { Code, Users, Star, TrendingUp, Zap, ArrowRight, Globe, Smartphone } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const languageComparisons = [
  {
    name: 'Python',
    difficulty: 'Beginner',
    timeToLearn: '2-3 months',
    jobMarket: 'Excellent',
    useCases: ['Web Development', 'Data Science', 'AI/ML', 'Automation'],
    pros: ['Easy to read', 'Versatile', 'Large community', 'Great for beginners'],
    cons: ['Slightly slower execution then other programming languages', 'Mobile development limitations'],
    icon: '🐍',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'JavaScript',
    difficulty: 'Beginner-Intermediate',
    timeToLearn: '3-4 months',
    jobMarket: 'Excellent',
    useCases: ['Web Development', 'Mobile Apps', 'Desktop Apps', 'Backend'],
    pros: ['Essential for web', 'Versatile', 'Huge ecosystem', 'High demand'],
    cons: ['Can be confusing', 'Rapid changes', 'Might face compatibility issues with older/lesser known browsers'],
    icon: '🟨',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Java',
    difficulty: 'Intermediate',
    timeToLearn: '4-6 months',
    jobMarket: 'Excellent',
    useCases: ['Enterprise Apps', 'Android Development', 'Web Backend', 'Desktop Apps'],
    pros: ['Platform independent', 'Strong typing', 'Enterprise standard', 'Stable'],
    cons: ['Verbose syntax', 'Slower development', 'Memory usage'],
    icon: '☕',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'C#',
    difficulty: 'Intermediate',
    timeToLearn: '4-5 months',
    jobMarket: 'Very Good',
    useCases: ['Windows Apps', 'Web Development', 'Games', 'Enterprise'],
    pros: ['Microsoft ecosystem', 'Strong typing', 'Good tooling', 'Versatile', 'options for easy ui in the form of winforms'],
    cons: ['Windows-centric', 'Learning curve', 'Microsoft dependency'],
    icon: '🔷',
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const careerPaths = [
  {
    title: 'Web Development',
    description: 'Build websites and web applications',
    languages: ['JavaScript', 'Python', 'PHP'],
    icon: <Globe className="w-6 h-6" />,
    timeframe: '6-12 months to job ready'
  },
  {
    title: 'Mobile Development',
    description: 'Create apps for iOS and Android',
    languages: ['Swift', 'Kotlin', 'React Native'],
    icon: <Smartphone className="w-6 h-6" />,
    timeframe: '8-15 months to job ready'
  },
  {
    title: 'Data Science',
    description: 'Analyze data and build ML models',
    languages: ['Python', 'R', 'SQL'],
    icon: <Zap className="w-6 h-6" />,
    timeframe: '12-18 months to job ready'
  },
  {
    title: 'Software Engineering',
    description: 'Build large-scale applications',
    languages: ['Java', 'C#', 'Go'],
    icon: <Code className="w-6 h-6" />,
    timeframe: '12-24 months to job ready'
  }
];

export default function ChoosingLanguagePage() {
  return (
    <PageLayout
      title="Choosing Your First Language"
      description="With hundreds of programming languages available, choosing your first one can feel overwhelming. This guide will help you make an informed decision based on your goals and interests."
      icon={<div className="text-4xl">🤔</div>}
      previousLink={{
        href: "/getting-started/what-is-programming",
        label: "Previous: What is Programming?"
      }}
      nextLink={{
        href: "/getting-started/setup",
        label: "Next: Setting Up Environment"
      }}
    >

      {/* Key Factors */}
      <div className="py-6">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 Key Factors to Consider
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Your Goals:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>What do you want to build?</li>
              <li>Are you looking for a career change?</li>
              <li>Do you want to freelance or work for companies?</li>
              <li>What industries interest you most?</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Practical Considerations:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>How much time can you dedicate to learning?</li>
              <li>Do you prefer easier or more challenging languages?</li>
              <li>What's the job market like in your area?</li>
              <li>Do you have any programming experience?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Language Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular First Languages
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {languageComparisons.map((lang, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${lang.color}`}>
              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lang.name}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    lang.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    lang.difficulty === 'Beginner-Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                  }`}>
                    {lang.difficulty}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {lang.jobMarket} Jobs
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Pros:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
                    {lang.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Cons:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
                    {lang.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lang.useCases.map((useCase, i) => (
                      <span key={i} className="px-2 py-1 bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⏱️ Time to Learn:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{lang.timeToLearn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-4">
          Choose Based on Your Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{path.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{path.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{path.description}</p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Recommended Languages:</h4>
                <div className="flex flex-wrap gap-1">
                  {path.languages.map((lang, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{path.timeframe}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Framework */}
      <div className="pb-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          Decision Framework
        </h3>
        <ol className="list-decimal list-inside flex flex-col gap-4 md:gap-6 text-blue-800 dark:text-blue-200">
          <li>
            <strong className="text-blue-900 dark:text-blue-100">If you're completely new to programming:</strong>
            <span className="text-sm ml-2">Start with <strong>Python</strong> - it's beginner-friendly and versatile</span>
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-100">If you want to build websites:</strong>
            <span className="text-sm ml-2">Learn <strong>JavaScript</strong> - it's essential for web development</span>
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-100">If you want enterprise/corporate jobs:</strong>
            <span className="text-sm ml-2">Consider <strong>Java</strong> or <strong>C#</strong> - widely used in business</span>
          </li>
          <li>
            <strong className="text-blue-900 dark:text-blue-100">If you're interested in data/AI:</strong>
            <span className="text-sm ml-2">Go with <strong>Python</strong> - dominant in data science and machine learning</span>
          </li>
        </ol>
      </div>

      {/* Common Mistakes */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          ⚠️ Common Mistakes to Avoid
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Don't:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Start with C++ or Assembly (too complex for beginners)</li>
              <li>Choose based on salary alone</li>
              <li>Switch languages every few weeks</li>
              <li>Worry about choosing the "perfect" language</li>
              <li>Get paralyzed by too many options</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Do:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Pick one and stick with it for at least 3-6 months</li>
              <li>Consider your long-term goals</li>
              <li>Look at job opportunities in your area</li>
              <li>Choose based on what you want to build</li>
              <li>Remember: you can always learn more languages later</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Recommendation */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Our Recommendation
        </h3>
        <div className="text-gray-700 dark:text-green-200">
          <p className="mb-3">
            <strong>For most beginners, we recommend starting with Python.</strong> Here's why:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2 mb-4">
            <li>Easiest syntax to learn and understand</li>
            <li>Versatile - you can build web apps, analyze data, create automation scripts</li>
            <li>Huge community and tons of learning resources</li>
            <li>High demand in the job market</li>
            <li>Great foundation for learning other languages later</li>
          </ul>
          <p className="text-sm">
            <strong>Exception:</strong> If you're 100% sure you want to do web development, 
            start with JavaScript since you'll need it anyway.
          </p>
        </div>
      </div>

    </PageLayout>
  );
}
