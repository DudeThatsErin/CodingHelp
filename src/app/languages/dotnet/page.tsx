import Link from 'next/link';
import { Code, Shield, Layers, Globe, Star, Users, ArrowRight, ExternalLink, Zap, Server } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const dotnetFeatures = [
  {
    title: 'Cross-Platform',
    description: 'Run on Windows, macOS, and Linux with .NET Core/.NET 5+',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'High Performance',
    description: 'Compiled code with excellent runtime performance and optimization',
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: 'Rich Ecosystem',
    description: 'Extensive library ecosystem with NuGet package manager',
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: 'Multiple Languages',
    description: 'Support for C#, F#, VB.NET, and other .NET languages',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Enterprise Ready',
    description: 'Built for large-scale, mission-critical applications',
    icon: <Server className="w-5 h-5" />
  },
  {
    title: 'Microsoft Support',
    description: 'Backed by Microsoft with long-term support and regular updates',
    icon: <Users className="w-5 h-5" />
  }
];

const dotnetUseCases = [
  {
    category: 'Web Applications',
    description: 'Build modern web applications and APIs with ASP.NET Core',
    examples: ['Stack Overflow', 'Microsoft Office 365', 'Azure Portal', 'GoDaddy'],
    frameworks: ['ASP.NET Core', 'Blazor', 'Web API', 'SignalR'],
    popularity: 'Very High',
    difficulty: 'Intermediate'
  },
  {
    category: 'Desktop Applications',
    description: 'Create Windows desktop applications and cross-platform apps',
    examples: ['Visual Studio', 'Paint.NET', 'KeePass', 'Microsoft Teams'],
    frameworks: ['WPF', 'WinForms', 'MAUI', 'Avalonia'],
    popularity: 'High',
    difficulty: 'Intermediate'
  },
  {
    category: 'Cloud & Microservices',
    description: 'Build scalable cloud applications and microservices',
    examples: ['Azure services', 'Netflix APIs', 'Banking systems', 'E-commerce platforms'],
    frameworks: ['ASP.NET Core', 'Azure Functions', 'Service Fabric', 'Dapr'],
    popularity: 'Very High',
    difficulty: 'Advanced'
  },
  {
    category: 'Mobile Development',
    description: 'Cross-platform mobile apps with .NET MAUI and Xamarin',
    examples: ['Alaska Airlines', 'UPS Mobile', 'Olo', 'Captio'],
    frameworks: ['.NET MAUI', 'Xamarin', 'Uno Platform'],
    popularity: 'Medium',
    difficulty: 'Intermediate to Advanced'
  }
];

export default function DotNetPage() {
  return (
    <PageLayout
      title=".NET"
      description=".NET is a free, open-source developer platform created by Microsoft for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, IoT, and more."
      icon={<div className="text-4xl">🔷</div>}
      previousLink={{
        href: "/languages/php",
        label: "Previous: PHP"
      }}
      nextLink={{
        href: "/languages",
        label: "Back to Languages"
      }}
    >

      <QuickStats stats={[
        { 
          value: "2002", 
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
          value: "Cross-Platform", 
          label: "Platform Support",
          icon: <Globe className="w-5 h-5" />
        }
      ]} />

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose .NET?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dotnetFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
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
          What Can You Build with .NET?
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {dotnetUseCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{useCase.category}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    useCase.difficulty === 'Intermediate to Advanced' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' :
                    'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {useCase.difficulty}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    useCase.popularity === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                    useCase.popularity === 'High' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {useCase.popularity}
                  </span>
                </div>
              </div>
              <p className="text-indigo-800 dark:text-indigo-200 text-sm mb-4">{useCase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Real-World Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Popular Frameworks:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.frameworks.map((framework, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-indigo-200 dark:bg-indigo-800/30 text-indigo-800 dark:text-indigo-200 rounded-full">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          .NET Code Examples
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🚀 C# Console Application
            </h3>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Program.cs
using System;
using System.Collections.Generic;
using System.Linq;

namespace HelloDotNet
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, .NET!");
            
            // Variables and Collections
            var name = "Alice";
            var age = 25;
            var hobbies = new List<string> { "reading", "coding", "gaming" };
            
            // String interpolation
            Console.WriteLine($"My name is {name}, I'm {age} years old");
            
            // LINQ example
            var longHobbies = hobbies.Where(h => h.Length > 5).ToList();
            
            Console.WriteLine("Long hobbies:");
            longHobbies.ForEach(Console.WriteLine);
            
            // Method call
            var greeting = CreateGreeting(name, age);
            Console.WriteLine(greeting);
        }
        
        static string CreateGreeting(string name, int age)
        {
            return $"Hello {name}, you are {age} years old!";
        }
    }
}`}
            </pre>
          </div>

          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              🌐 ASP.NET Core Web API
            </h3>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private static List<User> users = new()
    {
        new User { Id = 1, Name = "Alice", Email = "alice@example.com" },
        new User { Id = 2, Name = "Bob", Email = "bob@example.com" }
    };
    
    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
        return Ok(users);
    }
    
    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id)
    {
        var user = users.FirstOrDefault(u => u.Id == id);
        if (user == null)
            return NotFound();
            
        return Ok(user);
    }
    
    [HttpPost]
    public ActionResult<User> CreateUser(User user)
    {
        user.Id = users.Max(u => u.Id) + 1;
        users.Add(user);
        
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          🚀 Getting Started with .NET
        </h3>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install .NET SDK</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download the latest .NET SDK from dotnet.microsoft.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Choose Your IDE</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Visual Studio, Visual Studio Code, or JetBrains Rider</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Create Your First Project</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use `dotnet new console` to create a simple console application</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn C# Fundamentals</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master C# syntax, OOP concepts, and .NET ecosystem</p>
            </div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
