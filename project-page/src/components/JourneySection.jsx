// Importing React for component creation
import React from 'react';

const JourneySection = ({ phases }) => {
  // Validating the data passed to the component. If it's not an array, an error is thrown.
  if (!phases || !Array.isArray(phases)) {
    throw new Error('Invalid data passed to JourneySection');
  }

  return (
    // Main section wrapper with a unique ID for navigation
    <section id="journey" className="mb-32">
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-16">The Journey</h2>
      {/* Wrapper for displaying each phase */}
      <div className="space-y-32">
        {phases.map((phase, index) => (
          // Each phase alternates between left and right alignment based on index
          <div
            key={phase.title} // Unique key for React's rendering
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}
          >
            {/* Text content for the phase */}
            <div className="flex-1 space-y-4">
              <div className="text-cyan-400 text-sm tracking-wider">{phase.date}</div>
              <h3 className="text-3xl font-bold mb-4">{phase.title}</h3>
              <p className="text-lg leading-relaxed">{phase.description}</p>
            </div>
            {/* Image associated with the phase */}
            <div className="flex-1">
              <img
                src={phase.image} // Image path provided in the "phases" array
                alt={phase.title} // Alt text for accessibility
                className="rounded-lg shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
