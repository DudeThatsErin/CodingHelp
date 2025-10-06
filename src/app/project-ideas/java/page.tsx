import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Coffee, Smartphone, Server } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'Student Management System',
    description: 'CRUD application to manage student records with file storage',
    skills: ['OOP Concepts', 'File I/O', 'Collections', 'Exception Handling'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Banking System',
    description: 'Simple banking app with account management and transactions',
    skills: ['Classes & Objects', 'Inheritance', 'Encapsulation', 'Data Validation'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Library Management',
    description: 'Book checkout system demonstrating OOP principles',
    skills: ['Object Design', 'Relationships', 'Data Structures', 'Search Algorithms'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Calculator GUI',
    description: 'Swing-based calculator with advanced mathematical operations',
    skills: ['Swing/JavaFX', 'Event Handling', 'GUI Design', 'Mathematical Operations'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Console or GUI-based game with AI opponent',
    skills: ['Game Logic', 'Arrays', 'Algorithms', 'User Interface'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Address Book',
    description: 'Contact management system with search and sort functionality',
    skills: ['Data Management', 'Sorting', 'Searching', 'File Persistence'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Temperature Converter',
    description: 'Convert between different temperature scales with GUI',
    skills: ['GUI Programming', 'Mathematical Formulas', 'Input Validation', 'Event Handling'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Text Editor',
    description: 'Basic text editor with file operations and formatting',
    skills: ['File Operations', 'Text Processing', 'Menu Systems', 'Keyboard Shortcuts'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Number Guessing Game',
    description: 'Interactive guessing game with difficulty levels and statistics',
    skills: ['Random Numbers', 'Loops', 'Conditionals', 'User Input'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Quiz Application',
    description: 'Multiple-choice quiz with scoring and result analysis',
    skills: ['Data Structures', 'File Reading', 'Score Calculation', 'Result Display'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  }
];

const intermediateProjects = [
  {
    title: 'E-commerce Backend',
    description: 'REST API with Spring Boot, JPA, and database integration',
    skills: ['Spring Boot', 'JPA/Hibernate', 'REST APIs', 'Database Design'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Chat Application',
    description: 'Multi-client chat system using sockets and threading',
    skills: ['Socket Programming', 'Multithreading', 'Network Programming', 'Concurrency'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Employee Management System',
    description: 'Full CRUD application with database integration and reporting',
    skills: ['JDBC', 'SQL', 'Database Operations', 'Report Generation'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'File Compression Tool',
    description: 'Implement compression algorithms like Huffman coding',
    skills: ['Data Structures', 'Algorithms', 'File Processing', 'Binary Operations'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Web Crawler',
    description: 'Extract data from websites with multithreading and parsing',
    skills: ['HTTP Clients', 'HTML Parsing', 'Multithreading', 'Data Extraction'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Online Quiz System',
    description: 'Web-based quiz platform with user authentication and results',
    skills: ['Spring MVC', 'Thymeleaf', 'Security', 'Session Management'],
    difficulty: 'Medium',
    timeEstimate: '3 weeks'
  },
  {
    title: 'Inventory Management',
    description: 'Track products, suppliers, and stock levels with reporting',
    skills: ['Database Design', 'Business Logic', 'Reporting', 'Data Analytics'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Email Client',
    description: 'Send and receive emails with attachment support',
    skills: ['JavaMail API', 'SMTP/IMAP', 'File Handling', 'Email Protocols'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Task Scheduler',
    description: 'Schedule and execute tasks with cron-like functionality',
    skills: ['Scheduling', 'Concurrency', 'Task Management', 'Configuration'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Image Processing Tool',
    description: 'Apply filters, transformations, and effects to images',
    skills: ['Image Processing', 'Graphics2D', 'File Formats', 'Algorithm Implementation'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Microservices Architecture',
    description: 'Distributed system with Spring Cloud, service discovery, and API gateway',
    skills: ['Spring Cloud', 'Microservices', 'Service Discovery', 'API Gateway'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Real-time Trading System',
    description: 'High-frequency trading platform with low-latency requirements',
    skills: ['Concurrent Programming', 'Performance Optimization', 'Financial APIs', 'Real-time Processing'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  },
  {
    title: 'Content Management System',
    description: 'Full-featured CMS with security, workflow, and multi-tenancy',
    skills: ['Spring Security', 'Workflow Engines', 'Multi-tenancy', 'Content Management'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Distributed Cache System',
    description: 'Build a Redis-like distributed caching system',
    skills: ['Distributed Systems', 'Caching Strategies', 'Network Programming', 'Data Structures'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Android Application',
    description: 'Native Android app with backend integration and modern UI',
    skills: ['Android SDK', 'Mobile Development', 'REST Integration', 'Material Design'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Search Engine',
    description: 'Web search engine with indexing, ranking, and query processing',
    skills: ['Information Retrieval', 'Indexing', 'Search Algorithms', 'Text Processing'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Compiler/Interpreter',
    description: 'Build a compiler for a simple programming language',
    skills: ['Lexical Analysis', 'Parsing', 'Code Generation', 'Language Design'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Big Data Processing',
    description: 'Process large datasets using Apache Spark and Hadoop',
    skills: ['Apache Spark', 'Hadoop', 'Big Data', 'Distributed Computing'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Game Engine',
    description: '2D/3D game engine with physics, rendering, and scripting',
    skills: ['Game Development', 'Graphics Programming', 'Physics Simulation', 'Engine Architecture'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Enterprise Integration Platform',
    description: 'Message-driven integration platform with multiple protocols',
    skills: ['Enterprise Integration', 'Message Queues', 'Protocol Implementation', 'System Integration'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  }
];

export default function JavaProjectsPage() {
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
          <div className="text-4xl">☕</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master Java development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Java is a robust, object-oriented programming language perfect for enterprise applications, 
          Android development, and large-scale systems. These projects will help you master OOP principles, 
          frameworks like Spring, and enterprise development patterns.
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
            Learn Java fundamentals and OOP
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
            Enterprise Java development
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
            Professional Java systems
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
          Java Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://docs.oracle.com/en/java/" className="hover:underline">Oracle Java Docs</a></li>
              <li>• <a href="https://www.oracle.com/java/technologies/javase-tutorials.html" className="hover:underline">Java Tutorials</a></li>
              <li>• <a href="https://openjdk.java.net/" className="hover:underline">OpenJDK</a></li>
              <li>• <a href="https://spring.io/guides" className="hover:underline">Spring Guides</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Development Tools</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://www.jetbrains.com/idea/" className="hover:underline">IntelliJ IDEA</a></li>
              <li>• <a href="https://www.eclipse.org/" className="hover:underline">Eclipse IDE</a></li>
              <li>• <a href="https://maven.apache.org/" className="hover:underline">Apache Maven</a></li>
              <li>• <a href="https://gradle.org/" className="hover:underline">Gradle Build Tool</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Frameworks</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://spring.io/" className="hover:underline">Spring Framework</a></li>
              <li>• <a href="https://spring.io/projects/spring-boot" className="hover:underline">Spring Boot</a></li>
              <li>• <a href="https://hibernate.org/" className="hover:underline">Hibernate ORM</a></li>
              <li>• <a href="https://junit.org/junit5/" className="hover:underline">JUnit Testing</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Master Java?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install JDK and an IDE (IntelliJ/Eclipse)</li>
              <li>• Start with "Student Management System"</li>
              <li>• Focus on OOP principles first</li>
              <li>• Practice with small console applications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Career Paths:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Enterprise Development
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Android Development
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                Backend Systems
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                Big Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
