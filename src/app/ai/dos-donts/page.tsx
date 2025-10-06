import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const aiDos = [
  {
    category: 'Learning & Development',
    items: [
      {
        title: 'Use AI as a Learning Tool',
        description: 'Ask AI to explain complex concepts, algorithms, or code patterns you don\'t understand',
        example: 'Instead of copying code blindly, ask: "Can you explain how this sorting algorithm works step by step?"'
      },
      {
        title: 'Review and Understand AI Code',
        description: 'Always read through AI-generated code and make sure you understand what it does',
        example: 'Test the code, add comments, and modify it to fit your specific needs'
      },
      {
        title: 'Use AI for Boilerplate and Repetitive Tasks',
        description: 'Let AI handle routine code generation so you can focus on architecture and logic',
        example: 'Generate CRUD operations, API endpoints, or configuration files'
      },
      {
        title: 'Iterate and Refine Prompts',
        description: 'If the first response isn\'t perfect, refine your prompt with more context',
        example: 'Start broad, then add specific requirements, constraints, and examples'
      }
    ]
  },
  {
    category: 'Code Quality & Best Practices',
    items: [
      {
        title: 'Apply Your Experience',
        description: 'Use your mid-level expertise to evaluate and improve AI suggestions',
        example: 'Check for security issues, performance problems, and maintainability concerns'
      },
      {
        title: 'Combine AI with Testing',
        description: 'Write tests for AI-generated code to ensure it works correctly',
        example: 'Generate unit tests alongside the main code, and run them to verify functionality'
      },
      {
        title: 'Use AI for Code Reviews',
        description: 'Ask AI to review your code for potential issues or improvements',
        example: 'Paste your code and ask: "What potential issues do you see in this code?"'
      },
      {
        title: 'Document AI-Assisted Work',
        description: 'Be transparent about AI usage in your commits and documentation',
        example: 'Add comments like "// Generated with AI assistance, reviewed and tested"'
      }
    ]
  }
];

const aiDonts = [
  {
    category: 'Learning & Skill Development',
    items: [
      {
        title: 'Don\'t Skip Learning Fundamentals',
        description: 'AI can\'t replace understanding core programming concepts and principles',
        warning: 'You\'ll struggle with debugging and architecture if you rely too heavily on AI'
      },
      {
        title: 'Don\'t Copy-Paste Without Understanding',
        description: 'Blindly using AI code without comprehension leads to technical debt',
        warning: 'You won\'t be able to maintain or debug code you don\'t understand'
      },
      {
        title: 'Don\'t Let AI Make All Design Decisions',
        description: 'Architecture and design patterns require human judgment and experience',
        warning: 'AI might suggest technically correct but inappropriate solutions'
      },
      {
        title: 'Don\'t Become Overly Dependent',
        description: 'Maintain your ability to code without AI assistance',
        warning: 'You might face situations where AI tools aren\'t available'
      }
    ]
  },
  {
    category: 'Security & Professional Risks',
    items: [
      {
        title: 'Don\'t Share Sensitive Information',
        description: 'Never paste proprietary code, API keys, or confidential data into AI tools',
        warning: 'This could violate NDAs and expose your company to security risks'
      },
      {
        title: 'Don\'t Trust AI for Security-Critical Code',
        description: 'Always have security experts review authentication, encryption, and access control code',
        warning: 'AI might miss subtle security vulnerabilities'
      },
      {
        title: 'Don\'t Assume AI Code is Bug-Free',
        description: 'AI-generated code can contain logical errors, edge case issues, or performance problems',
        warning: 'Thorough testing is essential for all AI-assisted code'
      },
      {
        title: 'Don\'t Ignore Licensing and Copyright',
        description: 'Be aware that AI might generate code similar to copyrighted material',
        warning: 'Research the legal implications of AI-generated code in your jurisdiction'
      }
    ]
  }
];

