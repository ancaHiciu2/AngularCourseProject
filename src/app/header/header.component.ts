
import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:[ './header.component.css']
})

export class HeaderComponent{
    collapsed=true;

    constructor(private router:Router,private dataStorageService:DataStorageService){}

    onSaveData(){
        this.dataStorageService.saveRecipes().subscribe((response)=>{
            console.log(response)
            alert('Recipes uploaded');
        })
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes();
    }
}