import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe } from 'src/assets/recipe';
import { RecipesService } from '../../recipes.service';
import { Location } from '@angular/common'

@Component({
  selector: 'detail-recipe',
  templateUrl: './detailsRecipe.component.html',
  styleUrls: ['./detailsRecipe.component.css']
})
export class DetailsRecipeComponent {

 recipe:recipe;
 

  constructor( private route: ActivatedRoute,
    private recipeService: RecipesService,
    private location: Location){}

  ngOnInit() : void{
    this.getRecipe();
 }

 getRecipe(): void {
  const id = +this.route.snapshot.paramMap.get('id');
this.recipeService.getRecipe(id)
    .subscribe(rec => this.recipe=rec)
  
 }
 goBack(): void {
  this.location.back();
}




}