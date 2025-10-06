import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Brain, Database, Globe } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'Password Generator',
    description: 'Create secure passwords with customizable length and character sets',
    skills: ['Random Module', 'String Manipulation', 'User Input', 'File I/O'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Number Guessing Game',
    description: 'Interactive guessing game with hints and difficulty levels',
    skills: ['Loops', 'Conditionals', 'Random Numbers', 'User Interaction'],
    difficulty: 'Easy',
    timeEstimate: '1 day'
  },
  {
    title: 'Unit Converter',
    description: 'Convert between different units (temperature, length, weight, currency)',
    skills: ['Functions', 'Dictionaries', 'Mathematical Operations', 'Menu Systems'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Calculator',
    description: 'Command-line calculator with basic and advanced operations',
    skills: ['Functions', 'Error Handling', 'Math Operations', 'User Interface'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'File Organizer',
    description: 'Automatically sort files into folders by extension or date',
    skills: ['File System', 'OS Module', 'Path Manipulation', 'Automation'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Word Counter',
    description: 'Analyze text files for word frequency and reading statistics',
    skills: ['File Reading', 'String Processing', 'Collections', 'Data Analysis'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'To-Do List CLI',
    description: 'Command-line task manager with persistence',
    skills: ['JSON/CSV', 'CRUD Operations', 'Data Persistence', 'Command Line'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Simple Web Scraper',
    description: 'Extract data from websites using BeautifulSoup',
    skills: ['Requests Library', 'BeautifulSoup', 'HTML Parsing', 'Data Extraction'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes for text, URLs, and contact information',
    skills: ['QR Code Libraries', 'Image Processing', 'User Input', 'File Output'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Weather CLI Tool',
    description: 'Get weather information from command line using APIs',
    skills: ['API Requests', 'JSON Processing', 'Command Line Args', 'Error Handling'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  }
];

const intermediateProjects = [
  {
    title: 'Personal Budget Tracker',
    description: 'Track expenses with categories, charts, and budget alerts',
    skills: ['Pandas', 'Matplotlib', 'SQLite', 'Data Visualization'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Web Dashboard',
    description: 'Interactive dashboard using Flask/Django with real-time data',
    skills: ['Flask/Django', 'HTML/CSS', 'JavaScript', 'Database Integration'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Email Automation Tool',
    description: 'Send automated emails with templates and scheduling',
    skills: ['SMTP', 'Email Libraries', 'Scheduling', 'Template Engines'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Data Analysis Pipeline',
    description: 'Process and analyze CSV/Excel data with visualizations',
    skills: ['Pandas', 'NumPy', 'Matplotlib/Seaborn', 'Data Cleaning'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'REST API Server',
    description: 'Build a RESTful API with authentication and database',
    skills: ['FastAPI/Flask', 'Database ORM', 'Authentication', 'API Design'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Social Media Bot',
    description: 'Automate social media posting and engagement',
    skills: ['Social Media APIs', 'Automation', 'Scheduling', 'Content Management'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Image Processing Tool',
    description: 'Batch process images with filters, resizing, and watermarks',
    skills: ['PIL/Pillow', 'Image Processing', 'Batch Operations', 'GUI (Tkinter)'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Cryptocurrency Tracker',
    description: 'Track crypto prices with alerts and portfolio management',
    skills: ['API Integration', 'Real-time Data', 'Notifications', 'Data Storage'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Log File Analyzer',
    description: 'Parse and analyze server logs with pattern detection',
    skills: ['Regular Expressions', 'Log Processing', 'Pattern Matching', 'Reporting'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Task Scheduler',
    description: 'Advanced task scheduling system with dependencies',
    skills: ['Threading', 'Scheduling', 'Task Management', 'Concurrency'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Machine Learning Model',
    description: 'Build predictive models with scikit-learn and data preprocessing',
    skills: ['Scikit-learn', 'Data Preprocessing', 'Model Training', 'Evaluation Metrics'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Web Application Framework',
    description: 'Full-stack web application with user authentication and real-time features',
    skills: ['Django/Flask', 'WebSockets', 'Database Design', 'Frontend Integration'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Distributed Task Queue',
    description: 'Build a distributed system for processing background tasks',
    skills: ['Celery', 'Redis/RabbitMQ', 'Distributed Systems', 'Task Management'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Natural Language Processor',
    description: 'Text analysis tool with sentiment analysis and entity recognition',
    skills: ['NLTK/spaCy', 'NLP Techniques', 'Text Processing', 'Machine Learning'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Real-time Data Pipeline',
    description: 'Stream processing system for real-time data analysis',
    skills: ['Apache Kafka', 'Stream Processing', 'Real-time Analytics', 'Data Engineering'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Computer Vision System',
    description: 'Image recognition and object detection using deep learning',
    skills: ['OpenCV', 'TensorFlow/PyTorch', 'Deep Learning', 'Image Processing'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  },
  {
    title: 'Trading Algorithm',
    description: 'Algorithmic trading system with backtesting and risk management',
    skills: ['Financial APIs', 'Algorithmic Trading', 'Backtesting', 'Risk Management'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Search Engine',
    description: 'Build a web search engine with indexing and ranking',
    skills: ['Information Retrieval', 'Indexing', 'Search Algorithms', 'Web Crawling'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  },
  {
    title: 'Blockchain Implementation',
    description: 'Create a simple blockchain with proof-of-work consensus',
    skills: ['Cryptography', 'Blockchain Concepts', 'Networking', 'Consensus Algorithms'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent chatbot with natural language understanding',
    skills: ['NLP', 'Machine Learning', 'Conversation AI', 'Intent Recognition'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  }
];

export default function PythonProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center space-x-2">
        <Link
          href="/project-ideas"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Project Ideas</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐍</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Python Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master Python development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Python is a versatile, beginner-friendly language perfect for web development, data science, 
          automation, and machine learning. These projects will help you master Python's syntax, 
          libraries, and real-world applications.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">10</div>
          <div className="text-sm text-green-700 dark:text-green-300">Beginner Projects</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">10</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Intermediate Projects</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">10</div>
          <div className="text-sm text-red-700 dark:text-red-300">Advanced Projects</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Total Projects</div>
        </div>
      </div>

      {/* Beginner Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Beginner Projects
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">
            Perfect for Python beginners
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Intermediate Projects
          </h2>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
            Advanced Python applications
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intermediateProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Advanced Projects
          </h2>
          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium">
            Professional Python development
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Python Learning Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://docs.python.org/3/" className="hover:underline">Python Documentation</a></li>
              <li>• <a href="https://www.python.org/dev/peps/pep-0008/" className="hover:underline">PEP 8 Style Guide</a></li>
              <li>• <a href="https://pypi.org/" className="hover:underline">Python Package Index</a></li>
              <li>• <a href="https://realpython.com/" className="hover:underline">Real Python</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Libraries</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://pandas.pydata.org/" className="hover:underline">Pandas (Data Analysis)</a></li>
              <li>• <a href="https://numpy.org/" className="hover:underline">NumPy (Numerical Computing)</a></li>
              <li>• <a href="https://matplotlib.org/" className="hover:underline">Matplotlib (Plotting)</a></li>
              <li>• <a href="https://requests.readthedocs.io/" className="hover:underline">Requests (HTTP)</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Frameworks</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://www.djangoproject.com/" className="hover:underline">Django (Web Framework)</a></li>
              <li>• <a href="https://flask.palletsprojects.com/" className="hover:underline">Flask (Micro Framework)</a></li>
              <li>• <a href="https://fastapi.tiangolo.com/" className="hover:underline">FastAPI (Modern API)</a></li>
              <li>• <a href="https://www.tensorflow.org/" className="hover:underline">TensorFlow (ML)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Start Your Python Journey?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install Python from python.org</li>
              <li>• Start with "Password Generator" project</li>
              <li>• Learn Python fundamentals first</li>
              <li>• Practice with small scripts daily</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Specialization Paths:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Web Development
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Data Science
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                Machine Learning
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
