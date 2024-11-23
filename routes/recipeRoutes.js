import express from 'express';
import { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';

const router = express.Router();

// Route pour créer une nouvelle recette
router.post('/', createRecipe);

// Route pour récupérer toutes les recettes
router.get('/', getAllRecipes);

// Route pour récupérer une recette par son ID
router.get('/:id', getRecipeById);

// Route pour mettre à jour une recette par son ID
router.put('/:id', updateRecipe);

// Route pour supprimer une recette par son ID
router.delete('/:id', deleteRecipe);

export default router;
