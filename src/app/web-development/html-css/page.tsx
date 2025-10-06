import Link from 'next/link';
import { Globe, Code, Users, Star, Palette, Layout, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

const htmlBasics = [
  { title: 'HTML Structure', description: 'DOCTYPE, html, head, body elements' },
  { title: 'Text Elements', description: 'Headings, paragraphs, lists, links' },
  { title: 'Media Elements', description: 'Images, videos, audio' },
  { title: 'Forms', description: 'Input fields, buttons, validation' },
  { title: 'Semantic HTML', description: 'header, nav, main, article, section, footer' }
];

const cssBasics = [
  { title: 'Selectors', description: 'Element, class, ID, attribute selectors' },
  { title: 'Box Model', description: 'Margin, border, padding, content' },
  { title: 'Layout', description: 'Flexbox, Grid, positioning' },
  { title: 'Responsive Design', description: 'Media queries, mobile-first approach' },
  { title: 'Animations', description: 'Transitions, keyframes, transforms' }
];

export default function HTMLCSSPage() {
  return (
    <PageLayout
      title="HTML & CSS"
      description="HTML and CSS are the fundamental technologies for building web pages. Learn to structure content with HTML and style it beautifully with CSS."
      icon={<div className="text-4xl">🎨</div>}
      previousLink={{
        href: "/web-development/frontend",
        label: "Previous: Frontend Development"
      }}
      nextLink={{
        href: "/web-development/javascript",
        label: "Next: JavaScript for Web"
      }}
    >

      {/* What You'll Learn */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📚 What You'll Learn
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layout className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white">HTML Fundamentals</h4>
            </div>
            <ul className="flex flex-col gap-2">
              {htmlBasics.map((item, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white">CSS Fundamentals</h4>
            </div>
            <ul className="flex flex-col gap-2">
              {cssBasics.map((item, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hands-on Tutorial */}
      <section className="flex flex-col gap-6 md:gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg">🎨</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Hands-on Tutorial: Build Your First Web Page</h2>
        </div>
        
        <div className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
          <div className="flex flex-col gap-6 text-gray-600 dark:text-gray-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Create a basic HTML file</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Create a file called <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">index.html</code> and add this structure:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
</body>
</html>`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Add semantic HTML structure</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Expand your HTML with proper semantic elements:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`<body>
    <header>
        <h1>Welcome to My Site</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>I'm learning web development!</p>
            <ul>
                <li>HTML for structure</li>
                <li>CSS for styling</li>
                <li>JavaScript for interactivity</li>
            </ul>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Add CSS styling</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Create a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">style.css</code> file and link it in your HTML head:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`/* In your HTML head: */
<link rel="stylesheet" href="style.css">

/* In style.css: */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Style the main content</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Add styling for the main content area:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1rem;
}

ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
}

footer {
    text-align: center;
    padding: 2rem;
    background-color: #34495e;
    color: white;
    margin-top: 2rem;
}`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Make it responsive</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Add responsive design with CSS media queries:</p>
              <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900 p-4 rounded">{`/* Responsive Design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    main {
        margin: 1rem;
        padding: 1rem;
    }
    
    header, footer {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    body {
        font-size: 14px;
    }
    
    h1 {
        font-size: 1.5rem;
    }
    
    h2 {
        font-size: 1.2rem;
    }
}`}</pre>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                <h4 className="font-semibold text-gray-900 dark:text-white">Test and view your page</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Open your <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">index.html</code> file in a web browser to see your creation!</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mt-3">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  💡 <strong>Pro tips:</strong> Right-click → "Inspect Element" to see the HTML structure, try resizing your browser window to test responsiveness, and experiment with different colors and fonts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HTML Section */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Layout className="w-6 h-6 text-gray-600" />
          <span>HTML - HyperText Markup Language</span>
        </h2>
        
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-gray-600 dark:text-gray-300">
            HTML is the standard markup language for creating web pages. It describes the structure 
            and content of a webpage using elements and tags.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">Basic HTML Structure:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content of the page.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`}
            </pre>
          </div>
        </div>
      </section>

      {/* CSS Section */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Palette className="w-6 h-6 text-gray-600" />
          <span>CSS - Cascading Style Sheets</span>
        </h2>
        
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-gray-600 dark:text-gray-300">
            CSS is used to style and layout web pages. It controls colors, fonts, spacing, 
            positioning, and responsive behavior.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-50/50 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-2">Basic CSS Example:</h4>
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header styles */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

header h1 {
    text-align: center;
    margin-bottom: 1rem;
}

/* Navigation */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

/* Responsive design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        gap: 0.5rem;
    }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Modern CSS Features */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Modern CSS Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-3">🔧 Flexbox Layout</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Perfect for one-dimensional layouts and component alignment.
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-2 rounded">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-3">📱 CSS Grid</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Powerful two-dimensional layout system for complex designs.
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-2 rounded">
{`.grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📖 Recommended Learning Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Free Resources:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>MDN Web Docs (HTML & CSS Reference)</li>
              <li>freeCodeCamp (Interactive Lessons)</li>
              <li>CSS-Tricks (Tips and Tutorials)</li>
              <li>Flexbox Froggy (Flexbox Game)</li>
              <li>Grid Garden (CSS Grid Game)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Practice Projects:</h4>
            <ul className="text-blue-800 dark:text-blue-200 text-sm [&>li]:mb-1">
              <li>Personal Portfolio Website</li>
              <li>Restaurant Landing Page</li>
              <li>Photo Gallery with Grid</li>
              <li>Responsive Navigation Menu</li>
              <li>CSS Animation Showcase</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 dark:text-white mb-4">
          🚀 Next Steps
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Once you're comfortable with HTML and CSS fundamentals, you're ready to explore 
          modern frontend frameworks and JavaScript libraries.
        </p>
        <Link
          href="/web-development/frontend"
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Learn Frontend Frameworks →
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-200/50 dark:border-gray-700">
        <Link
          href="/web-development"
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Web Development</span>
        </Link>
        <Link
          href="/web-development/frontend"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Frontend Frameworks</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
