import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/componets/home/home.component'
import{ReservComponent} from '../app/componets/reserv/reserv.component'
import{ReservFormComponent} from '../app/componets/reserv-form/reserv-form.component'
const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'home/reserv',
    component : ReservComponent
  },
  {
    path : 'home/reserv/form',
    component : ReservFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
