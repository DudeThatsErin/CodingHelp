import Link from 'next/link';
import { ArrowLeft, Zap, Code, Cloud, Database } from 'lucide-react';

const programmingLanguages = [
  {
    name: 'Python',
    popularity: 'Dominant',
    difficulty: 'Beginner',
    strengths: ['Extensive ML libraries', 'Easy syntax', 'Large community', 'Jupyter notebooks'],
    weaknesses: ['Slower execution', 'GIL limitations', 'Mobile development'],
    bestFor: ['Machine Learning', 'Data Science', 'Research', 'Prototyping'],
    keyLibraries: ['TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'numpy'],
    icon: '🐍'
  },
  {
    name: 'JavaScript/TypeScript',
    popularity: 'Growing',
    difficulty: 'Intermediate',
    strengths: ['Full-stack development', 'Real-time applications', 'Easy deployment', 'Large ecosystem'],
    weaknesses: ['Limited ML libraries', 'Performance constraints', 'Browser limitations'],
    bestFor: ['Web AI applications', 'Real-time AI', 'Chatbots', 'Browser ML'],
    keyLibraries: ['TensorFlow.js', 'Brain.js', 'ML5.js', 'OpenAI API'],
    icon: '🟨'
  },
  {
    name: 'R',
    popularity: 'Specialized',
    difficulty: 'Intermediate',
    strengths: ['Statistical analysis', 'Data visualization', 'Academic support', 'Specialized packages'],
    weaknesses: ['Steep learning curve', 'Limited production use', 'Memory intensive'],
    bestFor: ['Statistical ML', 'Data analysis', 'Research', 'Bioinformatics'],
    keyLibraries: ['caret', 'randomForest', 'ggplot2', 'dplyr'],
    icon: '📊'
  },
  {
    name: 'Java',
    popularity: 'Enterprise',
    difficulty: 'Intermediate',
    strengths: ['Enterprise integration', 'Performance', 'Scalability', 'Strong typing'],
    weaknesses: ['Verbose syntax', 'Slower development', 'Limited ML ecosystem'],
    bestFor: ['Enterprise ML', 'Big data processing', 'Production systems'],
    keyLibraries: ['Weka', 'DL4J', 'Spark MLlib', 'Mahout'],
    icon: '☕'
  }
];

const developmentTools = [
  {
    category: 'IDEs & Notebooks',
    tools: [
      { name: 'Jupyter Notebook', description: 'Interactive data science environment', difficulty: 'Beginner' },
      { name: 'Google Colab', description: 'Free cloud-based notebooks with GPU', difficulty: 'Beginner' },
      { name: 'VS Code', description: 'Versatile editor with AI extensions', difficulty: 'Beginner' },
      { name: 'PyCharm', description: 'Professional Python IDE', difficulty: 'Intermediate' }
    ]
  },
  {
    category: 'Cloud Platforms',
    tools: [
      { name: 'AWS SageMaker', description: 'Complete ML platform', difficulty: 'Intermediate' },
      { name: 'Google Cloud AI', description: 'AI/ML services and APIs', difficulty: 'Intermediate' },
      { name: 'Azure ML', description: 'Microsoft ML platform', difficulty: 'Intermediate' },
      { name: 'Hugging Face', description: 'Pre-trained models and datasets', difficulty: 'Beginner' }
    ]
  },
  {
    category: 'MLOps Tools',
    tools: [
      { name: 'MLflow', description: 'ML lifecycle management', difficulty: 'Intermediate' },
      { name: 'Weights & Biases', description: 'Experiment tracking', difficulty: 'Beginner' },
      { name: 'DVC', description: 'Data version control', difficulty: 'Intermediate' },
      { name: 'Kubeflow', description: 'ML workflows on Kubernetes', difficulty: 'Advanced' }
    ]
  }
];

const recommendations = [
  {
    scenario: 'Complete Beginner to AI',
    recommendation: 'Python',
    reasoning: 'Easiest to learn, best resources, largest community',
    startWith: ['Python basics', 'pandas for data', 'scikit-learn', 'Jupyter notebooks'],
    timeline: '2-3 months to first ML project'
  },
  {
    scenario: 'Web Developer',
    recommendation: 'JavaScript + Python',
    reasoning: 'Leverage existing skills, build full-stack AI apps',
    startWith: ['TensorFlow.js', 'OpenAI API', 'Node.js backends', 'Python for training'],
    timeline: '1-2 months to AI-powered web app'
  },
  {
    scenario: 'Enterprise Developer',
    recommendation: 'Python + Java',
    reasoning: 'Production-ready, enterprise integration',
    startWith: ['Python for ML', 'Java for production', 'Spark for big data', 'Docker deployment'],
    timeline: '3-4 months to enterprise ML system'
  },
  {
    scenario: 'Data Analyst',
    recommendation: 'Python + R',
    reasoning: 'Best of both worlds for analysis and ML',
    startWith: ['Python pandas', 'R for statistics', 'Visualization tools', 'Statistical ML'],
    timeline: '2-3 months to advanced analytics'
  }
];

export default function AILanguagesToolsPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/ai/build-ai"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Building Your Own AI</span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            AI Languages & Tools
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the best programming languages, frameworks, and tools for AI development. 
          Make informed decisions based on your goals and existing skills.
        </p>
      </div>

      {/* Language Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Programming Languages for AI
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {programmingLanguages.map((lang, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{lang.name}</h3>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                    {lang.popularity}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    lang.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {lang.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">✅ Strengths:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {lang.strengths.map((strength, i) => (
                      <li key={i}>• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">❌ Weaknesses:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {lang.weaknesses.map((weakness, i) => (
                      <li key={i}>• {weakness}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🎯 Best For:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {lang.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">🔧 Key Libraries:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lang.keyLibraries.map((lib, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Tools */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Development Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {developmentTools.map((category, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-col gap-3">
                {category.tools.map((tool, i) => (
                  <div key={i} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-700">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{tool.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        tool.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                        tool.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {tool.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Recommendations by Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                {rec.scenario}
              </h3>
              <div className="mb-3">
                <span className="text-sm font-semibold text-green-900 dark:text-green-100">Recommended: </span>
                <span className="text-sm px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-green-800 dark:text-green-200 font-medium">
                  {rec.recommendation}
                </span>
              </div>
              <p className="text-green-800 dark:text-green-200 text-sm mb-3">{rec.reasoning}</p>
              <div className="mb-3">
                <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-1">Start with:</h4>
                <ul className="text-green-800 dark:text-green-200 text-xs [&>li]:mb-1">
                  {rec.startWith.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-green-700 dark:text-green-300 text-xs">
                <strong>Timeline:</strong> {rec.timeline}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🚀 Quick Start Guide
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Choose Your Primary Language</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Python for most cases, JavaScript if you're a web developer</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Set Up Your Environment</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Install Python/Node.js, set up Jupyter/VS Code, create virtual environments</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Start with APIs</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Begin with OpenAI API or cloud AI services before building custom models</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100">Build and Deploy</h4>
              <p className="text-purple-800 dark:text-purple-200 text-sm">Create a simple project, deploy it, then iterate and improve</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/ai/build-ai"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Building Your Own AI</span>
        </Link>
        <Link
          href="/ai"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to AI Overview</span>
        </Link>
      </div>
    </div>
  );
}
