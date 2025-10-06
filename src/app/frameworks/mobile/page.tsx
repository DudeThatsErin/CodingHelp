import Link from 'next/link';
import { Smartphone, Code, Users, Star, Zap, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const mobileFrameworks = [
  {
    name: 'React Native',
    language: 'JavaScript/TypeScript',
    description: 'Build native mobile apps using React and JavaScript',
    icon: '⚛️',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    platforms: ['iOS', 'Android'],
    features: ['Hot reload', 'Native performance', 'Code sharing', 'Large ecosystem'],
    useCases: ['Cross-platform apps', 'MVP development', 'Existing React teams', 'Rapid prototyping'],
    pros: ['Code reuse', 'React knowledge', 'Large community', 'Facebook backing'],
    cons: ['Bridge overhead', 'Platform-specific code', 'Large bundle size']
  },
  {
    name: 'Flutter',
    language: 'Dart',
    description: 'Google\'s UI toolkit for building natively compiled applications',
    icon: '🐦',
    difficulty: 'Intermediate',
    popularity: 'Very High',
    platforms: ['iOS', 'Android', 'Web', 'Desktop'],
    features: ['Single codebase', 'Hot reload', 'Rich widgets', 'High performance'],
    useCases: ['Cross-platform apps', 'UI-heavy apps', 'Startup MVPs', 'Enterprise apps'],
    pros: ['Single codebase', 'Great performance', 'Rich UI', 'Google support'],
    cons: ['New language', 'Large app size', 'Limited native modules']
  },
  {
    name: 'Xamarin',
    language: 'C#',
    description: 'Microsoft\'s cross-platform mobile development framework',
    icon: '🔷',
    difficulty: 'Intermediate',
    popularity: 'Medium',
    platforms: ['iOS', 'Android', 'Windows'],
    features: ['Native performance', 'Code sharing', 'Visual Studio', 'Enterprise ready'],
    useCases: ['Enterprise apps', '.NET teams', 'Complex business logic', 'Microsoft ecosystem'],
    pros: ['Native performance', '.NET ecosystem', 'Enterprise support', 'Code sharing'],
    cons: ['Microsoft dependency', 'Learning curve', 'App size']
  },
  {
    name: 'Ionic',
    language: 'JavaScript/TypeScript',
    description: 'Build mobile apps using web technologies',
    icon: '⚡',
    difficulty: 'Beginner',
    popularity: 'High',
    platforms: ['iOS', 'Android', 'Web'],
    features: ['Web technologies', 'Angular/React/Vue', 'Capacitor', 'PWA support'],
    useCases: ['Web-to-mobile', 'PWAs', 'Rapid development', 'Existing web teams'],
    pros: ['Web skills', 'Fast development', 'Multiple frameworks', 'PWA support'],
    cons: ['WebView performance', 'Platform limitations', 'UI consistency']
  },
  {
    name: 'Cordova/PhoneGap',
    language: 'JavaScript/HTML/CSS',
    description: 'Build mobile apps using web technologies in a native container',
    icon: '📱',
    difficulty: 'Beginner',
    popularity: 'Medium',
    platforms: ['iOS', 'Android', 'Windows'],
    features: ['Web technologies', 'Plugin system', 'Cross-platform', 'Easy deployment'],
    useCases: ['Simple apps', 'Web app conversion', 'Prototyping', 'Content apps'],
    pros: ['Web technologies', 'Easy to learn', 'Plugin ecosystem', 'Cross-platform'],
    cons: ['Performance issues', 'UI limitations', 'WebView dependency']
  },
  {
    name: 'NativeScript',
    language: 'JavaScript/TypeScript',
    description: 'Build native mobile apps with JavaScript, TypeScript, or Angular',
    icon: '🟦',
    difficulty: 'Intermediate',
    popularity: 'Low',
    platforms: ['iOS', 'Android'],
    features: ['Native APIs', 'Angular/Vue support', 'Hot reload', 'Native performance'],
    useCases: ['Native performance needs', 'Angular teams', 'Complex apps', 'Enterprise'],
    pros: ['Native performance', 'Direct API access', 'Angular support', 'TypeScript'],
    cons: ['Smaller community', 'Learning curve', 'Limited resources']
  }
];

export default function MobileFrameworksPage() {
  return (
    <PageLayout
      title="Mobile Frameworks"
      description="Mobile frameworks enable you to create applications for smartphones and tablets. Choose between native development for optimal performance or cross-platform solutions for broader reach."
      icon={<div className="text-4xl">📱</div>}
      previousLink={{
        href: "/frameworks/fullstack",
        label: "Previous: Full-Stack Frameworks"
      }}
      nextLink={{
        href: "/frameworks",
        label: "Back to Frameworks"
      }}
    >
      {/* Quick Reference */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
          <Smartphone className="w-5 h-5 mr-2" />
          Quick Reference: Mobile Framework Selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">For React Developers:</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>React Native:</strong> Leverage React skills</li>
              <li>• <strong>Expo:</strong> Managed React Native</li>
              <li>• <strong>Ionic React:</strong> Web-based approach</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">For Best Performance:</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Flutter:</strong> Compiled to native</li>
              <li>• <strong>Native Development:</strong> Platform-specific</li>
              <li>• <strong>Xamarin:</strong> Native performance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">For Web Developers:</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm [&>li]:mb-1">
              <li>• <strong>Ionic:</strong> Web technologies</li>
              <li>• <strong>Cordova:</strong> HTML/CSS/JS</li>
              <li>• <strong>PWA:</strong> Progressive web apps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Mobile Frameworks</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {mobileFrameworks.map((framework, index) => (
            <div key={index} className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{framework.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{framework.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{framework.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      framework.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                      framework.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {framework.difficulty}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      framework.popularity === 'Very High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      framework.popularity === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      framework.popularity === 'Medium' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                    }`}>
                      {framework.popularity}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{framework.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Supported Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.platforms.map((platform, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Best For</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.useCases.map((useCase, i) => (
                        <li key={i}>• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pros</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cons</h4>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                      {framework.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Cross-Platform</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://reactnative.dev/" className="hover:underline">React Native</a></li>
              <li>• <a href="https://flutter.dev/" className="hover:underline">Flutter</a></li>
              <li>• <a href="https://ionicframework.com/" className="hover:underline">Ionic Framework</a></li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Enterprise</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://dotnet.microsoft.com/apps/xamarin" className="hover:underline">Xamarin</a></li>
              <li>• <a href="https://nativescript.org/" className="hover:underline">NativeScript</a></li>
              <li>• <a href="https://www.qt.io/product/qt-for-mobile-app-development" className="hover:underline">Qt Mobile</a></li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Web-Based</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm flex flex-col gap-2">
              <li>• <a href="https://cordova.apache.org/" className="hover:underline">Apache Cordova</a></li>
              <li>• <a href="https://capacitorjs.com/" className="hover:underline">Capacitor</a></li>
              <li>• <a href="https://web.dev/progressive-web-apps/" className="hover:underline">Progressive Web Apps</a></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
