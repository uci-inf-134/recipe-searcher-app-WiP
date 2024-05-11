import { Routes } from '@angular/router';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

export const routes: Routes = [
    { path: '', component: FridgeComponent }, 
    { path: 'recipe/:recipeId', component: RecipePageComponent }
];
