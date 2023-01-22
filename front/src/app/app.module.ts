import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';
import { ViewPharmacyComponent } from './view-pharmacy/view-pharmacy.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AgmCoreModule } from '@agm/core';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { CenterAccountComponent } from './center-account/center-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    AddUserComponent,
    AddPharmacyComponent,
    ViewPharmacyComponent,
    AddMedicineComponent,
    AddAppointmentComponent,
    AddConsultationComponent,
    AppointmentsComponent,
    ConsultationsComponent,
    CenterAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWGrFk4ZniT9RgJD51xrPzcZ8xeCR3-YU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }