// config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();  // Charger les variables d'environnement depuis .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,  // Optionnel : désactiver les logs SQL dans la console
  }
);

try {
  await sequelize.authenticate();
  console.log('Connexion à la base de données réussie.');
} catch (error) {
  console.error('Impossible de se connecter à la base de données:', error);
}

export default sequelize;

