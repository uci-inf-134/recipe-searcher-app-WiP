import { Route } from '@angular/router';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'fridge', component: FridgeComponent },
    { path: 'recipe', component: RecipePageComponent }
];
