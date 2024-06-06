import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  searchRecipesByName(query: string): Observable<{ meals: Recipe[] }> {
    return this.http.get<{ meals: Recipe[] }>(`${this.apiUrl}/search.php`, { params: { s: query } });
  }

  filterByIngredient(ingredient: string): Observable<{ meals: Recipe[] }> {
    return this.http.get<{ meals: Recipe[] }>(`${this.apiUrl}/filter.php`, { params: { i: ingredient } });
  }

  filterByCategory(category: string): Observable<{ meals: Recipe[] }> {
    return this.http.get<{ meals: Recipe[] }>(`${this.apiUrl}/filter.php`, { params: { c: category } });
  }

  getCategories(): Observable<{ categories: Category[] }> {
    return this.http.get<{ categories: Category[] }>(`${this.apiUrl}/categories.php`);
  }

  getIngredients(): Observable<{ meals: Ingredient[] }> {
    return this.http.get<{ meals: Ingredient[] }>(`${this.apiUrl}/list.php?i=list`);
  }
}
