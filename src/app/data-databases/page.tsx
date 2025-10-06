import Link from 'next/link';
import { Database, Code, Users, Star, Shield, Layers, ArrowRight, ExternalLink, Table, BarChart } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const databaseCategories = [
  {
    title: 'SQL Basics',
    description: 'Learn relational databases and SQL query language fundamentals',
    examples: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server'],
    href: '/data-databases/sql',
    icon: <Table className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'NoSQL Databases',
    description: 'Explore non-relational databases for flexible data storage',
    examples: ['MongoDB', 'Redis', 'Cassandra', 'DynamoDB'],
    href: '/data-databases/nosql',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Data Analysis',
    description: 'Analyze and visualize data to extract meaningful insights',
    examples: ['Python/Pandas', 'R', 'Excel', 'Tableau'],
    href: '/data-databases/analysis',
    icon: <BarChart className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const databaseTypes = [
  { name: 'Relational (SQL)', usage: 'Structured data with relationships', popularity: 'Very High' },
  { name: 'Document', usage: 'JSON-like documents', popularity: 'High' },
  { name: 'Key-Value', usage: 'Simple key-value pairs', popularity: 'High' },
  { name: 'Graph', usage: 'Connected data relationships', popularity: 'Growing' },
  { name: 'Column-Family', usage: 'Wide-column storage', popularity: 'Moderate' },
  { name: 'Time-Series', usage: 'Time-stamped data', popularity: 'Growing' }
];

export default function DataDatabasesPage() {
  return (
    <PageLayout
      title="Data & Databases"
      description="Learn how to store, retrieve, and manage data effectively. From SQL databases to NoSQL solutions and data modeling best practices."
      icon={<Database className="w-8 h-8 text-blue-600" />}
    >

      <QuickStats 
        title="Data & Databases Overview"
        stats={[
          { value: "2.5 Quintillion", label: "Bytes Created Daily" },
          { value: "90%", label: "Data Created in Last 2 Years" },
          { value: "328.77M", label: "Terabytes by 2025" },
          { value: "High Demand", label: "Job Market" }
        ]} 
      />

      {/* Why Data & Databases Matter */}
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Why Data & Databases Matter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Foundation of Applications:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Every app needs data storage</li>
              <li>User accounts and profiles</li>
              <li>Content and media storage</li>
              <li>Transaction records</li>
              <li>Analytics and logging</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Career Opportunities:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Database Administrator (DBA)</li>
              <li>Data Analyst</li>
              <li>Data Scientist</li>
              <li>Backend Developer</li>
              <li>Business Intelligence Developer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Business Impact:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Data-driven decision making</li>
              <li>Performance optimization</li>
              <li>Customer insights</li>
              <li>Predictive analytics</li>
              <li>Competitive advantage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.5rem]">
          {databaseCategories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`block p-6 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105 ${category.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {category.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                    {example}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Database Types Overview */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Database Types Overview
        </h2>
        <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden py-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Database Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Best For
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Popularity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {databaseTypes.map((db, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col gap-8 md:gap-12">
                      <div className="font-medium text-gray-900 dark:text-white">{db.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{db.usage}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col gap-8 md:gap-12">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        db.popularity === 'Very High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        db.popularity === 'High' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        db.popularity === 'Growing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {db.popularity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Essential Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Database Design</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Entity-Relationship (ER) modeling</li>
              <li>Normalization and denormalization</li>
              <li>Primary and foreign keys</li>
              <li>Indexes and constraints</li>
              <li>Schema design patterns</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Performance</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Query optimization</li>
              <li>Indexing strategies</li>
              <li>Caching mechanisms</li>
              <li>Connection pooling</li>
              <li>Database monitoring</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Security</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Authentication and authorization</li>
              <li>SQL injection prevention</li>
              <li>Data encryption</li>
              <li>Backup and recovery</li>
              <li>Access control</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Scaling</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Horizontal vs vertical scaling</li>
              <li>Replication and sharding</li>
              <li>Load balancing</li>
              <li>Distributed databases</li>
              <li>Cloud database services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="py-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Recommended Learning Path
        </h3>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 flex flex-col gap-4 md:gap-6">
          <li>
            <strong className="text-gray-900 dark:text-white">Start with SQL Fundamentals</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-6">Learn basic queries, joins, and database design principles</p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Practice with Real Databases</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-6">Use PostgreSQL or MySQL for hands-on experience</p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Explore NoSQL Options</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-6">Learn MongoDB or Redis for different use cases</p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Learn Data Analysis</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-6">Use Python/Pandas or R for data manipulation and visualization</p>
          </li>
        </ol>
      </div>

      {/* Tools & Technologies */}
      <div className="pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Popular Tools & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[0.5rem]">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">SQL Databases:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>SQL Server</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">NoSQL Databases:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Cassandra</li>
              <li>DynamoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Analysis Tools:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Python/Pandas</li>
              <li>R</li>
              <li>Tableau</li>
              <li>Power BI</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cloud Services:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>AWS RDS</li>
              <li>Google Cloud SQL</li>
              <li>Azure Database</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
