import { Injectable } from '@angular/core';
import { Student } from '../shared/student';  // Student data type interface class
import { Background } from '../shared/family-background';
import { PatientBackground } from '../shared/patient-background';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddStudent(student: Student) {
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      address: student.address,
      mobileNumber: student.mobileNumber,
      dni: student.dni
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      address: student.address,
      mobileNumber: student.mobileNumber,
      dni: student.dni
    })
  }

  // Update Student Object
  UpdateBackground(background: Background) {
    this.studentRef.update({
      background
    })
  }

  UpdatePatientBackground(patientBackground: PatientBackground) {
    this.studentRef.update({
      patientBackground
    })
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
  }

}
