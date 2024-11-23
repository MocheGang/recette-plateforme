// index.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import utilisateurRoutes from './routes/utilisateurRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import sequelize from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes utilisateur
app.use('/api/users', utilisateurRoutes);
app.use('/api/recipes', recipeRoutes);

// Synchronisation de la base de données
sequelize.sync().then(() => {
  console.log('Base de données synchronisée');
}).catch((error) => {
  console.error('Erreur de synchronisation de la base de données:', error);
});

app.listen(7000, () => {
  console.log('Serveur démarré sur le port 7000');
});

