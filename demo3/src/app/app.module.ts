import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalService } from './hospital.service';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    PatientListComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
