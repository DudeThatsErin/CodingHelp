import { InfoCardProps } from './types';
import { ExternalLink } from 'lucide-react';

const variantStyles = {
  blue: 'bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-50',
  green: 'bg-green-50 dark:bg-green-900/40 border-green-200 dark:border-green-700 text-green-900 dark:text-green-50',
  purple: 'bg-purple-50 dark:bg-purple-900/40 border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-50',
  orange: 'bg-orange-50 dark:bg-orange-900/40 border-orange-200 dark:border-orange-700 text-orange-900 dark:text-orange-50',
  red: 'bg-red-50 dark:bg-red-900/40 border-red-200 dark:border-red-700 text-red-900 dark:text-red-50',
  yellow: 'bg-yellow-50 dark:bg-yellow-900/40 border-yellow-200 dark:border-yellow-700 text-yellow-900 dark:text-yellow-50',
  pink: 'bg-pink-50 dark:bg-pink-900/40 border-pink-200 dark:border-pink-700 text-pink-900 dark:text-pink-50',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-700 text-indigo-900 dark:text-indigo-50',
  gray: 'bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-50'
};

export function InfoCard({ 
  title, 
  children, 
  description,
  icon, 
  variant, 
  color, // Support color as alias for variant
  link,
  external = false,
  className = "" 
}: InfoCardProps) {
  // Use color as fallback for variant for backward compatibility
  const cardVariant = variant || color || 'blue';
  
  const cardContent = (
    <div className={`rounded-lg p-6 border ${variantStyles[cardVariant]} ${className} ${link ? 'hover:shadow-md transition-shadow cursor-pointer' : ''}`}>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
        {link && external && <ExternalLink className="w-4 h-4 ml-2" />}
      </h3>
      <div>
        {description && <p className="text-sm opacity-90 mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block no-underline"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
