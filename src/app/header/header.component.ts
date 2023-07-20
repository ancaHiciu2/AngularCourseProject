
import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:[ './header.component.css']
})

export class HeaderComponent{
    collapsed=true;
    @Output() recipesClicked=new EventEmitter<boolean>(); 
    showRecipes:boolean;

    onRecipes(){
        this.showRecipes=true;
        this.recipesClicked.emit(this.showRecipes);
    }

    onShopping(){
        this.showRecipes=false;
        this.recipesClicked.emit(this.showRecipes);
    }
}