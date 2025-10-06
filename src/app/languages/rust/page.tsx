import Link from 'next/link';
import { Zap, Shield, Code, Globe, Star, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const rustFeatures = [
  {
    title: 'Memory Safety',
    description: 'Prevents memory leaks, buffer overflows, and null pointer dereferences at compile time',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Zero-Cost Abstractions',
    description: 'High-level features with no runtime overhead - performance of C with safety of higher-level languages',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Ownership System',
    description: 'Unique ownership model eliminates data races and ensures thread safety',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Cargo Package Manager',
    description: 'Built-in package manager and build system makes dependency management effortless',
    icon: <Star className="w-5 h-5" />
  }
];

const rustUseCases = [
  {
    category: 'Systems Programming',
    description: 'Operating systems, embedded systems, and low-level programming',
    examples: ['Operating systems', 'Device drivers', 'Embedded systems', 'Firmware'],
    popularity: 'Very High'
  },
  {
    category: 'Web Backend',
    description: 'High-performance web servers and APIs',
    examples: ['Web servers', 'REST APIs', 'Microservices', 'Database systems'],
    popularity: 'High'
  },
  {
    category: 'Blockchain & Crypto',
    description: 'Cryptocurrency and blockchain development',
    examples: ['Blockchain platforms', 'Cryptocurrency', 'Smart contracts', 'DeFi protocols'],
    popularity: 'Very High'
  },
  {
    category: 'Game Development',
    description: 'Performance-critical game engines and games',
    examples: ['Game engines', '3D graphics', 'Simulation', 'Real-time systems'],
    popularity: 'Medium'
  }
];

const rustLearningPath = [
  {
    phase: 'Rust Fundamentals',
    duration: '3-5 weeks',
    topics: ['Basic syntax', 'Variables and mutability', 'Data types', 'Functions', 'Control flow'],
    projects: ['Hello World', 'Guessing game', 'Temperature converter']
  },
  {
    phase: 'Ownership & Borrowing',
    duration: '4-6 weeks',
    topics: ['Ownership rules', 'References and borrowing', 'Slices', 'String types', 'Memory management'],
    projects: ['String manipulator', 'File reader', 'Simple calculator']
  },
  {
    phase: 'Structs & Enums',
    duration: '3-5 weeks',
    topics: ['Structs and methods', 'Enums and pattern matching', 'Option and Result', 'Error handling'],
    projects: ['Rectangle calculator', 'CLI tool', 'Error handling system']
  },
  {
    phase: 'Advanced Concepts',
    duration: '6-8 weeks',
    topics: ['Traits and generics', 'Lifetimes', 'Closures', 'Iterators', 'Smart pointers'],
    projects: ['Generic data structures', 'Multi-threaded application', 'Web server']
  }
];

const rustResources = [
  {
    category: 'Official Documentation',
    resources: [
      { name: 'The Rust Programming Language', url: 'https://doc.rust-lang.org/book/', description: 'Official Rust book (free online)' },
      { name: 'Rust by Example', url: 'https://doc.rust-lang.org/rust-by-example/', description: 'Learn Rust through examples' },
      { name: 'Rust Reference', url: 'https://doc.rust-lang.org/reference/', description: 'Comprehensive language reference' }
    ]
  },
  {
    category: 'Learning Platforms',
    resources: [
      { name: 'Rustlings', url: 'https://github.com/rust-lang/rustlings', description: 'Interactive Rust exercises' },
      { name: 'Exercism Rust Track', url: 'https://exercism.org/tracks/rust', description: 'Coding exercises with mentoring' },
      { name: 'Rust Course - Udemy', url: 'https://www.udemy.com/courses/search/?q=rust+programming', description: 'Comprehensive Rust courses' }
    ]
  },
  {
    category: 'Books & References',
    resources: [
      { name: 'Programming Rust', url: 'https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/', description: 'Comprehensive Rust guide by O\'Reilly' },
      { name: 'Rust in Action', url: 'https://www.manning.com/books/rust-in-action', description: 'Practical Rust programming' },
      { name: 'The Rustonomicon', url: 'https://doc.rust-lang.org/nomicon/', description: 'Advanced unsafe Rust programming' }
    ]
  },
  {
    category: 'Tools & IDEs',
    resources: [
      { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Lightweight editor with rust-analyzer' },
      { name: 'IntelliJ Rust', url: 'https://www.jetbrains.com/rust/', description: 'JetBrains Rust plugin' },
      { name: 'Vim/Neovim', url: 'https://github.com/rust-lang/rust.vim', description: 'Rust support for Vim editors' }
    ]
  }
];

const rustFrameworks = [
  {
    name: 'Actix Web',
    description: 'Powerful, pragmatic, and extremely fast web framework',
    useCases: ['Web applications', 'REST APIs', 'Microservices', 'High-performance servers'],
    difficulty: 'Intermediate',
    popularity: 'Very High'
  },
  {
    name: 'Rocket',
    description: 'Type-safe, fast web framework with focus on usability',
    useCases: ['Web APIs', 'Web applications', 'JSON APIs', 'Template rendering'],
    difficulty: 'Beginner',
    popularity: 'High'
  },
  {
    name: 'Tokio',
    description: 'Asynchronous runtime for building reliable network applications',
    useCases: ['Async programming', 'Network services', 'Concurrent applications', 'I/O operations'],
    difficulty: 'Advanced',
    popularity: 'Very High'
  },
  {
    name: 'Serde',
    description: 'Framework for serializing and deserializing Rust data structures',
    useCases: ['JSON processing', 'Data serialization', 'API development', 'Configuration files'],
    difficulty: 'Beginner',
    popularity: 'Very High'
  }
];

export default function RustPage() {
  return (
    <PageLayout
      title="Rust"
      description="Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It achieves memory safety without garbage collection."
      icon={<div className="text-4xl">🦀</div>}
      previousLink={{
        href: "/languages/go",
        label: "Previous: Go"
      }}
      nextLink={{
        href: "/languages",
        label: "Back to Languages"
      }}
    >
      <QuickStats stats={[
        { 
          value: "2010", 
          label: "First Released",
          icon: <Code className="w-5 h-5" />
        },
        { 
          value: "Advanced", 
          label: "Difficulty Level",
          icon: <Shield className="w-5 h-5" />
        },
        { 
          value: "Growing", 
          label: "Popularity",
          icon: <Star className="w-5 h-5" />
        },
        { 
          value: "Systems", 
          label: "Primary Use",
          icon: <Zap className="w-5 h-5" />
        }
      ]} />

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Rust?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rustFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with Rust?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rustUseCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{useCase.category}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                  'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                }`}>
                  {useCase.popularity}
                </span>
              </div>
              <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-1">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Rust Code Example
        </h2>
        <div className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-4">
            Hello World & Ownership Example
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World
fn main() {
    println!("Hello, World!");
}

// Basic Struct and Implementation
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
    
    fn introduce(&self) {
        println!("Hi, I'm {} and I'm {} years old.", self.name, self.age);
    }
}

fn main() {
    let person = Person::new("Alice".to_string(), 25);
    person.introduce();
}

// Ownership and Error Handling
use std::fs::File;
use std::io::Read;

fn read_file_contents(filename: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(filename)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    match read_file_contents("example.txt") {
        Ok(contents) => println!("File contents: {}", contents),
        Err(error) => println!("Error reading file: {}", error),
    }
}

// Pattern Matching with Enums
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn process_message(msg: Message) {
    match msg {
        Message::Quit => println!("Quit message received"),
        Message::Move { x, y } => println!("Move to coordinates: ({}, {})", x, y),
        Message::Write(text) => println!("Text message: {}", text),
        Message::ChangeColor(r, g, b) => println!("Change color to RGB({}, {}, {})", r, g, b),
    }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Rust Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {rustLearningPath.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{phase.phase}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{phase.duration}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2 text-sm">Topics to Learn:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                    {phase.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2 text-sm">Practice Projects:</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                    {phase.projects.map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Frameworks */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular Rust Frameworks & Crates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rustFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    framework.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {framework.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    framework.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    framework.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {framework.popularity}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{framework.description}</p>
              <div className="flex flex-wrap gap-1">
                {framework.useCases.map((useCase, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Rust Learning Resources
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {rustResources.map((category, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.resources.map((resource, i) => (
                  <div key={i} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">{resource.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      Visit Resource <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Getting Started with Rust
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install Rust</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use rustup to install Rust and Cargo from rustup.rs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Read "The Book"</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with "The Rust Programming Language" official book</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Practice with Rustlings</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Complete interactive exercises to learn Rust concepts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Build Real Projects</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Create CLI tools, web servers, or contribute to open source</p>
            </div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

