import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, MessageSquare, Target, Zap } from 'lucide-react';

const promptingTechniques = [
  {
    technique: 'Clear and Specific Instructions',
    description: 'Be explicit about what you want the AI to do',
    example: {
      bad: 'Write a function',
      good: 'Write a Python function that takes a list of integers and returns the sum of even numbers, with error handling for non-integer inputs'
    },
    tips: ['Use action verbs', 'Specify the programming language', 'Include input/output requirements', 'Mention error handling needs']
  },
  {
    technique: 'Provide Context and Constraints',
    description: 'Give the AI background information and limitations',
    example: {
      bad: 'Optimize this code',
      good: 'Optimize this Python function for a web API that handles 1000+ requests/second. Focus on memory efficiency over readability. Current response time is 200ms, target is under 50ms.'
    },
    tips: ['Mention performance requirements', 'Specify the environment/platform', 'Include existing constraints', 'State your priorities']
  },
  {
    technique: 'Request Explanations',
    description: 'Ask AI to explain its reasoning and approach',
    example: {
      bad: '"Fix this bug" or "Fix" without any additional details or context',
      good: 'Fix this bug and explain: 1) What caused the issue, 2) Why your solution works, 3) How to prevent similar bugs in the future'
    },
    tips: ['Ask for step-by-step explanations', 'Request alternative approaches', 'Ask about trade-offs', 'Seek learning opportunities']
  },
  {
    technique: 'Iterative Refinement',
    description: 'Build on previous responses to improve results',
    example: {
      bad: 'This isn\'t what I wanted with no additional details.',
      good: 'The function works but is too slow for large datasets. Can you optimize it using a different algorithm? Also add type hints and docstrings.'
    },
    tips: ['Be specific about what needs improvement', 'Build on what works', 'Add new requirements gradually', 'Reference previous context']
  }
];

const promptTemplates = [
  {
    category: 'Code Generation',
    template: `Create a [LANGUAGE] [TYPE] that [FUNCTIONALITY].

Requirements:
- [SPECIFIC REQUIREMENT 1]
- [SPECIFIC REQUIREMENT 2]
- [PERFORMANCE/CONSTRAINT]

Please include:
- Error handling
- Type hints/annotations
- Comments explaining complex logic
- Example usage`,
    example: `Create a Python class that manages a connection pool for database connections.

Requirements:
- Support for PostgreSQL and MySQL
- Maximum 10 concurrent connections
- Automatic retry on connection failure

Please include:
- Error handling
- Type hints/annotations
- Comments explaining complex logic
- Example usage`
  },
  {
    category: 'Code Review',
    template: `Review this [LANGUAGE] code for:
- Potential bugs or edge cases
- Performance issues
- Security vulnerabilities
- Code style and best practices
- Maintainability concerns

Code:
[YOUR CODE HERE]

Please provide specific suggestions with examples.`,
    example: `Review this Python code for:
- Potential bugs or edge cases
- Performance issues
- Security vulnerabilities
- Code style and best practices
- Maintainability concerns

Code:
def process_user_data(data):
    result = []
    for item in data:
        if item['age'] > 18:
            result.append(item['name'].upper())
    return result

Please provide specific suggestions with examples.`
  },
  {
    category: 'Debugging',
    template: `I'm getting this error: [ERROR MESSAGE]

Context:
- [WHAT YOU WERE TRYING TO DO]
- [RELEVANT CODE SNIPPET]
- [ENVIRONMENT/SETUP INFO]

Please help me:
1. Understand what's causing this error
2. Provide a solution
3. Explain how to prevent it in the future`,
    example: `I'm getting this error: AttributeError: 'NoneType' object has no attribute 'split'

Context:
- Trying to parse user input from a web form
- Using Flask framework
- Error occurs intermittently

Code snippet:
username = request.form.get('username')
parts = username.split('@')

Please help me:
1. Understand what's causing this error
2. Provide a solution
3. Explain how to prevent it in the future`
  },
  {
    category: 'Learning & Explanation',
    template: `Explain [CONCEPT/TECHNOLOGY] in the context of [YOUR SITUATION].

I'm a [YOUR LEVEL] developer working on [PROJECT TYPE].

Please cover:
- Key concepts and terminology
- How it applies to my situation
- Practical examples
- Common pitfalls to avoid
- Next steps for learning more`,
    example: `Explain microservices architecture in the context of scaling a web application.

I'm a mid-level developer working on an e-commerce platform that's growing rapidly.

Please cover:
- Key concepts and terminology
- How it applies to my situation
- Practical examples
- Common pitfalls to avoid
- Next steps for learning more`
  }
];

const advancedTechniques = [
  {
    name: 'Chain of Thought',
    description: 'Ask AI to think through problems step by step',
    example: 'Before writing the code, please think through: 1) What data structures are needed, 2) What edge cases to consider, 3) What the algorithm flow should be, then implement the solution.',
    useCase: 'Complex algorithms, system design, debugging'
  },
  {
    name: 'Role Playing',
    description: 'Ask AI to take on a specific expert role',
    example: 'Act as a senior software architect reviewing this code for a high-traffic production system. Focus on scalability, maintainability, and performance.',
    useCase: 'Code reviews, architecture decisions, specialized domains'
  },
  {
    name: 'Comparative Analysis',
    description: 'Request multiple approaches and comparisons',
    example: 'Show me 3 different ways to implement this feature, comparing their pros/cons in terms of performance, maintainability, and complexity.',
    useCase: 'Design decisions, technology choices, optimization'
  },
  {
    name: 'Constraint-Based Prompting',
    description: 'Set specific limitations to guide the response',
    example: 'Solve this using only built-in Python libraries, with a maximum of 20 lines of code, optimized for readability over performance.',
    useCase: 'Learning exercises, code golf, specific requirements'
  }
];

