import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Zap, Globe, Smartphone } from 'lucide-react';

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
    color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
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
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
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
    color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
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
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
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
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/getting-started/what-is-programming"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: What is Programming?</span>
        </Link>
        <Link
          href="/getting-started/setup"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Setting Up Environment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Code className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Choosing Your First Language
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          With hundreds of programming languages available, choosing your first one can feel overwhelming. 
          This guide will help you make an informed decision based on your goals and interests.
        </p>
      </div>

      {/* Key Factors */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 Key Factors to Consider
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Your Goals:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• What do you want to build?</li>
              <li>• Are you looking for a career change?</li>
              <li>• Do you want to freelance or work for companies?</li>
              <li>• Are you interested in a specific industry?</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Practical Considerations:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <li>• How much time can you dedicate to learning?</li>
              <li>• Do you prefer easier or more challenging languages?</li>
              <li>• What's the job market like in your area?</li>
              <li>• Do you have any programming experience?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Language Comparison */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular First Languages
        </h2>
        <div className="space-y-6">
          {languageComparisons.map((lang, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${lang.color}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{lang.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lang.name}
                  </h3>
                </div>
                <div className="flex space-x-2">
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
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">✅ Pros:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {lang.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">❌ Cons:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                    {lang.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lang.useCases.map((useCase, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">⏱️ Time to Learn:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">{lang.timeToLearn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Choose Based on Your Career Goals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
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
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🤔 Decision Framework
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">If you're completely new to programming:</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Start with <strong>Python</strong> - it's beginner-friendly and versatile</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">If you want to build websites:</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Learn <strong>JavaScript</strong> - it's essential for web development</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">If you want enterprise/corporate jobs:</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Consider <strong>Java</strong> or <strong>C#</strong> - widely used in business</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">If you're interested in data/AI:</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Go with <strong>Python</strong> - dominant in data science and machine learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
          ⚠️ Common Mistakes to Avoid
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Don't:</h4>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
              <li>• Start with C++ or Assembly (too complex for beginners)</li>
              <li>• Choose based on salary alone</li>
              <li>• Switch languages every few weeks</li>
              <li>• Worry about choosing the "perfect" language</li>
              <li>• Get paralyzed by too many options</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Do:</h4>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
              <li>• Pick one and stick with it for at least 3-6 months</li>
              <li>• Consider your long-term goals</li>
              <li>• Look at job opportunities in your area</li>
              <li>• Choose based on what you want to build</li>
              <li>• Remember: you can always learn more languages later</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Recommendation */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🎯 Our Recommendation
        </h3>
        <div className="text-green-800 dark:text-green-200">
          <p className="mb-3">
            <strong>For most beginners, we recommend starting with Python.</strong> Here's why:
          </p>
          <ul className="text-sm space-y-1 mb-4">
            <li>• Easiest syntax to learn and understand</li>
            <li>• Versatile - you can build web apps, analyze data, create automation scripts</li>
            <li>• Huge community and tons of learning resources</li>
            <li>• High demand in the job market</li>
            <li>• Great foundation for learning other languages later</li>
          </ul>
          <p className="text-sm">
            <strong>Exception:</strong> If you're 100% sure you want to do web development, 
            start with JavaScript since you'll need it anyway.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/getting-started/what-is-programming"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: What is Programming?</span>
        </Link>
        <Link
          href="/getting-started/setup"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Setting Up Environment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
