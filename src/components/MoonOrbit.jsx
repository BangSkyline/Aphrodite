import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const MoonOrbit = ({ moon, planetPosition, orbitRadius, angle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Calculate moon position based on planet position and orbit (reduced radius)
  const moonX = planetPosition.x + Math.cos(angle) * (orbitRadius * 0.4); // Réduction de 60%
  const moonY = planetPosition.y + Math.sin(angle) * (orbitRadius * 0.4);

  const handleClick = (e) => {
    e.stopPropagation();
    window.open(moon.url, '_blank');
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{
        left: `${moonX}%`,
        top: `${moonY}%`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Orbit trail - plus petite */}
      <div 
        className="absolute border border-white/10 rounded-full pointer-events-none"
        style={{
          width: `${orbitRadius * 0.8}px`, // Orbite plus petite
          height: `${orbitRadius * 0.8}px`,
          left: `${-(orbitRadius * 0.4) + (planetPosition.x - moonX) * 2}px`,
          top: `${-(orbitRadius * 0.4) + (planetPosition.y - moonY) * 2}px`
        }}
      />

      {/* Glow effect */}
      <div
        className={`absolute inset-0 w-6 h-6 rounded-full blur-sm opacity-60 transition-all duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}
        style={{ backgroundColor: moon.color }}
      />

      {/* Moon body with realistic image */}
      <div
        className={`relative w-6 h-6 rounded-full border border-white/40 transition-all duration-300 overflow-hidden ${isHovered ? 'scale-125' : ''}`}
        style={{ 
          boxShadow: `0 0 10px ${moon.color}70`
        }}
      >
        {/* Realistic moon image */}
        {moon.image && (
          <>
            <img 
              src={moon.image}
              alt={moon.name}
              className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
            
            {/* Fallback colored background if image fails to load */}
            {!imageLoaded && (
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: moon.color }}
              />
            )}
          </>
        )}
      </div>

      {/* Info popup on hover */}
      {isHovered && (
        <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md rounded-lg p-3 border border-purple-500/30 min-w-48 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-white font-semibold text-sm">{moon.name}</h4>
            <ExternalLink className="h-3 w-3 text-white/80 ml-2" />
          </div>
          
          <p className="text-gray-300 text-xs mb-1">{moon.description}</p>
          <p className="text-purple-300 text-xs">{moon.details}</p>
        </div>
      )}

      {/* Moon name label */}
      <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white text-xs px-1 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10 whitespace-nowrap">
          {moon.name}
        </div>
      </div>
    </div>
  );
};

export default MoonOrbit;