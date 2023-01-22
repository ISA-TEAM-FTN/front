import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {AddPharmacyComponent} from "./add-pharmacy/add-pharmacy.component";
import {AddMedicineComponent} from "./add-medicine/add-medicine.component";
import {ViewPharmacyComponent} from "./view-pharmacy/view-pharmacy.component";
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {AddConsultationComponent} from "./add-consultation/add-consultation.component";
import {ConsultationsComponent} from "./consultations/consultations.component";
import {AppointmentsComponent} from "./appointments/appointments.component";
import { CenterAccountComponent } from './center-account/center-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'add-pharmacy',
    component: AddPharmacyComponent
  },
  {
    path: 'add-medicine',
    component: AddMedicineComponent
  },
  {
    path: 'view-pharmacy/:id',
    component: ViewPharmacyComponent
  },
  {
    path: 'add-appointment',
    component: AddAppointmentComponent
  },
  {
    path: 'add-consultation',
    component: AddConsultationComponent
  },
  {
    path: 'consultations',
    component: ConsultationsComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
