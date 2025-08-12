# Dockerfile

# Étape 1 : Construire l'app React
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de gestion des dépendances
COPY package*.json ./

# Installer les dépendances avec npm (yarn n'est pas nécessaire)
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Servir avec Nginx
FROM nginx:alpine

# Copier la config Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Supprimer la config par défaut
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copier les fichiers build dans Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exposer le port 88
EXPOSE 88

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
