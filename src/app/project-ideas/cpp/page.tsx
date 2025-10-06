import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Cpu, Gamepad2, Zap as Lightning } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'Console Calculator',
    description: 'Advanced calculator with expression parsing and scientific functions',
    skills: ['Basic Syntax', 'Functions', 'Input/Output', 'Mathematical Operations'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Student Grade Manager',
    description: 'Store and calculate student grades with file persistence',
    skills: ['File I/O', 'Arrays/Vectors', 'Structures', 'Data Management'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Simple Text Editor',
    description: 'Basic text manipulation with file operations and search',
    skills: ['String Manipulation', 'File Operations', 'Search Algorithms', 'User Interface'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Number Base Converter',
    description: 'Convert between binary, decimal, hexadecimal, and octal',
    skills: ['Number Systems', 'Algorithms', 'Input Validation', 'Mathematical Logic'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Hangman Game',
    description: 'Word guessing game with ASCII art and difficulty levels',
    skills: ['Game Logic', 'Random Generation', 'String Processing', 'Control Structures'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Contact Manager',
    description: 'Store and search contacts with sorting functionality',
    skills: ['Data Structures', 'Sorting Algorithms', 'Search Functions', 'File Storage'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin with validation',
    skills: ['Functions', 'Input Validation', 'Mathematical Formulas', 'Error Handling'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Simple Banking System',
    description: 'Account management with deposits, withdrawals, and balance tracking',
    skills: ['Classes', 'Object-Oriented Design', 'Data Validation', 'File Persistence'],
    difficulty: 'Easy',
    timeEstimate: '4-5 days'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'Console-based game with AI opponent and win detection',
    skills: ['2D Arrays', 'Game Logic', 'AI Algorithms', 'Pattern Recognition'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable criteria',
    skills: ['Random Generation', 'String Manipulation', 'Security Concepts', 'User Preferences'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  }
];

const intermediateProjects = [
  {
    title: '2D Game Engine',
    description: 'Simple game engine using SDL or SFML with sprite rendering',
    skills: ['Graphics Programming', 'SDL/SFML', 'Game Architecture', 'Resource Management'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'File Compression Tool',
    description: 'Implement Huffman coding and other compression algorithms',
    skills: ['Data Structures', 'Algorithms', 'Binary Operations', 'File Processing'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Simple Database System',
    description: 'Relational database with B-trees and query processing',
    skills: ['Data Structures', 'File Systems', 'Indexing', 'Query Processing'],
    difficulty: 'Medium',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Network Chat Server',
    description: 'Multi-client chat system using sockets and threading',
    skills: ['Socket Programming', 'Multithreading', 'Network Protocols', 'Concurrency'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Image Processing Tool',
    description: 'Apply filters and transformations to images',
    skills: ['Image Processing', 'Algorithms', 'File Formats', 'Mathematical Operations'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Custom Memory Allocator',
    description: 'Implement custom memory management with different strategies',
    skills: ['Memory Management', 'Pointers', 'System Programming', 'Performance Optimization'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Expression Evaluator',
    description: 'Parse and evaluate mathematical expressions with variables',
    skills: ['Parsing', 'Abstract Syntax Trees', 'Recursion', 'Language Processing'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Multi-threaded Web Server',
    description: 'HTTP server with thread pool and static file serving',
    skills: ['Network Programming', 'HTTP Protocol', 'Multithreading', 'Server Architecture'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Data Structure Library',
    description: 'Implement common data structures with templates',
    skills: ['Templates', 'Data Structures', 'Generic Programming', 'STL Design'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Audio Processing Engine',
    description: 'Process audio files with effects and format conversion',
    skills: ['Audio Processing', 'Digital Signal Processing', 'File Formats', 'Algorithms'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  }
];

const advancedProjects = [
  {
    title: '3D Graphics Engine',
    description: 'OpenGL-based rendering engine with shaders and lighting',
    skills: ['OpenGL', '3D Mathematics', 'Shaders', 'Graphics Pipeline'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Operating System Kernel',
    description: 'Basic OS kernel with memory management and process scheduling',
    skills: ['System Programming', 'Assembly Language', 'Hardware Interface', 'OS Concepts'],
    difficulty: 'Hard',
    timeEstimate: '8-12 weeks'
  },
  {
    title: 'Compiler/Interpreter',
    description: 'Build a compiler for a custom programming language',
    skills: ['Lexical Analysis', 'Parsing', 'Code Generation', 'Language Design'],
    difficulty: 'Hard',
    timeEstimate: '6-10 weeks'
  },
  {
    title: 'High-Frequency Trading System',
    description: 'Low-latency trading platform with microsecond performance',
    skills: ['Performance Optimization', 'Concurrent Programming', 'Financial Systems', 'Real-time Processing'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Ray Tracer',
    description: 'Photorealistic rendering engine with advanced lighting',
    skills: ['Computer Graphics', 'Ray Tracing', 'Physics Simulation', 'Mathematical Modeling'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  },
  {
    title: 'Distributed Computing Framework',
    description: 'Multi-node distributed computing system with fault tolerance',
    skills: ['Distributed Systems', 'Network Programming', 'Fault Tolerance', 'Load Balancing'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Game Physics Engine',
    description: 'Physics simulation engine for games with collision detection',
    skills: ['Physics Simulation', 'Collision Detection', 'Mathematical Modeling', 'Performance Optimization'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Database Management System',
    description: 'Full-featured DBMS with ACID properties and SQL support',
    skills: ['Database Systems', 'Transaction Management', 'Query Optimization', 'Storage Management'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Machine Learning Framework',
    description: 'Neural network framework with GPU acceleration',
    skills: ['Machine Learning', 'CUDA Programming', 'Linear Algebra', 'Optimization'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Virtual Machine',
    description: 'Virtual machine with bytecode interpreter and JIT compilation',
    skills: ['Virtual Machines', 'Bytecode Interpretation', 'JIT Compilation', 'Runtime Systems'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  }
];

export default function CppProjectsPage() {
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
          <div className="text-4xl">🔥</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">C++ Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master systems programming</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          C++ is a powerful systems programming language perfect for performance-critical applications, 
          game development, and system software. These projects will help you master memory management, 
          templates, STL, and advanced C++ features.
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
            Learn C++ fundamentals
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
            Advanced C++ features
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
            Professional systems programming
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
          C++ Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://isocpp.org/" className="hover:underline">ISO C++ Foundation</a></li>
              <li>• <a href="https://en.cppreference.com/" className="hover:underline">C++ Reference</a></li>
              <li>• <a href="https://isocpp.github.io/CppCoreGuidelines/" className="hover:underline">Core Guidelines</a></li>
              <li>• <a href="https://gcc.gnu.org/" className="hover:underline">GCC Compiler</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Development Tools</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://visualstudio.microsoft.com/" className="hover:underline">Visual Studio</a></li>
              <li>• <a href="https://www.jetbrains.com/clion/" className="hover:underline">CLion IDE</a></li>
              <li>• <a href="https://cmake.org/" className="hover:underline">CMake Build System</a></li>
              <li>• <a href="https://www.gnu.org/software/gdb/" className="hover:underline">GDB Debugger</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Libraries</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://www.boost.org/" className="hover:underline">Boost Libraries</a></li>
              <li>• <a href="https://www.qt.io/" className="hover:underline">Qt Framework</a></li>
              <li>• <a href="https://www.libsdl.org/" className="hover:underline">SDL (Graphics)</a></li>
              <li>• <a href="https://www.opengl.org/" className="hover:underline">OpenGL</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Master C++?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install a C++ compiler (GCC, Clang, or MSVC)</li>
              <li>• Start with "Console Calculator" project</li>
              <li>• Focus on memory management early</li>
              <li>• Practice with pointers and references</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Specialization Areas:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Game Development
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Systems Programming
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                High Performance Computing
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                Embedded Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