const ethicalConsiderations = [
  {
    principle: 'Transparency',
    description: 'Be open about AI usage with your team and stakeholders',
    practices: [
      'Disclose AI assistance in code reviews',
      'Document which parts were AI-generated',
      'Be honest about your capabilities vs AI capabilities'
    ]
  },
  {
    principle: 'Responsibility',
    description: 'Take ownership of all code that goes into production',
    practices: [
      'Test and validate all AI-generated code',
      'Ensure you can maintain and debug the code',
      'Take responsibility for any issues that arise'
    ]
  },
  {
    principle: 'Continuous Learning',
    description: 'Use AI to enhance, not replace, your learning journey',
    practices: [
      'Ask AI to explain concepts you don\'t understand',
      'Practice coding without AI regularly',
      'Focus on understanding patterns and principles'
    ]
  },
  {
    principle: 'Team Collaboration',
    description: 'Consider how AI usage affects your team dynamics',
    practices: [
      'Share AI techniques that work well',
      'Help teammates who are less familiar with AI',
      'Establish team guidelines for AI usage'
    ]
  }
];

const commonMistakes = [
  {
    mistake: 'Over-relying on AI for Problem Solving',
    consequence: 'Weakened analytical and debugging skills',
    solution: 'Set aside time for coding without AI assistance'
  },
  {
    mistake: 'Not Validating AI Suggestions',
    consequence: 'Introducing bugs or inefficient code',
    solution: 'Always test and review AI-generated code thoroughly'
  },
  {
    mistake: 'Using AI for Unfamiliar Technologies',
    consequence: 'Implementing solutions you can\'t maintain',
    solution: 'Learn the basics of new technologies before using AI'
  },
  {
    mistake: 'Ignoring Code Style and Standards',
    consequence: 'Inconsistent codebase and harder maintenance',
    solution: 'Configure AI to follow your team\'s coding standards'
  },
  {
    mistake: 'Not Considering Performance Implications',
    consequence: 'Slow or resource-intensive applications',
    solution: 'Profile and optimize AI-generated code'
  }
];

export default function AIDosAndDontsPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/ai"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to AI & ML</span>
        </Link>
        <Link
          href="/ai/prompting"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Prompt Engineering</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            AI Dos and Don'ts
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Essential guidelines for mid-level programmers using AI tools responsibly and effectively. 
          Learn to leverage AI while maintaining code quality and professional integrity.
        </p>
      </div>

      {/* Key Principles */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🎯 Core Principles for Mid-Level Developers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Your Advantage:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• You can evaluate AI suggestions critically</li>
              <li>• You understand code architecture and patterns</li>
              <li>• You know when something "smells" wrong</li>
              <li>• You can debug and maintain complex code</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Your Responsibility:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Guide junior developers in AI usage</li>
              <li>• Maintain code quality standards</li>
              <li>• Balance AI assistance with skill development</li>
              <li>• Ensure team best practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* DO's Section */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span>What To Do</span>
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {aiDos.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-col gap-4 md:gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded border border-gray-200/50 dark:border-gray-700">
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-green-800 dark:text-green-200 text-sm mb-2">{item.description}</p>
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-xs text-black dark:text-white">
                      <strong>Example:</strong> {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DON'T's Section */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <XCircle className="w-6 h-6 text-red-600" />
          <span>What Not To Do</span>
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {aiDonts.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-col gap-4 md:gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded border border-gray-200/50 dark:border-gray-700">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-red-800 dark:text-red-200 text-sm mb-2">{item.description}</p>
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded text-xs text-black dark:text-white">
                      <strong>⚠️ Warning:</strong> {item.warning}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Considerations */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Ethical Considerations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ethicalConsiderations.map((consideration, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{consideration.principle}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{consideration.description}</p>
              <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                {consideration.practices.map((practice, i) => (
                  <li key={i}>• {practice}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Common Mistakes to Avoid
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">{mistake.mistake}</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mb-2">
                    <strong>Consequence:</strong> {mistake.consequence}
                  </p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    <strong>Solution:</strong> {mistake.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices Summary */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          📋 Quick Reference: AI Best Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Before Using AI:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Define clear requirements</li>
              <li>• Consider security implications</li>
              <li>• Check company policies</li>
              <li>• Plan for testing and review</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">While Using AI:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Provide clear, specific prompts</li>
              <li>• Iterate and refine requests</li>
              <li>• Ask for explanations</li>
              <li>• Request multiple approaches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">After AI Generation:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>• Review and understand code</li>
              <li>• Test thoroughly</li>
              <li>• Refactor if needed</li>
              <li>• Document AI assistance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/ai"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to AI & ML</span>
        </Link>
        <Link
          href="/ai/prompting"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Prompt Engineering</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