const commonMistakes = [
  {
    mistake: 'Vague Requirements',
    problem: '"Make this code better" - AI doesn\'t know what "better" means to you',
    solution: 'Specify what you want improved: performance, readability, maintainability, etc.'
  },
  {
    mistake: 'No Context',
    problem: 'Asking for code without explaining the larger system or use case',
    solution: 'Provide context about your application, constraints, and requirements'
  },
  {
    mistake: 'Single-Shot Prompting',
    problem: 'Expecting perfect results from the first prompt',
    solution: 'Use iterative refinement - build on and improve the AI\'s responses'
  },
  {
    mistake: 'Ignoring AI Limitations',
    problem: 'Asking AI to make architectural decisions without sufficient context',
    solution: 'Use AI for specific technical problems, make high-level decisions yourself'
  },
  {
    mistake: 'Not Asking for Explanations',
    problem: 'Getting code without understanding how or why it works',
    solution: 'Always ask AI to explain its approach and reasoning'
  }
];

export default function PromptEngineeringPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/ai/dos-donts"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: AI Dos and Don'ts</span>
        </Link>
        <Link
          href="/ai/build-ai"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Building Your Own AI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-yellow-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Prompt Engineering
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Master the art of communicating effectively with AI systems. Learn advanced prompting 
          techniques to get better code, explanations, and solutions from AI tools.
        </p>
      </div>

      {/* Why Prompt Engineering Matters */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🎯 Why Prompt Engineering Matters for Developers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Quality Results:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
              <li>• Get more accurate and relevant code</li>
              <li>• Reduce back-and-forth iterations</li>
              <li>• Receive better explanations and documentation</li>
              <li>• Avoid common AI-generated mistakes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Efficiency Gains:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
              <li>• Save time on repetitive coding tasks</li>
              <li>• Get faster debugging and problem-solving</li>
              <li>• Learn new concepts more effectively</li>
              <li>• Improve code review processes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Prompting Techniques */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core Prompting Techniques
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {promptingTechniques.map((technique, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {technique.technique}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{technique.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-700 p-3 rounded border border-gray-600">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 text-sm mb-1">❌ Poor Example:</h4>
                  <code className="text-red-800 dark:text-red-200 text-xs">{technique.example.bad}</code>
                </div>
                <div className="bg-gray-700 p-3 rounded border border-gray-600">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-1">✅ Better Example:</h4>
                  <code className="text-green-800 dark:text-green-200 text-xs">{technique.example.good}</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">💡 Tips:</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
                  {technique.tips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Proven Prompt Templates
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {promptTemplates.map((template, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-white">
                  {template.category}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4 md:gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-2">Template:</h4>
                  <pre className="text-blue-800 dark:text-blue-200 text-xs bg-white dark:bg-gray-900 p-3 rounded overflow-x-auto">
                    {template.template}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-2">Example Usage:</h4>
                  <pre className="text-blue-700 dark:text-blue-300 text-xs bg-blue-100 dark:bg-blue-900/30 p-3 rounded overflow-x-auto">
                    {template.example}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Advanced Prompting Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedTechniques.map((technique, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{technique.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{technique.description}</p>
              
              <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Example:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-xs">{technique.example}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Best For:</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{technique.useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Common Prompting Mistakes
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {commonMistakes.map((mistake, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-900 dark:text-red-100">{mistake.mistake}</h4>
                  <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                    <strong>Problem:</strong> {mistake.problem}
                  </p>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    <strong>Solution:</strong> {mistake.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Exercise */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🎯 Practice Exercise: Improve These Prompts
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Poor Prompt:</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">"Write a sorting function"</p>
            
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Your Improved Version Should Include:</h4>
            <ul className="text-purple-800 dark:text-purple-200 text-sm [&>li]:mb-1">
              <li>• Programming language specification</li>
              <li>• Input/output requirements</li>
              <li>• Performance constraints</li>
              <li>• Error handling needs</li>
              <li>• Code style preferences</li>
            </ul>
          </div>
          
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
            <p className="text-green-800 dark:text-green-200 text-sm">
              <strong>Try this:</strong> Take the poor prompt above and rewrite it using the techniques you've learned. 
              Then test it with an AI tool and compare the results!
            </p>
          </div>
        </div>
      </div>

      {/* Tool-Specific Tips */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🛠️ Tool-Specific Prompting Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ChatGPT/GPT-4:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Use system messages for consistent behavior</li>
              <li>• Break complex tasks into steps</li>
              <li>• Ask for code in specific formats</li>
              <li>• Request explanations alongside code</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">GitHub Copilot:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Write descriptive function names</li>
              <li>• Use clear comments above code blocks</li>
              <li>• Provide context in nearby code</li>
              <li>• Use consistent coding patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Claude/Other AIs:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Test different prompt structures</li>
              <li>• Adjust formality based on the tool</li>
              <li>• Use the tool's strengths (analysis, creativity)</li>
              <li>• Provide feedback to improve responses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/ai/dos-donts"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: AI Dos and Don'ts</span>
        </Link>
        <Link
          href="/ai/build-ai"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Building Your Own AI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
