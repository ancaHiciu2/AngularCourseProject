import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes:boolean=true;
  onClickedRecipes(setState:boolean){
    this.showRecipes=setState;
  }
  
}
  