import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    private ingredients:Ingredient[]=[
        new Ingredient("Salt",100),
        new Ingredient("Pepper",200)
      ];
      getIngredients(){
        return this.ingredients;
      }
      addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }
}