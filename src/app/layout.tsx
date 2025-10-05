import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { SearchProvider } from '@/contexts/SearchContext';
import { SearchModal } from '@/components/SearchModal';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://coding-help.vercel.app'),
  title: 'CodingHelp Wiki - Learn to Code',
  description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
  keywords: 'programming, coding, tutorial, learn to code, web development, software development',
  authors: [{ name: 'CodingHelp Community' }],
  openGraph: {
    title: 'CodingHelp Wiki - Learn to Code',
    description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
    url: 'https://coding-help.vercel.app',
    siteName: 'CodingHelp Wiki',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodingHelp Wiki - Learn to Code',
    description: 'A comprehensive wiki for learning programming and coding, created by the CodingHelp community.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://cdn.discordapp.com/avatars/1017655436704481290/5603c2d1480875125ca4ba708eb35c46.png" />
        <link rel="apple-touch-icon" href="https://cdn.discordapp.com/avatars/1017655436704481290/5603c2d1480875125ca4ba708eb35c46.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>
          <SearchProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
              <Header />
              <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-2 sm:p-4 lg:p-6 overflow-y-auto">
                  {children}
                </main>
              </div>
              <Footer />
            </div>
            <SearchModal />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
