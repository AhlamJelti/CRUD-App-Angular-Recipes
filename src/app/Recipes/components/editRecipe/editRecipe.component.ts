import { Component, Input } from '@angular/core';
import { recipe } from 'src/assets/recipe';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { RecipesService } from '../../recipes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'edit-recipe',
  templateUrl: './editRecipe.component.html',
  styleUrls: ['./editRecipe.component.css']
})
export class  EditRecipeComponent {

    
    recipeForm: FormGroup;
    recipes: recipe[];
    recipe: recipe;

    id= +this.route.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder, private recipeservice: RecipesService,
                private route:ActivatedRoute ){ }

  ngOnInit() : void{

        
        this.recipeservice.getRecipes().subscribe(p => this.recipes=p);
    this.recipeservice.getRecipe(this.id).subscribe(p => {
        this.recipeForm = this.fb.group({
            id: p.id,
            title: p.title,
            ingredients: this.fb.array([...p.ingredients]),
            thumbnail:p.thumbnail,
            cookingTime: p.cookingTime,
            make: p.make,
          }),
          this.recipe=p
        }
          
          );

    
    
 }

 getRecipe(){
    this.recipeservice.getRecipe(this.id).subscribe(p => this.recipe=p);
 };

 get ingredients() : FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  };

  addIngredients() {
    this.ingredients.push(new FormControl(''));
  }
  deleteIngredients(i){
    this.ingredients.removeAt(i);
  }

  
  onSubmit(){
    console.log(this.recipeForm.value);
     this.recipeservice.editRecipe(this.recipeForm.value).subscribe((rec)=>
     {this.recipes=this.recipes.map(p=>{
       if(p.id === rec.id) return Object.assign({},p,rec);
       return p;
     })});
   
    }
      



}