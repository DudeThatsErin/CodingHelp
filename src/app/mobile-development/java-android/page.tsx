import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, Coffee, ArrowRight, ExternalLink, ArrowLeft, Settings } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const javaAndroidFeatures = [
  {
    title: 'Native Android Development',
    description: 'Build apps with full access to Android APIs and platform features',
    icon: <Smartphone className="w-5 h-5" />,
    details: 'Direct access to all Android platform capabilities and native performance'
  },
  {
    title: 'Mature Ecosystem',
    description: 'Extensive libraries, tools, and community support',
    icon: <Code className="w-5 h-5" />,
    details: 'Benefit from years of Android development tools and libraries'
  },
  {
    title: 'Android Studio IDE',
    description: 'Powerful development environment with advanced debugging tools',
    icon: <Settings className="w-5 h-5" />,
    details: 'Official IDE with emulators, profilers, and comprehensive development tools'
  },
  {
    title: 'Enterprise Ready',
    description: 'Robust architecture patterns and enterprise-grade solutions',
    icon: <Zap className="w-5 h-5" />,
    details: 'Perfect for large-scale applications with complex business requirements'
  }
];

export default function JavaAndroidPage() {
  return (
    <PageLayout
      title="Java Android Development"
      description="Learn Android development using Java, the traditional language for Android apps. While Kotlin is now preferred, Java remains widely used and supported."
      icon={<div className="text-4xl">☕</div>}
      previousLink={{
        href: "/mobile-development/android",
        label: "Previous: Native Android"
      }}
      nextLink={{
        href: "/mobile-development/ios",
        label: "Next: iOS Development"
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">☕</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java Android Development</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Java has been the traditional language for Android development, offering robust object-oriented 
              programming capabilities and access to the full Android SDK. While Kotlin is now Google's 
              preferred language, Java remains widely used and fully supported.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Java has been the traditional language for Android development, offering robust object-oriented 
          programming capabilities and access to the full Android SDK. While Kotlin is now Google's 
          preferred language, Java remains widely used and fully supported.
        </p>
      </div>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Java for Android?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {javaAndroidFeatures.map((feature, index) => (
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
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. Java Development Kit (JDK)</h4>
              <pre className="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded">
{`# Install JDK 8 or higher
# Download from Oracle or use OpenJDK

# Verify installation
java -version
javac -version`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. Android Studio</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>• Download from <a href="https://developer.android.com/studio" className="text-blue-600 hover:underline">developer.android.com/studio</a></li>
                <li>• Includes Android SDK, emulator, and build tools</li>
                <li>• Built-in support for Java and Kotlin</li>
                <li>• Advanced debugging and profiling tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Android App Structure */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Android App Structure</h2>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">MainActivity.java</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`package com.example.myapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private TextView textView;
    private Button button;
    private int counter = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Initialize views
        textView = findViewById(R.id.textView);
        button = findViewById(R.id.button);
        
        // Set click listener
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                counter++;
                textView.setText("Count: " + counter);
                Toast.makeText(MainActivity.this, 
                    "Button clicked!", Toast.LENGTH_SHORT).show();
            }
        });
    }
}`}
          </pre>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">activity_main.xml</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    android:padding="16dp">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Count: 0"
        android:textSize="24sp"
        android:layout_marginBottom="32dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"
        android:textSize="18sp"
        android:padding="16dp" />

</LinearLayout>`}
          </pre>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Android Concepts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Activities & Fragments</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Activity:</strong> Single screen with user interface</li>
              <li>• <strong>Fragment:</strong> Reusable UI component within activities</li>
              <li>• <strong>Lifecycle:</strong> onCreate, onStart, onResume, onPause, onStop, onDestroy</li>
              <li>• <strong>Intent:</strong> Message passing between components</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">UI Components</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Views:</strong> TextView, Button, ImageView, EditText</li>
              <li>• <strong>Layouts:</strong> LinearLayout, RelativeLayout, ConstraintLayout</li>
              <li>• <strong>RecyclerView:</strong> Efficient list and grid displays</li>
              <li>• <strong>Material Design:</strong> Google's design system</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Data Storage</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>SharedPreferences:</strong> Key-value storage</li>
              <li>• <strong>SQLite:</strong> Local database</li>
              <li>• <strong>Room:</strong> Database abstraction layer</li>
              <li>• <strong>Files:</strong> Internal and external storage</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Networking & APIs</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>HTTP Clients:</strong> OkHttp, Volley</li>
              <li>• <strong>JSON Parsing:</strong> Gson, Jackson</li>
              <li>• <strong>REST APIs:</strong> Retrofit library</li>
              <li>• <strong>WebSockets:</strong> Real-time communication</li>
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
              <li>• <a href="https://developer.android.com/courses" className="hover:underline">Android Courses</a></li>
              <li>• <a href="https://developer.android.com/guide" className="hover:underline">Developer Guides</a></li>
              <li>• <a href="https://developer.android.com/reference" className="hover:underline">API Reference</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Libraries</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm flex flex-col gap-2">
              <li>• <strong>Retrofit:</strong> HTTP client</li>
              <li>• <strong>Glide:</strong> Image loading</li>
              <li>• <strong>Room:</strong> Database ORM</li>
              <li>• <strong>Dagger:</strong> Dependency injection</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Architecture</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm flex flex-col gap-2">
              <li>• <strong>MVVM:</strong> Model-View-ViewModel</li>
              <li>• <strong>MVP:</strong> Model-View-Presenter</li>
              <li>• <strong>Clean Architecture:</strong> Layered approach</li>
              <li>• <strong>Android Architecture Components</strong></li>
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
              <li>• Simple Calculator App</li>
              <li>• To-Do List with SQLite</li>
              <li>• Weather App with API</li>
              <li>• Note Taking App</li>
              <li>• Quiz Application</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• E-commerce Shopping App</li>
              <li>• Social Media Platform</li>
              <li>• Fitness Tracking App</li>
              <li>• Real-time Chat Application</li>
              <li>• Location-based Services App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/mobile-development/flutter"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Flutter</span>
        </Link>
        <Link
          href="/mobile-development/ios"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Native iOS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
