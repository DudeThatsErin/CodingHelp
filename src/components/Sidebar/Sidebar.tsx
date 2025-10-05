'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Code, 
  Lightbulb, 
  HelpCircle, 
  ChevronRight,
  Home,
  Layers,
  Database,
  Globe,
  Smartphone,
  Package,
  Brain
} from 'lucide-react';
import { SidebarProps } from './types';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home size={18} />
  },
  {
    title: 'Getting Started',
    href: '/getting-started',
    icon: <BookOpen size={18} />,
    children: [
      { title: 'What is Programming?', href: '/getting-started/what-is-programming', icon: <ChevronRight size={16} /> },
      { title: 'Choosing Your First Language', href: '/getting-started/choosing-language', icon: <ChevronRight size={16} /> },
      { title: 'Setting Up Your Environment', href: '/getting-started/setup', icon: <ChevronRight size={16} /> },
      { title: 'Your First Program', href: '/getting-started/first-program', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Programming Languages',
    href: '/languages',
    icon: <Code size={18} />,
    children: [
      { title: 'Python', href: '/languages/python', icon: <ChevronRight size={16} /> },
      { title: 'JavaScript', href: '/languages/javascript', icon: <ChevronRight size={16} /> },
      { title: 'Java', href: '/languages/java', icon: <ChevronRight size={16} /> },
      { title: 'C++', href: '/languages/cpp', icon: <ChevronRight size={16} /> },
      { title: 'C#', href: '/languages/csharp', icon: <ChevronRight size={16} /> },
      { title: 'Go', href: '/languages/go', icon: <ChevronRight size={16} /> },
      { title: 'Rust', href: '/languages/rust', icon: <ChevronRight size={16} /> },
      { title: 'TypeScript', href: '/languages/typescript', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Web Development',
    href: '/web-development',
    icon: <Globe size={18} />,
    children: [
      { title: 'HTML & CSS', href: '/web-development/html-css', icon: <ChevronRight size={16} /> },
      { title: 'Frontend Frameworks', href: '/web-development/frontend', icon: <ChevronRight size={16} /> },
      { title: 'Backend Development', href: '/web-development/backend', icon: <ChevronRight size={16} /> },
      { title: 'Full-Stack Development', href: '/web-development/fullstack', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Mobile Development',
    href: '/mobile-development',
    icon: <Smartphone size={18} />,
    children: [
      { title: 'iOS Development', href: '/mobile-development/ios', icon: <ChevronRight size={16} /> },
      { title: 'Android Development', href: '/mobile-development/android', icon: <ChevronRight size={16} /> },
      { title: 'Cross-Platform', href: '/mobile-development/cross-platform', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Data & Databases',
    href: '/data-databases',
    icon: <Database size={18} />,
    children: [
      { title: 'SQL Databases', href: '/data-databases/sql', icon: <ChevronRight size={16} /> },
      { title: 'NoSQL Databases', href: '/data-databases/nosql', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    href: '/frameworks',
    icon: <Layers size={18} />,
    children: [
      { title: 'React', href: '/frameworks/react', icon: <ChevronRight size={16} /> },
      { title: 'Vue.js', href: '/frameworks/vue', icon: <ChevronRight size={16} /> },
      { title: 'Angular', href: '/frameworks/angular', icon: <ChevronRight size={16} /> },
      { title: 'Node.js', href: '/frameworks/nodejs', icon: <ChevronRight size={16} /> },
      { title: 'Django', href: '/frameworks/django', icon: <ChevronRight size={16} /> },
      { title: 'Spring Boot', href: '/frameworks/spring-boot', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'AI & Machine Learning',
    href: '/ai',
    icon: <Brain size={18} />
  },
  {
    title: 'Project Ideas',
    href: '/project-ideas',
    icon: <Lightbulb size={18} />
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: <Package size={18} />,
    children: [
      { title: 'Programming Languages', href: '/resources/programming-languages', icon: <ChevronRight size={16} /> },
      { title: 'Development Tools', href: '/resources/development-tools', icon: <ChevronRight size={16} /> },
      { title: 'Programming Books', href: '/resources/books', icon: <ChevronRight size={16} /> },
      { title: 'Learning Platforms', href: '/resources/learning-platforms', icon: <ChevronRight size={16} /> },
      { title: 'Practice Platforms', href: '/resources/practice-platforms', icon: <ChevronRight size={16} /> },
      { title: 'Communities', href: '/resources/communities', icon: <ChevronRight size={16} /> }
    ]
  },
  {
    title: 'Help & Support',
    href: '/help',
    icon: <HelpCircle size={18} />
  }
];

export function Sidebar({ children, className = '' }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const hasActiveChild = (item: SidebarItem) => {
    if (!item.children) return false;
    return item.children.some(child => isActive(child.href));
  };

  return (
    <aside className={className}>
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href) || hasActiveChild(item)
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
              
              {item.children && (isActive(item.href) || hasActiveChild(item)) && (
                <ul className="mt-2 ml-6 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-base transition-colors ${
                          isActive(child.href)
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                            : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        {child.icon}
                        <span>{child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </aside>
  );
}
