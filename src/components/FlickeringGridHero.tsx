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
            radial-gradient(circle at center, transparent 40px, white 50px, white 80px, transparent 90px),
            radial-gradient(circle at center, transparent 90px, white 100px, white 130px, transparent 140px),
            radial-gradient(circle at center, transparent 140px, white 150px, white 180px, transparent 190px)
          `,
          maskComposite: 'add',
          WebkitMaskImage: `
            radial-gradient(circle at center, transparent 40px, white 50px, white 80px, transparent 90px),
            radial-gradient(circle at center, transparent 90px, white 100px, white 130px, transparent 140px),
            radial-gradient(circle at center, transparent 140px, white 150px, white 180px, transparent 190px)
          `,
          WebkitMaskComposite: 'add',
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 80%, 80% 80%, 80% 20%, 50% 20%)'
        }}
        {...GRID_CONFIG}
      />
      
    </div>
  );
};