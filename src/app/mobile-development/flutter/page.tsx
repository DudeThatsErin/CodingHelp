import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, Globe, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const flutterFeatures = [
  {
    title: 'Single Codebase',
    description: 'Write once, run on iOS, Android, web, and desktop',
    icon: <Code className="w-5 h-5 mb-1" />,
    details: 'Flutter allows you to build apps for multiple platforms from a single codebase'
  },
  {
    title: 'Fast Development',
    description: 'Hot reload for instant code changes and rapid iteration',
    icon: <Zap className="w-5 h-5 mb-1" />,
    details: 'See changes instantly without losing app state during development'
  },
  {
    title: 'Native Performance',
    description: 'Compiled to native ARM code for optimal performance',
    icon: <Smartphone className="w-5 h-5 mb-1" />,
    details: 'Flutter apps compile to native code, providing excellent performance'
  },
  {
    title: 'Rich UI Widgets',
    description: 'Extensive library of customizable Material and Cupertino widgets',
    icon: <Globe className="w-5 h-5 mb-1" />,
    details: 'Build beautiful UIs with Flutter\'s comprehensive widget library'
  }
];

export default function FlutterPage() {
  return (
    <PageLayout
      title="Flutter"
      description="Flutter is Google's open-source UI software development kit used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase."
      icon={<div className="text-4xl">🐦</div>}
      previousLink={{
        href: "/mobile-development/react-native",
        label: "Previous: React Native"
      }}
      nextLink={{
        href: "/mobile-development/ios",
        label: "Next: iOS Development"
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6 mb-1">
        <div className="flex items-center gap-3 mb-1">
          <div className="text-4xl mb-1">🐦</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Flutter</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-1">Google's UI toolkit for building beautiful apps</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
          Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, 
          web, and desktop from a single codebase. Using the Dart programming language, Flutter provides 
          fast development cycles and expressive UIs.
        </p>
      </div>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8 mb-1">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
          Why Choose Flutter?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-1">
          {flutterFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 mb-1">
              <div className="flex items-center gap-3 mb-3 mb-1">
                <div className="text-blue-600 mb-1">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 mb-1">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="flex flex-col gap-6 md:gap-8 mb-1">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Getting Started</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 mb-1">Installation</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded mb-1">
{`# Install Flutter SDK
# Download from https://flutter.dev/docs/get-started/install

# Verify installation
flutter doctor

# Create a new Flutter project
flutter create my_app

# Navigate to project directory
cd my_app

# Run the app
flutter run`}
          </pre>
        </div>
      </section>

      {/* Basic Example */}
      <section className="flex flex-col gap-6 md:gap-8 mb-1">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Basic Flutter App</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg mb-1">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded mb-1">
{`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8 mb-1">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-1">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 mb-1">
            <h3 className="font-semibold text-white mb-3 mb-1">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2 mb-1">
              <li>• <a href="https://flutter.dev/" className="hover:underline mb-1">Flutter Official Site</a></li>
              <li>• <a href="https://flutter.dev/docs" className="hover:underline mb-1">Flutter Documentation</a></li>
              <li>• <a href="https://dart.dev/" className="hover:underline mb-1">Dart Language</a></li>
              <li>• <a href="https://flutter.dev/docs/cookbook" className="hover:underline mb-1">Flutter Cookbook</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 mb-1">
            <h3 className="font-semibold text-white mb-3 mb-1">Popular Packages</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm flex flex-col gap-2 mb-1">
              <li>• <a href="https://pub.dev/packages/http" className="hover:underline mb-1">HTTP (Networking)</a></li>
              <li>• <a href="https://pub.dev/packages/provider" className="hover:underline mb-1">Provider (State Management)</a></li>
              <li>• <a href="https://pub.dev/packages/shared_preferences" className="hover:underline mb-1">Shared Preferences</a></li>
              <li>• <a href="https://pub.dev/packages/sqflite" className="hover:underline mb-1">SQLite Database</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8 mb-1">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Project Ideas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-1">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 mb-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 mb-1">Beginner Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2 mb-1">
              <li>• Counter App with State Management</li>
              <li>• To-Do List with Local Storage</li>
              <li>• Weather App with API Integration</li>
              <li>• Calculator with Custom UI</li>
              <li>• Simple Quiz App</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 mb-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 mb-1">Advanced Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2 mb-1">
              <li>• E-commerce App with Payment Integration</li>
              <li>• Social Media App with Real-time Chat</li>
              <li>• Fitness Tracker with Health Integration</li>
              <li>• Photo Editing App with Custom Widgets</li>
              <li>• Multi-platform Desktop App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700 mb-1">
        <Link
          href="/mobile-development"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-1"
        >
          <ArrowLeft className="w-4 h-4 mb-1" />
          <span>Back to Mobile Development</span>
        </Link>
        <Link
          href="/mobile-development/java-android"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors mb-1"
        >
          <span>Next: Java Android</span>
          <ArrowRight className="w-4 h-4 mb-1" />
        </Link>
      </div>
    </PageLayout>
  );
}
