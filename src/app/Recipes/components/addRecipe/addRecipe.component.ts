import { Component, Input } from '@angular/core';
import { recipe } from 'src/assets/recipe';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { RecipesService } from '../../recipes.service';


@Component({
  selector: 'add-recipe',
  templateUrl: './addRecipe.component.html',
  styleUrls: ['./addRecipe.component.css']
})
export class  AddRecipeComponent {

  imageSrc: string;
    recipeForm: FormGroup;
    recipes: recipe[];

  constructor(private fb: FormBuilder, private recipeservice: RecipesService ){ }

  ngOnInit() : void{

  
        this.recipeservice.getRecipes().subscribe(p => this.recipes=p);
      
    this.recipeForm = this.fb.group({
        id: "",
        title: "",
        ingredients: this.fb.array([""]),
        thumbnail:"",
        cookingTime: "",
        make: "",
        
      })
    
 }
 get ingredients() : FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  
  onSubmit(){
    console.log(this.recipeForm.value);
     this.recipeservice.addRecipe(this.recipeForm.value).subscribe((recipe)=>
      {this.recipes=this.recipes.concat([recipe]);
      });

}

  addIngredients() {
    this.ingredients.push(new FormControl(''));
  }
  deleteIngredients(i){
    this.ingredients.removeAt(i);
  }
  onFileChange(event){
    const reader = new FileReader();
     
    if(event.target.files ) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
    

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        
        this.recipeForm.patchValue({
          thumbnail: reader.result
        });
      }
    }
      
  }

}