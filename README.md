# CodingHelp Wiki

A comprehensive wiki for learning programming and software development, created by the CodingHelp community. 

🌐 **Live Site:** [https://coding-help.vercel.app](https://coding-help.vercel.app)  
💬 **Discord:** [https://discord.gg/geQEUBm](https://discord.gg/geQEUBm)  
🤝 **Reddit:** [https://reddit.com/r/CodingHelp](https://reddit.com/r/CodingHelp)

## Features

- 🌙 **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🧭 **Intuitive Navigation** - Sidebar navigation with expandable sections
- 📚 **Comprehensive Content** - Covers programming fundamentals to advanced topics
- 🎨 **Modern UI** - Clean, accessible design built with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🔍 **SEO Optimized** - Proper meta tags and structured content
- 🏗️ **Professional Component Architecture** - 12 reusable components with folder-based structure
- 📊 **Interactive Statistics** - Dynamic QuickStats with icons across all sections
- ♿ **Accessibility Enhanced** - Semantic HTML with proper list styling (`list-disc list-inside`)
- 🎨 **Modern Layout Patterns** - `flex flex-col gap-*` system replacing space utilities
- 🔒 **Type-Safe Development** - Complete TypeScript integration with component-specific types
- ✅ **100% Build Success** - Enterprise-grade setup with comprehensive testing

## Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS with modern layout patterns
- **Icons:** Lucide React & FontAwesome
- **Components:** Professional folder-based architecture (12 components)
- **Testing:** Jest with comprehensive component test coverage
- **Linting:** ESLint with professional code quality rules
- **Deployment:** Vercel with optimized static generation
- **Theme:** Custom light/dark mode implementation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DudeThatsErin/CodingHelp.git
cd CodingHelp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

### Testing

```bash
# Run component tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js 14 app directory (77+ pages)
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   ├── getting-started/   # Getting started section (5 pages)
│   ├── languages/         # Programming languages guides (24+ pages)
│   ├── frameworks/        # Framework guides and comparisons (6 pages)
│   ├── web-development/   # Web development resources (8 pages)
│   ├── mobile-development/# Mobile development guides (11 pages)
│   ├── data-databases/    # Data and database content (2 pages)
│   ├── devops-tools/      # DevOps and tooling guides
│   ├── ai/               # AI & Machine Learning guides
│   ├── project-ideas/    # Coding project suggestions (8+ pages)
│   ├── resources/        # Learning resources (4 pages)
│   ├── faq/             # Frequently asked questions
│   └── bot-commands/    # Discord bot command reference
├── components/           # Professional folder-based architecture
│   ├── PageLayout/       # Universal layout with navigation
│   │   ├── PageLayout.tsx
│   │   ├── types.ts
│   │   ├── index.ts
│   │   └── PageLayout.test.tsx
│   ├── QuickStats/       # Statistics display with icons
│   ├── InfoCard/         # 9 color variants, flexible content
│   ├── FeatureList/      # Structured presentations
│   ├── ContentList/      # Semantic list management
│   ├── CodeBlock/        # Syntax highlighting with copy functionality
│   ├── ComparisonTable/  # Framework/language comparisons
│   ├── GettingStartedSection/ # Step-by-step guides
│   ├── Breadcrumb/       # Navigation breadcrumbs
│   ├── Tag/              # Flexible tagging system
│   ├── ProgressBar/      # Progress indicators
│   ├── Callout/          # Information callouts
│   ├── Header.tsx        # Main navigation header
│   └── Sidebar.tsx       # Sidebar navigation
└── contexts/            # React contexts
    └── ThemeContext.tsx # Theme management
```

## Professional Component Architecture

The wiki features a complete professional component system with 12 reusable components:

### Core Layout Components
- **PageLayout** - Universal wrapper with navigation, headers, and footers (70+ implementations)
- **QuickStats** - Statistics display with icons (16+ implementations)
- **InfoCard** - 9 color variants with flexible content
- **Breadcrumb** - Navigation breadcrumbs

### Content & Display Components  
- **FeatureList** - Structured feature presentations with icons
- **ContentList** - Semantic list management (disc, decimal, none)
- **CodeBlock** - Syntax highlighting with copy functionality
- **ComparisonTable** - Framework/language comparison tables
- **GettingStartedSection** - Step-by-step tutorial guides

### UI Enhancement Components
- **Tag** - Flexible tagging system with variants
- **ProgressBar** - Progress indicators with variants
- **Callout** - Information callouts (info/warning/error/success/tip)

### Component Architecture Benefits
- **Type Safety:** Component-specific types isolated in `types.ts` files
- **Clean Exports:** Barrel exports via `index.ts` for easy importing
- **Co-located Tests:** Jest tests alongside each component
- **Consistent Naming:** `ComponentName.tsx`, `ComponentName.test.tsx` pattern
- **Maintainability:** Clear separation of concerns
- **Scalability:** Professional structure for future components

### Usage Example (Named Exports)
```tsx
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { CodeBlock } from '@/components/CodeBlock';

export default function ExamplePage() {
  return (
    <PageLayout
      title="Page Title"
      description="Page description"
      icon={<Icon className="w-8 h-8" />}
    >
      <QuickStats 
        title="Statistics"
        stats={[
          { value: "100%", label: "Awesome", icon: <Star className="w-5 h-5" /> }
        ]} 
      />
      
      <InfoCard title="Information" variant="blue">
        <p>Content goes here</p>
      </InfoCard>

      <CodeBlock
        title="Example Code"
        language="typescript"
        code="const example = 'Hello World';"
        showLineNumbers={true}
      />
    </PageLayout>
  );
}
```

## Content Structure

The wiki is organized into the following main sections:

- **Getting Started** - Programming fundamentals for beginners 
- **Programming Languages** - Language-specific guides and tutorials 
- **Frameworks** - Framework guides and comparisons 
- **Web Development** - Frontend, backend, and full-stack development 
- **Mobile Development** - iOS, Android, and cross-platform development 
- **Data & Databases** - Database design, SQL, and data analysis 
- **DevOps & Tools** - Development tools, version control, and deployment 
- **AI & Machine Learning** - AI concepts, tools, and applications
- **Project Ideas** - Coding project suggestions by language 
- **Resources** - Learning platforms, books, and practice problems 
- **FAQ** - Common questions and answers 
- **Bot Commands** - Discord bot command reference 


## Contributing

We welcome contributions from the community! Here's how you can help:

### Content Contributions

1. **Suggest New Topics** - Open an issue to suggest new content areas
2. **Improve Existing Content** - Submit pull requests with improvements
3. **Fix Typos/Errors** - Help us maintain high-quality content
4. **Add Examples** - Contribute code examples and tutorials

### Technical Contributions

1. **Bug Fixes** - Report and fix bugs
2. **Feature Enhancements** - Suggest and implement new features
3. **Performance Improvements** - Help optimize the site
4. **Accessibility** - Improve accessibility features

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Community

Join our vibrant community of developers:

- **Discord Server:** Real-time chat, help, and discussions
- **Reddit Community:** Long-form discussions and Q&A
- **GitHub Issues:** Bug reports and feature requests

## Deployment

This site is automatically deployed to Vercel when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `out` directory contains the static files ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built by the CodingHelp community
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Next.js](https://nextjs.org/) & [Vercel](https://vercel.com/)

---

**Happy Coding!** 🚀

If you find this resource helpful, please consider:
- ⭐ Starring the repository
- 💬 Joining our Discord community
- 🤝 Contributing to the project
- 📢 Sharing with other developers
