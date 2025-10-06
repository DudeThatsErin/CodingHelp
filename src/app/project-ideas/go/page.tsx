import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Cloud, Server, Globe } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'CLI Todo Application',
    description: 'Command-line task manager with JSON persistence',
    skills: ['CLI Development', 'JSON Handling', 'File I/O', 'Command Parsing'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'URL Shortener',
    description: 'Simple URL shortening service with basic web interface',
    skills: ['HTTP Server', 'URL Handling', 'Basic Web Development', 'Data Storage'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'File Server',
    description: 'HTTP file server with directory listing and upload',
    skills: ['HTTP Handlers', 'File Operations', 'Web Server', 'Request Handling'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Weather CLI Tool',
    description: 'Command-line weather app using external APIs',
    skills: ['HTTP Clients', 'JSON Parsing', 'API Integration', 'CLI Design'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Log File Analyzer',
    description: 'Parse and analyze log files with statistics',
    skills: ['File Processing', 'Regular Expressions', 'Data Analysis', 'Text Processing'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable options',
    skills: ['Random Generation', 'String Manipulation', 'CLI Arguments', 'Security'],
    difficulty: 'Easy',
    timeEstimate: '1-2 days'
  },
  {
    title: 'Simple Web Scraper',
    description: 'Extract data from websites with concurrent processing',
    skills: ['HTTP Requests', 'HTML Parsing', 'Concurrency', 'Data Extraction'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Port Scanner',
    description: 'Network port scanner with concurrent connections',
    skills: ['Network Programming', 'Goroutines', 'TCP Connections', 'Concurrency'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'System Monitor',
    description: 'Monitor system resources and display statistics',
    skills: ['System Programming', 'Resource Monitoring', 'Data Formatting', 'OS Interface'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Simple Chat Server',
    description: 'Basic TCP chat server with multiple clients',
    skills: ['TCP Server', 'Goroutines', 'Channels', 'Network Communication'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  }
];

const intermediateProjects = [
  {
    title: 'REST API with Gin',
    description: 'RESTful API with authentication, middleware, and database',
    skills: ['Gin Framework', 'REST APIs', 'Database Integration', 'Authentication'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Microservice Architecture',
    description: 'Multiple microservices with service discovery and communication',
    skills: ['Microservices', 'Service Discovery', 'gRPC', 'Distributed Systems'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat with rooms and user management',
    skills: ['WebSockets', 'Real-time Communication', 'Gorilla WebSocket', 'Session Management'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Load Balancer',
    description: 'HTTP load balancer with health checks and multiple algorithms',
    skills: ['Load Balancing', 'Health Checks', 'Reverse Proxy', 'Network Programming'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Container Orchestrator',
    description: 'Simple container management system with Docker integration',
    skills: ['Docker API', 'Container Management', 'System Programming', 'Process Management'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Distributed Cache',
    description: 'Redis-like distributed caching system with clustering',
    skills: ['Distributed Systems', 'Caching Strategies', 'Network Protocols', 'Data Structures'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'API Gateway',
    description: 'API gateway with rate limiting, authentication, and routing',
    skills: ['API Gateway', 'Rate Limiting', 'Request Routing', 'Middleware'],
    difficulty: 'Medium',
    timeEstimate: '3 weeks'
  },
  {
    title: 'Message Queue System',
    description: 'Pub/sub message queue with persistence and delivery guarantees',
    skills: ['Message Queues', 'Pub/Sub Pattern', 'Data Persistence', 'Reliability'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Monitoring System',
    description: 'Metrics collection and alerting system with dashboard',
    skills: ['Metrics Collection', 'Time Series Data', 'Alerting', 'Data Visualization'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'File Synchronization Tool',
    description: 'Sync files across multiple machines with conflict resolution',
    skills: ['File Synchronization', 'Conflict Resolution', 'Network Programming', 'File Systems'],
    difficulty: 'Medium',
    timeEstimate: '3-4 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Kubernetes Operator',
    description: 'Custom Kubernetes operator for application lifecycle management',
    skills: ['Kubernetes', 'Operator Pattern', 'Custom Resources', 'Container Orchestration'],
    difficulty: 'Hard',
    timeEstimate: '6-8 weeks'
  },
  {
    title: 'Distributed Database',
    description: 'Distributed key-value store with consensus and replication',
    skills: ['Distributed Systems', 'Consensus Algorithms', 'Replication', 'Database Systems'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Container Runtime',
    description: 'Docker-compatible container runtime with namespace isolation',
    skills: ['Container Technology', 'Linux Namespaces', 'System Programming', 'Security'],
    difficulty: 'Hard',
    timeEstimate: '8-12 weeks'
  },
  {
    title: 'Service Mesh',
    description: 'Service mesh implementation with traffic management and security',
    skills: ['Service Mesh', 'Traffic Management', 'Security', 'Proxy Programming'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Time Series Database',
    description: 'High-performance time series database with compression',
    skills: ['Time Series Data', 'Data Compression', 'Query Optimization', 'Storage Engines'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Blockchain Implementation',
    description: 'Proof-of-work blockchain with smart contract support',
    skills: ['Blockchain', 'Cryptography', 'Consensus Algorithms', 'P2P Networks'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Compiler for DSL',
    description: 'Domain-specific language compiler with LLVM backend',
    skills: ['Compiler Design', 'LLVM', 'Language Processing', 'Code Generation'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  },
  {
    title: 'Distributed Computing Framework',
    description: 'MapReduce-like framework for distributed data processing',
    skills: ['Distributed Computing', 'Data Processing', 'Fault Tolerance', 'Scheduling'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Cloud Storage System',
    description: 'S3-compatible object storage with replication and versioning',
    skills: ['Object Storage', 'Data Replication', 'Versioning', 'Cloud APIs'],
    difficulty: 'Hard',
    timeEstimate: '8-10 weeks'
  },
  {
    title: 'Network File System',
    description: 'Distributed file system with POSIX compatibility',
    skills: ['File Systems', 'FUSE', 'Distributed Storage', 'POSIX Compliance'],
    difficulty: 'Hard',
    timeEstimate: '10-12 weeks'
  }
];

export default function GoProjectsPage() {
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
          <div className="text-4xl">🐹</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Go Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 projects to master Go development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Go is a modern programming language designed for building scalable, concurrent systems. 
          Perfect for cloud services, microservices, and system programming. These projects will help you 
          master goroutines, channels, and Go's powerful standard library.
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
            Learn Go fundamentals
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
            Cloud and microservices
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
            Distributed systems
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
          Go Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://golang.org/" className="hover:underline">Go Official Site</a></li>
              <li>• <a href="https://pkg.go.dev/" className="hover:underline">Go Package Documentation</a></li>
              <li>• <a href="https://tour.golang.org/" className="hover:underline">A Tour of Go</a></li>
              <li>• <a href="https://golang.org/doc/effective_go.html" className="hover:underline">Effective Go</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Libraries</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://github.com/gin-gonic/gin" className="hover:underline">Gin (Web Framework)</a></li>
              <li>• <a href="https://github.com/gorilla/mux" className="hover:underline">Gorilla Mux (Router)</a></li>
              <li>• <a href="https://gorm.io/" className="hover:underline">GORM (ORM)</a></li>
              <li>• <a href="https://github.com/spf13/cobra" className="hover:underline">Cobra (CLI)</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Tools</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://code.visualstudio.com/" className="hover:underline">VS Code with Go Extension</a></li>
              <li>• <a href="https://www.jetbrains.com/go/" className="hover:underline">GoLand IDE</a></li>
              <li>• <a href="https://github.com/golangci/golangci-lint" className="hover:underline">GolangCI-Lint</a></li>
              <li>• <a href="https://golang.org/cmd/gofmt/" className="hover:underline">gofmt (Code Formatter)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Go?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Install Go from golang.org</li>
              <li>• Complete "A Tour of Go" tutorial</li>
              <li>• Start with "CLI Todo Application"</li>
              <li>• Learn goroutines and channels early</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Go Specializations:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                Cloud Services
              </span>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                Microservices
              </span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                DevOps Tools
              </span>
              <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                System Programming
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
