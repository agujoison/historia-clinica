import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Router Module
import { AppRoutingModule } from './/app-routing.module';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { FamilyBackgroundComponent } from './family-background/family-background.component';
import { PatientBackgroundComponent } from './patient-background/patient-background.component';
import { NinoSanoComponent } from './nino-sano/nino-sano.component';
import { AddControlSanoComponent } from './add-control-sano/add-control-sano.component';
import { AddControlEnfermoComponent } from './add-control-enfermo/add-control-enfermo.component';
import { NinoEnfermoComponent } from './nino-enfermo/nino-enfermo.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentsListComponent,
    EditStudentComponent,
    FamilyBackgroundComponent,
    PatientBackgroundComponent,
    NinoSanoComponent,
    AddControlSanoComponent,
    AddControlEnfermoComponent,
    NinoEnfermoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module 
    ReactiveFormsModule,        // Reactive forms module
    AppRoutingModule,           // Main routing module
    BrowserAnimationsModule,    // Required animations module for Toastr
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,      
    }),
    NgxPaginationModule  // NGX pagination module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
