import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recipe } from 'src/assets/recipe';
import { RecipesService } from '../../recipes.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

@Input() recipe:recipe;
@Output() remove : EventEmitter<number> = new EventEmitter();
  constructor( ){}

  ngOnInit() : void{
    
 }

 handleRemove(id: number){
  this.remove.emit(id);
}
}
