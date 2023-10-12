import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviComponent } from './shared/components/navi/navi.component';
import { CarComponent } from './features/car/component/car-list/car.component';
import { BrandComponent } from './pages/brand/brand.component';
import { Not404Component } from './shared/components/not404/not404.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars/:id", pathMatch:"full", component:CarComponent},
  {path:"gamze",component:BrandComponent},
  {path:"hkn", component:Not404Component},
  {path:"**",component:Not404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
