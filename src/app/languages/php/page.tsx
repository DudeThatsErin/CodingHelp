import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Database, Globe, Zap, Server, Users } from 'lucide-react';

const phpFeatures = [
  {
    title: 'Server-Side Scripting',
    description: 'Designed specifically for web development and server-side scripting',
    icon: <Server className="w-5 h-5" />
  },
  {
    title: 'Easy to Learn',
    description: 'Simple syntax with a gentle learning curve for beginners',
    icon: <Code className="w-5 h-5" />
  },
  {
    title: 'Database Integration',
    description: 'Excellent built-in support for databases, especially MySQL',
    icon: <Database className="w-5 h-5" />
  },
  {
    title: 'Large Ecosystem',
    description: 'Massive collection of frameworks, libraries, and CMS platforms',
    icon: <Globe className="w-5 h-5" />
  }
];

export default function PHPPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/rust"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Rust</span>
        </Link>
        <Link
          href="/languages"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to Languages</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐘</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PHP</h1>
            <p className="text-gray-600 dark:text-gray-300">The web's most popular server-side language</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          PHP (PHP: Hypertext Preprocessor) is a popular general-purpose scripting language especially 
          suited for web development. Created by Rasmus Lerdorf in 1995, PHP powers over 78% of all 
          websites with server-side programming, including major platforms like Facebook and WordPress.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1995</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">First Released</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Beginner</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Difficulty Level</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">78%</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Web Usage</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6M+</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Developers</div>
        </div>
      </div>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose PHP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phpFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-purple-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          PHP Code Example
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            🚀 Basic PHP Web Application
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`<?php
// Hello World
echo "Hello, World!";

// Variables and Data Types
$name = "Alice";
$age = 25;
$hobbies = ["reading", "coding", "gaming"];

// HTML Integration
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP Example</title>
</head>
<body>
    <h1>Welcome, <?= $name ?>!</h1>
    <p>You are <?= $age ?> years old.</p>
    
    <h2>Your hobbies:</h2>
    <ul>
        <?php foreach ($hobbies as $hobby): ?>
            <li><?= $hobby ?></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>

<?php
// Database Example
$pdo = new PDO('mysql:host=localhost;dbname=myapp', $user, $pass);
$stmt = $pdo->prepare("SELECT * FROM users WHERE age > ?");
$stmt->execute([18]);
$users = $stmt->fetchAll();

foreach ($users as $user) {
    echo $user['name'] . "\\n";
}
?>`}
          </pre>
        </div>
      </section>

      {/* Getting Started */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
          🚀 Getting Started with PHP
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Install PHP</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Download from php.net or use XAMPP/WAMP for local development</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Set Up Web Server</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Use Apache, Nginx, or PHP's built-in server for development</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Write Your First Script</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Create a .php file with &lt;?php echo "Hello, World!"; ?&gt;</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-100">Learn the Basics</h4>
              <p className="text-green-800 dark:text-green-200 text-sm">Master variables, arrays, functions, and database integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/rust"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Rust</span>
        </Link>
        <Link
          href="/languages"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to Languages</span>
        </Link>
      </div>
    </div>
  );
}
