import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const androidFeatures = [
  {
    title: 'Kotlin-First',
    description: 'Google\'s preferred language for Android development',
    icon: <Smartphone className="w-5 h-5" />,
    details: 'Full access to Android device features and hardware'
  },
  {
    title: 'Jetpack Compose',
    description: 'Modern toolkit for building native Android UI',
    icon: <Zap className="w-5 h-5" />,
    details: 'Declarative UI framework that simplifies Android development'
  },
  {
    title: 'Open Ecosystem',
    description: 'Flexible platform with multiple distribution channels',
    icon: <ExternalLink className="w-5 h-5" />,
    details: 'Deploy through Google Play Store, Amazon Appstore, or direct APK'
  },
  {
    title: 'Rich Hardware Access',
    description: 'Access to cameras, sensors, and device capabilities',
    icon: <Code className="w-5 h-5" />,
    details: 'Modern, concise, and fully interoperable with Java'
  }
];

export default function AndroidDevelopmentPage() {
  return (
    <PageLayout
      title="Android Development"
      description="Android development involves creating applications for Android devices using Kotlin or Java. Learn to build native Android apps with Android Studio and the Android SDK."
      icon={<div className="text-4xl">🤖</div>}
      previousLink={{
        href: "/mobile-development/ios",
        label: "Previous: iOS Development"
      }}
      nextLink={{
        href: "/mobile-development/java-android",
        label: "Next: Java Android"
      }}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🤖</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Native Android Development</h1>
            <p className="text-gray-600 dark:text-gray-300">Build native Android apps with Kotlin and Android Studio</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Native Android development with Kotlin provides access to the latest Android features, 
          optimal performance, and the ability to create apps that feel truly native to the Android platform. 
          Use Android Studio and modern development practices to build robust mobile applications.
        </p>
      </div>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Native Android Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {androidFeatures.map((feature, index) => (
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

      {/* Development Setup */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Development Setup</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Required Tools</h3>
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. Android Studio</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>• Download from <a href="https://developer.android.com/studio" className="text-blue-600 hover:underline">developer.android.com/studio</a></li>
                <li>• Includes Android SDK, emulator, and Kotlin support</li>
                <li>• Built-in version control and debugging tools</li>
                <li>• Layout editor and performance profilers</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. Android SDK</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>• Automatically installed with Android Studio</li>
                <li>• Target Android API level 21+ (Android 5.0) minimum</li>
                <li>• Latest API level for new features</li>
                <li>• Build tools and platform tools included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kotlin Example */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Modern Android with Kotlin</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">MainActivity.kt</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`package com.example.myapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.myapp.ui.theme.MyAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    CounterScreen()
                }
            }
        }
    }
}

@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Count: $count",
            style = MaterialTheme.typography.headlineMedium,
            modifier = Modifier.padding(bottom = 32.dp)
        )
        
        Button(
            onClick = { count++ },
            modifier = Modifier.padding(8.dp)
        ) {
            Text("Increment")
        }
        
        Button(
            onClick = { count-- },
            enabled = count > 0,
            modifier = Modifier.padding(8.dp)
        ) {
            Text("Decrement")
        }
        
        if (count >= 10) {
            Text(
                text = "Great job! You've reached $count!",
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.primary,
                modifier = Modifier.padding(top = 16.dp)
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun CounterScreenPreview() {
    MyAppTheme {
        CounterScreen()
    }
}`}
          </pre>
        </div>
      </section>

      {/* Key Android Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Android Development Concepts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">App Components</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Activities:</strong> Single screen with user interface</li>
              <li>• <strong>Fragments:</strong> Reusable UI components</li>
              <li>• <strong>Services:</strong> Background processing</li>
              <li>• <strong>Broadcast Receivers:</strong> System event handling</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Modern UI</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Jetpack Compose:</strong> Declarative UI toolkit</li>
              <li>• <strong>Material Design 3:</strong> Google's design system</li>
              <li>• <strong>View System:</strong> Traditional XML layouts</li>
              <li>• <strong>ConstraintLayout:</strong> Flexible layout system</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Architecture Components</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>ViewModel:</strong> UI-related data holder</li>
              <li>• <strong>LiveData:</strong> Observable data holder</li>
              <li>• <strong>Room:</strong> SQLite abstraction layer</li>
              <li>• <strong>Navigation:</strong> In-app navigation</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Data & Storage</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>SharedPreferences:</strong> Key-value storage</li>
              <li>• <strong>Room Database:</strong> Local database</li>
              <li>• <strong>DataStore:</strong> Modern data storage</li>
              <li>• <strong>External Storage:</strong> Files and media</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://developer.android.com/" className="hover:underline">Android Developers</a></li>
              <li>• <a href="https://kotlinlang.org/" className="hover:underline">Kotlin Language</a></li>
              <li>• <a href="https://developer.android.com/courses" className="hover:underline">Android Courses</a></li>
              <li>• <a href="https://developer.android.com/jetpack/compose" className="hover:underline">Jetpack Compose</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Libraries</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm flex flex-col gap-2">
              <li>• <strong>Retrofit:</strong> HTTP client for APIs</li>
              <li>• <strong>Glide/Coil:</strong> Image loading</li>
              <li>• <strong>Hilt:</strong> Dependency injection</li>
              <li>• <strong>Coroutines:</strong> Asynchronous programming</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Community</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://stackoverflow.com/questions/tagged/android" className="hover:underline">Stack Overflow</a></li>
              <li>• <a href="https://www.reddit.com/r/androiddev/" className="hover:underline">r/androiddev</a></li>
              <li>• <a href="https://androidweekly.net/" className="hover:underline">Android Weekly</a></li>
              <li>• <a href="https://medium.com/androiddevelopers" className="hover:underline">Android Developers Blog</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Ideas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Beginner Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• Calculator with Jetpack Compose</li>
              <li>• To-Do List with Room Database</li>
              <li>• Weather App with Retrofit</li>
              <li>• Note Taking App with MVVM</li>
              <li>• Simple Quiz App</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• E-commerce App with Payment Gateway</li>
              <li>• Social Media Platform</li>
              <li>• Fitness Tracker with Sensors</li>
              <li>• Real-time Chat with Firebase</li>
              <li>• Camera App with ML Kit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/mobile-development/ios"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Native iOS</span>
        </Link>
        <Link
          href="/mobile-development"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to Mobile Development</span>
        </Link>
      </div>
    </PageLayout>
  );
}
