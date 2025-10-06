import Link from 'next/link';
import { Code, Play, CheckCircle, BookOpen, Lightbulb, ArrowRight, ExternalLink, AlertCircle, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { GettingStartedSection } from '@/components/GettingStartedSection';

const languageExamples = [
  {
    language: 'Python',
    icon: '🐍',
    code: `# Your first Python program
print("Hello, World!")

# Variables and basic operations
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old")

# Simple calculation
x = 10
y = 5
result = x + y
print(f"{x} + {y} = {result}")`,
    explanation: 'Python uses simple, readable syntax. The print() function displays text, and f-strings make it easy to include variables in your output.',
    runInstructions: [
      'Save the code in a file called hello.py',
      'Open terminal/command prompt',
      'Navigate to the file location',
      'Run: python hello.py'
    ]
  },
  {
    language: 'JavaScript',
    icon: '🟨',
    code: `// Your first JavaScript program
console.log("Hello, World!");

// Variables and basic operations
let name = "Alice";
let age = 25;
console.log(\`My name is \${name} and I'm \${age} years old\`);

// Simple calculation
let x = 10;
let y = 5;
let result = x + y;
console.log(\`\${x} + \${y} = \${result}\`);`,
    explanation: 'JavaScript uses console.log() to display output. Template literals (backticks) make it easy to include variables in strings.',
    runInstructions: [
      'Save the code in a file called hello.js',
      'Open terminal/command prompt',
      'Navigate to the file location',
      'Run: node hello.js'
    ]
  },
  {
    language: 'Java',
    icon: '☕',
    code: `// Your first Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables and basic operations
        String name = "Alice";
        int age = 25;
        System.out.println("My name is " + name + " and I'm " + age + " years old");
        
        // Simple calculation
        int x = 10;
        int y = 5;
        int result = x + y;
        System.out.println(x + " + " + y + " = " + result);
    }
}`,
    explanation: 'Java requires a class structure and a main method. System.out.println() displays output, and you need to declare variable types.',
    runInstructions: [
      'Save the code in a file called HelloWorld.java',
      'Open terminal/command prompt',
      'Compile: javac HelloWorld.java',
      'Run: java HelloWorld'
    ]
  }
];

const programmingConcepts = [
  {
    concept: 'Variables',
    description: 'Store data values that can be used and changed',
    example: 'name = "Alice" stores the text "Alice" in a variable called name'
  },
  {
    concept: 'Functions',
    description: 'Reusable blocks of code that perform specific tasks',
    example: 'print() is a function that displays text on the screen'
  },
  {
    concept: 'Data Types',
    description: 'Different kinds of data like text, numbers, true/false',
    example: '"Hello" is text, 42 is a number, True is a boolean'
  },
  {
    concept: 'Comments',
    description: 'Notes in your code that explain what it does',
    example: '# This is a comment in Python, // This is a comment in JavaScript'
  }
];

const commonErrors = [
  {
    error: 'Syntax Error',
    description: 'Typos or incorrect code structure',
    example: 'Missing quotes, parentheses, or semicolons',
    solution: 'Check for typos and make sure all brackets/quotes are closed'
  },
  {
    error: 'Name Error',
    description: 'Using a variable that doesn\'t exist',
    example: 'print(nam) when you meant print(name)',
    solution: 'Check variable names for typos and make sure they\'re defined'
  },
  {
    error: 'Indentation Error',
    description: 'Incorrect spacing (mainly in Python)',
    example: 'Mixing tabs and spaces, or wrong indentation level',
    solution: 'Use consistent indentation (4 spaces is standard)'
  }
];

export default function FirstProgramPage() {
  return (
    <PageLayout
      title="Your First Program"
      description="Let's write your first program! We'll start with the classic 'Hello, World!' program in different programming languages to get you familiar with basic syntax."
      icon={<div className="text-4xl">🎆</div>}
      previousLink={{
        href: "/getting-started/setup",
        label: "Previous: Development Setup"
      }}
      nextLink={{
        href: "/getting-started",
        label: "Back to Getting Started"
      }}
    >

      {/* Why Hello World */}
      <div className="py-4">
        <h3 className="text-lg font-semibold pb-4">
          🌍 Why "Hello, World!"?
        </h3>
        <div className="pb-4">
          <p>
            The "Hello, World!" program is a time-honored tradition in programming. It's usually the first 
            program that new programmers write because it:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
            <li>Tests that your development environment is working correctly</li>
            <li>Introduces basic syntax of the programming language</li>
            <li>Gives you the satisfaction of running your first program</li>
            <li>Connects you to a long tradition of programmers</li>
          </ul>
        </div>
      </div>

      {/* Language Examples */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hello World in Different Languages
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {languageExamples.map((lang, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-900 px-6 py-3 border-b border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {lang.language}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4 md:gap-6">
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-gray-100 dark:bg-gray-900 p-4 rounded">
                  <code>{lang.code}</code>
                </pre>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {lang.explanation}
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">
                    How to Run:
                  </h4>
                  <ol className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
                    {lang.runInstructions.map((instruction, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programming Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Basic Programming Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmingConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{concept.concept}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{concept.description}</p>
              <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs">
                <strong>Example:</strong> {concept.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Exercise */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          🎯 Try It Yourself
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-purple-800 dark:text-purple-200">
            Now it's your turn! Try modifying the Hello World program:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Easy Challenges:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
                <li>Change "Hello, World!" to your name</li>
                <li>Add another print statement</li>
                <li>Create variables for your age and city</li>
                <li>Try different text and numbers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Next Steps:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
                <li>Ask the user for their name (input)</li>
                <li>Use an if statement for conditions</li>
                <li>Create a simple loop</li>
                <li>Write a basic function</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Common Errors */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Common Beginner Errors
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {commonErrors.map((error, index) => (
            <div key={index} className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-900 dark:text-red-100">{error.error}</h4>
                  <p className="text-red-800 dark:text-red-200 text-sm mb-2">{error.description}</p>
                  <p className="text-red-700 dark:text-red-300 text-xs mb-2">
                    <strong>Example:</strong> {error.example}
                  </p>
                  <p className="text-red-700 dark:text-red-300 text-xs">
                    <strong>Solution:</strong> {error.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Debugging Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          🐛 Debugging Tips for Beginners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">When Your Code Doesn't Work:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Read the error message carefully</li>
              <li>Check for typos in variable names</li>
              <li>Make sure all brackets and quotes match</li>
              <li>Try running the code line by line</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Good Debugging Habits:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
              <li>Add print statements to see what's happening</li>
              <li>Test small pieces of code separately</li>
              <li>Use your editor's syntax highlighting</li>
              <li>Don't be afraid to start over with a simpler version</li>
              <li>Ask for help when you're stuck</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Celebration */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <div className="text-center flex flex-col gap-4 md:gap-6">
          <div className="text-4xl">🎉</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Congratulations!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            You've just written your first program! This is the beginning of an exciting journey. 
            Every expert programmer started exactly where you are now.
          </p>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium">First Program Complete!</span>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
          🚀 What's Next?
        </h3>
        <div className="flex flex-col gap-3 text-yellow-800 dark:text-yellow-200">
          <p>Now that you've written your first program, here are some great next steps:</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-2">
            <li>Explore more about your chosen programming language</li>
            <li>Learn about variables, loops, and functions in depth</li>
            <li>Try building a simple calculator or guessing game</li>
            <li>Join programming communities and forums</li>
            <li>Start working on small projects that interest you</li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/getting-started/setup"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" suppressHydrationWarning />
          <span>Previous: Setting Up Environment</span>
        </Link>
        <Link
          href="/languages"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Explore Languages</span>
          <ArrowLeft className="w-4 h-4 rotate-180" suppressHydrationWarning />
        </Link>
      </div>
    </PageLayout>
  );
}
