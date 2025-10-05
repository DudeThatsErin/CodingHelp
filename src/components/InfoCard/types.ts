import { ReactNode } from 'react';

export type InfoCardVariant = 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'orange' 
  | 'red' 
  | 'yellow' 
  | 'pink' 
  | 'indigo' 
  | 'gray';

export interface InfoCardProps {
  title: string;
  variant?: InfoCardVariant;
  color?: InfoCardVariant; // Alias for variant for backward compatibility
  icon?: ReactNode;
  children?: ReactNode;
  description?: string;
  link?: string;
  external?: boolean;
  className?: string;
}
