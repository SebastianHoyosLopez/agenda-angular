import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'user',
    title: 'User',
    component: UserComponent
  },
  {
    path: 'reservations',
    title: 'Reservations',
    component: ReservationsComponent
  }
];
