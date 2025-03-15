
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      pressed={theme === 'light'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className={`${theme === 'light' ? 'bg-white/80 border-tech-purple/30' : 'bg-tech-darker/70 border-tech-purple/30'} border hover:border-tech-purple/60 p-2 rounded-full`}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-tech-purple" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
