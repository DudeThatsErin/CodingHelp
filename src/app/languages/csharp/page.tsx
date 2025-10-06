import Link from 'next/link';
import { Code, Shield, Layers, Globe, Star, Users, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const csharpFeatures = [
  {
    title: 'Type Safety',
    description: 'Strong typing system prevents many common programming errors at compile time',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Garbage Collection',
    description: 'Automatic memory management eliminates memory leaks and dangling pointers',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Cross-Platform',
    description: 'Run on Windows, macOS, and Linux with .NET Core/.NET 5+',
    icon: <Users className="w-5 h-5" />
  },
  {
    title: 'Rich Ecosystem',
    description: 'Extensive .NET ecosystem with NuGet packages and frameworks',
    icon: <Star className="w-5 h-5" />
  }
];

const csharpUseCases = [
  {
    category: 'Web Development',
    description: 'Server-side web applications and APIs with ASP.NET',
    examples: ['Web applications', 'REST APIs', 'Microservices', 'Blazor apps'],
    popularity: 'Very High'
  },
  {
    category: 'Desktop Applications',
    description: 'Windows desktop applications and cross-platform apps',
    examples: ['WPF apps', 'WinForms', 'MAUI apps', 'Console applications'],
    popularity: 'High'
  },
  {
    category: 'Game Development',
    description: 'Game development with Unity engine',
    examples: ['Unity games', '2D/3D games', 'Mobile games', 'VR/AR applications'],
    popularity: 'Very High'
  },
  {
    category: 'Enterprise Software',
    description: 'Large-scale business applications and services',
    examples: ['Enterprise systems', 'Business applications', 'Cloud services', 'Database applications'],
    popularity: 'Very High'
  }
];

const csharpLearningPath = [
  {
    phase: 'C# Fundamentals',
    duration: '2-4 weeks',
    topics: ['Basic syntax', 'Variables and data types', 'Control structures', 'Methods', 'Arrays and collections'],
    projects: ['Calculator', 'To-do list', 'Number guessing game']
  },
  {
    phase: 'Object-Oriented Programming',
    duration: '3-5 weeks',
    topics: ['Classes and objects', 'Inheritance', 'Polymorphism', 'Interfaces', 'Properties'],
    projects: ['Library management system', 'Employee management', 'Shape calculator']
  },
  {
    phase: 'Advanced C#',
    duration: '4-6 weeks',
    topics: ['LINQ', 'Generics', 'Exception handling', 'File I/O', 'Delegates and events'],
    projects: ['Data processing application', 'Event-driven system', 'File manager']
  },
  {
    phase: 'Frameworks & Development',
    duration: '6-8 weeks',
    topics: ['ASP.NET Core', 'Entity Framework', 'Unit testing', 'Dependency injection', 'Web APIs'],
    projects: ['Web application', 'REST API service', 'Database-driven app']
  }
];

const csharpResources = [
  {
    category: 'Official Documentation',
    resources: [
      { name: 'Microsoft C# Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/', description: 'Official C# documentation' },
      { name: '.NET Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/', description: 'Complete .NET platform docs' },
      { name: 'C# Programming Guide', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/', description: 'Comprehensive programming guide' }
    ]
  },
  {
    category: 'Learning Platforms',
    resources: [
      { name: 'Microsoft Learn', url: 'https://docs.microsoft.com/en-us/learn/dotnet/', description: 'Free Microsoft learning platform' },
      { name: 'C# Codecademy Course', url: 'https://www.codecademy.com/learn/learn-c-sharp', description: 'Interactive C# programming course' },
      { name: 'Pluralsight C# Path', url: 'https://www.pluralsight.com/paths/csharp', description: 'Comprehensive C# learning path' }
    ]
  },
  {
    category: 'Books & References',
    resources: [
      { name: 'C# in Depth', url: 'https://www.manning.com/books/c-sharp-in-depth-fourth-edition', description: 'Advanced C# concepts by Jon Skeet' },
      { name: 'Pro C# 9 with .NET 5', url: 'https://www.apress.com/gp/book/9781484269381', description: 'Comprehensive C# and .NET guide' },
      { name: 'Clean Code in C#', url: 'https://www.packtpub.com/product/clean-code-in-c/9781838982973', description: 'Best practices for C# development' }
    ]
  },
  {
    category: 'Tools & IDEs',
    resources: [
      { name: 'Visual Studio', url: 'https://visualstudio.microsoft.com/', description: 'Full-featured IDE for .NET development' },
      { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Lightweight editor with C# extensions' },
      { name: 'JetBrains Rider', url: 'https://www.jetbrains.com/rider/', description: 'Cross-platform .NET IDE' }
    ]
  }
];

const csharpFrameworks = [
  {
    name: 'ASP.NET Core',
    description: 'Modern web framework for building web apps and APIs',
    useCases: ['Web applications', 'REST APIs', 'Microservices', 'Real-time apps'],
    difficulty: 'Intermediate',
    popularity: 'Very High'
  },
  {
    name: 'Entity Framework Core',
    description: 'Object-relational mapping (ORM) framework for database operations',
    useCases: ['Database applications', 'Data access layer', 'CRUD operations', 'Migrations'],
    difficulty: 'Beginner',
    popularity: 'Very High'
  },
  {
    name: 'Blazor',
    description: 'Framework for building interactive web UIs using C#',
    useCases: ['Single-page applications', 'Interactive web apps', 'Component-based UIs'],
    difficulty: 'Intermediate',
    popularity: 'High'
  },
  {
    name: 'MAUI',
    description: 'Multi-platform app UI framework for cross-platform development',
    useCases: ['Mobile apps', 'Desktop apps', 'Cross-platform UIs', 'Native apps'],
    difficulty: 'Intermediate',
    popularity: 'Medium'
  }
];

export default function CSharpPage() {
  return (
    <PageLayout
      title="C#"
      description="C# is a modern, type-safe, object-oriented programming language developed by Microsoft. It's designed for building robust applications on the .NET platform."
      icon={<div className="text-4xl">🔷</div>}
      previousLink={{
        href: "/languages/cpp",
        label: "Previous: C++"
      }}
      nextLink={{
        href: "/languages/go",
        label: "Next: Go"
      }}
    >

      <QuickStats stats={[
        { 
          value: "2000", 
          label: "First Released",
          icon: <Code className="w-5 h-5" />
        },
        { 
          value: "Intermediate", 
          label: "Difficulty Level",
          icon: <Users className="w-5 h-5" />
        },
        { 
          value: "High", 
          label: "Popularity",
          icon: <Star className="w-5 h-5" />
        },
        { 
          value: "Enterprise", 
          label: "Primary Use",
          icon: <Layers className="w-5 h-5" />
        }
      ]} />

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose C#?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {csharpFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-indigo-600">{feature.icon}</div>
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
          What Can You Build with C#?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {csharpUseCases.map((useCase, index) => (
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
              <p className="text-indigo-800 dark:text-indigo-200 text-sm mb-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-1">
                {useCase.examples.map((example, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
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
          C# Code Example
        </h2>
        <div className="bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-4">
            Hello World & Basic Class Example
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Hello World
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}

// Basic Class Example
using System;

public class Person
{
    // Properties (C# feature)
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
    }
}

class Program
{
    static void Main()
    {
        Person person = new Person("Alice", 25);
        person.Introduce();
    }
}

// Modern C# with LINQ
using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 5, 2, 8, 1, 9 };
        
        // LINQ query to filter and sort
        var result = numbers
            .Where(n => n > 3)
            .OrderBy(n => n)
            .ToList();
        
        // Print results
        result.ForEach(Console.WriteLine);
    }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          C# Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {csharpLearningPath.map((phase, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
          Popular C# Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {csharpFrameworks.map((framework, index) => (
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
                  <span key={i} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
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
          C# Learning Resources
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {csharpResources.map((category, index) => (
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
          🚀 Getting Started with C#
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install .NET SDK</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download and install the latest .NET SDK from Microsoft</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose an IDE</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Visual Studio, VS Code, or JetBrains Rider</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Create Your First Project</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use `dotnet new console` to create a Hello World application</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master C# syntax, OOP concepts, and .NET ecosystem</p>
            </div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

