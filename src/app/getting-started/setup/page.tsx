import Link from 'next/link';
import { Download, Code, Settings, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { DataTable } from '@/components/DataTable';

interface DevelopmentTool {
  name: string;
  category: string;
  type: string;
  price: string;
  platforms: string[];
  languages: string[];
  features: string[];
  company: string;
  firstRelease: number;
  downloadUrl: string;
  officialSite: string;
  documentation: string;
  description: string;
  popularity: string;
  openSource: boolean;
}

const developmentToolsData: DevelopmentTool[] = [
  {
    name: 'Visual Studio Code',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust'],
    features: ['IntelliSense', 'Debugging', 'Git Integration', 'Extensions', 'Terminal'],
    company: 'Microsoft',
    firstRelease: 2015,
    downloadUrl: 'https://code.visualstudio.com/download',
    officialSite: 'https://code.visualstudio.com/',
    documentation: 'https://code.visualstudio.com/docs',
    description: 'Lightweight but powerful source code editor with rich ecosystem of extensions',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'IntelliJ IDEA',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free (Community) / $149/year (Ultimate)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'Kotlin', 'Scala', 'Groovy', 'JavaScript', 'TypeScript'],
    features: ['Smart Code Completion', 'Refactoring', 'Debugging', 'Version Control', 'Database Tools'],
    company: 'JetBrains',
    firstRelease: 2001,
    downloadUrl: 'https://www.jetbrains.com/idea/download/',
    officialSite: 'https://www.jetbrains.com/idea/',
    documentation: 'https://www.jetbrains.com/help/idea/',
    description: 'Integrated development environment for Java and other JVM languages',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'PyCharm',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free (Community) / $89/year (Professional)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    features: ['Code Analysis', 'Debugging', 'Testing', 'Django Support', 'Scientific Tools'],
    company: 'JetBrains',
    firstRelease: 2010,
    downloadUrl: 'https://www.jetbrains.com/pycharm/download/',
    officialSite: 'https://www.jetbrains.com/pycharm/',
    documentation: 'https://www.jetbrains.com/help/pycharm/',
    description: 'IDE specifically designed for Python development',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'WebStorm',
    category: 'IDE/Editor',
    type: 'IDE',
    price: '$59/year',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Vue', 'Angular'],
    features: ['Smart Coding Assistance', 'Debugging', 'Testing', 'Version Control', 'Live Edit'],
    company: 'JetBrains',
    firstRelease: 2010,
    downloadUrl: 'https://www.jetbrains.com/webstorm/download/',
    officialSite: 'https://www.jetbrains.com/webstorm/',
    documentation: 'https://www.jetbrains.com/help/webstorm/',
    description: 'IDE for JavaScript and web development',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'Eclipse',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'C++', 'Python', 'PHP', 'JavaScript'],
    features: ['Plugin Architecture', 'Debugging', 'Refactoring', 'Version Control', 'Code Generation'],
    company: 'Eclipse Foundation',
    firstRelease: 2001,
    downloadUrl: 'https://www.eclipse.org/downloads/',
    officialSite: 'https://www.eclipse.org/',
    documentation: 'https://help.eclipse.org/',
    description: 'Extensible IDE primarily for Java development',
    popularity: 'Medium',
    openSource: true
  },
  {
    name: 'NetBeans',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'PHP', 'C++', 'HTML', 'JavaScript'],
    features: ['Code Templates', 'Refactoring', 'Debugging', 'Profiling', 'Version Control'],
    company: 'Apache Software Foundation',
    firstRelease: 1997,
    downloadUrl: 'https://netbeans.apache.org/download/',
    officialSite: 'https://netbeans.apache.org/',
    documentation: 'https://netbeans.apache.org/kb/',
    description: 'Free IDE for Java, PHP, and other languages',
    popularity: 'Medium',
    openSource: true
  },
  {
    name: 'Android Studio',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java', 'Kotlin', 'C++', 'Dart'],
    features: ['Layout Editor', 'APK Analyzer', 'Fast Emulator', 'Intelligent Code Editor', 'Real-time Profilers'],
    company: 'Google',
    firstRelease: 2013,
    downloadUrl: 'https://developer.android.com/studio',
    officialSite: 'https://developer.android.com/studio',
    documentation: 'https://developer.android.com/studio/intro',
    description: 'Official IDE for Android app development',
    popularity: 'High',
    openSource: true
  },
  {
    name: 'Xcode',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['macOS'],
    languages: ['Swift', 'Objective-C', 'C++', 'C'],
    features: ['Interface Builder', 'iOS Simulator', 'Debugging', 'Performance Tools', 'App Store Connect'],
    company: 'Apple',
    firstRelease: 2003,
    downloadUrl: 'https://apps.apple.com/us/app/xcode/id497799835',
    officialSite: 'https://developer.apple.com/xcode/',
    documentation: 'https://developer.apple.com/documentation/xcode',
    description: 'Complete developer toolset for creating apps for Apple platforms',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'PhpStorm',
    category: 'IDE/Editor',
    type: 'IDE',
    price: '$89/year',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    features: ['Code Completion', 'Debugging', 'Testing', 'Database Tools', 'Framework Support'],
    company: 'JetBrains',
    firstRelease: 2009,
    downloadUrl: 'https://www.jetbrains.com/phpstorm/download/',
    officialSite: 'https://www.jetbrains.com/phpstorm/',
    documentation: 'https://www.jetbrains.com/help/phpstorm/',
    description: 'IDE for PHP development',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'RubyMine',
    category: 'IDE/Editor',
    type: 'IDE',
    price: '$89/year',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Ruby', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    features: ['Code Assistance', 'Debugging', 'Testing', 'Version Control', 'Database Tools'],
    company: 'JetBrains',
    firstRelease: 2007,
    downloadUrl: 'https://www.jetbrains.com/ruby/download/',
    officialSite: 'https://www.jetbrains.com/ruby/',
    documentation: 'https://www.jetbrains.com/help/ruby/',
    description: 'IDE for Ruby and Rails development',
    popularity: 'Medium',
    openSource: false
  },
  {
    name: 'Sublime Text',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: '$99 (Free trial)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All major languages'],
    features: ['Multiple Selections', 'Command Palette', 'Split Editing', 'Plugin API', 'Goto Anything'],
    company: 'Sublime HQ',
    firstRelease: 2008,
    downloadUrl: 'https://www.sublimetext.com/download',
    officialSite: 'https://www.sublimetext.com/',
    documentation: 'https://www.sublimetext.com/docs/',
    description: 'Sophisticated text editor for code, markup and prose',
    popularity: 'Medium',
    openSource: false
  },
  {
    name: 'Atom',
    category: 'IDE/Editor',
    type: 'Code Editor',
    price: 'Free (Discontinued)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All major languages'],
    features: ['Built-in Package Manager', 'Smart Autocompletion', 'File System Browser', 'Multiple Panes'],
    company: 'GitHub',
    firstRelease: 2014,
    downloadUrl: 'https://github.com/atom/atom/releases',
    officialSite: 'https://atom.io/',
    documentation: 'https://flight-manual.atom.io/',
    description: 'Hackable text editor for the 21st Century (Discontinued in 2022)',
    popularity: 'Low',
    openSource: true
  },
  {
    name: 'Komodo IDE',
    category: 'IDE/Editor',
    type: 'IDE',
    price: '$295/year',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Python', 'PHP', 'Ruby', 'JavaScript', 'Perl', 'Tcl'],
    features: ['Code Intelligence', 'Debugging', 'Unit Testing', 'Version Control', 'Database Explorer'],
    company: 'ActiveState',
    firstRelease: 2000,
    downloadUrl: 'https://www.activestate.com/products/komodo-ide/',
    officialSite: 'https://www.activestate.com/products/komodo-ide/',
    documentation: 'https://docs.activestate.com/komodo/',
    description: 'Multi-language IDE for dynamic languages',
    popularity: 'Low',
    openSource: false
  },
  {
    name: 'Code::Blocks',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['C', 'C++', 'Fortran'],
    features: ['Syntax Highlighting', 'Code Completion', 'Debugging', 'Plugin Architecture', 'Project Management'],
    company: 'Code::Blocks Team',
    firstRelease: 2005,
    downloadUrl: 'https://www.codeblocks.org/downloads/',
    officialSite: 'https://www.codeblocks.org/',
    documentation: 'https://wiki.codeblocks.org/',
    description: 'Free C/C++ IDE built to meet the most demanding needs of its users',
    popularity: 'Low',
    openSource: true
  },
  {
    name: 'BlueJ',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['Java'],
    features: ['Object Bench', 'Code Pad', 'Scope Coloring', 'UML Diagram', 'Simple Interface'],
    company: 'BlueJ Team',
    firstRelease: 1999,
    downloadUrl: 'https://www.bluej.org/',
    officialSite: 'https://www.bluej.org/',
    documentation: 'https://www.bluej.org/doc/documentation.html',
    description: 'Java development environment designed for beginners',
    popularity: 'Low',
    openSource: true
  },
  {
    name: 'Visual Studio',
    category: 'IDE/Editor',
    type: 'IDE',
    price: 'Free (Community) / $45/month (Professional)',
    platforms: ['Windows', 'macOS'],
    languages: ['C#', 'VB.NET', 'C++', 'F#', 'JavaScript', 'TypeScript'],
    features: ['IntelliSense', 'Debugging', 'Testing', 'Azure Integration', 'Live Share'],
    company: 'Microsoft',
    firstRelease: 1997,
    downloadUrl: 'https://visualstudio.microsoft.com/downloads/',
    officialSite: 'https://visualstudio.microsoft.com/',
    documentation: 'https://docs.microsoft.com/en-us/visualstudio/',
    description: 'Integrated development environment from Microsoft',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'JupyterLab',
    category: 'IDE/Editor',
    type: 'Notebook IDE',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux', 'Web'],
    languages: ['Python', 'R', 'Julia', 'Scala', 'JavaScript'],
    features: ['Interactive Notebooks', 'Code Console', 'Terminal', 'File Browser', 'Extensions'],
    company: 'Project Jupyter',
    firstRelease: 2018,
    downloadUrl: 'https://jupyter.org/install',
    officialSite: 'https://jupyter.org/',
    documentation: 'https://jupyterlab.readthedocs.io/',
    description: 'Web-based interactive development environment for notebooks and code',
    popularity: 'High',
    openSource: true
  },
  {
    name: 'Replit',
    category: 'IDE/Editor',
    type: 'Online IDE',
    price: 'Free / $7/month (Hacker Plan)',
    platforms: ['Web'],
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'Rust', '50+ languages'],
    features: ['Real-time Collaboration', 'Instant Hosting', 'Package Management', 'Version Control', 'AI Assistant'],
    company: 'Replit Inc.',
    firstRelease: 2016,
    downloadUrl: 'https://replit.com/',
    officialSite: 'https://replit.com/',
    documentation: 'https://docs.replit.com/',
    description: 'Online IDE for coding, collaborating, and learning',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'Git',
    category: 'Version Control',
    type: 'VCS',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All'],
    features: ['Distributed VCS', 'Branching', 'Merging', 'Staging Area', 'Remote Repositories'],
    company: 'Git Community',
    firstRelease: 2005,
    downloadUrl: 'https://git-scm.com/downloads',
    officialSite: 'https://git-scm.com/',
    documentation: 'https://git-scm.com/doc',
    description: 'Distributed version control system for tracking changes in source code',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    type: 'Git Hosting',
    price: 'Free / $4/month (Pro)',
    platforms: ['Web', 'Desktop Apps'],
    languages: ['All'],
    features: ['Git Repositories', 'Pull Requests', 'Issues', 'Actions', 'Pages', 'Codespaces'],
    company: 'Microsoft',
    firstRelease: 2008,
    downloadUrl: 'https://github.com/',
    officialSite: 'https://github.com/',
    documentation: 'https://docs.github.com/',
    description: 'Web-based Git repository hosting service',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'GitLab',
    category: 'Version Control',
    type: 'Git Hosting',
    price: 'Free / $19/month (Premium)',
    platforms: ['Web', 'Self-hosted'],
    languages: ['All'],
    features: ['Git Repositories', 'CI/CD', 'Issue Tracking', 'Wiki', 'Container Registry'],
    company: 'GitLab Inc.',
    firstRelease: 2011,
    downloadUrl: 'https://gitlab.com/',
    officialSite: 'https://gitlab.com/',
    documentation: 'https://docs.gitlab.com/',
    description: 'Web-based DevOps lifecycle tool with Git repository management',
    popularity: 'High',
    openSource: true
  },
  {
    name: 'Bitbucket',
    category: 'Version Control',
    type: 'Git Hosting',
    price: 'Free / $3/month (Standard)',
    platforms: ['Web'],
    languages: ['All'],
    features: ['Git Repositories', 'Pull Requests', 'Pipelines', 'Jira Integration', 'Deployment'],
    company: 'Atlassian',
    firstRelease: 2008,
    downloadUrl: 'https://bitbucket.org/',
    officialSite: 'https://bitbucket.org/',
    documentation: 'https://support.atlassian.com/bitbucket-cloud/',
    description: 'Git repository management solution by Atlassian',
    popularity: 'Medium',
    openSource: false
  },
  {
    name: 'Docker',
    category: 'DevOps',
    type: 'Containerization',
    price: 'Free (Personal) / $5/month (Pro)',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['All'],
    features: ['Containerization', 'Image Management', 'Docker Compose', 'Swarm Mode', 'Registry'],
    company: 'Docker Inc.',
    firstRelease: 2013,
    downloadUrl: 'https://www.docker.com/products/docker-desktop',
    officialSite: 'https://www.docker.com/',
    documentation: 'https://docs.docker.com/',
    description: 'Platform for developing, shipping, and running applications in containers',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    type: 'Container Orchestration',
    price: 'Free',
    platforms: ['Linux', 'Cloud'],
    languages: ['All'],
    features: ['Container Orchestration', 'Service Discovery', 'Load Balancing', 'Auto Scaling', 'Rolling Updates'],
    company: 'CNCF',
    firstRelease: 2014,
    downloadUrl: 'https://kubernetes.io/releases/download/',
    officialSite: 'https://kubernetes.io/',
    documentation: 'https://kubernetes.io/docs/',
    description: 'Container orchestration platform for automating deployment and management',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'PM2',
    category: 'DevOps',
    type: 'Process Manager',
    price: 'Free / $49/month (Plus)',
    platforms: ['Linux', 'macOS', 'Windows'],
    languages: ['Node.js', 'Python', 'Ruby', 'PHP'],
    features: ['Process Management', 'Load Balancing', 'Monitoring', 'Log Management', 'Cluster Mode'],
    company: 'Keymetrics',
    firstRelease: 2013,
    downloadUrl: 'https://pm2.keymetrics.io/',
    officialSite: 'https://pm2.keymetrics.io/',
    documentation: 'https://pm2.keymetrics.io/docs/',
    description: 'Advanced process manager for production Node.js applications',
    popularity: 'High',
    openSource: true
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    type: 'JavaScript Runtime',
    price: 'Free',
    platforms: ['Windows', 'macOS', 'Linux'],
    languages: ['JavaScript', 'TypeScript'],
    features: ['V8 Engine', 'NPM', 'Event-driven', 'Non-blocking I/O', 'Cross-platform'],
    company: 'Node.js Foundation',
    firstRelease: 2009,
    downloadUrl: 'https://nodejs.org/en/download/',
    officialSite: 'https://nodejs.org/',
    documentation: 'https://nodejs.org/en/docs/',
    description: 'JavaScript runtime built on Chrome V8 engine',
    popularity: 'Very High',
    openSource: true
  },
  {
    name: 'AWS Cloud9',
    category: 'Cloud IDE',
    type: 'Online IDE',
    price: 'Free (with AWS usage charges)',
    platforms: ['Web'],
    languages: ['JavaScript', 'Python', 'PHP', 'Ruby', 'Go', 'C++'],
    features: ['Code Editor', 'Terminal', 'Debugger', 'AWS Integration', 'Collaboration'],
    company: 'Amazon',
    firstRelease: 2010,
    downloadUrl: 'https://aws.amazon.com/cloud9/',
    officialSite: 'https://aws.amazon.com/cloud9/',
    documentation: 'https://docs.aws.amazon.com/cloud9/',
    description: 'Cloud-based IDE for writing, running, and debugging code',
    popularity: 'Medium',
    openSource: false
  },
  {
    name: 'DigitalOcean',
    category: 'Cloud Platform',
    type: 'Cloud Hosting',
    price: '$5/month (Basic Droplet)',
    platforms: ['Web', 'API'],
    languages: ['All'],
    features: ['Virtual Machines', 'Kubernetes', 'Databases', 'Load Balancers', 'Monitoring'],
    company: 'DigitalOcean',
    firstRelease: 2011,
    downloadUrl: 'https://www.digitalocean.com/',
    officialSite: 'https://www.digitalocean.com/',
    documentation: 'https://docs.digitalocean.com/',
    description: 'Cloud infrastructure provider focused on simplicity',
    popularity: 'High',
    openSource: false
  },
  {
    name: 'Postman',
    category: 'API Testing',
    type: 'API Client',
    price: 'Free / $12/month (Team)',
    platforms: ['Windows', 'macOS', 'Linux', 'Web'],
    languages: ['All'],
    features: ['API Testing', 'Collections', 'Environment Variables', 'Mock Servers', 'Monitoring'],
    company: 'Postman Inc.',
    firstRelease: 2012,
    downloadUrl: 'https://www.postman.com/downloads/',
    officialSite: 'https://www.postman.com/',
    documentation: 'https://learning.postman.com/docs/',
    description: 'Collaboration platform for API development and testing',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Figma',
    category: 'Design',
    type: 'UI/UX Design',
    price: 'Free / $12/month (Professional)',
    platforms: ['Web', 'Windows', 'macOS'],
    languages: ['N/A'],
    features: ['Vector Graphics', 'Prototyping', 'Collaboration', 'Design Systems', 'Developer Handoff'],
    company: 'Figma Inc.',
    firstRelease: 2016,
    downloadUrl: 'https://www.figma.com/downloads/',
    officialSite: 'https://www.figma.com/',
    documentation: 'https://help.figma.com/',
    description: 'Collaborative interface design tool',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Slack',
    category: 'Communication',
    type: 'Team Chat',
    price: 'Free / $6.67/month (Pro)',
    platforms: ['Web', 'Windows', 'macOS', 'Mobile'],
    languages: ['N/A'],
    features: ['Channels', 'Direct Messages', 'File Sharing', 'App Integrations', 'Video Calls'],
    company: 'Slack Technologies',
    firstRelease: 2013,
    downloadUrl: 'https://slack.com/downloads/',
    officialSite: 'https://slack.com/',
    documentation: 'https://slack.com/help',
    description: 'Business communication platform for teams',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Discord',
    category: 'Communication',
    type: 'Voice/Text Chat',
    price: 'Free / $9.99/month (Nitro)',
    platforms: ['Web', 'Windows', 'macOS', 'Mobile'],
    languages: ['N/A'],
    features: ['Voice Channels', 'Text Channels', 'Screen Sharing', 'Bots', 'Server Management'],
    company: 'Discord Inc.',
    firstRelease: 2015,
    downloadUrl: 'https://discord.com/download',
    officialSite: 'https://discord.com/',
    documentation: 'https://support.discord.com/',
    description: 'Voice, video and text communication service for communities',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Jira',
    category: 'Project Management',
    type: 'Issue Tracking',
    price: 'Free (10 users) / $7/month (Standard)',
    platforms: ['Web', 'Mobile'],
    languages: ['N/A'],
    features: ['Issue Tracking', 'Agile Boards', 'Reporting', 'Workflows', 'Integration'],
    company: 'Atlassian',
    firstRelease: 2002,
    downloadUrl: 'https://www.atlassian.com/software/jira',
    officialSite: 'https://www.atlassian.com/software/jira',
    documentation: 'https://support.atlassian.com/jira/',
    description: 'Issue tracking and project management tool',
    popularity: 'Very High',
    openSource: false
  },
  {
    name: 'Confluence',
    category: 'Documentation',
    type: 'Wiki/Documentation',
    price: 'Free (10 users) / $5/month (Standard)',
    platforms: ['Web', 'Mobile'],
    languages: ['N/A'],
    features: ['Wiki Pages', 'Collaboration', 'Templates', 'Macros', 'Integration'],
    company: 'Atlassian',
    firstRelease: 2004,
    downloadUrl: 'https://www.atlassian.com/software/confluence',
    officialSite: 'https://www.atlassian.com/software/confluence',
    documentation: 'https://support.atlassian.com/confluence/',
    description: 'Team workspace for knowledge management and collaboration',
    popularity: 'High',
    openSource: false
  }
];

