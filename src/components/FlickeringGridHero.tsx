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
        className="absolute inset-0 z-0"
        style={{
          maskImage: `
            radial-gradient(circle at center, transparent 60px, white 70px, white 90px, transparent 100px),
            radial-gradient(circle at center, transparent 100px, white 110px, white 130px, transparent 140px),
            radial-gradient(circle at center, transparent 140px, white 150px, white 170px, transparent 180px),
            radial-gradient(circle at center, transparent 180px, white 190px, white 210px, transparent 220px)
          `,
          maskComposite: 'intersect',
          WebkitMaskImage: `
            radial-gradient(circle at center, transparent 60px, white 70px, white 90px, transparent 100px),
            radial-gradient(circle at center, transparent 100px, white 110px, white 130px, transparent 140px),
            radial-gradient(circle at center, transparent 140px, white 150px, white 170px, transparent 180px),
            radial-gradient(circle at center, transparent 180px, white 190px, white 210px, transparent 220px)
          `,
          WebkitMaskComposite: 'intersect',
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 85%, 85% 85%, 85% 15%, 50% 15%)'
        }}
        {...GRID_CONFIG}
      />
      
    </div>
  );
};