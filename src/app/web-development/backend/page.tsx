import Link from 'next/link';
import { Server, Database, Shield, Code, Users, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const backendLanguages = [
  {
    name: 'Node.js',
    description: 'JavaScript runtime for server-side development',
    pros: ['Same language as frontend', 'Large ecosystem (npm)', 'Great for real-time apps', 'Fast development'],
    cons: ['Single-threaded', 'CPU-intensive tasks', 'Callback complexity'],
    frameworks: ['Express.js', 'Fastify', 'Koa.js', 'NestJS'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Python',
    description: 'Versatile language excellent for web development and APIs',
    pros: ['Easy to learn', 'Rich libraries', 'Great for AI/ML', 'Clean syntax'],
    cons: ['Slower execution', 'GIL limitations', 'Mobile development'],
    frameworks: ['Django', 'Flask', 'FastAPI', 'Pyramid'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Java',
    description: 'Enterprise-grade language with strong typing and performance',
    pros: ['Platform independent', 'Strong typing', 'Enterprise ready', 'Great performance'],
    cons: ['Verbose syntax', 'Slow startup', 'Memory usage'],
    frameworks: ['Spring Boot', 'Quarkus', 'Micronaut', 'Play Framework'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    name: 'Go',
    description: 'Modern language designed for concurrent and scalable applications',
    pros: ['Fast compilation', 'Built-in concurrency', 'Simple syntax', 'Great performance'],
    cons: ['Limited generics', 'Smaller ecosystem', 'Learning curve'],
    frameworks: ['Gin', 'Echo', 'Fiber', 'Chi'],
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const backendConcepts = [
  {
    title: 'RESTful APIs',
    description: 'Design and build REST APIs with proper HTTP methods and status codes',
    icon: <Server className="w-5 h-5" />
  },
  {
    title: 'Database Design',
    description: 'SQL and NoSQL databases, relationships, indexing, and optimization',
    icon: <Database className="w-5 h-5" />
  },
  {
    title: 'Authentication & Security',
    description: 'JWT tokens, OAuth, password hashing, and security best practices',
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: 'Performance & Scaling',
    description: 'Caching, load balancing, microservices, and optimization techniques',
    icon: <Code className="w-5 h-5" />
  }
];

export default function BackendDevelopmentPage() {
  return (
    <PageLayout
      title="Backend Development"
      description="Backend development involves creating the server-side logic, databases, and infrastructure that power web applications behind the scenes."
      icon={<div className="text-4xl">💾</div>}
      previousLink={{
        href: "/web-development/frontend",
        label: "Previous: Frontend Development"
      }}
      nextLink={{
        href: "/web-development",
        label: "Back to Web Development"
      }}
    >
      {/* What is Backend Development */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🖥️ What is Backend Development?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Responsibilities:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Server-side logic and business rules</li>
              <li>• Database operations and data management</li>
              <li>• API development and integration</li>
              <li>• User authentication and authorization</li>
              <li>• Security and data validation</li>
              <li>• Performance optimization and caching</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Technologies:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Programming languages (Node.js, Python, Java, Go)</li>
              <li>• Web frameworks (Express, Django, Spring)</li>
              <li>• Databases (PostgreSQL, MongoDB, Redis)</li>
              <li>• Cloud services (AWS, Google Cloud, Azure)</li>
              <li>• DevOps tools (Docker, Kubernetes, CI/CD)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core Backend Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {backendConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-600">{concept.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backend Languages & Frameworks */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Backend Technologies
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {backendLanguages.map((lang, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${lang.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang.name}
                </h3>
                <span className="text-sm px-3 py-1 bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-full font-medium">
                  Popular Choice
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {lang.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">✅ Pros:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {lang.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">❌ Cons:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {lang.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">🛠️ Frameworks:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
                    {lang.frameworks.map((framework, i) => (
                      <li key={i}>• {framework}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Development */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Development
        </h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-4">
            🔗 RESTful API Example (Express.js)
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await User.update({ name, email }, { where: { id } });
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
          </pre>
        </div>
      </section>

      {/* Database Integration */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Database Integration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-3">🗄️ SQL Databases</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Structured data with relationships, ACID compliance, and complex queries.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>• PostgreSQL - Advanced features, JSON support</li>
              <li>• MySQL - Popular, reliable, good performance</li>
              <li>• SQLite - Lightweight, serverless, great for development</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-3">📄 NoSQL Databases</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Flexible schema, horizontal scaling, and document-based storage.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 [&>li]:mb-1">
              <li>• MongoDB - Document database, JSON-like documents</li>
              <li>• Redis - In-memory, great for caching and sessions</li>
              <li>• Cassandra - Wide-column, highly scalable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authentication & Security */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Authentication & Security
        </h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🔒 Security Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Authentication:</h4>
              <ul className="text-red-800 dark:text-red-200 text-sm [&>li]:mb-1">
                <li>• Use JWT tokens for stateless authentication</li>
                <li>• Implement proper password hashing (bcrypt)</li>
                <li>• Add rate limiting to prevent brute force attacks</li>
                <li>• Use HTTPS for all communications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Data Protection:</h4>
              <ul className="text-red-800 dark:text-red-200 text-sm [&>li]:mb-1">
                <li>• Validate and sanitize all user inputs</li>
                <li>• Use parameterized queries to prevent SQL injection</li>
                <li>• Implement proper CORS policies</li>
                <li>• Keep dependencies updated and secure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Backend Learning Path
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Choose a Language & Framework</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Start with Node.js/Express or Python/Flask for beginners</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Learn Database Fundamentals</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">SQL basics, database design, and ORM/ODM usage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Build RESTful APIs</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">CRUD operations, proper HTTP methods, status codes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Implement Authentication</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">User registration, login, JWT tokens, password security</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Deploy & Scale</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Cloud deployment, monitoring, performance optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Projects */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💡 Backend Project Ideas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Beginner Projects:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• Simple REST API for a blog</li>
              <li>• User authentication system</li>
              <li>• File upload and storage service</li>
              <li>• Basic e-commerce API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Advanced Projects:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• Real-time chat API with WebSockets</li>
              <li>• Microservices architecture</li>
              <li>• Payment processing integration</li>
              <li>• GraphQL API with subscriptions</li>
            </ul>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
