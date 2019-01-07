import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-background',
  templateUrl: './patient-background.component.html',
  styleUrls: ['./patient-background.component.css']
})
export class PatientBackgroundComponent implements OnInit {

  editForm: FormGroup;  // Define FormGroup to student's edit form

  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.updateStudentData();   // Call updateStudentData() as soon as the component is ready
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.GetStudent(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data.patientBackground)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
    })
  }

  get dateOfBirth() {
    return this.editForm.get('dateOfBirth');
  }

  get parto() {
    return this.editForm.get('parto');
  }

  get peso() {
    return this.editForm.get('peso');
  }

  get tall() {
    return this.editForm.get('tall');
  }

  get perimetro() {
    return this.editForm.get('perimetro');
  }

  get apgar() {
    return this.editForm.get('apgar');
  }

  get sanguineo() {
    return this.editForm.get('sanguineo');
  }

  get observaciones() {
    return this.editForm.get('observaciones');
  }

  get alta() {
    return this.editForm.get('alta');
  }

  get alimentacion() {
    return this.editForm.get('alimentacion');
  }

  get pesquisa() {
    return this.editForm.get('pesquisa');
  }

  get oea() {
    return this.editForm.get('oea');
  }

  get ojo() {
    return this.editForm.get('ojo');
  }

  get suplementos() {
    return this.editForm.get('suplementos');
  }

  get odontologico() {
    return this.editForm.get('odontologico');
  }

  get traumatologico() {
    return this.editForm.get('traumatologico');
  }

  get talla() {
    return this.editForm.get('talla');
  }

  get vacunacion() {
    return this.editForm.get('vacunacion');
  }

  get enfermedad() {
    return this.editForm.get('enfermedad');
  }

  get alergico() {
    return this.editForm.get('alergico');
  }

  updateStudentData() {
    this.editForm = this.fb.group({
      dateOfBirth: [''],
      parto: [''],
      peso: [''],
      talla: [''],
      perimetro: [''],
      apgar: [''],
      sanguineo: [''],
      observaciones:  [''],
      alta: [''],
      alimentacion: [''],
      pesquisa: [''],
      oea: [''],
      ojo: [''],
      suplementos: [''],
      odontologico: [''],
      traumatologico: [''],
      vacunacion: [''],
      enfermedad: [''],
      alergico: ['']
    })
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    this.crudApi.UpdatePatientBackground(this.editForm.value);       // Update student data using CRUD API
    this.toastr.success('updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['view-students']);               // Navigate to student's list page when student data is updated
  }

  goBack() {
    this.location.back();
  }

}
