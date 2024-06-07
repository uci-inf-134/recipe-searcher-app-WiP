import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SavedRecipesService } from '../services/saved-recipes.service';
import { Recipe } from '../services/recipe-search.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
  imports: [CommonModule, HttpClientModule, NavbarComponent],
  providers: [SavedRecipesService]
})
export class RecipePageComponent implements OnInit {
  savedRecipes: Recipe[] = [];
  isModalOpen = false;
  selectedRecipe: Recipe | null = null;
  selectedRecipeIngredients: string[] = [];
  selectedRecipeInstructions: string[] = [];

  constructor(private savedRecipesService: SavedRecipesService) {}

  ngOnInit() {
    this.savedRecipes = this.savedRecipesService.getSavedRecipes();
  }

  openModal(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selectedRecipeIngredients = this.getIngredients(recipe);
    this.selectedRecipeInstructions = this.getInstructions(recipe);
    this.isModalOpen = true;
    setTimeout(() => this.openTabByName('Instructions'), 0);
  }

  closeModal(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.isModalOpen = false;
    this.selectedRecipe = null;
    this.selectedRecipeIngredients = [];
    this.selectedRecipeInstructions = [];
  }

  removeRecipe(recipe: Recipe) {
    this.savedRecipesService.removeRecipe(recipe);
    this.savedRecipes = this.savedRecipesService.getSavedRecipes();
  }

  getIngredients(recipe: Recipe): string[] {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  }

  getInstructions(recipe: Recipe): string[] {
    return recipe.strInstructions.split('. ').map(sentence => `${sentence.trim()}.`);
  }

  openTab(event: MouseEvent, tabName: string) {
    this.openTabByName(tabName);
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    (event.currentTarget as HTMLElement).className += ' active';
  }

  openTabByName(tabName: string) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].setAttribute('style', 'display: none;');
    }
    document.getElementById(tabName)?.setAttribute('style', 'display: block;');
    const tabButton = Array.from(document.getElementsByClassName('tablinks')).find(
      (button) => button.textContent === tabName
    );
    tabButton?.classList.add('active');
  }
}
