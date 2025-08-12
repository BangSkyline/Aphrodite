import React, { useState } from 'react';
import { ExternalLink, ChevronRight, ChevronDown, Star, Globe } from 'lucide-react';
import { celestialBodies, moons } from '../data/mock';

const ServiceList = ({ onServiceClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({
    stars: true,
    planets: true,
    moons: true
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleServiceClick = (service, e) => {
    e.stopPropagation();
    onServiceClick(service);
  };

  const handleDirectAccess = (url, e) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  const stars = celestialBodies.filter(body => body.type === 'star');
  const planets = celestialBodies.filter(body => body.type !== 'star');

  return (
    <div className="fixed left-4 top-24 z-40 w-80">
      <div className="bg-black/80 backdrop-blur-md rounded-lg border border-purple-500/30 shadow-2xl">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-white font-semibold flex items-center space-x-2">
            <Globe className="h-5 w-5 text-purple-400" />
            <span>Services COSMOS</span>
          </h2>
          {isExpanded ? 
            <ChevronDown className="h-4 w-4 text-white/60" /> : 
            <ChevronRight className="h-4 w-4 text-white/60" />
          }
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="max-h-96 overflow-y-auto pb-4">
            {/* Stars Section */}
            <div className="px-4 mb-4">
              <div 
                className="flex items-center justify-between py-2 cursor-pointer hover:bg-white/5 rounded"
                onClick={() => toggleCategory('stars')}
              >
                <h3 className="text-yellow-400 font-medium text-sm flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Étoiles</span>
                </h3>
                {expandedCategories.stars ? 
                  <ChevronDown className="h-3 w-3 text-white/60" /> : 
                  <ChevronRight className="h-3 w-3 text-white/60" />
                }
              </div>
              
              {expandedCategories.stars && (
                <div className="ml-4 space-y-2">
                  {stars.map(star => (
                    <div 
                      key={star.id} 
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 cursor-pointer group transition-all duration-200"
                      onClick={(e) => handleServiceClick(star, e)}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full border border-white/30 animate-pulse"
                          style={{ backgroundColor: star.color }}
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{star.name}</p>
                          <p className="text-gray-400 text-xs">{star.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDirectAccess(star.url, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <ExternalLink className="h-3 w-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Planets Section */}
            <div className="px-4 mb-4">
              <div 
                className="flex items-center justify-between py-2 cursor-pointer hover:bg-white/5 rounded"
                onClick={() => toggleCategory('planets')}
              >
                <h3 className="text-blue-400 font-medium text-sm flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Planètes</span>
                </h3>
                {expandedCategories.planets ? 
                  <ChevronDown className="h-3 w-3 text-white/60" /> : 
                  <ChevronRight className="h-3 w-3 text-white/60" />
                }
              </div>
              
              {expandedCategories.planets && (
                <div className="ml-4 space-y-2">
                  {planets.map(planet => (
                    <div 
                      key={planet.id} 
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 cursor-pointer group transition-all duration-200"
                      onClick={(e) => handleServiceClick(planet, e)}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full border border-white/30"
                          style={{ backgroundColor: planet.color }}
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{planet.name}</p>
                          <p className="text-gray-400 text-xs">{planet.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDirectAccess(planet.url, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <ExternalLink className="h-3 w-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Moons Section */}
            <div className="px-4">
              <div 
                className="flex items-center justify-between py-2 cursor-pointer hover:bg-white/5 rounded"
                onClick={() => toggleCategory('moons')}
              >
                <h3 className="text-gray-400 font-medium text-sm flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                  <span>Satellites</span>
                </h3>
                {expandedCategories.moons ? 
                  <ChevronDown className="h-3 w-3 text-white/60" /> : 
                  <ChevronRight className="h-3 w-3 text-white/60" />
                }
              </div>
              
              {expandedCategories.moons && (
                <div className="ml-4 space-y-2">
                  {moons.map(moon => (
                    <div 
                      key={moon.id} 
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 cursor-pointer group transition-all duration-200"
                      onClick={(e) => handleDirectAccess(moon.url, e)}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full border border-white/30"
                          style={{ backgroundColor: moon.color }}
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{moon.name}</p>
                          <p className="text-gray-400 text-xs">{moon.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDirectAccess(moon.url, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <ExternalLink className="h-3 w-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceList;