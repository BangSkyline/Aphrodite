// Mock data pour le dashboard COSMOS avec images réalistes
export const celestialBodies = [
  {
    id: 'sun',
    name: 'Huly',
    type: 'star',
    description: 'Plateforme de gestion de projet et collaboration',
    distanceFromSun: 0,
    url: 'https://huly.cosmos',
    color: '#FFA500',
    size: 'large',
    position: { x: 50, y: 50 },
    details: 'Centre de votre écosystème de services - Gestion de projet collaborative',
    image: 'https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'mercury',
    name: 'OpenLDAP',
    type: 'planet',
    description: 'Service d\'annuaire LDAP',
    distanceFromSun: 0.39,
    url: 'https://openldap.cosmos',
    color: '#8C7853',
    size: 'small',
    position: { x: 25, y: 35 },
    details: 'Annuaire LDAP pour l\'authentification et la gestion des utilisateurs',
    image: 'https://images.unsplash.com/photo-1654649451086-dd75d8170a27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'venus',
    name: 'Vault',
    type: 'planet',
    description: 'Gestionnaire de secrets et mots de passe',
    distanceFromSun: 0.72,
    url: 'https://vault.cosmos',
    color: '#FFC649',
    size: 'medium',
    position: { x: 35, y: 65 },
    details: 'Stockage sécurisé des secrets, mots de passe et certificats',
    image: 'https://images.unsplash.com/photo-1654649451086-dd75d8170a27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'earth',
    name: 'Qdrant',
    type: 'planet',
    description: 'Base de données vectorielle',
    distanceFromSun: 1.0,
    url: 'https://qdrant.cosmos',
    color: '#6B93D6',
    size: 'medium',
    position: { x: 45, y: 25 },
    details: 'Base de données vectorielle pour l\'IA et la recherche sémantique',
    image: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85',
    moons: [{
      id: 'moon-earth',
      name: 'Jenkins',
      description: 'Serveur d\'intégration continue',
      url: 'https://jenkins.cosmos',
      color: '#D33833',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
    }]
  },
  {
    id: 'mars',
    name: 'GLPI',
    type: 'planet',
    description: 'Gestion des actifs IT',
    distanceFromSun: 1.52,
    url: 'https://glpi.cosmos',
    color: '#CD5C5C',
    size: 'medium',
    position: { x: 65, y: 45 },
    details: 'Gestion des actifs informatiques et helpdesk',
    image: 'https://images.unsplash.com/photo-1654649451086-dd75d8170a27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    description: 'Site internet principal',
    distanceFromSun: 5.2,
    url: 'https://jupiter.cosmos',
    color: '#D8CA9D',
    size: 'large',
    position: { x: 75, y: 70 },
    details: 'Site internet principal - Point d\'entrée de votre infrastructure',
    image: 'https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'saturn',
    name: 'PrestaShop',
    type: 'planet',
    description: 'Plateforme e-commerce',
    distanceFromSun: 9.5,
    url: 'https://prestashop.cosmos',
    color: '#FAD5A5',
    size: 'large',
    position: { x: 85, y: 30 },
    details: 'Solution e-commerce complète pour votre boutique en ligne',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxzcGFjZSUyMHBsYW5ldHN8ZW58MHx8fHwxNzU1MDMwMjY1fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'uranus',
    name: 'OpenWebUI',
    type: 'planet',
    description: 'Interface web pour l\'IA',
    distanceFromSun: 19.2,
    url: 'https://openwebui.cosmos',
    color: '#4FD0E7',
    size: 'medium',
    position: { x: 20, y: 75 },
    details: 'Interface web moderne pour interagir avec les modèles d\'IA',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'neptune',
    name: 'n8n',
    type: 'planet',
    description: 'Automatisation des workflows',
    distanceFromSun: 30.1,
    url: 'https://n8n.cosmos',
    color: '#4169E1',
    size: 'medium',
    position: { x: 15, y: 55 },
    details: 'Automatisation des processus et intégration de services',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'pluto',
    name: 'Keycloak',
    type: 'dwarf-planet',
    description: 'Gestion d\'identité et d\'accès',
    distanceFromSun: 39.5,
    url: 'https://keycloak.cosmos',
    color: '#9B59B6',
    size: 'small',
    position: { x: 90, y: 60 },
    details: 'Solution complète de gestion d\'identité et d\'authentification',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  }
];

export const moons = [
  {
    id: 'europa',
    name: 'PrivacyIDEA',
    planet: 'jupiter',
    description: 'Authentification multi-facteurs',
    url: 'https://privacyidea.cosmos',
    color: '#E6E6FA',
    size: 'small',
    details: 'Solution d\'authentification à deux facteurs et sécurité',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'enceladus',
    name: 'Prometheus',
    planet: 'saturn',
    description: 'Monitoring et métriques',
    url: 'https://prometheus.cosmos',
    color: '#FF6347',
    size: 'small',
    details: 'Système de monitoring et collection de métriques',
    image: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'triton',
    name: 'Grafana',
    planet: 'neptune',
    description: 'Visualisation des données',
    url: 'https://grafana.cosmos',
    color: '#FF8C00',
    size: 'small',
    details: 'Tableaux de bord et visualisation des métriques',
    image: 'https://images.unsplash.com/photo-1654649451086-dd75d8170a27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 'titan',
    name: 'NPM',
    planet: 'saturn',
    description: 'Registre de paquets',
    url: 'https://npm.cosmos',
    color: '#CB4335',
    size: 'small',
    details: 'Registre privé pour les paquets Node.js',
    image: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxwbGFuZXRzJTIwc29sYXIlMjBzeXN0ZW18ZW58MHx8fHwxNzU1MDMwMjU5fDA&ixlib=rb-4.1.0&q=85'
  }
];