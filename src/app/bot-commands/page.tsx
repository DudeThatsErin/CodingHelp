'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Bot, MessageCircle, Hash, Users, Settings, HelpCircle, Github, Zap } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

interface BotCommand {
  name: string;
  description: string;
  aliases: string[];
  usage: string;
  example: string;
}

interface CategoryData {
  description: string;
  icon: string;
  commands: BotCommand[];
}

interface CommandData {
  prefix_commands: {
    [category: string]: CategoryData;
  };
  slash_commands: {
    [category: string]: CategoryData;
  };
}

interface CommandCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  commands: BotCommand[];
  type: 'prefix' | 'slash';
}

// Function to get icon for category
const getCategoryIcon = (iconName: string, type: 'prefix' | 'slash'): JSX.Element => {
  const name = iconName.toLowerCase();
  
  if (name === 'settings') return <Settings className="w-5 h-5" />;
  if (name === 'hash') return <Hash className="w-5 h-5" />;
  if (name === 'help-circle') return <HelpCircle className="w-5 h-5" />;
  if (name === 'message-circle') return <MessageCircle className="w-5 h-5" />;
  if (name === 'users') return <Users className="w-5 h-5" />;
  if (name === 'zap') return <Zap className="w-5 h-5" />;
  
  // Default icons
  return type === 'prefix' ? <Hash className="w-5 h-5" /> : <Bot className="w-5 h-5" />;
};

// Function to process command data into categories
const processCommandData = (data: CommandData): CommandCategory[] => {
  const categories: CommandCategory[] = [];
  
  // Process prefix commands
  Object.entries(data.prefix_commands).forEach(([categoryName, categoryData]) => {
    categories.push({
      id: `prefix-${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
      title: `${categoryName} (Prefix Commands)`,
      icon: getCategoryIcon(categoryData.icon, 'prefix'),
      description: categoryData.description,
      commands: categoryData.commands,
      type: 'prefix'
    });
  });
  
  // Process slash commands
  Object.entries(data.slash_commands).forEach(([categoryName, categoryData]) => {
    categories.push({
      id: `slash-${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
      title: `${categoryName} (Slash Commands)`,
      icon: getCategoryIcon(categoryData.icon, 'slash'),
      description: categoryData.description,
      commands: categoryData.commands,
      type: 'slash'
    });
  });
  
  return categories;
};

export default function BotCommandsPage() {
  const [commandData, setCommandData] = useState<CommandData | null>(null);
  const [categories, setCategories] = useState<CommandCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCommands = async () => {
      try {
        const response = await fetch('/bot-commands.json');
        const data = await response.json();
        setCommandData(data);
        setCategories(processCommandData(data));
      } catch (error) {
        console.error('Failed to load bot commands:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCommands();
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <PageLayout
      title="Bot Commands"
      description="Our Discord bot provides helpful commands for getting coding assistance, managing discussions, and accessing community resources."
      icon={<div className="text-4xl">🤖</div>}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">🤖</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discord Bot Commands</h1>
            <p className="text-gray-600 dark:text-gray-300">
              CodingHelp Discord Bot command reference
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our Discord bot provides helpful commands for coding challenges, community interaction, 
          learning resources, and server management. Browse the categories below to find the commands you need.
        </p>
      </div>

      {/* Bot Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-4">
          <Bot className="w-8 h-8 text-blue-600 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              About CodingHelp Bot
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our Discord bot is designed to enhance the coding help experience by providing instant access to 
              resources, code formatting, explanations, and community features. Built with modern Discord.js 
              and integrated with our wiki content.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/DudeThatsErin/CodingHelpBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Open source and community-driven
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Command Categories */}
      <section className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Command Categories
        </h2>
        
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">Loading commands...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:gap-6">
            {categories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            
            return (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-300">{category.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.commands.length} commands
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700/50">
                    <div className="flex flex-col gap-6 md:gap-8">
                      {category.commands.map((command, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                          <div className="mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <code className="text-lg font-mono font-semibold text-blue-600 dark:text-blue-400">
                                {command.name}
                              </code>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                Slash Command
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {command.description}
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                Usage:
                              </h4>
                              <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                {command.usage}
                              </code>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                Example:
                              </h4>
                              <code className="text-sm bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-green-800 dark:text-green-200">
                                {command.example}
                              </code>
                            </div>
                            
                            {command.aliases && command.aliases.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                                  Aliases:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {command.aliases.map((alias, aliasIndex) => (
                                    <code key={aliasIndex} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                                      {alias}
                                    </code>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          </div>
        )}
      </section>

      {/* Development Status */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
          🚧 Development Status
        </h3>
        <p className="text-yellow-800 dark:text-yellow-200 mb-4">
          The CodingHelp Discord Bot is currently under active development. We're working hard to bring 
          these features to the community as soon as possible!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              What's Ready:
            </h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
              <li>Bot architecture and framework</li>
              <li>Command structure design</li>
              <li>Database integration planning</li>
              <li>Discord.js setup and configuration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              Coming Next:
            </h4>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm [&>li]:mb-1">
              <li>Help and resource commands</li>
              <li>Code formatting and explanation</li>
              <li>Community interaction features</li>
              <li>Beta testing with community</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          🤝 Get Involved
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Want to help shape the CodingHelp Discord Bot? We welcome contributions and feedback from the community!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/DudeThatsErin/CodingHelpBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Contribute on GitHub</span>
          </a>
          <a
            href="https://discord.gg/geQEUBm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Join Discord Community
          </a>
          <Link
            href="/faq"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
