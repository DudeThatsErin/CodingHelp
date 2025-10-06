import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

export default function JavaScriptFundamentalsPage() {
  return (
    <PageLayout
      title="JavaScript Fundamentals"
      description="Learn the fundamental concepts of JavaScript including variables, functions, objects, and control flow that form the foundation of modern web development."
      icon={<div className="text-4xl">⚡</div>}
      previousLink={{
        href: "/languages/javascript",
        label: "Back to JavaScript"
      }}
      nextLink={{
        href: "/languages/javascript/async",
        label: "Next: Async JavaScript"
      }}
    >
      {/* Try This First Tutorial */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Try This First - Interactive JavaScript
        </h3>
        <div className="flex flex-col gap-6 text-gray-600 dark:text-gray-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <h4 className="font-semibold text-gray-900 dark:text-white" text-sm>Create variables and see their types</h4>
            </div>
            <p className="text-sm mb-3">Open your browser console (F12) and try:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`let name = "Alex"
const age = 25
let isActive = true
console.log(typeof name, typeof age, typeof isActive)`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <h4 className="font-semibold text-gray-900 dark:text-white" text-sm>Create and call a function</h4>
            </div>
            <p className="text-sm mb-3">Functions let you reuse code:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`function greet(person) {
  return \`Hello, \${person}!\`
}

console.log(greet("World"))
console.log(greet(name))`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <h4 className="font-semibold text-gray-900 dark:text-white" text-sm>Work with arrays and objects</h4>
            </div>
            <p className="text-sm mb-3">Store multiple values and access them:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`const colors = ["red", "green", "blue"]
const person = { name: "Sam", age: 30 }

console.log(colors[0])        // "red"
console.log(person.name)      // "Sam"
console.log(colors.length)    // 3`}</pre>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
              <h4 className="font-semibold text-gray-900 dark:text-white" text-sm>Use conditions to make decisions</h4>
            </div>
            <p className="text-sm mb-3">Control what happens based on data:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`if (age >= 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}

const status = isActive ? "online" : "offline"
console.log(status)`}</pre>
          </div>

          <div className="text-xs text-gray-400 mt-4">
            💡 Try modifying these examples with your own values to see how JavaScript responds!
          </div>
        </div>
      </div>

      {/* Variables and Data Types */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Variables and Data Types</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Variable Declarations</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Variable declarations
var oldWay = "Don't use this anymore";  // Function-scoped, hoisted
let modernWay = "Use this for variables that change";  // Block-scoped
const constant = "Use this for values that don't change";  // Block-scoped, immutable

// Data Types
let string = "Hello World";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbol = Symbol('unique');
let bigint = 123n;

// Objects
let object = { name: "Alice", age: 25 };
let array = [1, 2, 3, 4, 5];
let date = new Date();
let regex = /pattern/g;`}
          </pre>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">💡 Best Practices</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <li>• Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">const</code> by default</li>
            <li>• Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">let</code> when you need to reassign</li>
            <li>• Avoid <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var</code> in modern JavaScript</li>
            <li>• Use descriptive variable names</li>
          </ul>
        </div>
      </section>

      {/* Functions */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Functions</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Function Declarations and Expressions</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Function Declaration (hoisted)
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function Expression
const greetExpression = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow Functions (ES6+)
const greetArrow = (name) => \`Hello, \${name}!\`;
const add = (a, b) => a + b;
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Default Parameters
function greetWithDefault(name = "World") {
    return \`Hello, \${name}!\`;
}

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring Parameters
function createUser({name, age, email}) {
    return { name, age, email, id: Date.now() };
}

const user = createUser({name: "Alice", age: 25, email: "alice@example.com"});`}
          </pre>
        </div>
      </section>

      {/* Objects and Arrays */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Objects and Arrays</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Working with Objects</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Object Creation
const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "coding"],
    greet() {
        return \`Hi, I'm \${this.name}\`;
    }
};

// Object Destructuring
const {name, age} = person;
const {name: personName, age: personAge} = person;

// Object Methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Spread Operator
const updatedPerson = {...person, age: 26, city: "New York"};

// Object.assign()
const merged = Object.assign({}, person, {profession: "Developer"});`}
          </pre>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Array Methods</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Transforming Arrays
const doubled = numbers.map(n => n * 2);
const uppercased = fruits.map(fruit => fruit.toUpperCase());

// Filtering Arrays
const evens = numbers.filter(n => n % 2 === 0);
const longFruits = fruits.filter(fruit => fruit.length > 5);

// Reducing Arrays
const sum = numbers.reduce((total, n) => total + n, 0);
const concatenated = fruits.reduce((result, fruit) => result + fruit + " ", "");

// Finding Elements
const found = numbers.find(n => n > 3);
const foundIndex = numbers.findIndex(n => n > 3);

// Checking Conditions
const allPositive = numbers.every(n => n > 0);
const hasEven = numbers.some(n => n % 2 === 0);

// Array Destructuring
const [first, second, ...rest] = numbers;`}
          </pre>
        </div>
      </section>

      {/* Control Flow */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Control Flow</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Conditionals and Loops</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Conditionals
const age = 25;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Ternary Operator
const status = age >= 18 ? "Adult" : "Minor";

// Switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(index, fruits[index]);
}

// While Loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// forEach
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});`}
          </pre>
        </div>
      </section>

      {/* Error Handling */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Error Handling</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Try-Catch and Error Types</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Basic Error Handling
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("Something went wrong:", error.message);
} finally {
    console.log("This always runs");
}

// Throwing Custom Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Different Error Types
try {
    JSON.parse("invalid json");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON syntax");
    } else if (error instanceof ReferenceError) {
        console.log("Variable not defined");
    } else {
        console.log("Unknown error:", error.message);
    }
}

// Async Error Handling
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error; // Re-throw if needed
    }
}`}
          </pre>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/languages/javascript"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to JavaScript</span>
        </Link>
        <Link
          href="/languages/javascript/frameworks"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Frameworks</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
