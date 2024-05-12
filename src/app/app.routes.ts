import { Route } from '@angular/router';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AppComponent } from './app.component';

export const routes: Route[] = [
    { path: '', component: FridgeComponent },
    { path: 'fridge', component: FridgeComponent },
    { path: 'recipe', component: RecipePageComponent }
];
