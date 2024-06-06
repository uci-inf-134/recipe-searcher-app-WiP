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
