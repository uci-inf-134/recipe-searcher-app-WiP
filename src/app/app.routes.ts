import { Route } from '@angular/router';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AppComponent } from './app.component';

export const routes: Route[] = [
    { path: '', component: AppComponent },
    { path: 'fridge', component: FridgeComponent },
    { path: 'recipe', component: RecipePageComponent }
];
