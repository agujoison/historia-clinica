import { Injectable } from '@angular/core';
import { Student } from '../shared/student';  // Student data type interface class
import { ControlSano } from '../shared/control-sano';  // Student data type interface class
import { ControlEnfermo } from '../shared/control-enfermo';  // Student data type interface class
import { Background } from '../shared/family-background';
import { PatientBackground } from '../shared/patient-background';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  controlesSanoRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  controlSanoRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  controlesEnfermoRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  controlEnfermoRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddStudent(student: Student) {
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      address: student.address,
      mobileNumber: student.mobileNumber,
      dni: student.dni,
    })
  }

  // Create Student
  AddControlSano(controlSano: ControlSano) {
    this.controlesSanoRef.push({
       fecha: controlSano.fecha,
       edad: controlSano.edad,
       talla: controlSano.talla,
       peso: controlSano.peso,
       pc: controlSano.pc,
       imc: controlSano.imc,
       pautas: controlSano.pautas
    })
  }

  AddControlEnfermo(controlEnfermo: ControlEnfermo) {
    this.controlesEnfermoRef.push({
       fecha : controlEnfermo.fecha,
       motivo : controlEnfermo.motivo,
       antecedentesEnfermedad : controlEnfermo.antecedentesEnfermedad,
       examenFisico : controlEnfermo.examenFisico,
       diagnostico : controlEnfermo.diagnostico,
       conducta : controlEnfermo.conducta,
       tratamiento : controlEnfermo.tratamiento
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

  // Fetch Students List
  GetControlSanoList(id: string) {
    this.controlesSanoRef = this.db.list('students-list/' + id + '/controlSanoList');
    return this.controlesSanoRef;
  }

  GetControlEnfermoList(id: string) {
    this.controlesEnfermoRef = this.db.list('students-list/' + id + '/controlEnfermoList');
    return this.controlesEnfermoRef;
  }

  // Fetch Single Student Object
  GetControlSano(idStudent: string, idControl: string) {
    this.controlSanoRef = this.db.object('students-list/' + idStudent + '/controlSanoList/' + idControl);
    return this.controlSanoRef;
  }

  GetControlEnfermo(idStudent: string, idControl: string) {
    this.controlEnfermoRef = this.db.object('students-list/' + idStudent + '/controlEnfermoList/' + idControl);
    return this.controlEnfermoRef;
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

  UpdateControlSanoList(controlSanoList: ControlSano[]) {
    this.studentRef.update({
      controlSanoList
    })
  }

  UpdateControlEnfermoList(controlEnfermoList: ControlEnfermo[]) {
    this.studentRef.update({
      controlEnfermoList
    })
  }

  UpdateControlSano(controlSano: ControlSano) {
    this.controlSanoRef.update({
      edad : controlSano.edad,
      fecha : controlSano.fecha,
      imc : controlSano.imc,
      observaciones : controlSano.observaciones,
      pautas : controlSano.pautas,
      pc : controlSano.pc,
      peso : controlSano.peso,
      talla : controlSano.talla,
      vacunacion : controlSano.vacunacion
    })
  }

  UpdateControlEnfermo(controlEnfermo: ControlEnfermo) {
    this.controlEnfermoRef.update({
      fecha : controlEnfermo.fecha,
      motivo : controlEnfermo.motivo,
      antecedentesEnfermedad : controlEnfermo.antecedentesEnfermedad,
      examenFisico : controlEnfermo.examenFisico,
      diagnostico : controlEnfermo.diagnostico,
      conducta : controlEnfermo.conducta,
      tratamiento : controlEnfermo.tratamiento
    })
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
  }

  DeleteControlSano(id: string, idControl: string) {
    this.controlSanoRef = this.db.object('students-list/' + id + '/controlSanoList/'+idControl);
    this.controlSanoRef.remove();
  }

  DeleteControlEnfermo(id: string, idControl: string) {
    this.controlEnfermoRef = this.db.object('students-list/' + id + '/controlEnfermoList/'+idControl);
    this.controlEnfermoRef.remove();
  }

}
