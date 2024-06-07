import { Injectable } from '@angular/core';
import { Recipe } from '../services/recipe-search.service';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipesService {
  private savedRecipesKey = 'savedRecipes';

  getSavedRecipes(): Recipe[] {
    const savedRecipes = localStorage.getItem(this.savedRecipesKey);
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  }

  saveRecipe(recipe: Recipe) {
    const savedRecipes = this.getSavedRecipes();
    if (!savedRecipes.some(r => r.idMeal === recipe.idMeal)) {
      savedRecipes.push(recipe);
      localStorage.setItem(this.savedRecipesKey, JSON.stringify(savedRecipes));
    }
  }

  removeRecipe(recipe: Recipe) {
    let savedRecipes = this.getSavedRecipes();
    savedRecipes = savedRecipes.filter(r => r.idMeal !== recipe.idMeal);
    localStorage.setItem(this.savedRecipesKey, JSON.stringify(savedRecipes));
  }
}
