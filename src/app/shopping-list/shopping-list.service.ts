import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    //ingredientsChanged=new EventEmitter<Ingredient[]>();

    private ingredients:Ingredient[]=[
        new Ingredient("Salt",100),
        new Ingredient("Pepper",200)
      ];

      getIngredients(){
        return this.ingredients;
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
      }

      addIngredients(addedIngredients:Ingredient[]){
        this.ingredients.push(...addedIngredients);
        //this.ingredientsChanged.emit(addedIngredients);
      }
}