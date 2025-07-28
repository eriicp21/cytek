import React from 'react';

const GeometricWireframe = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Main geometric shapes */}
      <div className="relative">
        {/* Large hexagon */}
        <div className="absolute top-0 right-0 w-64 h-64 border-2 border-teal-400/30 rotate-12 transform-gpu">
          <div className="w-full h-full border border-teal-400/20 rotate-45"></div>
        </div>
        
        {/* Medium rectangle */}
        <div className="absolute top-16 left-8 w-48 h-32 border-2 border-teal-300/40 rotate-6 transform-gpu">
          <div className="absolute top-4 left-4 w-8 h-8 border border-teal-300/50"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border border-teal-300/50"></div>
        </div>
        
        {/* Small diamond */}
        <div className="absolute bottom-8 right-16 w-24 h-24 border-2 border-teal-200/50 rotate-45 transform-gpu">
          <div className="absolute inset-2 border border-teal-200/30 rotate-45"></div>
        </div>
        
        {/* Connecting lines */}
        <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent rotate-12 transform-gpu origin-center"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent -rotate-45 transform-gpu origin-center"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-8 left-1/2 w-16 h-16 border border-teal-400/25 rounded-full">
          <div className="absolute inset-2 border border-teal-400/40 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/4 left-4 w-20 h-20 border-2 border-teal-300/35 rotate-12 transform-gpu">
          <div className="absolute inset-3 border border-teal-300/25 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default GeometricWireframe;