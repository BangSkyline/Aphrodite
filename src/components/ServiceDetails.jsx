import React from 'react';
import { X, ExternalLink, Globe, Server, Database, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const ServiceDetails = ({ body, onClose, onAccess }) => {
  const getServiceIcon = (name) => {
    const iconMap = {
      'Huly': Globe,
      'OpenLDAP': Database,
      'Vault': Settings,
      'Qdrant': Database,
      'Jenkins': Server,
      'GLPI': Settings,
      'Jupiter': Globe,
      'PrestaShop': Globe,
      'n8n': Settings,
      'OpenWebUI': Globe,
      'Keycloak': Settings,
      'PrivacyIDEA': Settings,
      'Prometheus': Server,
      'Grafana': Server,
      'NPM': Database
    };
    
    const IconComponent = iconMap[name] || Server;
    return <IconComponent className="h-6 w-6" />;
  };

  const getServiceCategory = (name) => {
    const categories = {
      'Huly': 'Collaboration',
      'OpenLDAP': 'Authentification',
      'Vault': 'Sécurité',
      'Qdrant': 'Base de données',
      'Jenkins': 'CI/CD',
      'GLPI': 'Gestion IT',
      'Jupiter': 'Web',
      'PrestaShop': 'E-commerce',
      'n8n': 'Automatisation',
      'OpenWebUI': 'Interface IA',
      'Keycloak': 'Identité',
      'PrivacyIDEA': '2FA',
      'Prometheus': 'Monitoring',
      'Grafana': 'Visualisation',
      'NPM': 'Packages'
    };
    
    return categories[name] || 'Service';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-md bg-black/90 border-purple-500/30 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30"
                style={{ 
                  backgroundColor: body.color,
                  boxShadow: `0 0 20px ${body.color}50`
                }}
              >
                {getServiceIcon(body.name)}
              </div>
              
              <div>
                <CardTitle className="text-white text-xl">{body.name}</CardTitle>
                <Badge 
                  variant="secondary" 
                  className="mt-1 bg-purple-500/20 text-purple-300 border-purple-500/30"
                >
                  {getServiceCategory(body.name)}
                </Badge>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-purple-300 font-medium mb-2">Description</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {body.details || body.description}
            </p>
          </div>
          
          {body.distanceFromSun > 0 && (
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Informations cosmiques</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Type: {body.type === 'planet' ? 'Planète' : body.type === 'star' ? 'Étoile' : 'Planète naine'}</p>
                <p>Distance du Soleil: {body.distanceFromSun} UA</p>
              </div>
            </div>
          )}

          {/* Moons information */}
          {body.moons && body.moons.length > 0 && (
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Satellites</h4>
              <div className="space-y-1">
                {body.moons.map(moon => (
                  <div key={moon.id} className="flex items-center space-x-2 text-xs text-gray-400">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: moon.color }}
                    />
                    <span>{moon.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t border-white/10">
            <Button
              onClick={() => onAccess(body.url)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Accéder au service
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetails;