import { Ingredient } from "./ingredient";

export interface Recipe {
    name: string;
    recipeId: string;
    description: string;
    ingredientList: Ingredient[];
    cookingInstructions: string[];
}