const columns = [
  {
    key: 'name' as keyof DevelopmentTool,
    header: 'Tool'
  },
  {
    key: 'category' as keyof DevelopmentTool,
    header: 'Category'
  },
  {
    key: 'price' as keyof DevelopmentTool,
    header: 'Price'
  },
  {
    key: 'platforms' as keyof DevelopmentTool,
    header: 'Platforms'
  },
  {
    key: 'description' as keyof DevelopmentTool,
    header: 'Description'
  }
];

const setupSteps = [
  {
    title: 'Choose Your Operating System',
    description: 'Most programming can be done on any OS, but some have advantages',
    details: [
      'Windows: Great for .NET development, gaming, general use',
      'macOS: Preferred for iOS development, Unix-based',
      'Linux: Popular among developers, free, highly customizable'
    ]
  },
  {
    title: 'Install a Code Editor',
    description: 'A good editor makes coding much more enjoyable and productive',
    details: [
      'VS Code: Free, popular, tons of extensions',
      'Sublime Text: Fast, lightweight, paid',
      'Atom: Free, hackable, GitHub-made (discontinued but still usable)'
    ]
  },
  {
    title: 'Install Your Programming Language',
    description: 'Download and install the runtime/compiler for your chosen language',
    details: [
      'Python: Download from python.org',
      'JavaScript: Built into browsers, Node.js for backend',
      'Java: Install JDK from Oracle or OpenJDK'
    ]
  },
  {
    title: 'Set Up Version Control',
    description: 'Git is essential for tracking changes and collaboration',
    details: [
      'Install Git from git-scm.com',
      'Create a GitHub account',
      'Configure Git with your name and email'
    ]
  }
];

