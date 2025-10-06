import { GettingStartedSectionProps } from './types';

export function GettingStartedSection({ 
  title = "🚀 Getting Started",
  description,
  steps,
  className = ""
}: GettingStartedSectionProps) {
  return (
    <div className={`bg-gray-50/50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200/50 dark:border-gray-700 ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        )}
      </div>
      
      <div className="flex flex-col gap-4 md:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {step.icon && (
                  <div className="text-blue-600 dark:text-blue-400">
                    {step.icon}
                  </div>
                )}
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                {step.description}
              </p>
              {step.code && (
                <div className="bg-gray-800 dark:bg-gray-950 rounded-md p-3 overflow-x-auto border border-gray-300 dark:border-gray-700">
                  <code className="text-gray-100 text-sm">
                    {step.code}
                  </code>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
