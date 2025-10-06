import Link from 'next/link';
import { Zap, Code, Shield, Globe, Star, Users, ArrowRight, ExternalLink, Layers, BookOpen, Cpu } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { FeatureList } from '@/components/FeatureList';
import { InfoCard } from '@/components/InfoCard';
import { CodeBlock } from '@/components/CodeBlock';

const cppFeatures = [
  {
    title: 'High Performance',
    description: 'Direct memory management and compiled code for maximum speed and efficiency',
    icon: <Zap className="w-5 h-5" />,
    details: 'C++ compiles to native machine code with minimal runtime overhead'
  },
  {
    title: 'Low-Level Control',
    description: 'Fine-grained control over system resources and hardware',
    icon: <Code className="w-5 h-5" />,
    details: 'Direct memory management, pointer arithmetic, and hardware access'
  },
  {
    title: 'Multi-Paradigm',
    description: 'Supports procedural, object-oriented, and generic programming',
    icon: <Users className="w-5 h-5" />,
    details: 'Flexible programming approach supporting multiple coding styles'
  },
  {
    title: 'Standard Library',
    description: 'Rich STL (Standard Template Library) with containers, algorithms, and iterators',
    icon: <Star className="w-5 h-5" />,
    details: 'Comprehensive collection of data structures and algorithms'
  },
  {
    title: 'Memory Safety',
    description: 'Modern C++ features like smart pointers and RAII for safer memory management',
    icon: <Shield className="w-5 h-5" />,
    details: 'RAII principle and smart pointers help prevent memory leaks'
  },
  {
    title: 'Template System',
    description: 'Powerful template metaprogramming for generic and efficient code',
    icon: <Layers className="w-5 h-5" />,
    details: 'Compile-time code generation for type-safe generic programming'
  }
];

const cppSections = [
  {
    title: 'C++ Fundamentals',
    description: 'Master basic syntax, data types, control flow, functions, and memory management',
    href: '/languages/cpp/fundamentals',
    icon: <BookOpen className="w-6 h-6" />,
    topics: ['Basic Syntax', 'Data Types & Pointers', 'Control Flow', 'Functions', 'Memory Management'],
    difficulty: 'Beginner to Intermediate',
    estimatedTime: '4-5 hours'
  },
  {
    title: 'OOP & Classes',
    description: 'Learn classes, inheritance, polymorphism, and advanced OOP concepts',
    href: '/languages/cpp/oop',
    icon: <Layers className="w-6 h-6" />,
    topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Virtual Functions', 'Operator Overloading'],
    difficulty: 'Intermediate',
    estimatedTime: '5-6 hours'
  },
  {
    title: 'Advanced Features',
    description: 'Explore templates, STL, modern C++ features, and performance optimization',
    href: '/languages/cpp/advanced',
    icon: <Cpu className="w-6 h-6" />,
    topics: ['Templates', 'STL Containers', 'Modern C++', 'Lambda Functions', 'Performance Tips'],
    difficulty: 'Advanced',
    estimatedTime: '6-8 hours'
  }
];

const cppUseCases = [
  {
    category: 'Game Development',
    description: 'High-performance games and game engines',
    examples: ['Unreal Engine', 'Unity (core)', 'AAA games', 'Graphics programming'],
    frameworks: ['Unreal Engine', 'SFML', 'SDL', 'OpenGL', 'DirectX'],
    popularity: 'Very High',
    difficulty: 'Intermediate to Advanced',
    details: 'C++ dominates game development due to its performance and low-level control'
  },
  {
    category: 'System Programming',
    description: 'Operating systems, drivers, and embedded systems',
    examples: ['Windows OS', 'Linux kernel parts', 'Device drivers', 'Firmware'],
    frameworks: ['Win32 API', 'POSIX', 'Embedded frameworks', 'Real-time OS'],
    popularity: 'Very High',
    difficulty: 'Advanced',
    details: 'Essential for system-level programming where performance and control are critical'
  },
  {
    category: 'High-Performance Applications',
    description: 'Applications requiring maximum speed and efficiency',
    examples: ['Trading systems', 'Scientific computing', 'Database engines', 'Compilers'],
    frameworks: ['Boost', 'Intel TBB', 'OpenMP', 'MPI', 'CUDA'],
    popularity: 'High',
    difficulty: 'Advanced',
    details: 'Used where every microsecond matters and maximum performance is required'
  },
  {
    category: 'Embedded Systems',
    description: 'Programming for resource-constrained devices',
    examples: ['IoT devices', 'Automotive systems', 'Medical devices', 'Robotics'],
    frameworks: ['Arduino', 'mbed', 'FreeRTOS', 'Zephyr', 'Platform IO'],
    popularity: 'High',
    difficulty: 'Intermediate to Advanced',
    details: 'Ideal for embedded systems due to efficient memory usage and hardware control'
  }
];

