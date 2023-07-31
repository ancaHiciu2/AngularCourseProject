import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector:'app-shopping-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

editingSub:Subscription;
editMode:boolean=false;
editedItemIndex:number;
editedIngredient:Ingredient;
@ViewChild ('f',{static:false})formVC:NgForm;

constructor(private shoppingListService:ShoppingListService){}

ngOnInit(){
    this.editingSub=this.shoppingListService.startedEditing.subscribe(index=>{
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedIngredient=this.shoppingListService.getIngredient(index);
        this.formVC.form.patchValue({
            igredName:this.editedIngredient.name,
            igredQ:this.editedIngredient.amount
        })
    })
}

onSubmit(form: NgForm){
    let ingredient:Ingredient=new Ingredient(form.value.igredName,+form.value.igredQ);
    if(this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex,ingredient);
    }else{
    this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode=false;
this.formVC.form.reset();
}

onClear(){
    this.formVC.form.reset();
    this.editMode=false;
}

onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
}

ngOnDestroy(){
    this.editingSub.unsubscribe();
}
}