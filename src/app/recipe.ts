import { Ingredient } from "./ingredient";

export interface Recipe {
    name: string;
    description: string;
    ingredientList: Ingredient[];
    cookingInstructions: string[];
}
