import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'product/:id', component: ProductComponent},
 {path: '**', component: Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
