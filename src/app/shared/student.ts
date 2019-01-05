import { Background } from '../shared/family-background';

export interface Student {
   $key: string;
   firstName: string;
   lastName: string;
   address: string
   mobileNumber: Number;
   dni: Number;
   background: Background;
   //father: string;
   //mother: string;
   //brothers: string;
   //others: string;
}
