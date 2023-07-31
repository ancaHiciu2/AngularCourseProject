import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipesService{
    
  recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[]=[
        new Recipe(
          "Recipe1",
          "Tzuchini recipe",
          "https://theabsolutefoodie.com/wp-content/uploads/2022/07/indian-zucchini-recipes.jpg",
          [new Ingredient("bun",2),new Ingredient("meat",200)]),
        new Recipe(
          "Recipe2", 
          "Tartar recipe", 
          "https://www.inspiredtaste.net/wp-content/uploads/2019/02/Homemade-Tartar-Sauce-Recipe-1200.jpg",
          [new Ingredient("salt",29),new Ingredient("tomatoes",7889)])
      ];

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