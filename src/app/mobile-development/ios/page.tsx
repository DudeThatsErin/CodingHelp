import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, Apple, ArrowRight, ExternalLink, Shield, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const iosFeatures = [
  {
    title: 'Native Performance',
    description: 'Direct access to iOS APIs and hardware for optimal performance',
    icon: <Zap className="w-5 h-5" />,
    details: 'Built specifically for iOS devices with maximum performance and efficiency'
  },
  {
    title: 'Swift Programming',
    description: 'Modern, safe, and expressive programming language by Apple',
    icon: <Code className="w-5 h-5" />,
    details: 'Swift provides flex flex-col gap-3, performance, and expressiveness for iOS development'
  },
  {
    title: 'iOS Ecosystem',
    description: 'Seamless integration with Apple services and devices',
    icon: <Apple className="w-5 h-5" />,
    details: 'Access to iCloud, Apple Pay, HealthKit, and other Apple frameworks'
  },
  {
    title: 'App Store Distribution',
    description: 'Direct access to millions of iOS users through the App Store',
    icon: <Shield className="w-5 h-5" />,
    details: 'Reach iOS users worldwide through Apple\'s curated App Store'
  }
];

export default function iOSDevelopmentPage() {
  return (
    <PageLayout
      title="iOS Development"
      description="iOS development involves creating applications for Apple's mobile devices using Swift or Objective-C. Learn to build native iOS apps with Xcode and the iOS SDK."
      icon={<div className="text-4xl">🍎</div>}
      previousLink={{
        href: "/mobile-development/flutter",
        label: "Previous: Flutter"
      }}
      nextLink={{
        href: "/mobile-development/android",
        label: "Next: Android Development"
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🍎</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Native iOS Development</h1>
            <p className="text-gray-600 dark:text-gray-300">Build native iOS apps with Swift and Xcode</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Native iOS development using Swift and Xcode provides the best performance, user experience, 
          and access to the latest iOS features. Build apps that feel truly native to the iOS platform 
          with Apple's official development tools and frameworks.
        </p>
      </div>

      {/* Requirements Notice */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <Apple className="w-6 h-6 text-yellow-600 mt-1" />
          <div>
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">macOS Required</h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              iOS development requires a Mac computer with Xcode. You cannot develop iOS apps on Windows or Linux.
              You'll also need an Apple Developer account ($99/year) to distribute apps on the App Store.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Native iOS Development?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {iosFeatures.map((feature, index) => (
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
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Required Tools</h3>
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">1. Xcode</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>• Download from Mac App Store (free)</li>
                <li>• Includes Swift compiler, iOS Simulator, and Interface Builder</li>
                <li>• Built-in debugging and performance analysis tools</li>
                <li>• Integrated version control with Git</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">2. Apple Developer Account</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>• Free account: Test on simulator only</li>
                <li>• Paid account ($99/year): Test on devices and publish to App Store</li>
                <li>• Access to beta software and advanced app capabilities</li>
                <li>• App Store Connect for app management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Swift Example */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic iOS App Structure</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">ViewController.swift</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var countLabel: UILabel!
    @IBOutlet weak var incrementButton: UIButton!
    
    private var count = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        updateCountLabel()
    }
    
    private func setupUI() {
        incrementButton.layer.cornerRadius = 8
        incrementButton.backgroundColor = .systemBlue
        incrementButton.setTitleColor(.white, for: .normal)
    }
    
    private func updateCountLabel() {
        countLabel.text = "Count: \\(count)"
    }
    
    @IBAction func incrementButtonTapped(_ sender: UIButton) {
        count += 1
        updateCountLabel()
        
        // Add haptic feedback
        let impactFeedback = UIImpactFeedbackGenerator(style: .medium)
        impactFeedback.impactOccurred()
        
        // Show alert for milestone counts
        if count % 10 == 0 {
            showMilestoneAlert()
        }
    }
    
    private func showMilestoneAlert() {
        let alert = UIAlertController(
            title: "Milestone!",
            message: "You've reached \\(count) taps!",
            preferredStyle: .alert
        )
        
        alert.addAction(UIAlertAction(title: "Awesome!", style: .default))
        present(alert, animated: true)
    }
}`}
          </pre>
        </div>
      </section>

      {/* SwiftUI Example */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">SwiftUI (Modern Approach)</h2>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">ContentView.swift</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import SwiftUI

struct ContentView: View {
    @State private var count = 0
    @State private var showingAlert = false
    
    var body: some View {
        VStack(spacing: 30) {
            Text("Count: \\(count)")
                .font(.largeTitle)
                .fontWeight(.bold)
                .foregroundColor(.primary)
            
            Button(action: incrementCount) {
                Text("Tap Me!")
                    .font(.title2)
                    .fontWeight(.semibold)
                    .foregroundColor(.white)
                    .frame(width: 200, height: 50)
                    .background(Color.blue)
                    .cornerRadius(10)
            }
            .scaleEffect(count > 0 ? 1.1 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: count)
        }
        .padding()
        .alert("Milestone!", isPresented: $showingAlert) {
            Button("Awesome!") { }
        } message: {
            Text("You've reached \\(count) taps!")
        }
    }
    
    private func incrementCount() {
        count += 1
        
        if count % 10 == 0 {
            showingAlert = true
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}`}
          </pre>
        </div>
      </section>

      {/* Key iOS Concepts */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key iOS Development Concepts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">UI Frameworks</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>UIKit:</strong> Traditional iOS UI framework</li>
              <li>• <strong>SwiftUI:</strong> Modern declarative UI framework</li>
              <li>• <strong>Storyboards:</strong> Visual interface design</li>
              <li>• <strong>Auto Layout:</strong> Responsive layout system</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">App Architecture</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>MVC:</strong> Model-View-Controller pattern</li>
              <li>• <strong>MVVM:</strong> Model-View-ViewModel with SwiftUI</li>
              <li>• <strong>Delegates:</strong> Communication between objects</li>
              <li>• <strong>Protocols:</strong> Define method requirements</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Data & Storage</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Core Data:</strong> Object graph and persistence</li>
              <li>• <strong>UserDefaults:</strong> Simple key-value storage</li>
              <li>• <strong>Keychain:</strong> Secure credential storage</li>
              <li>• <strong>CloudKit:</strong> iCloud database integration</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">iOS Frameworks</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• <strong>Foundation:</strong> Basic functionality and data types</li>
              <li>• <strong>AVFoundation:</strong> Audio and video processing</li>
              <li>• <strong>Core Location:</strong> Location and mapping services</li>
              <li>• <strong>HealthKit:</strong> Health and fitness data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://developer.apple.com/" className="hover:underline">Apple Developer</a></li>
              <li>• <a href="https://developer.apple.com/swift/" className="hover:underline">Swift.org</a></li>
              <li>• <a href="https://developer.apple.com/documentation/" className="hover:underline">Apple Documentation</a></li>
              <li>• <a href="https://developer.apple.com/design/human-interface-guidelines/" className="hover:underline">HIG Guidelines</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Learning Platforms</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://www.hackingwithswift.com/" className="hover:underline">Hacking with Swift</a></li>
              <li>• <a href="https://www.raywenderlich.com/" className="hover:underline">Ray Wenderlich</a></li>
              <li>• <a href="https://cs193p.sites.stanford.edu/" className="hover:underline">Stanford CS193p</a></li>
              <li>• <a href="https://www.udemy.com/topic/ios-development/" className="hover:underline">Udemy iOS Courses</a></li>
            </ul>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://stackoverflow.com/questions/tagged/ios" className="hover:underline">Stack Overflow</a></li>
              <li>• <a href="https://www.reddit.com/r/iOSProgramming/" className="hover:underline">r/iOSProgramming</a></li>
              <li>• <a href="https://iosdevweekly.com/" className="hover:underline">iOS Dev Weekly</a></li>
              <li>• <a href="https://swiftbysundell.com/" className="hover:underline">Swift by Sundell</a></li>
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
              <li>• Tip Calculator with Custom UI</li>
              <li>• Personal Journal with Core Data</li>
              <li>• Weather App with Location Services</li>
              <li>• Simple Photo Gallery</li>
              <li>• Unit Converter with Picker Views</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm flex flex-col gap-2">
              <li>• Social Media App with CloudKit</li>
              <li>• Fitness Tracker with HealthKit</li>
              <li>• AR Shopping App with ARKit</li>
              <li>• Music Player with AVFoundation</li>
              <li>• Expense Tracker with Apple Pay</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/mobile-development/java-android"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Java Android</span>
        </Link>
        <Link
          href="/mobile-development/android"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Native Android</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
