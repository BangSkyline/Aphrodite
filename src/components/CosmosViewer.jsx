import React, { useState, useEffect } from 'react';
import { celestialBodies, moons } from '../data/mock';
import CelestialBody from './CelestialBody';
import MoonOrbit from './MoonOrbit';
import ServiceDetails from './ServiceDetails';
import ServiceList from './ServiceList';

const CosmosViewer = () => {
  const [selectedBody, setSelectedBody] = useState(null);
  const [moonAngles, setMoonAngles] = useState({});

  // Animate moon orbits
  useEffect(() => {
    const interval = setInterval(() => {
      setMoonAngles(prev => {
        const newAngles = { ...prev };
        moons.forEach(moon => {
          newAngles[moon.id] = (prev[moon.id] || 0) + 0.02;
        });
        return newAngles;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getPlanetPosition = (planetId) => {
    const planet = celestialBodies.find(body => body.id === planetId);
    return planet ? planet.position : { x: 50, y: 50 };
  };

  const handleBodyClick = (body) => {
    setSelectedBody(body);
  };

  const handleServiceClick = (service) => {
    // Find the service in celestial bodies or moons
    const foundBody = celestialBodies.find(body => body.id === service.id || body.name === service.name);
    if (foundBody) {
      setSelectedBody(foundBody);
    } else {
      // If it's a moon, create a temporary body object
      const moon = moons.find(m => m.name === service.name);
      if (moon) {
        setSelectedBody({
          ...moon,
          type: 'moon',
          distanceFromSun: 0
        });
      }
    }
  };

  const handleCloseDetails = () => {
    setSelectedBody(null);
  };

  const handleDirectAccess = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated star field background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Cosmic dust and nebula effects */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-blue-900/10 to-transparent animate-pulse" />
      
      {/* Service List Panel */}
      <ServiceList onServiceClick={handleServiceClick} />
      
      {/* Solar system container */}
      <div className="relative w-full h-full">
        {/* Render celestial bodies */}
        {celestialBodies.map((body) => (
          <CelestialBody
            key={body.id}
            body={body}
            onClick={handleBodyClick}
            isActive={selectedBody?.id === body.id}
            style={{
              left: `${body.position.x}%`,
              top: `${body.position.y}%`,
            }}
          />
        ))}

        {/* Render moons with closer orbits */}
        {moons.map((moon) => {
          const planetPosition = getPlanetPosition(moon.planet);
          const orbitRadius = 40; // Orbite réduite de moitié
          const angle = moonAngles[moon.id] || 0;
          
          return (
            <MoonOrbit
              key={moon.id}
              moon={moon}
              planetPosition={planetPosition}
              orbitRadius={orbitRadius}
              angle={angle}
            />
          );
        })}
      </div>

      {/* Service details modal */}
      {selectedBody && (
        <ServiceDetails
          body={selectedBody}
          onClose={handleCloseDetails}
          onAccess={handleDirectAccess}
        />
      )}

      {/* Navigation instructions */}
      <div className="absolute bottom-6 right-6 text-white/60 text-sm max-w-md">
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
          <p className="mb-2">🌌 <span className="text-purple-300">Explorez votre infrastructure :</span></p>
          <ul className="text-xs space-y-1">
            <li>• Utilisez la liste de gauche pour navigation rapide</li>
            <li>• Survolez les planètes pour voir les détails</li>
            <li>• Cliquez pour ouvrir les informations complètes</li>
          </ul>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 text-white/60 text-sm" style={{ marginLeft: '340px' }}>
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
          <h3 className="text-purple-300 font-semibold mb-2">Légende</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400 border border-white/30" />
              <span>Étoile (Services principaux)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 border border-white/30" />
              <span>Planètes (Services secondaires)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 border border-white/30" />
              <span>Lunes (Services spécialisés)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmosViewer;