// controllers/UtilisateurController.js
import Utilisateur from '../models/utilisateurModel.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();  // Charger les variables d'environnement

// Inscription d'un utilisateur
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await Utilisateur.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    const utilisateur = await Utilisateur.create({ username, email, password });
    const token = jwt.sign({ id: utilisateur.Id_utilisateurs }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Connexion d'un utilisateur
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const utilisateur = await Utilisateur.findOne({ where: { email } });
    if (!utilisateur) {
      return res.status(400).json({ error: 'Utilisateur non trouvé' });
    }

    const isValid = await utilisateur.isValidPassword(password);
    if (!isValid) {
      return res.status(400).json({ error: 'Mot de passe incorrect' });
    }

    const token = jwt.sign({ id: utilisateur.Id_utilisateurs }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Vérification du token JWT (middleware)
export const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ error: 'Accès interdit, token manquant' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalide' });
  }
};

