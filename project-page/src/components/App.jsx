// Importing React and the useState hook to manage the application's state.
import React, { useState } from 'react';

// Importing custom components, each representing a section or feature of the application.
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import JourneySection from './JourneySection';
import InspirationSection from './InspirationSection';
import StarCanvas from './StarCanvas';

// Data array representing the different phases of the project timeline.
const phases = [
  {
    title: 'The Spark', // Phase title
    description: 'It all began with a passion for history and technology...', // Brief description of this phase
    image: '/assets/images/cyan-moon.png', // Path to the representative image for this phase
    date: 'September 2023', // Date associated with this phase
  },
  {
    title: 'First Prototype',
    description: 'Started with simple clickable popups...',
    image: '/assets/images/cyan-moon.png',
    date: 'October 2023',
  },
  {
    title: 'Evolution',
    description: 'Implemented country interactions and dynamic color changes...',
    image: '/assets/images/cyan-moon.png',
    date: 'November 2023',
  },
];

// Data array representing inspirations or references for the project.
const inspirations = [
  {
    title: 'NATO Interactive Map',
    description: 'Studying NATO’s approach to geographic data visualization...',
    image: '/assets/images/cyan-moon.png',
  },
  {
    title: 'Historical Archives',
    description: 'Digital archives influenced the project’s direction...',
    image: '/assets/images/cyan-moon.png',
  },
  {
    title: 'Modern Web Maps',
    description: 'Contemporary mapping solutions inspired the interface...',
    image: '/assets/images/cyan-moon.png',
  },
];

const App = () => {
  // State variable to toggle between light mode and dark mode.
  const [darkMode, setDarkMode] = useState(false);

  // Toggles the dark mode state when the associated button is clicked.
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    // Main container for the application, styled dynamically based on the darkMode state.
    <div
      className={darkMode ? 'dark-mode' : 'light-mode'} // Dynamically applies CSS classes based on dark mode.
      style={{
        backgroundColor: darkMode ? '#121212' : '#ffffff', // Fallback background color for dark/light mode.
        color: darkMode ? '#ffffff' : '#000000', // Fallback text color for dark/light mode.
        minHeight: '100vh', // Ensures the container spans the full height of the viewport.
      }}
    >
      {/* Animated starry background rendered using the StarCanvas component */}
      <StarCanvas />

      {/* Navigation bar with a toggle button for light/dark mode */}
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero section displaying the project introduction */}
      <HeroSection />

      {/* Timeline section displaying the project phases using the phases array */}
      <JourneySection phases={phases} />

      {/* Section displaying the inspirations and references using the inspirations array */}
      <InspirationSection inspirations={inspirations} />
    </div>
  );
};

export default App;
