import React from 'react';

const GeometricWireframe = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-b border-blue-400/20"></div>
          ))}
        </div>
      </div>
      
      {/* Main geometric composition */}
      <div className="relative animate-pulse">
        {/* Large hexagonal frame */}
        <div className="absolute top-8 right-12 w-48 h-48 transform rotate-12">
          <div className="w-full h-full border-2 border-blue-400/40 transform rotate-45">
            <div className="absolute inset-4 border border-blue-300/30 transform -rotate-45">
              <div className="absolute inset-4 border border-blue-200/20 transform rotate-45"></div>
            </div>
          </div>
        </div>
        
        {/* Medium rectangle with data points */}
        <div className="absolute top-16 left-8 w-40 h-28 border-2 border-blue-300/50 transform -rotate-6">
          <div className="absolute top-2 left-2 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-4 w-2 h-2 bg-blue-300/50 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-3 left-6 w-4 h-4 border border-blue-400/40 transform rotate-45"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-200/40 rounded-full animate-pulse delay-700"></div>
        </div>
        
        {/* Network connection lines */}
        <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-400/60 via-blue-300/40 to-transparent transform rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-l from-blue-300/50 via-blue-400/30 to-transparent transform -rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-blue-200/30 transform rotate-30"></div>
        
        {/* Small circuit elements */}
        <div className="absolute top-12 left-1/2 w-12 h-12 border border-blue-400/40 rounded-full transform -rotate-12">
          <div className="absolute inset-2 border border-blue-300/30 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Data flow indicators */}
        <div className="absolute bottom-16 right-8 w-16 h-16 border-2 border-blue-200/50 transform rotate-45">
          <div className="absolute inset-2 border border-blue-300/40 transform -rotate-45">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
        
        {/* Additional geometric accents */}
        <div className="absolute bottom-8 left-16 w-20 h-20 border border-blue-300/35 transform rotate-30">
          <div className="absolute inset-3 border border-blue-400/25 transform -rotate-30"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-blue-400/40 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-blue-300/30 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
        
        {/* Corner tech elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400/50"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/50"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400/50"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400/50"></div>
      </div>
    </div>
  );
};

export default GeometricWireframe;