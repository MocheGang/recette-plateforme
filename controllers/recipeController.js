import Recipe from '../models/recipeModel.js';

// Créer une nouvelle recette
export const createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, imageUrl, id_utilisateurs } = req.body;
    const newRecipe = await Recipe.create({
      title,
      description,
      ingredients,
      steps,
      imageUrl,
      id_utilisateurs
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la recette' });
  }
};

// Récupérer toutes les recettes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes' });
  }
};

// Récupérer une recette par son ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la recette' });
  }
};

// Mettre à jour une recette par son ID
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    const { title, description, ingredients, steps, imageUrl, id_utilisateurs } = req.body;
    recipe.title = title || recipe.title;
    recipe.description = description || recipe.description;
    recipe.ingredients = ingredients || recipe.ingredients;
    recipe.steps = steps || recipe.steps;
    recipe.imageUrl = imageUrl || recipe.imageUrl;
    recipe.id_utilisateurs = id_utilisateurs || recipe.id_utilisateurs;
    
    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la recette' });
  }
};

// Supprimer une recette par son ID
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    await recipe.destroy();
    res.status(200).json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la recette' });
  }
};
