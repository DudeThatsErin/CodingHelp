import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, Globe, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const expoFeatures = [
  {
    title: 'Zero Config Setup',
    description: 'Start building immediately without complex native development setup',
    icon: <Zap className="w-5 h-5" />,
    details: 'No need for Xcode or Android Studio to get started - just JavaScript'
  },
  {
    title: 'Over-the-Air Updates',
    description: 'Push updates to your app instantly without app store approval',
    icon: <Globe className="w-5 h-5" />,
    details: 'Update JavaScript code and assets instantly for all users'
  },
  {
    title: 'Rich SDK',
    description: 'Access to camera, location, notifications, and 50+ native APIs',
    icon: <Code className="w-5 h-5" />,
    details: 'Comprehensive set of APIs for common mobile app functionality'
  },
  {
    title: 'EAS Build Service',
    description: 'Cloud-based build service for iOS and Android apps',
    icon: <Globe className="w-5 h-5" />,
    details: 'Build apps in the cloud without maintaining local build environments'
  },
  {
    title: 'EAS Submit',
    description: 'Automated app store submission process',
    icon: <ExternalLink className="w-5 h-5" />,
    details: 'Streamlined submission to Apple App Store and Google Play Store'
  },
  {
    title: 'Development Tools',
    description: 'Expo CLI, Expo Go app, and development build tools',
    icon: <Smartphone className="w-5 h-5" />,
    details: 'Complete toolchain for development, testing, and deployment'
  }
];

const projectIdeas = [
  {
    level: 'Beginner',
    color: 'green',
    projects: [
      'Photo Gallery: Camera integration with local storage',
      'Location Tracker: GPS tracking with maps',
      'Push Notification Demo: Local and remote notifications',
      'QR Code Scanner: Scan and generate QR codes',
      'Audio Player: Music player with playlist support',
      'Flashlight App: Simple utility with device controls'
    ]
  },
  {
    level: 'Intermediate',
    color: 'yellow',
    projects: [
      'Social Media App: Photo sharing with authentication',
      'Expense Manager: Financial tracking with charts',
      'Workout Tracker: Fitness app with progress tracking',
      'Food Delivery: Restaurant app with ordering system',
      'Travel Planner: Trip planning with offline maps',
      'Language Learning: Interactive lessons with audio'
    ]
  },
  {
    level: 'Advanced',
    color: 'red',
    projects: [
      'Video Conferencing: Real-time video calls',
      'Augmented Reality: AR experiences with camera',
      'IoT Controller: Smart home device management',
      'Marketplace App: E-commerce with payments',
      'Healthcare App: Medical records with biometrics',
      'Gaming Platform: Multiplayer games with leaderboards'
    ]
  }
];

export default function ExpoPage() {
  return (
    <PageLayout
      title="Expo"
      description="Expo is a platform for making universal native apps for Android, iOS, and the web with JavaScript and React. It provides a set of tools and services built around React Native."
      icon={<div className="text-4xl">🚀</div>}
      previousLink={{
        href: "/mobile-development/react-native",
        label: "Previous: React Native"
      }}
      nextLink={{
        href: "/mobile-development/flutter",
        label: "Next: Flutter"
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🚀</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Expo & EAS</h1>
            <p className="text-gray-600 dark:text-gray-300">The fastest way to build React Native apps</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Expo is a platform for making universal native apps for Android, iOS, and the web with JavaScript and React. 
          EAS (Expo Application Services) provides cloud-based services for building, submitting, and updating your apps.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2016</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">First Released</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Beginner</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Difficulty Level</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1M+</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Apps Built</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Native APIs</div>
        </div>
      </div>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Expo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expoFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Getting Started with Expo</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Setup</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Install Expo CLI
npm install -g @expo/cli

# Create a new Expo project
npx create-expo-app MyAwesomeApp

# Navigate to project directory
cd MyAwesomeApp

# Start the development server
npx expo start

# Install Expo Go app on your phone and scan QR code
# Or press 'i' for iOS simulator, 'a' for Android emulator`}
          </pre>
        </div>

        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Basic Expo App Example</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      Alert.alert(
        'Location Found!',
        \`Lat: \${currentLocation.coords.latitude.toFixed(4)}, 
         Lng: \${currentLocation.coords.longitude.toFixed(4)}\`
      );
    } catch (error) {
      Alert.alert('Error', 'Could not get location');
    }
  };

  const takePicture = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      Alert.alert('Camera Ready!', 'Camera permission granted');
    } else {
      Alert.alert('Permission denied', 'Camera permission is required');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Welcome to Expo!</Text>
      <Text style={styles.subtitle}>
        Build amazing apps with native features
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={getLocation}>
          <Text style={styles.buttonText}>📍 Get Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>📷 Access Camera</Text>
        </TouchableOpacity>
      </View>

      {location && (
        <View style={styles.locationInfo}>
          <Text style={styles.locationText}>
            Current Location:
          </Text>
          <Text style={styles.coordinates}>
            Lat: {location.coords.latitude.toFixed(4)}
          </Text>
          <Text style={styles.coordinates}>
            Lng: {location.coords.longitude.toFixed(4)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationInfo: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coordinates: {
    fontSize: 14,
    color: '#666',
  },
});`}
          </pre>
        </div>
      </section>

      {/* EAS Services */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">EAS (Expo Application Services)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">🏗️ EAS Build</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
              Cloud-based build service for creating production-ready apps
            </p>
            <pre className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
{`# Install EAS CLI
npm install -g eas-cli

# Configure your project
eas build:configure

# Build for both platforms
eas build --platform all`}
            </pre>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">📱 EAS Submit</h3>
            <p className="text-green-800 dark:text-green-200 text-sm mb-3">
              Automated submission to app stores
            </p>
            <pre className="text-xs bg-green-100 dark:bg-green-900/30 p-2 rounded">
{`# Submit to app stores
eas submit --platform ios
eas submit --platform android

# Or submit to both
eas submit --platform all`}
            </pre>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🔄 EAS Update</h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
              Over-the-air updates for instant deployments
            </p>
            <pre className="text-xs bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
{`# Configure updates
eas update:configure

# Publish an update
eas update --branch production
eas update --branch preview`}
            </pre>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Expo Project Ideas
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

      {/* Popular Expo Libraries */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Expo SDK Libraries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Camera & Media</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
              <li>• expo-camera</li>
              <li>• expo-image-picker</li>
              <li>• expo-av (audio/video)</li>
              <li>• expo-media-library</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Location & Maps</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
              <li>• expo-location</li>
              <li>• react-native-maps</li>
              <li>• expo-task-manager</li>
              <li>• expo-background-fetch</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Notifications</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
              <li>• expo-notifications</li>
              <li>• expo-device</li>
              <li>• expo-constants</li>
              <li>• expo-permissions</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Storage & Auth</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-xs [&>li]:mb-1">
              <li>• expo-secure-store</li>
              <li>• expo-auth-session</li>
              <li>• expo-local-authentication</li>
              <li>• expo-sqlite</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/mobile-development/react-native"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: React Native</span>
        </Link>
        <Link
          href="/mobile-development/flutter"
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Flutter</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
