1- Étape : Prise en main du cahier des charges

https://docs.google.com/document/d/1reXaxB02-H1QNJGfCFk8IKWBN9t7kdk54gYadkBixlQ/edit?usp=sharing

2- Étape : Modélisation en UML ( diagramme de cas d'utilisation ) et modélisationen MLD avec " Looping "

Recette.loo

3- Étape : Initilisation du Framework " Express " avec différentes dépendances 

mkdir recette-plateforme
cd recette-plateforme
npm init -y
npm install express sequelize mysql2 body-parser cors dotenv
npm install --save-dev nodemon eslint
npm install jsonwebtoken


4- Étape : Initiation du projet sur git 

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/utilisateur/mon-repo.git](https://github.com/MocheGang/recette-plateforme.git)
git branch -M main
git push -u origin main


5- Étape : Structuration MVC pour avoir un code propre

.
├── config/
│   ├── db.js               # Configuration de la connexion à la base de données
│
├── controllers/
│   ├── recipeController.js # Logique métier pour les recettes
│   ├── userController.js   # Logique métier pour les utilisateurs (si nécessaire)
│
├── models/
│   ├── recipeModel.js           # Modèle Sequelize pour les recettes
│   ├── userModel.js             # Modèle Sequelize pour les utilisateurs
│
├── routes/
│   ├── recipeRoutes.js     # Routes liées aux recettes
│   ├── userRoutes.js       # Routes liées aux utilisateurs (si nécessaire)
│
├── middleware/
│   ├── authMiddleware.js   # Middleware d'authentification (si nécessaire)
│
│
├── server.js               # Point d'entrée de l'application
├── package.json            # Dépendances et scripts
├── .env                    # Variables d'environnement (DB_HOST, DB_USER, etc.)
