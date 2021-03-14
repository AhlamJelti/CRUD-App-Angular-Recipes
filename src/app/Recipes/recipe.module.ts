import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './containers/dashboard.component';

import { DetailsRecipeComponent } from './components/details/detailsRecipe.component';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AddRecipeComponent } from './components/addRecipe/addRecipe.component';
import { EditRecipeComponent } from './components/editRecipe/editRecipe.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations:[DashboardComponent,RecipeComponent,DetailsRecipeComponent,AddRecipeComponent,EditRecipeComponent,NavbarComponent],
  imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
      ReactiveFormsModule,
  ],
  exports:[DashboardComponent ],
  
})

export  class RecipesModule { }