import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Brain, Layers, Rocket } from 'lucide-react';

const aiProjectTypes = [
  {
    type: 'API Integration Projects',
    difficulty: 'Beginner',
    timeframe: '1-2 weeks',
    description: 'Use existing AI APIs to add intelligence to your applications',
    examples: ['Chatbot with OpenAI API', 'Image recognition app', 'Text sentiment analyzer', 'Language translator'],
    skills: ['API integration', 'Authentication', 'Error handling', 'Rate limiting'],
    technologies: ['OpenAI API', 'Google Cloud AI', 'AWS AI Services', 'Hugging Face API']
  },
  {
    type: 'Machine Learning Applications',
    difficulty: 'Intermediate',
    timeframe: '1-3 months',
    description: 'Build custom ML models for specific use cases',
    examples: ['Recommendation system', 'Fraud detection', 'Price prediction', 'Customer segmentation'],
    skills: ['Data preprocessing', 'Model training', 'Feature engineering', 'Model evaluation'],
    technologies: ['scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn']
  },
  {
    type: 'Deep Learning Projects',
    difficulty: 'Advanced',
    timeframe: '3-6 months',
    description: 'Create neural networks for complex pattern recognition',
    examples: ['Image classification', 'Natural language processing', 'Time series forecasting', 'Generative models'],
    skills: ['Neural network design', 'Gradient descent', 'Regularization', 'Transfer learning'],
    technologies: ['TensorFlow', 'PyTorch', 'Keras', 'CUDA', 'GPU computing']
  },
  {
    type: 'MLOps & Production',
    difficulty: 'Advanced',
    timeframe: '2-4 months',
    description: 'Deploy and maintain ML models in production environments',
    examples: ['Model serving API', 'Automated retraining', 'A/B testing framework', 'Model monitoring'],
    skills: ['Containerization', 'CI/CD for ML', 'Model versioning', 'Monitoring & alerting'],
    technologies: ['Docker', 'Kubernetes', 'MLflow', 'Kubeflow', 'AWS SageMaker']
  }
];

const learningPath = [
  {
    phase: 'Foundation (2-4 weeks)',
    focus: 'Understanding AI/ML concepts and Python basics',
    topics: [
      'Python programming fundamentals',
      'Statistics and probability basics',
      'Linear algebra essentials',
      'Introduction to machine learning concepts'
    ],
    projects: ['Simple data analysis with pandas', 'Basic statistical calculations', 'Data visualization'],
    resources: ['Python for Data Analysis book', 'Khan Academy Statistics', 'Coursera ML Course (Week 1-2)']
  },
  {
    phase: 'API Integration (2-3 weeks)',
    focus: 'Using existing AI services in applications',
    topics: [
      'REST API fundamentals',
      'Authentication and API keys',
      'Rate limiting and error handling',
      'Popular AI APIs (OpenAI, Google, AWS)'
    ],
    projects: ['Chatbot web app', 'Image classification tool', 'Text summarization service'],
    resources: ['OpenAI API documentation', 'Google Cloud AI tutorials', 'Postman for API testing']
  },
  {
    phase: 'Machine Learning (6-8 weeks)',
    focus: 'Building custom ML models',
    topics: [
      'Supervised vs unsupervised learning',
      'Data preprocessing and cleaning',
      'Feature selection and engineering',
      'Model training and evaluation'
    ],
    projects: ['House price predictor', 'Customer churn analysis', 'Recommendation engine'],
    resources: ['scikit-learn documentation', 'Hands-On Machine Learning book', 'Kaggle competitions']
  },
  {
    phase: 'Deep Learning (8-12 weeks)',
    focus: 'Neural networks and advanced techniques',
    topics: [
      'Neural network fundamentals',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs)',
      'Transfer learning and fine-tuning'
    ],
    projects: ['Image classifier', 'Text sentiment analyzer', 'Time series predictor'],
    resources: ['Deep Learning book (Goodfellow)', 'Fast.ai course', 'TensorFlow tutorials']
  }
];

const practicalProjects = [
  {
    title: 'Smart Code Review Assistant',
    difficulty: 'Intermediate',
    description: 'Build a tool that analyzes code quality and suggests improvements',
    technologies: ['Python', 'OpenAI API', 'Git', 'Flask/FastAPI'],
    features: [
      'Code quality analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Documentation generation'
    ],
    learningOutcomes: ['API integration', 'Code analysis', 'Web development', 'DevOps integration']
  },
  {
    title: 'Intelligent Task Scheduler',
    difficulty: 'Intermediate',
    description: 'Create an AI-powered project management tool',
    technologies: ['Python', 'scikit-learn', 'React', 'PostgreSQL'],
    features: [
      'Task priority prediction',
      'Deadline estimation',
      'Resource allocation optimization',
      'Progress tracking and insights'
    ],
    learningOutcomes: ['Machine learning', 'Full-stack development', 'Data modeling', 'User experience']
  },
  {
    title: 'Personal Learning Assistant',
    difficulty: 'Advanced',
    description: 'Build an AI tutor that adapts to individual learning styles',
    technologies: ['Python', 'TensorFlow', 'NLP libraries', 'React Native'],
    features: [
      'Personalized learning paths',
      'Progress assessment',
      'Content recommendation',
      'Interactive Q&A system'
    ],
    learningOutcomes: ['Deep learning', 'NLP', 'Mobile development', 'Educational technology']
  }
];

