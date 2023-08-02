import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-list-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouteModule } from './app-routing.module';
import { RecipesService } from './recipes/recipes.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [ShoppingListService,
              RecipesService,
              RecipesResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
