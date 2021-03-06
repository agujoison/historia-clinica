import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FamilyBackgroundComponent } from './family-background/family-background.component';
import { PatientBackgroundComponent } from './patient-background/patient-background.component';
import { NinoSanoComponent } from './nino-sano/nino-sano.component';
import { NinoEnfermoComponent } from './nino-enfermo/nino-enfermo.component';
import { AddControlSanoComponent } from './add-control-sano/add-control-sano.component';
import { AddControlEnfermoComponent } from './add-control-enfermo/add-control-enfermo.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentsListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'family-background/:id', component: FamilyBackgroundComponent },
  { path: 'patient-background/:id', component: PatientBackgroundComponent },
  { path: 'nino-sano/:id', component: NinoSanoComponent },
  { path: 'nino-enfermo/:id', component: NinoEnfermoComponent },
  { path: 'add-control-sano/:idPaciente/:id', component: AddControlSanoComponent },
  { path: 'add-control-enfermo/:idPaciente/:id', component: AddControlEnfermoComponent }
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
