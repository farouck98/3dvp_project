# 3dvp_project

Calculator Web App
Description
Une calculatrice simple développée en HTML, CSS et JavaScript, capable d'effectuer des opérations arithmétiques de base.

Fonctionnalités
Ajout de chiffres et opérateurs via des boutons.
Calcul automatique des expressions mathématiques.
Messages d'information en cas de champ vide.
Suppression rapide du contenu du champ de texte.
Comment Utiliser l'Application
Clonage du Projet


Copier le code
git clone https://github.com/farouck98/3dvp_project.git
cd 3dvp_project
Exécution des Tests

Avant de construire l'application ou de la déployer, assurez-vous que les tests passent correctement.

# Installer les dépendances nécessaires:
npm install jest
npm install jsdom

# Exécuter les tests pour vérifier le bon fonctionnement de l'application
npm test

# Créer un dockerfile 
créer un Dockerfile qui construit une image de l'application web et sert les fichiers statiques à l'aide d'un serveur web,

# Construction de l'Image Docker

docker build -t 3dvp_project .

# Pour exécuter l'application dans un conteneur Docker :
docker run -p 8080:80 nom_de_votre_image

# Déploiement de l'Application

Pour déployer l'application sur un serveur :

Assurez-vous que Docker est installé sur votre serveur.
Configurez les secrets Docker Hub dans les paramètres secrets de votre dépôt GitHub.
Voici un exemple de déploiement sur un serveur :

ssh user@server "docker pull votre-utilisateur/3dvp_latest:latest"  # Télécharger l'image Docker
ssh user@server "docker stop calculator-container || true"  # Arrêter le conteneur s'il est en cours d'exécution
ssh user@server "docker rm calculator-container || true"  # Supprimer le conteneur s'il existe
ssh user@server "docker run -d --name calculator-container -p 80:80 votre-utilisateur/3dvp_project:latest"  # Lancer le nouveau conteneur
Accès à l'Application

Une fois déployée, accédez à l'application en ouvrant votre navigateur et
en accédant à l'adresse IP ou au nom de domaine de votre serveur.
