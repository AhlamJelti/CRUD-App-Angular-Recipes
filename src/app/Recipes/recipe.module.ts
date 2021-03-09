import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './containers/dashboard.component';

import { DetailsRecipeComponent } from './components/details/detailsRecipe.component';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';


@NgModule({
  declarations:[DashboardComponent,RecipeComponent,DetailsRecipeComponent],
  imports: [
      CommonModule,
      FormsModule,    
      HttpClientModule,
      RouterModule
  ],
  exports:[DashboardComponent ],
  
})

export  class RecipesModule { }