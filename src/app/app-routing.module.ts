import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { HomeComponent } from './home/home.component';
import { U1Component } from './u1/u1.component';
import { U2Component } from './u2/u2.component';
import { H1Component } from './h1/h1.component';
import { H2Component } from './h2/h2.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';

const routes: Routes = [
 {path:'',component:UiComponent},
 {path:'home',component:HomeComponent},
 {path:'u1',component:U1Component},
 {path:'u2',component:U2Component},
 {path:'h1',component:H1Component},
 {path:'h2',component:H2Component},
 {path:'r1',component:R1Component},
 {path:'r2',component:R2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
