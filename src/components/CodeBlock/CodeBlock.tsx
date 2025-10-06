'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CodeBlockProps } from './types';

export function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = false,
  highlightLines = [],
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className={`relative bg-gray-800 dark:bg-gray-950 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-700 dark:bg-gray-900 border-b border-gray-400 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-100 dark:text-gray-200">{title}</span>
          <span className="text-xs text-gray-300 dark:text-gray-400 uppercase">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-200 hover:text-white rounded-md transition-colors z-10"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
        
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-gray-100 dark:text-gray-100">
            {showLineNumbers ? (
              <div className="flex">
                <div className="flex flex-col text-gray-500 text-right pr-4 select-none">
                  {lines.map((_, index) => (
                    <span key={index} className="leading-6">
                      {index + 1}
                    </span>
                  ))}
                </div>
                <div className="flex-1">
                  {lines.map((line, index) => (
                    <div
                      key={index}
                      className={`leading-6 ${
                        highlightLines.includes(index + 1)
                          ? 'bg-yellow-500/20 -mx-4 px-4'
                          : ''
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              lines.map((line, index) => (
                <div
                  key={index}
                  className={`leading-6 ${
                    highlightLines.includes(index + 1)
                      ? 'bg-yellow-500/20 -mx-4 px-4'
                      : ''
                  }`}
                >
                  {line}
                </div>
              ))
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
