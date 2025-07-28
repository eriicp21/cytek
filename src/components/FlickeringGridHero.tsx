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
      
    </div>
  );
};