import { Background } from '../shared/family-background';
import { PatientBackground } from '../shared/patient-background';

export interface Student {
   $key: string;
   firstName: string;
   lastName: string;
   address: string
   mobileNumber: Number;
   dni: Number;
   background: Background;
   patientBackground: PatientBackground;
}
