// routes/UtilisateurRoutes.js
import express from 'express';
import { register, login, authenticate } from '../controllers/utilisateurController.js';

const router = express.Router();

// Route d'inscription
router.post('/register', register);

// Route de connexion
router.post('/login', login);

// Route protégée nécessitant une authentification
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Accès autorisé', userId: req.user.id });
});

export default router;

