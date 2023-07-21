import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector:'app-shopping-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.css']
})
export class ShoppingEditComponent{
    @ViewChild('amountInput',{static:false})amountInputed:ElementRef;

    constructor(private shoppingListService:ShoppingListService){
    }

    onAddClicked(nameInput:HTMLInputElement){
        let ingredient:Ingredient=new Ingredient(nameInput.value,Number(this.amountInputed.nativeElement.value));
        this.shoppingListService.addIngredients(ingredient);
    }
}