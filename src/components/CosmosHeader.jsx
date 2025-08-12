import React from 'react';
import { Sparkles, Home } from 'lucide-react';

const CosmosHeader = ({ onHomeClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-yellow-400 animate-ping opacity-30">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              COSMOS
            </h1>
          </div>
          
          <button
            onClick={onHomeClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
          >
            <Home className="h-4 w-4 text-white group-hover:text-yellow-400 transition-colors" />
            <span className="text-white text-sm group-hover:text-yellow-400 transition-colors">
              Accueil
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CosmosHeader;