import Link from 'next/link';
import { Github, Heart, Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FooterProps } from './types';

export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer className={`bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-6 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              OneNote Wiki
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A comprehensive OneNote resource for users of all skill levels. 
              Learn, organize, and collaborate with our community-driven content.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with ❤️ by the OneNote community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/getting-started" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/languages" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Programming Languages
                </Link>
              </li>
              <li>
                <Link href="/project-ideas" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Project Ideas
                </Link>
              </li>
              <li>
                <Link href="/mobile-development" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline md:no-underline md:hover:underline transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Community
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <a
                  href="https://discord.gg/codinghelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
                  <span className="text-sm">Join Discord</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://reddit.com/r/CodingHelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faReddit} className="w-5 h-5" />
                  <span className="text-sm">Visit Subreddit</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/codinghelp-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Code className="w-4 h-4" />
              <span>© 2024 CodingHelp Wiki. Open source and community-driven.</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <Link href="/contribute" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Contribute
              </Link>
            </div>
          </div>
        </div>
      </div>
      {children}
    </footer>
  );
}
