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
  editRecipe(recipe: recipe): Observable<recipe>{
    return this.http.put<recipe>(`${URL}/${recipe.id}`,recipe);
  }
  addRecipe(recipe: recipe): Observable<recipe>{
    return this.http.post<recipe>(URL,recipe);
  }

  removeRecipe(id :Number):Observable<any | void>{
    return this.http.delete(`${URL}/${id}`)
}
  
  
}
