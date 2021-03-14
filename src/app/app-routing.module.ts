import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AddRecipeComponent } from './Recipes/components/addRecipe/addRecipe.component';

import { DetailsRecipeComponent } from './Recipes/components/details/detailsRecipe.component';
import { EditRecipeComponent } from './Recipes/components/editRecipe/editRecipe.component';
import { DashboardComponent } from './Recipes/containers/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'edit/:id', component: EditRecipeComponent },
  { path: 'detail/:id', component: DetailsRecipeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
