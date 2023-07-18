import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector:'app-shopping-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.css']
})
export class ShoppingEditComponent{
    @Output() ingredientAdded=new EventEmitter<Ingredient>();
    @ViewChild('amountInput',{static:false})amountInputed:ElementRef;

    onAddClicked(nameInput:HTMLInputElement){
        this.ingredientAdded.emit(new Ingredient(nameInput.value,Number(this.amountInputed.nativeElement.value)));
    }
}