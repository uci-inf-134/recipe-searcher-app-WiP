import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchRecipesByName(query: string): Observable<Recipe[]> {
    return this.http.get<{ meals: Recipe[] }>(`${this.apiUrl}/search.php`, { params: { s: query } })
      .pipe(map(response => response.meals || []));
  }

  filterByIngredient(ingredient: string): Observable<Recipe[]> {
    return this.http.get<{ meals: { idMeal: string }[] }>(`${this.apiUrl}/filter.php`, { params: { i: ingredient } })
      .pipe(
        map(response => response.meals || []),
        switchMap(meals => forkJoin(meals.map(meal => this.getRecipeById(meal.idMeal))))
      );
  }

  filterByCategory(category: string): Observable<Recipe[]> {
    return this.http.get<{ meals: { idMeal: string }[] }>(`${this.apiUrl}/filter.php`, { params: { c: category } })
      .pipe(
        map(response => response.meals || []),
        switchMap(meals => forkJoin(meals.map(meal => this.getRecipeById(meal.idMeal))))
      );
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<{ meals: Recipe[] }>(`${this.apiUrl}/lookup.php`, { params: { i: id } })
      .pipe(map(response => response.meals[0]));
  }

  getCategories(): Observable<{ categories: Category[] }> {
    return this.http.get<{ categories: Category[] }>(`${this.apiUrl}/categories.php`);
  }

  getIngredients(): Observable<{ meals: Ingredient[] }> {
    return this.http.get<{ meals: Ingredient[] }>(`${this.apiUrl}/list.php?i=list`);
  }
}
