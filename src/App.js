import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CosmosHeader from './components/CosmosHeader';
import CosmosViewer from './components/CosmosViewer';
import { Toaster } from './components/ui/toaster';

const App = () => {
  const [currentView, setCurrentView] = useState('cosmos');

  const handleHomeClick = () => {
    setCurrentView('cosmos');
  };

  return (
    <div className="App min-h-screen bg-black overflow-hidden">
      <BrowserRouter>
        <CosmosHeader onHomeClick={handleHomeClick} />
        
        <main className="pt-20">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="cosmos-container">
                  <CosmosViewer />
                </div>
              } 
            />
          </Routes>
        </main>
        
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;