import Link from 'next/link';
import { ArrowLeft, MessageCircle, Code, AlertTriangle, CheckCircle, Copy, ExternalLink, Bot } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

const codeExamples = [
  {
    title: "Good Code Sharing Example",
    type: "good",
    example: `**Problem:** My Python function isn't returning the expected result

**What I'm trying to do:** Calculate the average of a list of numbers

**Code:**
\`\`\`python
def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)

# Test case that's failing
test_numbers = [1, 2, 3, 4, 5]
result = calculate_average(test_numbers)
print(f"Expected: 3.0, Got: {result}")
\`\`\`

**Expected output:** 3.0
**Actual output:** 3.0 (but getting error with empty list)

**What I've tried:**
- Checked the math manually
- Tested with different numbers
- The issue seems to happen when the list is empty

**Error message:**
\`ZeroDivisionError: division by zero\``
  },
  {
    title: "Poor Code Sharing Example",
    type: "bad",
    example: `my code doesnt work help

\`\`\`
def calc(nums):
    return sum(nums)/len(nums)
\`\`\`

why is this broken???`
  }
];

const platforms = [
  {
    name: "Reddit (r/CodingHelp)",
    icon: <Bot className="w-6 h-6" />,
    url: "https://reddit.com/r/CodingHelp",
    color: "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700",
    textColor: "text-gray-900 dark:text-gray-100",
    features: [
      "Use Reddit's code blocks with triple backticks",
      "Include programming language for syntax highlighting",
      "Use descriptive post titles",
      "Follow the subreddit rules and posting guidelines",
      "Search existing posts before asking"
    ],
    formatting: `\`\`\`python
def my_function():
    return "Hello World"
\`\`\``
  },
  {
    name: "Discord Server",
    icon: <MessageCircle className="w-6 h-6" />,
    url: "https://discord.gg/geQEUBm",
    color: "bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600",
    textColor: "text-gray-900 dark:text-gray-100",
    features: [
      "Use Discord's code blocks with triple backticks",
      "Specify the programming language for highlighting",
      "Use appropriate channels (#help, #python, #javascript, etc.)",
      "Be patient and respectful",
      "Use threads for longer discussions"
    ],
    formatting: `\`\`\`python
def my_function():
    return "Hello World"
\`\`\``
  }
];

const dontAskToAsk = {
  bad: [
    "Can someone help me with Python?",
    "Is anyone here good with JavaScript?",
    "Can I ask a question?",
    "Anyone available to help?",
    "Does anyone know React?"
  ],
  good: [
    "My Python function returns None instead of the expected string. Here's my code: [code block]",
    "Getting 'Cannot read property of undefined' error in JavaScript when accessing array elements",
    "How do I pass props between React components? Here's what I've tried: [code block]",
    "My SQL query returns duplicate rows. Expected 5 results, getting 10: [query]",
    "CSS flexbox not centering items vertically. Here's my current CSS: [code block]"
  ]
};

export default function HowToShareCodePage() {
  return (
    <PageLayout
      title="How to Share Code & Ask Questions"
      description="Learn the best practices for sharing code and asking questions in the CodingHelp community on Reddit and Discord."
      icon={<Code className="w-8 h-8 text-blue-600" />}
    >
      {/* Introduction */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Getting Help Effectively
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The key to getting quick, helpful responses is providing clear, detailed information about your problem. 
          This guide will show you exactly how to ask questions and share code in our community.
        </p>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            <strong>Remember:</strong> The more context you provide, the better help you'll receive!
          </p>
        </div>
      </div>

      {/* Don't Ask to Ask */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Don't Ask to Ask - Just Ask!
        </h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            What is "Don't Ask to Ask"?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Instead of asking permission to ask a question, just ask your question directly. This saves time 
            for everyone and gets you help faster.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                Don't Do This
              </h4>
              <ul className="space-y-2">
                {dontAskToAsk.bad.map((example, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 text-sm">
                    • "{example}"
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg border border-gray-400 dark:border-gray-600">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                Do This Instead
              </h4>
              <ul className="space-y-2">
                {dontAskToAsk.good.map((example, index) => (
                  <li key={index} className="text-gray-800 dark:text-gray-200 text-sm">
                    • "{example}"
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform-Specific Guidelines */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Platform-Specific Guidelines
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className={`p-6 rounded-lg border ${platform.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={platform.textColor}>
                  {platform.icon}
                </div>
                <h3 className={`text-lg font-semibold ${platform.textColor}`}>
                  {platform.name}
                </h3>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-auto ${platform.textColor} hover:underline`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <ul className={`space-y-2 mb-4 ${platform.textColor.replace('900', '800').replace('100', '200')}`}>
                {platform.features.map((feature, i) => (
                  <li key={i} className="text-sm">• {feature}</li>
                ))}
              </ul>
              
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Code formatting example:</p>
                <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
                  {platform.formatting}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Sharing Best Practices */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          How to Share Code Effectively
        </h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Essential Information to Include
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Description</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• What you're trying to accomplish</li>
                <li>• What's currently happening</li>
                <li>• What you expected to happen</li>
                <li>• Any error messages (full text)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Code & Context</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Relevant code (formatted properly)</li>
                <li>• Programming language/version</li>
                <li>• What you've already tried</li>
                <li>• Minimal reproducible example</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Examples: Good vs Bad
        </h2>
        
        <div className="flex flex-col gap-6">
          {codeExamples.map((example, index) => (
            <div key={index} className={`p-6 rounded-lg border ${
              example.type === 'good' 
                ? 'bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600' 
                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                example.type === 'good' 
                  ? 'text-gray-900 dark:text-gray-100' 
                  : 'text-gray-900 dark:text-gray-100'
              }`}>
                {example.type === 'good' ? <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <AlertTriangle className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                {example.title}
              </h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                  {example.example}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          ⚡ Quick Tips for Better Help
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Before Posting:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Search for similar questions first</li>
              <li>• Try debugging on your own</li>
              <li>• Create a minimal example</li>
              <li>• Check your code for typos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">When Posting:</h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
              <li>• Use descriptive titles</li>
              <li>• Format code properly</li>
              <li>• Be specific about the problem</li>
              <li>• Thank helpers and mark solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Links */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🤝 Join Our Community
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Ready to ask your first question? Join our friendly community of developers!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Discord Server</span>
          </a>
          <a
            href="https://reddit.com/r/CodingHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>Visit r/CodingHelp</span>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
