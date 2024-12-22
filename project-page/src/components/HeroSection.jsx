// Importing React for component creation
import React from 'react';
// Importing the Star icon from the lucide-react library for visual interaction
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    // Main section for the HeroSection component, introducing the project
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center mb-32"
    >
      {/* Wrapper for the content within the hero section */}
      <div className="space-y-6 max-w-3xl">
        {/* Main heading for the section */}
        <h2 className="text-6xl font-bold text-cyan-400 mb-8">A Journey Through Time</h2>
        {/* Brief introduction paragraph */}
        <p className="text-xl leading-relaxed">
          Welcome to my creative journey of building an interactive Cold War map. 
          This project combines my passion for history with modern web technology, 
          creating an immersive experience that brings the past to life.
        </p>
        {/* Icon button that scrolls to the next section */}
        <div className="flex justify-center mt-12">
          <Star
            className="animate-pulse text-cyan-400 cursor-pointer" // Styling and animation for the Star icon
            size={48} // Size of the Star icon
            // Smooth scroll to the "journey" section on click
            onClick={() => document.getElementById('journey').scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
