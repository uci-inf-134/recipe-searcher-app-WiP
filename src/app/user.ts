import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";

export interface User {
    name: string;
    password: string; // not very secure
    fridgeInventory: Ingredient[];
    savedRecipes: Recipe[];
}
