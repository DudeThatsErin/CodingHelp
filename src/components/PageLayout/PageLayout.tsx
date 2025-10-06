import { PageLayoutProps } from './types';

export function PageLayout({
  children,
  title,
  description,
  icon
}: PageLayoutProps) {

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:gap-4">
        {/* Skip Navigation Links */}
        <div className="sr-only focus-within:not-sr-only">
          <a
            href="#main-content"
            className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Skip to main content
          </a>
        </div>

        {/* Page Header */}
        <header className="flex flex-col gap-2 md:gap-3">
          <div className="flex items-center gap-3">
            {icon}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </header>

        {/* Page Content */}
        <main 
          id="main-content"
          className="flex flex-col gap-3 md:gap-4"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
