import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Shield, Cpu, Wrench } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'CLI Calculator',
    description: 'Command-line calculator with expression parsing and error handling',
    skills: ['Basic Syntax', 'Error Handling', 'Pattern Matching', 'CLI Arguments'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'File Organizer',
    description: 'Organize files by extension with safe file operations',
    skills: ['File I/O', 'Path Handling', 'Error Handling', 'Pattern Matching'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Word Counter',
    description: 'Count words, lines, and characters in text files',
    skills: ['File Reading', 'String Processing', 'Collections', 'Iterator Patterns'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Number Guessing Game',
    description: 'Interactive guessing game with input validation',
    skills: ['User Input', 'Random Numbers', 'Loops', 'Match Expressions'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Todo CLI Application',
    description: 'Command-line task manager with JSON persistence',
    skills: ['Serialization', 'JSON Handling', 'Command Parsing', 'Data Structures'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Temperature Converter',
    description: 'Convert between temperature scales with validation',
    skills: ['Functions', 'Input Validation', 'Mathematical Operations', 'Error Types'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Log Parser',
    description: 'Parse log files and extract specific information',
    skills: ['Regular Expressions', 'File Processing', 'String Manipulation', 'Error Handling'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable criteria',
    skills: ['Random Generation', 'String Building', 'CLI Design', 'Security Concepts'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple HTTP Client',
    description: 'Make HTTP requests and handle responses',
    skills: ['HTTP Clients', 'Async Programming', 'JSON Parsing', 'Error Handling'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Directory Tree Viewer',
    description: 'Display directory structure in tree format',
    skills: ['File System', 'Recursion', 'Tree Structures', 'CLI Output'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  }
];

const intermediateProjects = [
  {
    title: 'Web Server with Actix',
    description: 'HTTP server with routing, middleware, and database integration',
    skills: ['Actix Web', 'Async Programming', 'Database Integration', 'REST APIs'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Chat Server',
    description: 'Multi-client chat server using async networking',
    skills: ['Async Networking', 'WebSockets', 'Concurrent Programming', 'Message Broadcasting'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Database ORM',
    description: 'Simple ORM with query building and migrations',
    skills: ['Database Programming', 'SQL Generation', 'Macros', 'Type Safety'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Image Processing Tool',
    description: 'Apply filters and transformations to images',
    skills: ['Image Processing', 'Parallel Processing', 'Memory Management', 'Performance'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Key-Value Store',
    description: 'Persistent key-value database with indexing',
    skills: ['Storage Engines', 'Serialization', 'Indexing', 'File Formats'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Web Scraper',
    description: 'Concurrent web scraper with rate limiting',
    skills: ['HTTP Clients', 'HTML Parsing', 'Concurrency', 'Rate Limiting'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'System Monitor',
    description: 'Monitor system resources with real-time updates',
    skills: ['System Programming', 'Real-time Data', 'Cross-platform Code', 'Performance Monitoring'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Compression Tool',
    description: 'File compression using various algorithms',
    skills: ['Compression Algorithms', 'Binary Data', 'Performance Optimization', 'File Formats'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Network Proxy',
    description: 'HTTP/HTTPS proxy with filtering and logging',
    skills: ['Network Programming', 'Proxy Protocols', 'TLS Handling', 'Request Filtering'],
    difficulty: 'Medium',
    timeEstimate: '3 weeks'
  },
  {
    title: 'Game Engine Core',
    description: '2D game engine with entity-component system',
    skills: ['Game Programming', 'ECS Architecture', 'Graphics Programming', 'Performance'],
    difficulty: 'Medium',
    timeEstimate: '4-5 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Operating System Kernel',
    description: 'Minimal OS kernel with memory management and scheduling',
    skills: ['Systems Programming', 'Assembly Language', 'Memory Management', 'Hardware Interface'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Compiler Frontend',
    description: 'Lexer, parser, and AST generator for a programming language',
    skills: ['Compiler Design', 'Parsing', 'Language Design', 'Code Generation'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Distributed Database',
    description: 'Distributed key-value store with consensus and replication',
    skills: ['Distributed Systems', 'Consensus Algorithms', 'Replication', 'Network Programming'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'WebAssembly Runtime',
    description: 'WebAssembly virtual machine with JIT compilation',
    skills: ['Virtual Machines', 'JIT Compilation', 'WebAssembly', 'Performance Optimization'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Blockchain Implementation',
    description: 'Proof-of-work blockchain with smart contracts',
    skills: ['Blockchain', 'Cryptography', 'P2P Networks', 'Smart Contracts'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Graphics Renderer',
    description: 'Software-based 3D graphics renderer with shaders',
    skills: ['Computer Graphics', '3D Mathematics', 'Shader Programming', 'Performance'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Container Runtime',
    description: 'Docker-compatible container runtime with isolation',
    skills: ['Container Technology', 'Linux Namespaces', 'Security', 'System Programming'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Memory Allocator',
    description: 'Custom memory allocator with different strategies',
    skills: ['Memory Management', 'Performance Optimization', 'System Programming', 'Algorithms'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Network Stack',
    description: 'TCP/IP stack implementation from scratch',
    skills: ['Network Protocols', 'Systems Programming', 'Protocol Implementation', 'Performance'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Machine Learning Framework',
    description: 'Neural network framework with GPU acceleration',
    skills: ['Machine Learning', 'GPU Programming', 'Linear Algebra', 'Performance Optimization'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  }
];

export default function RustProjectsPage() {
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
          <div className="text-4xl">🦀</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rust Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master systems programming with safety</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Rust is a systems programming language focused on safety, speed, and concurrency. 
          Perfect for building reliable and efficient software without sacrificing performance. 
          These projects will help you master ownership, borrowing, and Rust's powerful type system.
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
            Learn Rust fundamentals
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
            Advanced Rust features
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
            Systems programming mastery
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
          Rust Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://www.rust-lang.org/" className="hover:underline">Rust Official Site</a></li>
              <li>• <a href="https://doc.rust-lang.org/book/" className="hover:underline">The Rust Book</a></li>
              <li>• <a href="https://doc.rust-lang.org/std/" className="hover:underline">Standard Library Docs</a></li>
              <li>• <a href="https://rustlings.cool/" className="hover:underline">Rustlings Exercises</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Crates</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://crates.io/crates/serde" className="hover:underline">Serde (Serialization)</a></li>
              <li>• <a href="https://crates.io/crates/tokio" className="hover:underline">Tokio (Async Runtime)</a></li>
              <li>• <a href="https://crates.io/crates/actix-web" className="hover:underline">Actix Web (Web Framework)</a></li>
              <li>• <a href="https://crates.io/crates/clap" className="hover:underline">Clap (CLI Parser)</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Development Tools</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://code.visualstudio.com/" className="hover:underline">VS Code with rust-analyzer</a></li>
              <li>• <a href="https://www.jetbrains.com/rust/" className="hover:underline">IntelliJ Rust</a></li>
              <li>• <a href="https://doc.rust-lang.org/cargo/" className="hover:underline">Cargo (Package Manager)</a></li>
              <li>• <a href="https://github.com/rust-lang/rustfmt" className="hover:underline">rustfmt (Code Formatter)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Rust?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install Rust from rustup.rs</li>
              <li>• Read "The Rust Book" chapters 1-4</li>
              <li>• Start with "Number Guessing Game"</li>
              <li>• Focus on ownership and borrowing concepts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Rust Strengths:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Systems Programming
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Web Backends
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                Game Development
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                WebAssembly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
