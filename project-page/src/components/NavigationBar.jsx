// Importing React and icons for the dark mode toggle
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const NavigationBar = ({ darkMode, toggleDarkMode }) => {
  return (
    // Sticky navigation bar with a transparent background
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 border-b border-cyan-500/30">
      {/* Container for navigation content */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Application title */}
        <h1 className="text-3xl font-bold text-cyan-400">Cold War Interactive Map</h1>
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode} // Calls the function passed as a prop to toggle dark mode
          className="p-3 rounded-full bg-cyan-900/30 hover:bg-cyan-800/50 transition-all"
        >
          {/* Icon changes based on the current mode */}
          {darkMode ? <Sun className="text-cyan-400" /> : <Moon className="text-cyan-400" />}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
