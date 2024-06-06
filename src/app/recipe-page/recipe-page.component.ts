import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeSearchService, Category, Ingredient, Recipe } from '../services/recipe-search.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css'],
  imports: [CommonModule, HttpClientModule, FormsModule, NavbarComponent],
  providers: [RecipeSearchService]
})
export class RecipePageComponent implements OnInit {
  recipes: Recipe[] = [];
  categories: Category[] = [];
  ingredients: Ingredient[] = [];
  query = '';
  category = '';
  ingredient = '';

  constructor(private recipeSearchService: RecipeSearchService) {}

  ngOnInit() {
    this.recipeSearchService.getCategories().subscribe(data => {
      this.categories = data.categories;
    });

    this.recipeSearchService.getIngredients().subscribe(data => {
      this.ingredients = data.meals;
    });
  }

  searchByName() {
    this.recipeSearchService.searchRecipesByName(this.query).subscribe(
      data => {
        this.recipes = data.meals || [];
      },
      error => {
        console.error('Error fetching recipes', error);
      }
    );
  }

  filterByIngredient() {
    this.recipeSearchService.filterByIngredient(this.ingredient).subscribe(
      data => {
        this.recipes = data.meals || [];
      },
      error => {
        console.error('Error fetching recipes', error);
      }
    );
  }

  filterByCategory() {
    this.recipeSearchService.filterByCategory(this.category).subscribe(
      data => {
        this.recipes = data.meals || [];
      },
      error => {
        console.error('Error fetching recipes', error);
      }
    );
  }
}
