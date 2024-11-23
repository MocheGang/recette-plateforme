// models/Utilisateur.js
import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import sequelize from '../config/db.js';  // Assurez-vous que la connexion à la base de données est bien configurée

const Utilisateur = sequelize.define('Utilisateur', {
  Id_utilisateurs: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false
});

// Hook pour hacher le mot de passe avant la création
Utilisateur.beforeCreate(async (utilisateur) => {
  const salt = await bcrypt.genSalt(10);
  utilisateur.password = await bcrypt.hash(utilisateur.password, salt);
});

// Méthode pour vérifier le mot de passe
Utilisateur.prototype.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default Utilisateur;

