import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {AppointmentsComponent} from "./appointments/appointments.component";
import { CenterAccountComponent } from './center-account/center-account.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'center',
    component: CenterAccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'add-appointment',
    component: AddAppointmentComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
