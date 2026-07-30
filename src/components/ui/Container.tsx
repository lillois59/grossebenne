// components/ui/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  as?: 'div' | 'section' | 'article' | 'main';
}

export default function Container({
  children,
  className = '',
  maxWidth = '7xl',
  padding = true,
  as: Component = 'div',
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <Component
      className={`container mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}
    >
      {children}
    </Component>
  );
}