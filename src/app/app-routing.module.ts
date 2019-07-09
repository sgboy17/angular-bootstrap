import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookShoppingCartComponent } from './book-shopping-cart/book-shopping-cart.component';

const routes: Routes = [
  {path: "book-shopping-cart", component: BookShoppingCartComponent},  
  {path: "book-list", component: BookListComponent},
  {path: "home", component: HomeComponent},
  {path:  "", pathMatch:  "full",redirectTo:  "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
