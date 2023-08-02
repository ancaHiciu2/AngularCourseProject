import { DeclarationListEmitMode } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeNotSelectedComponent } from "./recipe-not-selected/recipe-not-selected.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeNotSelectedComponent,
    RecipeEditComponent
],
exports:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeNotSelectedComponent,
    RecipeEditComponent
],
imports:[
    RouterModule,
    ReactiveFormsModule,
    CommonModule
]
})
export class RecipesModule{

}