const editorComparison = [
  {
    name: 'VS Code',
    price: 'Free',
    pros: ['Huge extension library', 'Great debugging', 'Integrated terminal', 'Git integration'],
    cons: ['Can be resource-heavy', 'Microsoft product'],
    bestFor: 'Most beginners and professionals',
    downloadUrl: 'https://code.visualstudio.com/'
  },
  {
    name: 'IntelliJ IDEA',
    price: 'Free Community / Paid Ultimate',
    pros: ['Excellent for Java', 'Smart code completion', 'Powerful refactoring', 'Built-in tools'],
    cons: ['Heavy resource usage', 'Complex interface', 'Paid for full features'],
    bestFor: 'Java developers, enterprise development',
    downloadUrl: 'https://www.jetbrains.com/idea/'
  },
  {
    name: 'Sublime Text',
    price: 'Paid ($99)',
    pros: ['Very fast', 'Lightweight', 'Great performance', 'Customizable'],
    cons: ['Paid license', 'Fewer features out of box', 'Less beginner-friendly'],
    bestFor: 'Developers who want speed and simplicity',
    downloadUrl: 'https://www.sublimetext.com/'
  },
  {
    name: 'Vim/Neovim',
    price: 'Free',
    pros: ['Extremely powerful', 'Keyboard-driven', 'Available everywhere', 'Highly customizable'],
    cons: ['Steep learning curve', 'Not beginner-friendly', 'Requires configuration'],
    bestFor: 'Advanced developers, terminal enthusiasts',
    downloadUrl: 'https://www.vim.org/'
  }
];

