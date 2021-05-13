import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { NavComponent } from './componets/nav/nav.component';
import { ReservComponent } from './componets/reserv/reserv.component';
import { ReservFormComponent } from './componets/reserv-form/reserv-form.component';
import {ReservService} from '../app/services/reserv.service'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ReservComponent,
    ReservFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReservService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
