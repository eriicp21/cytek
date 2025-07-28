import React from 'react';
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

// Grid animation configuration for hero section
const GRID_CONFIG = {
  color: "#ffffff",
  maxOpacity: 0.25,
  flickerChance: 0.15,
  squareSize: 4,
  gridGap: 6,
} as const;

export const FlickeringGridHero = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Main flickering grid background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        {...GRID_CONFIG}
      />
      
      {/* Overlay geometric elements */}
      <div className="relative z-10">
        {/* Large hexagonal frame */}
        <div className="absolute top-8 right-12 w-48 h-48 transform rotate-12">
          <div className="w-full h-full border-2 border-white/20 transform rotate-45">
            <div className="absolute inset-4 border border-white/15 transform -rotate-45">
              <div className="absolute inset-4 border border-white/10 transform rotate-45"></div>
            </div>
          </div>
        </div>
        
        {/* Medium rectangle with data points */}
        <div className="absolute top-16 left-8 w-40 h-28 border-2 border-white/25 transform -rotate-6">
          <div className="absolute top-2 left-2 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-4 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-3 left-6 w-4 h-4 border border-white/20 transform rotate-45"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-700"></div>
        </div>
        
        {/* Network connection lines */}
        <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-white/30 via-white/20 to-transparent transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-l from-white/25 via-white/20 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-white/15 transform rotate-30"></div>
        
        {/* Small circuit elements */}
        <div className="absolute top-12 left-1/2 w-12 h-12 border border-white/20 rounded-full transform -rotate-12">
          <div className="absolute inset-2 border border-white/15 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Data flow indicators */}
        <div className="absolute bottom-16 right-8 w-16 h-16 border-2 border-white/25 transform rotate-45">
          <div className="absolute inset-2 border border-white/20 transform -rotate-45">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
        
        {/* Additional geometric accents */}
        <div className="absolute bottom-8 left-16 w-20 h-20 border border-white/18 transform rotate-30">
          <div className="absolute inset-3 border border-white/15 transform -rotate-30"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white/15 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
        
        {/* Corner tech elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/25"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/25"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/25"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/25"></div>
      </div>
    </div>
  );
};