const languageSetup = [
  {
    language: 'Python',
    icon: '🐍',
    steps: [
      'Go to python.org and download Python 3.x',
      'Run the installer (check "Add Python to PATH")',
      'Open terminal/command prompt and type: python --version',
      'Install pip (usually comes with Python): pip --version',
      'Optional: Install a virtual environment manager like venv'
    ],
    verifyCommand: 'python --version',
    packageManager: 'pip'
  },
  {
    language: 'JavaScript',
    icon: '🟨',
    steps: [
      'JavaScript runs in browsers by default',
      'For backend development, install Node.js from nodejs.org',
      'Download the LTS (Long Term Support) version',
      'Open terminal and verify: node --version',
      'npm (package manager) comes with Node.js: npm --version'
    ],
    verifyCommand: 'node --version',
    packageManager: 'npm'
  },
  {
    language: 'Java',
    icon: '☕',
    steps: [
      'Download JDK from Oracle or use OpenJDK',
      'Install the JDK (Java Development Kit)',
      'Set JAVA_HOME environment variable',
      'Add Java to your PATH',
      'Verify installation: java --version and javac --version'
    ],
    verifyCommand: 'java --version',
    packageManager: 'Maven/Gradle'
  }
];

export default function SetupPage() {
  return (
    <PageLayout
      title="Setting Up Your Environment"
      description="Before you can start coding, you need to set up your development environment. This includes installing the necessary software and tools."
      icon={<div className="text-4xl">⚙️</div>}
      previousLink={{
        href: "/getting-started/choosing-language",
        label: "Previous: Choosing a Language"
      }}
      nextLink={{
        href: "/getting-started/first-program",
        label: "Next: Your First Program"
      }}
    >

      {/* Setup Overview */}
      <div className="pb-2">
        <h3 className="text-2xl font-semibold mb-1">
          What You'll Need
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 [&>li]:mb-0">
          <li><strong>Windows:</strong> Great for .NET development, gaming, general use</li>
          <li><strong>macOS:</strong> Preferred for iOS development, Unix-based</li>
          <li><strong>Linux:</strong> Popular among developers, free, highly customizable</li>
          <li><strong>VS Code:</strong> Free, popular, tons of extensions</li>
          <li><strong>Sublime Text:</strong> Fast, lightweight, paid</li>
          <li><strong>Atom:</strong> Free, hackable, GitHub-made (discontinued but still usable)</li>
          <li><strong>Python:</strong> Download from python.org</li>
          <li><strong>JavaScript:</strong> Built into browsers, Node.js for backend</li>
          <li><strong>Java:</strong> Install JDK from Oracle or OpenJDK</li>
          <li><strong>Install Git from git-scm.com</strong></li>
          <li><strong>Create a GitHub account</strong></li>
          <li><strong>Configure Git with your name and email</strong></li>
        </ul>
      </div>

      {/* Development Tools Database */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Development Tools & IDEs Database
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          Browse our comprehensive database of 30+ development tools, IDEs, and software with detailed information, 
          pricing, platform support, and download links.
        </p>
        <DataTable 
          data={developmentToolsData} 
          columns={columns}
          title="Development Tools"
        />
      </section>

      {/* Language-Specific Setup */}
      <section className="flex flex-col gap-6 md:gap-8 py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Language-Specific Setup
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {languageSetup.map((lang, index) => (
            <div key={index} className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200/50 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{lang.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang.language} Setup
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Installation Steps:</h4>
                <ol className="flex flex-col gap-2">
                  {lang.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                
                <div className="bg-gray-700 p-3 rounded mt-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Verify Installation:</h5>
                  <code className="text-sm text-gray-700 dark:text-gray-300">{lang.verifyCommand}</code>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong>Package Manager:</strong> {lang.packageManager}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Extensions/Plugins */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Essential VS Code Extensions
        </h2>
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">General Extensions:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
                <li><strong>Prettier</strong> - Code formatter</li>
                <li><strong>GitLens</strong> - Enhanced Git capabilities</li>
                <li><strong>Live Server</strong> - Local development server</li>
                <li><strong>Bracket Pair Colorizer</strong> - Color-coded brackets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Language-Specific:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
                <li><strong>Python</strong> - Python language support</li>
                <li><strong>ES7+ React/Redux/React-Native</strong> - JavaScript/React snippets</li>
                <li><strong>Extension Pack for Java</strong> - Complete Java development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Setup */}
      <div className="pb-4">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          Terminal/Command Line Setup
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Windows:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>Use PowerShell or Command Prompt</li>
              <li>Consider Windows Terminal (modern)</li>
              <li>WSL2 for Linux compatibility</li>
              <li>Git Bash for Unix-like commands</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">macOS:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>Built-in Terminal app</li>
              <li>iTerm2 for advanced features</li>
              <li>Zsh is default shell</li>
              <li>Homebrew for package management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Linux:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 content-list marker-blue [&>li]:mb-3">
              <li>Built-in terminal emulator</li>
              <li>Bash or Zsh shell</li>
              <li>Package manager (apt, yum, pacman)</li>
              <li>Highly customizable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          Common Setup Issues
        </h3>
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">PATH Issues:</h4>
            <p className="text-yellow-800 dark:text-yellow-200">
              If commands aren't recognized, you may need to add the installation directory to your system PATH.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Permission Errors:</h4>
            <p className="text-yellow-800 dark:text-yellow-200">
              On macOS/Linux, you might need to use <code>sudo</code> for system-wide installations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100">Version Conflicts:</h4>
            <p className="text-yellow-800 dark:text-yellow-200">
              Use virtual environments (Python) or version managers (Node.js) to avoid conflicts.
            </p>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
