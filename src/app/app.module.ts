import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomeComponent } from './home/home.component';
import { U1Component } from './u1/u1.component';
import { U2Component } from './u2/u2.component';
import { H1Component } from './h1/h1.component';
import { H2Component } from './h2/h2.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomeComponent,
    U1Component,
    U2Component,
    H1Component,
    H2Component,
    R1Component,
    R2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
