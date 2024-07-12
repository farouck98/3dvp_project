# Utiliser l'image nginx comme base
FROM nginx:alpine

# Copier les fichiers de mon application dans le répertoire du serveur web de nginx
COPY . /usr/share/nginx/html

# Le port 80 est exposé par défaut par nginx
EXPOSE 80

# Commande de démarrage pour nginx, il démarre automatiquement avec l'image nginx:alpine
CMD ["nginx", "-g", "daemon off;"]
