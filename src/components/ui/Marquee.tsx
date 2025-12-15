import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 20,
  className,
  pauseOnHover = true,
}) => {
  return (
    <div className={cn("flex overflow-hidden select-none gap-4 w-full mask-linear-fade", className)}>
      <motion.div
        className="flex flex-shrink-0 gap-4 min-w-full items-center"
        initial={{ x: 0 }}
        animate={{ x: direction === 'left' ? "-100%" : "100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{
            // This ensures smooth looping by duplicating content
            width: "max-content"
        }}
        {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" }
        })}
      >
        {children}
        {children}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0 gap-4 min-w-full items-center"
        initial={{ x: 0 }}
        animate={{ x: direction === 'left' ? "-100%" : "100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{
            width: "max-content"
        }}
        {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" }
        })}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