const cppLearningPath = [
  {
    phase: 'C++ Fundamentals',
    duration: '3-5 weeks',
    topics: ['Basic syntax', 'Variables and data types', 'Control structures', 'Functions', 'Arrays and pointers'],
    projects: ['Calculator', 'Number guessing game', 'Simple text processor']
  },
  {
    phase: 'Object-Oriented Programming',
    duration: '4-6 weeks',
    topics: ['Classes and objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Constructors/destructors'],
    projects: ['Student management system', 'Shape hierarchy', 'Bank account simulator']
  },
  {
    phase: 'Advanced C++',
    duration: '6-8 weeks',
    topics: ['Templates', 'STL containers', 'Memory management', 'Exception handling', 'File I/O'],
    projects: ['Generic data structures', 'File manager', 'Custom containers']
  },
  {
    phase: 'Modern C++',
    duration: '6-10 weeks',
    topics: ['C++11/14/17/20 features', 'Smart pointers', 'Lambda expressions', 'Multithreading', 'Move semantics'],
    projects: ['Multi-threaded application', 'Modern C++ library', 'Performance-critical application']
  }
];

const cppResources = [
  {
    category: 'Official Documentation',
    resources: [
      { name: 'cppreference.com', url: 'https://en.cppreference.com/', description: 'Comprehensive C++ reference' },
      { name: 'ISO C++ Standard', url: 'https://isocpp.org/', description: 'Official C++ standards committee' },
      { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/', description: 'Best practices by Bjarne Stroustrup' }
    ]
  },
  {
    category: 'Learning Platforms',
    resources: [
      { name: 'Learn C++', url: 'https://www.learncpp.com/', description: 'Comprehensive free C++ tutorial' },
      { name: 'C++ Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/learn-c-plus-plus', description: 'Interactive C++ course' },
      { name: 'C++ Coursera Courses', url: 'https://www.coursera.org/courses?query=c%2B%2B', description: 'University-level C++ courses' }
    ]
  },
  {
    category: 'Books & References',
    resources: [
      { name: 'The C++ Programming Language', url: 'https://www.stroustrup.com/4th.html', description: 'By Bjarne Stroustrup (C++ creator)' },
      { name: 'Effective C++', url: 'https://www.aristeia.com/books.html', description: 'Best practices by Scott Meyers' },
      { name: 'C++ Primer', url: 'https://www.informit.com/store/c-plus-plus-primer-9780321714114', description: 'Comprehensive beginner to advanced guide' }
    ]
  },
  {
    category: 'Tools & IDEs',
    resources: [
      { name: 'Visual Studio', url: 'https://visualstudio.microsoft.com/', description: 'Microsoft\'s full-featured IDE' },
      { name: 'CLion', url: 'https://www.jetbrains.com/clion/', description: 'JetBrains C++ IDE' },
      { name: 'Code::Blocks', url: 'https://www.codeblocks.org/', description: 'Free, cross-platform C++ IDE' }
    ]
  }
];

const cppLibraries = [
  {
    name: 'Standard Template Library (STL)',
    description: 'Built-in library with containers, algorithms, and iterators',
    useCases: ['Data structures', 'Algorithms', 'String processing', 'I/O operations'],
    difficulty: 'Beginner',
    popularity: 'Very High'
  },
  {
    name: 'Boost',
    description: 'High-quality portable C++ libraries',
    useCases: ['Advanced data structures', 'Networking', 'Threading', 'Math operations'],
    difficulty: 'Intermediate',
    popularity: 'Very High'
  },
  {
    name: 'Qt',
    description: 'Cross-platform application development framework',
    useCases: ['GUI applications', 'Desktop apps', 'Mobile apps', 'Embedded systems'],
    difficulty: 'Intermediate',
    popularity: 'High'
  },
  {
    name: 'OpenCV',
    description: 'Computer vision and image processing library',
    useCases: ['Image processing', 'Computer vision', 'Machine learning', 'Robotics'],
    difficulty: 'Intermediate',
    popularity: 'High'
  }
];

export default function CppPage() {
  return (
    <PageLayout
      title="C++"
      description="C++ is a general-purpose programming language created as an extension of C. Known for its performance, flexibility, and extensive use in system software, game development, and applications requiring high computational efficiency."
      icon={<div className="text-4xl">🔥</div>}
      previousLink={{
        href: "/languages/java",
        label: "Previous: Java"
      }}
      nextLink={{
        href: "/languages/csharp",
        label: "Next: C#"
      }}
    >

      <QuickStats stats={[
        { 
          value: "1985", 
          label: "First Released",
          icon: <Code className="w-5 h-5" />
        },
        { 
          value: "Advanced", 
          label: "Difficulty Level",
          icon: <Zap className="w-5 h-5" />
        },
        { 
          value: "High", 
          label: "Popularity",
          icon: <Star className="w-5 h-5" />
        },
        { 
          value: "Systems", 
          label: "Primary Use",
          icon: <Cpu className="w-5 h-5" />
        }
      ]} />

      {/* Learning Sections */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          C++ Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {cppSections.map((section, index) => (
            <Link key={index} href={section.href} className="block group">
              <div className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-start flex flex-col gap-3">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {section.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          section.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          section.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                          section.difficulty.includes('Advanced') ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                          'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                        }`}>
                          {section.difficulty}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{section.estimatedTime}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{section.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {section.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose C++?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cppFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Can You Build with C++?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cppUseCases.map((useCase, index) => (
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
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-1">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
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
          C++ Code Example
        </h2>
        <div className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-4">
            Hello World & Basic Class Example
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}

// Basic Class Example
#include <iostream>
#include <string>
using namespace std;

class Person {
private:
    string name;
    int age;

public:
    // Constructor
    Person(string n, int a) : name(n), age(a) {}
    
    // Getter methods
    string getName() const { return name; }
    int getAge() const { return age; }
    
    // Method
    void introduce() const {
        cout << "Hi, I'm " << name << " and I'm " << age << " years old." << endl;
    }
};

int main() {
    Person person("Alice", 25);
    person.introduce();
    return 0;
}

// Modern C++ with STL
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9};
    
    // Sort using STL algorithm
    sort(numbers.begin(), numbers.end());
    
    // Print using range-based for loop (C++11)
    for (const auto& num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          C++ Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {cppLearningPath.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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

      {/* Popular Libraries */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Popular C++ Libraries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cppLibraries.map((library, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{library.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    library.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    library.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {library.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    library.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    library.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {library.popularity}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{library.description}</p>
              <div className="flex flex-wrap gap-1">
                {library.useCases.map((useCase, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
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
          C++ Learning Resources
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {cppResources.map((category, index) => (
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

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          C++ Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Beginner Projects */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">🟢 Beginner Projects</h3>
            <ul className="flex flex-col gap-2 text-green-800 dark:text-green-200 text-sm">
              <li>• <strong>Console Calculator:</strong> Advanced calculator with expression parsing</li>
              <li>• <strong>Student Grade Manager:</strong> Store and calculate student grades</li>
              <li>• <strong>Simple Text Editor:</strong> Basic text manipulation and file I/O</li>
              <li>• <strong>Number Base Converter:</strong> Convert between binary, decimal, hex</li>
              <li>• <strong>Hangman Game:</strong> Word guessing game with ASCII art</li>
              <li>• <strong>Contact Manager:</strong> Store contacts with search functionality</li>
            </ul>
          </div>

          {/* Intermediate Projects */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">🟡 Intermediate Projects</h3>
            <ul className="flex flex-col gap-2 text-yellow-800 dark:text-yellow-200 text-sm">
              <li>• <strong>2D Game Engine:</strong> Simple game engine with SDL or SFML</li>
              <li>• <strong>File Compression:</strong> Implement Huffman coding algorithm</li>
              <li>• <strong>Database System:</strong> Simple relational database with B-trees</li>
              <li>• <strong>Network Chat Server:</strong> Multi-client chat with sockets</li>
              <li>• <strong>Image Processing:</strong> Apply filters and transformations</li>
              <li>• <strong>Memory Allocator:</strong> Custom memory management system</li>
            </ul>
          </div>

          {/* Advanced Projects */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">🔴 Advanced Projects</h3>
            <ul className="flex flex-col gap-2 text-red-800 dark:text-red-200 text-sm">
              <li>• <strong>3D Graphics Engine:</strong> OpenGL-based rendering engine</li>
              <li>• <strong>Operating System Kernel:</strong> Basic OS with memory management</li>
              <li>• <strong>Compiler/Interpreter:</strong> Build a programming language</li>
              <li>• <strong>High-Frequency Trading:</strong> Low-latency trading system</li>
              <li>• <strong>Ray Tracer:</strong> Photorealistic rendering engine</li>
              <li>• <strong>Distributed System:</strong> Multi-node distributed computing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with C++
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install a C++ Compiler</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">GCC, Clang, or MSVC depending on your platform</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose an IDE or Editor</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Visual Studio, CLion, Code::Blocks, or VS Code</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Write Your First Program</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Start with "Hello, World!" to test your setup</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Master the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Focus on pointers, memory management, and OOP concepts</p>
            </div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

