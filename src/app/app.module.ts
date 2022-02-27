import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { SignupComponent } from './components/signup/signup.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaperComponent } from './components/paper/paper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import {HttpClientModule } from "@angular/common/http";
import { DoctorComponent } from './components/doctor/doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DisplayDoctorComponent } from './components/display-doctor/display-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    DoctorsComponent,
    SignupComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    PaperComponent,
    AddAdminComponent,
    DashboardAdminComponent,
    DoctorComponent,
    AddDoctorComponent,
    DashboardDoctorComponent,
    EditDoctorComponent,
    DisplayDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
