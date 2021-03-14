import { Component } from '@angular/core';
import { recipe } from 'src/assets/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'TestRecipes';
  recipes : recipe[];

  constructor(private recipeservice:  RecipesService){}

  ngOnInit() : void{
    this.getRecipes();
}

getRecipes(){
  this.recipeservice.getRecipes().subscribe(p => this.recipes=p)
}

removeRecipe(id: Number){
  this.recipeservice.removeRecipe(id).subscribe(()=>
  
    this.recipes= this.recipes.filter(  p => p.id != id ));

  
}

}
