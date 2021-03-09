import { Component, Input } from '@angular/core';
import { recipe } from 'src/assets/recipe';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

@Input() recipe:recipe;

  constructor(){}

  ngOnInit() : void{
    
 }


}
