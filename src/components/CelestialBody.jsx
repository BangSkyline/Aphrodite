import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';

const CelestialBody = ({ body, onClick, style, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getSizeClass = (size, type) => {
    if (type === 'star') return 'w-24 h-24';
    
    switch (size) {
      case 'large': return 'w-16 h-16';
      case 'medium': return 'w-12 h-12';
      case 'small': return 'w-8 h-8';
      default: return 'w-10 h-10';
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onClick(body);
  };

  const handleDirectAccess = (e) => {
    e.stopPropagation();
    window.open(body.url, '_blank');
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orbital ring effect for planets */}
      {body.type !== 'star' && isHovered && (
        <div 
          className="absolute inset-0 rounded-full border border-white/20 animate-spin"
          style={{
            width: '200%',
            height: '200%',
            top: '-50%',
            left: '-50%',
            animationDuration: '10s'
          }}
        />
      )}

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full blur-md opacity-70 ${getSizeClass(body.size, body.type)} transition-all duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}
        style={{ backgroundColor: body.color }}
      />

      {/* Main celestial body with realistic image */}
      <div
        className={`relative ${getSizeClass(body.size, body.type)} rounded-full border-2 border-white/30 transition-all duration-300 overflow-hidden ${
          isActive ? 'scale-110 border-yellow-400' : ''
        } ${isHovered ? 'scale-110' : ''}`}
        style={{ 
          boxShadow: `0 0 20px ${body.color}50`
        }}
        onClick={handleClick}
      >
        {/* Realistic planet image */}
        {body.image && (
          <>
            <img 
              src={body.image}
              alt={body.name}
              className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
            
            {/* Fallback colored background if image fails to load */}
            {!imageLoaded && (
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: body.color,
                  background: `radial-gradient(circle at 30% 30%, ${body.color}ff, ${body.color}aa, ${body.color}66)`
                }}
              />
            )}
          </>
        )}

        {/* Star effect for sun - overlay on image */}
        {body.type === 'star' && (
          <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 via-orange-400/20 to-red-600/10 animate-pulse rounded-full" />
        )}

        {/* Rings for Saturn */}
        {body.id === 'saturn' && (
          <>
            <div className="absolute inset-0 border-2 border-yellow-300/40 rounded-full scale-150" />
            <div className="absolute inset-0 border border-yellow-200/30 rounded-full scale-175" />
          </>
        )}
      </div>

      {/* Info popup on hover */}
      {isHovered && (
        <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md rounded-lg p-4 border border-purple-500/30 min-w-64 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-white font-bold text-lg">{body.name}</h3>
            <button
              onClick={handleDirectAccess}
              className="ml-2 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="Accès direct"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <p className="text-gray-300 text-sm mb-2">{body.description}</p>
          
          {body.distanceFromSun > 0 && (
            <p className="text-purple-300 text-xs">
              Distance: {body.distanceFromSun} UA du Soleil
            </p>
          )}
          
          <div className="flex items-center mt-3 text-xs text-gray-400">
            <Info className="h-3 w-3 mr-1" />
            Cliquez pour plus de détails
          </div>
        </div>
      )}

      {/* Service name label */}
      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white text-xs font-medium px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
          {body.name}
        </div>
      </div>
    </div>
  );
};

export default CelestialBody;