import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(addedIngredients);
      }
}