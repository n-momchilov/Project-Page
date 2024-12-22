// Importing React for component creation
import React from 'react';

const InspirationSection = ({ inspirations }) => {
  return (
    // Section wrapper with a unique ID
    <section id="inspiration" className="mb-32">
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-16">Sources of Inspiration</h2>
      {/* Grid container for inspirations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {inspirations.map((inspiration, index) => (
          // Each inspiration item
          <div
            key={index} // Unique key for React rendering
            className="group relative bg-cyan-900/30 p-6 rounded-lg backdrop-blur-sm hover:bg-cyan-800/40 transition-all duration-500"
          >
            {/* Wrapper for the image and text */}
            <div className="relative">
              <img
                src={inspiration.image} // Image source
                alt={inspiration.title} // Alt text for accessibility
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              {/* Inspiration title */}
              <h3 className="text-xl font-bold mb-2">{inspiration.title}</h3>
              {/* Inspiration description */}
              <p className="mb-4">{inspiration.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
