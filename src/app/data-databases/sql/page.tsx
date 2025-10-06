import Link from 'next/link';
import { Database, Code, Users, Star, Table, Search, ArrowRight, ExternalLink, Lock, Shield, Server, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const sqlConcepts = [
  {
    title: 'Basic Queries',
    description: 'SELECT, INSERT, UPDATE, DELETE operations',
    icon: <Search className="w-5 h-5" />
  },
  {
    title: 'Table Relationships',
    description: 'Primary keys, foreign keys, and joins',
    icon: <Table className="w-5 h-5" />
  },
  {
    title: 'Data Types',
    description: 'VARCHAR, INTEGER, DATE, BOOLEAN, etc.',
    icon: <Database className="w-5 h-5" />
  },
  {
    title: 'Constraints',
    description: 'NOT NULL, UNIQUE, CHECK constraints',
    icon: <Lock className="w-5 h-5" />
  }
];

const popularDatabases = [
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database',
    pros: ['ACID compliant', 'JSON support', 'Extensible', 'Great performance'],
    bestFor: 'Complex applications, data analytics, web applications'
  },
  {
    name: 'MySQL',
    description: 'Popular open-source database',
    pros: ['Fast', 'Reliable', 'Easy to use', 'Wide support'],
    bestFor: 'Web applications, content management, e-commerce'
  },
  {
    name: 'SQLite',
    description: 'Lightweight, serverless database',
    pros: ['No setup', 'Portable', 'Fast', 'Reliable'],
    bestFor: 'Mobile apps, prototyping, small applications'
  },
  {
    name: 'SQL Server',
    description: 'Microsoft\'s enterprise database',
    pros: ['Enterprise features', 'Integration', 'Security', 'Scalability'],
    bestFor: 'Enterprise applications, .NET ecosystem, business intelligence'
  }
];

export default function SQLPage() {
  return (
    <PageLayout
      title="SQL Databases"
      description="SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. Learn to design, query, and optimize SQL databases."
      icon={<div className="text-4xl">📊</div>}
      previousLink={{
        href: "/data-databases",
        label: "Back to Data & Databases"
      }}
      nextLink={{
        href: "/data-databases/nosql",
        label: "Next: NoSQL Databases"
      }}
    >

      {/* What is SQL */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🗃️ What is SQL?
        </h3>
        <div className="flex flex-col gap-4 md:gap-6 text-blue-800 dark:text-blue-200">
          <p>
            <strong>SQL (Structured Query Language)</strong> is a standardized language for managing 
            and manipulating relational databases. It allows you to create, read, update, and delete 
            data stored in tables with defined relationships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Features:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Declarative language (what, not how)</li>
                <li>• Standardized across database systems</li>
                <li>• Powerful for complex data relationships</li>
                <li>• ACID compliance for data integrity</li>
                <li>• Mature ecosystem and tooling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Common Use Cases:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Web application backends</li>
                <li>• Business data management</li>
                <li>• Reporting and analytics</li>
                <li>• Financial systems</li>
                <li>• Content management systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core SQL Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sqlConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{concept.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SQL Basics Examples */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential SQL Commands
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            📝 Basic SQL Operations
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`-- Create a table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email, age) 
VALUES ('Alice Johnson', 'alice@example.com', 28);

INSERT INTO users (name, email, age) 
VALUES 
    ('Bob Smith', 'bob@example.com', 35),
    ('Carol Davis', 'carol@example.com', 42);

-- Select data
SELECT * FROM users;
SELECT name, email FROM users WHERE age > 30;
SELECT COUNT(*) FROM users;

-- Update data
UPDATE users 
SET age = 29 
WHERE name = 'Alice Johnson';

-- Delete data
DELETE FROM users WHERE age < 25;`}
          </pre>
        </div>
      </section>

      {/* Advanced SQL */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Advanced SQL Concepts
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🔗 Joins and Relationships
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`-- Create related tables
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_name VARCHAR(100),
    quantity INTEGER,
    price DECIMAL(10,2),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inner Join - Get users with their orders
SELECT u.name, u.email, o.product_name, o.quantity, o.price
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- Left Join - Get all users, including those without orders
SELECT u.name, u.email, o.product_name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Aggregate functions with GROUP BY
SELECT u.name, COUNT(o.id) as order_count, SUM(o.price) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 0;

-- Subqueries
SELECT name, email 
FROM users 
WHERE id IN (
    SELECT user_id 
    FROM orders 
    WHERE price > 100
);`}
          </pre>
        </div>
      </section>

      {/* Popular SQL Databases */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular SQL Databases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularDatabases.map((db, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {db.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {db.description}
              </p>
              <div className="mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Advantages:</h4>
                <div className="flex flex-wrap gap-1">
                  {db.pros.map((pro, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                      {pro}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Best For:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{db.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🎯 SQL Learning Path
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Basic Queries (1-2 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">SELECT, INSERT, UPDATE, DELETE, WHERE clauses</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Database Design (2-3 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Tables, relationships, normalization, constraints</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Advanced Queries (3-4 weeks)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">JOINs, subqueries, aggregate functions, window functions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Performance & Administration (Ongoing)</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Indexing, query optimization, backup, security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          📚 SQL Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Free Resources:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• W3Schools SQL Tutorial</li>
              <li>• SQLBolt (Interactive lessons)</li>
              <li>• PostgreSQL Tutorial</li>
              <li>• MySQL Documentation</li>
              <li>• SQLite Tutorial</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Practice Platforms:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• HackerRank SQL challenges</li>
              <li>• LeetCode Database problems</li>
              <li>• SQLZoo interactive tutorials</li>
              <li>• DB Fiddle (online SQL editor)</li>
              <li>• Sample databases (Northwind, Sakila)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/data-databases"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Data & Databases</span>
        </Link>
        <Link
          href="/data-databases/nosql"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: NoSQL Databases</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