const toolsAndFrameworks = [
  {
    category: 'Python ML Ecosystem',
    tools: [
      { name: 'scikit-learn', use: 'General machine learning algorithms', difficulty: 'Beginner' },
      { name: 'pandas', use: 'Data manipulation and analysis', difficulty: 'Beginner' },
      { name: 'numpy', use: 'Numerical computing', difficulty: 'Beginner' },
      { name: 'matplotlib/seaborn', use: 'Data visualization', difficulty: 'Beginner' }
    ]
  },
  {
    category: 'Deep Learning Frameworks',
    tools: [
      { name: 'TensorFlow', use: 'Production-ready deep learning', difficulty: 'Intermediate' },
      { name: 'PyTorch', use: 'Research-focused deep learning', difficulty: 'Intermediate' },
      { name: 'Keras', use: 'High-level neural network API', difficulty: 'Beginner' },
      { name: 'Hugging Face', use: 'Pre-trained NLP models', difficulty: 'Intermediate' }
    ]
  },
  {
    category: 'Cloud AI Services',
    tools: [
      { name: 'OpenAI API', use: 'GPT models and AI services', difficulty: 'Beginner' },
      { name: 'Google Cloud AI', use: 'Vision, NLP, and ML services', difficulty: 'Intermediate' },
      { name: 'AWS AI/ML', use: 'Comprehensive AI platform', difficulty: 'Intermediate' },
      { name: 'Azure Cognitive Services', use: 'Microsoft AI services', difficulty: 'Intermediate' }
    ]
  },
  {
    category: 'MLOps Tools',
    tools: [
      { name: 'MLflow', use: 'ML lifecycle management', difficulty: 'Intermediate' },
      { name: 'Docker', use: 'Containerization', difficulty: 'Intermediate' },
      { name: 'Kubernetes', use: 'Container orchestration', difficulty: 'Advanced' },
      { name: 'Weights & Biases', use: 'Experiment tracking', difficulty: 'Intermediate' }
    ]
  }
];

export default function BuildAIPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/ai/prompting"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Prompt Engineering</span>
        </Link>
        <Link
          href="/ai/languages-tools"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: AI Languages & Tools</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Building Your Own AI
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn to create AI applications and machine learning models. From simple API integrations 
          to custom neural networks, discover how to build intelligent systems.
        </p>
      </div>

      {/* Getting Started */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🚀 Where to Start as a Mid-Level Developer
        </h3>
        <div className="flex flex-col gap-4 md:gap-6 text-blue-800 dark:text-blue-200">
          <p>
            As a mid-level programmer, you have a significant advantage in AI development. You understand 
            software architecture, debugging, and production concerns - skills that many AI tutorials skip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Your Strengths:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Software engineering best practices</li>
                <li>• API design and integration</li>
                <li>• Testing and debugging skills</li>
                <li>• Understanding of system architecture</li>
                <li>• Production deployment experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Focus Areas:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Start with API integrations (leverage existing AI)</li>
                <li>• Learn data manipulation and analysis</li>
                <li>• Understand ML model lifecycle</li>
                <li>• Apply your deployment skills to ML models</li>
                <li>• Build production-ready AI applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Types */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Types of AI Projects
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {aiProjectTypes.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.type}
                </h3>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {project.difficulty}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {project.timeframe}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Examples:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {project.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Skills:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                    {project.skills.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          AI Development Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {learningPath.map((phase, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {phase.phase}
                </h3>
              </div>
              
              <p className="text-blue-800 dark:text-blue-200 mb-4">{phase.focus}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Topics to Learn:</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                    {phase.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Practice Projects:</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                    {phase.projects.map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Recommended Resources:</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                    {phase.resources.map((resource, i) => (
                      <li key={i}>• {resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Projects */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Real-World Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {practicalProjects.map((project, index) => (
            <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">
                  {project.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  project.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                  'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                }`}>
                  {project.difficulty}
                </span>
              </div>
              
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Key Features:</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Learning Outcomes:</h4>
                  <ul className="text-blue-800 dark:text-blue-200 text-xs [&>li]:mb-1">
                    {project.learningOutcomes.map((outcome, i) => (
                      <li key={i}>• {outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools and Frameworks */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Tools and Frameworks
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {toolsAndFrameworks.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.tools.map((tool, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{tool.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">{tool.use}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      tool.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                      tool.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {tool.difficulty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started Guide */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🎯 Your First AI Project: Step by Step
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Choose a Simple API Integration</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Start with OpenAI API or Google Cloud Vision to build a basic chatbot or image analyzer</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Apply Your Web Development Skills</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Build a proper web interface using your existing frontend/backend knowledge</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Focus on Production Quality</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Add error handling, rate limiting, logging, and testing - things many AI tutorials skip</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Deploy and Iterate</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Use your deployment experience to get the project live, then gather feedback and improve</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/ai/prompting"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Prompt Engineering</span>
        </Link>
        <Link
          href="/ai/languages-tools"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: AI Languages & Tools</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      </div>
    </div>
  );
}
