import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipe } from 'src/assets/recipe';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const URL="http://localhost:3000/res"

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  public getRecipes():Observable<any>{
    return this.http.get(URL);
  }
  public getRecipe(id: number):Observable<any>{
    return this.http.get(`${URL}/${id}`);
  }
  editPassengers(recipe: recipe): Observable<recipe>{
    return this.http.put<recipe>(`${URL}/${recipe.id}`,recipe);
  }
  add(recipe: recipe): Observable<recipe>{
    return this.http.post<recipe>(URL,recipe);
  }

  
  
}
