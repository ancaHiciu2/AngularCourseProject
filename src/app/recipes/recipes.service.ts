import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipesService{
    
  recipesChanged = new Subject<Recipe[]>();
  
      private recipes : Recipe[]=[];

      getRecipes(): Recipe[]{
        return this.recipes;
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
      }

      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}