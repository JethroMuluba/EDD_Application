"Etre Derrière tes Dépenses" EDD

Description
EDD est une application web de gestion de finances personnelles qui permet aux utilisateurs de suivre leurs dépenses, de gérer leur budget et de visualiser des insights financiers.

L'application offre les fonctionnalités suivantes :

1. Enregistrement des dépenses avec catégorie, montant, date et heure.
2. Enregistrement des revenus avec montant, date et heure.
3. Visualisation des dépenses et revenus sous forme de listes.
4. Calcul des totaux des dépenses et revenus par jour, semaine et mois.
5. Affichage d'insights financiers tels que le total des dépenses par catégorie, le solde actuel, etc.
6. Authentification des utilisateurs avec JWT (JSON Web Token).
7. Gestion des sessions utilisateur.
8. Envoi de code de confirmation par e-mail pour l'inscription.
9. L'application est développée en utilisant Express.js pour le backend, Prisma ORM pour l'interaction avec la base de données PostgreSQL,  React.js pour le frontend et Tailwind CSS pour le style.

Installation
Pour installer et exécuter localement le projet, suivez les instructions suivantes :

Clonez le dépôt :
git clone [https://github.com/kadea-academy-learners/capstone2-c2-JethroMuluba.git]

Accédez au répertoire du projet :
cd votre-projet

Installez les dépendances :
npm install

Configuration
Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement nécessaires :

DATABASE_URL=URL_DE_VOTRE_BASE_DE_DONNÉES
DB_USERNAME=VOTRE_NOM_D_UTILISATEUR
DB_PASSWORD=VOTRE_MOT_DE_PASSE
JWT_SECRET=VOTRE_CLÉ_SECRÈTE_JWT

Assurez-vous que votre base de données est configurée et accessible.
Scripts disponibles
start: Démarre le serveur en mode production.
dev: Démarre le serveur en mode développement avec rechargement automatique.
migrate:dev: Exécute les migrations de la base de données en mode développement.
migrate:prod: Exécute les migrations de la base de données en mode production.

Exécution
Pour démarrer le serveur en mode développement, utilisez la commande suivante :
npm run dev
Le serveur sera disponible à l'adresse : http://localhost:3000

Déploiement
Pour déployer l'application sur votre plateforme préférée, suivez les instructions de déploiement fournies par le fournisseur de services.

Initialisation de la base de données
Pour initialiser votre base de données avec des données de test, vous pouvez utiliser les scripts fournis dans le répertoire scripts/db.

Assurez-vous que votre base de données est configurée correctement dans votre fichier .env.
Exécutez le script de migration en mode développement :

npm run migrate:dev