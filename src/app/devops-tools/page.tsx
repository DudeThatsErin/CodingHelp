import Link from 'next/link';
import { Settings, Code, Users, Star, Shield, Layers, ArrowRight, ExternalLink, GitBranch, TestTube, Rocket } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const devopsCategories = [
  {
    title: 'Version Control (Git)',
    description: 'Track changes, collaborate with teams, and manage code history',
    examples: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    href: '/devops-tools/git',
    icon: <GitBranch className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'IDEs & Editors',
    description: 'Powerful development environments and code editors',
    examples: ['VS Code', 'IntelliJ', 'Vim', 'Sublime Text'],
    href: '/devops-tools/editors',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Testing',
    description: 'Ensure code quality with automated testing frameworks',
    examples: ['Jest', 'Pytest', 'JUnit', 'Cypress'],
    href: '/devops-tools/testing',
    icon: <TestTube className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  },
  {
    title: 'Deployment',
    description: 'Deploy applications to production environments',
    examples: ['Docker', 'Kubernetes', 'AWS', 'Vercel'],
    href: '/devops-tools/deployment',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-gray-50/50 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700'
  }
];

const devopsPhases = [
  { phase: 'Plan', description: 'Project planning and requirements', tools: ['Jira', 'Trello', 'Asana'] },
  { phase: 'Code', description: 'Writing and version control', tools: ['Git', 'VS Code', 'GitHub'] },
  { phase: 'Build', description: 'Compile and package applications', tools: ['Webpack', 'Maven', 'Gradle'] },
  { phase: 'Test', description: 'Automated testing and quality assurance', tools: ['Jest', 'Selenium', 'SonarQube'] },
  { phase: 'Release', description: 'Deployment preparation', tools: ['Jenkins', 'GitLab CI', 'GitHub Actions'] },
  { phase: 'Deploy', description: 'Production deployment', tools: ['Docker', 'Kubernetes', 'AWS'] },
  { phase: 'Operate', description: 'Infrastructure management', tools: ['Terraform', 'Ansible', 'CloudFormation'] },
  { phase: 'Monitor', description: 'Performance and error tracking', tools: ['Grafana', 'New Relic', 'Datadog'] }
];

export default function DevOpsToolsPage() {
  return (
    <PageLayout
      title="DevOps & Tools"
      description="Master the tools and practices that streamline development, deployment, and operations. From version control to containerization and CI/CD pipelines."
      icon={<Settings className="w-8 h-8 text-blue-600" />}
    >
      <QuickStats 
        title="DevOps & Tools Overview"
        stats={[
          { value: "63%", label: "Companies Using DevOps" },
          { value: "200x", label: "Faster Deployment" },
          { value: "24x", label: "Faster Recovery" },
          { value: "3x", label: "Lower Failure Rate" }
        ]} 
      />

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Layers className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            DevOps & Tools
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master the tools and practices that streamline development, testing, and deployment. 
          From version control to continuous integration and deployment.
        </p>
      </div>

      {/* What is DevOps */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🔄 What is DevOps?
        </h3>
        <div className="flex flex-col gap-4 md:gap-6 text-gray-700 dark:text-purple-200">
          <p>
            <strong>DevOps</strong> is a set of practices that combines software development (Dev) and 
            IT operations (Ops) to shorten the development lifecycle and provide continuous delivery 
            with high software quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Goals:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Faster time to market</li>
                <li>• Improved collaboration</li>
                <li>• Higher quality software</li>
                <li>• Reduced deployment risks</li>
                <li>• Better customer satisfaction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🏗️ Key Practices:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Continuous Integration (CI)</li>
                <li>• Continuous Deployment (CD)</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring and Logging</li>
                <li>• Automated Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💼 Benefits:</h4>
              <ul className="text-sm [&>li]:mb-1">
                <li>• Reduced manual errors</li>
                <li>• Faster bug fixes</li>
                <li>• Improved team productivity</li>
                <li>• Better system reliability</li>
                <li>• Enhanced scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential Tool Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devopsCategories.map((category, index) => (
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
      </section>

      {/* DevOps Lifecycle */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          DevOps Lifecycle
        </h2>
        <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Phase
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Popular Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {devopsPhases.map((phase, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap flex flex-col gap-3">
                      <div className="font-medium text-gray-900 dark:text-white">{phase.phase}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{phase.description}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {phase.tools.map((tool, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Getting Started with DevOps
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Master Version Control</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Learn Git fundamentals - branching, merging, and collaboration workflows</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Choose Your Development Environment</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Set up a powerful IDE or editor with extensions and plugins</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Learn Testing Fundamentals</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Understand unit testing, integration testing, and test automation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100">Explore Deployment Options</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">Start with simple deployments, then progress to containerization and orchestration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Tool Combinations */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🛠️ Popular Tool Combinations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Frontend Development:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Editor:</strong> VS Code + Extensions</li>
              <li>• <strong>Version Control:</strong> Git + GitHub</li>
              <li>• <strong>Testing:</strong> Jest + Cypress</li>
              <li>• <strong>Deployment:</strong> Vercel + Netlify</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Backend Development:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Editor:</strong> IntelliJ IDEA + VS Code</li>
              <li>• <strong>Version Control:</strong> Git + GitLab</li>
              <li>• <strong>Testing:</strong> JUnit + Postman</li>
              <li>• <strong>Deployment:</strong> Docker + Kubernetes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Full Stack Development:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Editor:</strong> VS Code</li>
              <li>• <strong>Version Control:</strong> Git + GitHub</li>
              <li>• <strong>Testing:</strong> Jest + Playwright</li>
              <li>• <strong>Deployment:</strong> Docker + AWS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Enterprise Development:</h4>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Editor:</strong> IntelliJ IDEA + Eclipse</li>
              <li>• <strong>Version Control:</strong> Git + Bitbucket</li>
              <li>• <strong>Testing:</strong> JUnit + Selenium</li>
              <li>• <strong>Deployment:</strong> Jenkins + OpenShift</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Paths */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          💼 DevOps Career Paths
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">DevOps Engineer:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• CI/CD pipeline management</li>
              <li>• Infrastructure automation</li>
              <li>• Cloud platform expertise</li>
              <li>• Monitoring and alerting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Site Reliability Engineer:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• System reliability and uptime</li>
              <li>• Performance optimization</li>
              <li>• Incident response</li>
              <li>• Capacity planning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Cloud Architect:</h4>
            <ul className="text-orange-800 dark:text-orange-200 text-sm [&>li]:mb-1">
              <li>• Cloud infrastructure design</li>
              <li>• Security and compliance</li>
              <li>• Cost optimization</li>
              <li>• Migration strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
