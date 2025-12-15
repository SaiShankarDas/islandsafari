import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    // Updated primary to use brand-blue
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-lg focus:ring-brand-blue",
    // Updated secondary to use brand-gold (Golden Yellow) with black text for better contrast if needed, or white if dark enough.
    // Since #E6B800 is bright, white text might be hard to read. Let's try white, but if not, we can use brand-blue text.
    // For now, keeping white as it's standard for buttons, but adding a slight shadow.
    secondary: "bg-brand-gold text-white hover:bg-brand-gold/90 hover:shadow-lg focus:ring-brand-gold",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-blue focus:ring-white",
    ghost: "bg-transparent text-brand-blue hover:bg-brand-gold/10",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
