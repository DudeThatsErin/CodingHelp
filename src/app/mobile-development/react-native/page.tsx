import Link from 'next/link';
import { Smartphone, Code, Users, Star, Globe, Zap, ArrowRight, ExternalLink, Shield, Layers, Cpu, Settings, Navigation, Upload, Package } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';

const reactNativeFeatures = [
  {
    title: 'Cross-Platform',
    description: 'Write once, run on both iOS and Android with native performance',
    icon: <Globe className="w-5 h-5" />,
    details: 'Share up to 95% of code between platforms while maintaining native look and feel'
  },
  {
    title: 'Native Performance',
    description: 'Direct access to native APIs and components for optimal performance',
    icon: <Zap className="w-5 h-5" />,
    details: 'Uses native components instead of web views for better performance'
  },
  {
    title: 'Hot Reloading',
    description: 'See changes instantly without losing application state',
    icon: <Code className="w-5 h-5" />,
    details: 'Fast development cycle with immediate feedback on code changes'
  },
  {
    title: 'Large Community',
    description: 'Extensive ecosystem with thousands of libraries and active community',
    icon: <Users className="w-5 h-5" />,
    details: 'Backed by Meta (Facebook) with strong community support and resources'
  },
  {
    title: 'JavaScript/TypeScript',
    description: 'Use familiar web technologies to build mobile applications',
    icon: <Package className="w-5 h-5" />,
    details: 'Leverage existing JavaScript knowledge and npm ecosystem'
  },
  {
    title: 'Native Modules',
    description: 'Easily integrate native code when needed for platform-specific features',
    icon: <Smartphone className="w-5 h-5" />,
    details: 'Bridge between JavaScript and native code for custom functionality'
  }
];

const projectIdeas = [
  {
    level: 'Beginner',
    color: 'green',
    projects: [
      'Weather App: Display current weather and forecasts',
      'To-Do List: Task management with local storage',
      'Calculator: Scientific calculator with history',
      'News Reader: Fetch and display news articles',
      'Timer/Stopwatch: Multiple timers with notifications',
      'Expense Tracker: Track daily expenses with categories'
    ]
  },
  {
    level: 'Intermediate',
    color: 'yellow',
    projects: [
      'Social Media App: Posts, likes, comments with authentication',
      'E-commerce App: Product catalog with shopping cart',
      'Chat Application: Real-time messaging with Socket.io',
      'Fitness Tracker: Track workouts and progress',
      'Recipe App: Search recipes with favorites and meal planning',
      'Music Player: Audio playback with playlists'
    ]
  },
  {
    level: 'Advanced',
    color: 'red',
    projects: [
      'Video Streaming: Netflix-like app with offline viewing',
      'Ride Sharing: Uber-like app with maps and payments',
      'Banking App: Secure transactions with biometric auth',
      'AR Shopping: Augmented reality product visualization',
      'IoT Controller: Control smart home devices',
      'Cryptocurrency Wallet: Secure crypto transactions'
    ]
  }
];

export default function ReactNativePage() {
  return (
    <PageLayout
      title="React Native"
      description="React Native lets you build mobile apps using only JavaScript and React. It uses the same design as React, letting you compose a rich mobile UI from declarative components."
      icon={<div className="text-4xl">⚙️</div>}
      previousLink={{
        href: "/mobile-development",
        label: "Back to Mobile Development"
      }}
      nextLink={{
        href: "/mobile-development/flutter",
        label: "Next: Flutter"
      }}
    >
      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose React Native?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reactNativeFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
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

      {/* Learning Path */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          React Native Learning Path
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          <Link href="/mobile-development/react-native/setup" className="block group">
            <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start flex flex-col gap-4 md:gap-6">
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Setup & Environment
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Beginner
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">2-3 hours</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Complete development environment setup for React Native development
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Node.js', 'React Native CLI', 'Android Studio', 'Xcode', 'Emulators'].map((topic, i) => (
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

          <Link href="/mobile-development/react-native/components" className="block group">
            <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start flex flex-col gap-4 md:gap-6">
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Components & UI
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                        Intermediate
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">4-5 hours</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Master React Native components, styling, and responsive layouts
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Core Components', 'StyleSheet', 'Flexbox', 'Lists', 'Forms', 'Platform Styles'].map((topic, i) => (
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

          <Link href="/mobile-development/react-native/navigation" className="block group">
            <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start flex flex-col gap-4 md:gap-6">
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Navigation className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Navigation
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                        Intermediate
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">3-4 hours</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Implement navigation patterns with React Navigation library
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Stack Navigation', 'Tab Navigation', 'Drawer Navigation', 'Deep Linking', 'Navigation Hooks'].map((topic, i) => (
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

          <Link href="/mobile-development/react-native/deployment" className="block group">
            <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-start flex flex-col gap-4 md:gap-6">
                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Deployment
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                        Advanced
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">5-6 hours</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Build, sign, and deploy your apps to Google Play Store and Apple App Store
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['App Signing', 'Build Optimization', 'App Store Guidelines', 'CI/CD', 'Monitoring'].map((topic, i) => (
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
        </div>
      </section>

      {/* Getting Started */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Quick Start Guide</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Setup</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Install React Native CLI
npm install -g @react-native-community/cli

# Create a new project
npx react-native init MyAwesomeProject

# Navigate to project directory
cd MyAwesomeProject

# Start Metro bundler
npx react-native start

# Run on Android (in another terminal)
npx react-native run-android

# Run on iOS (macOS only)
npx react-native run-ios`}
          </pre>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Basic Component Example</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handlePress = () => {
    Alert.alert('Hello!', \`Hello \${name || 'World'}!\`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Say Hello</Text>
      </TouchableOpacity>
      
      <View style={styles.counter}>
        <Text style={styles.counterText}>Count: {count}</Text>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  counterText: {
    fontSize: 18,
    color: '#333',
  },
  counterButton: {
    backgroundColor: '#34C759',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;`}
          </pre>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          React Native Project Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectIdeas.map((category, index) => (
            <div key={index} className={`bg-${category.color}-50 dark:bg-${category.color}-900/20 p-6 rounded-lg border border-${category.color}-200 dark:border-${category.color}-800`}>
              <h3 className={`font-semibold text-${category.color}-900 dark:text-${category.color}-100 mb-3`}>
                {category.level === 'Beginner' ? '🟢' : category.level === 'Intermediate' ? '🟡' : '🔴'} {category.level} Projects
              </h3>
              <ul className={`flex flex-col gap-2 text-${category.color}-800 dark:text-${category.color}-200 text-sm`}>
                {category.projects.map((project, i) => (
                  <li key={i}>• <strong>{project.split(':')[0]}:</strong> {project.split(':')[1]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Libraries */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Libraries & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Navigation</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• React Navigation</li>
              <li>• React Native Navigation</li>
              <li>• React Router Native</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">State Management</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Redux Toolkit</li>
              <li>• Zustand</li>
              <li>• MobX</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">UI Components</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• NativeBase</li>
              <li>• React Native Elements</li>
              <li>• UI Kitten</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Networking</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Axios</li>
              <li>• React Query</li>
              <li>• Apollo GraphQL</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Storage</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• AsyncStorage</li>
              <li>• Realm</li>
              <li>• SQLite</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Testing</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>• Jest</li>
              <li>• Detox</li>
              <li>• React Native Testing Library</li>
            </ul>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
