import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { ControlSano } from './../shared/control-sano';   // Student interface class for Data types.
import { Student } from './../shared/student';   // Student interface class for Data types.

@Component({
  selector: 'app-add-control-sano',
  templateUrl: './add-control-sano.component.html',
  styleUrls: ['./add-control-sano.component.css']
})
export class AddControlSanoComponent implements OnInit {

  editForm: FormGroup;  // Define FormGroup to student's edit form
  idPaciente: string;
  id: string;
  controlSanoList = [];

  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.updateStudentData();
    this.idPaciente = this.actRoute.snapshot.paramMap.get('idPaciente');
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.GetStudent(this.idPaciente).valueChanges().subscribe(data => {
      if (data.controlSanoList != null) {
        this.controlSanoList = data.controlSanoList;
      } else {
        this.controlSanoList = [];
      }
    })
    if (this.id != 'null') {
      console.log(this.id);
      this.crudApi.GetControlSano(this.idPaciente, this.id).valueChanges().subscribe(data => {
        this.editForm.setValue(data)
      })
    }
  }

  get fecha() {
    return this.editForm.get('fecha');
  }

  get peso() {
    return this.editForm.get('peso');
  }

  get talla() {
    return this.editForm.get('talla');
  }

  get edad() {
    return this.editForm.get('edad');
  }

  get pc() {
    return this.editForm.get('pc');
  }

  get imc() {
    return this.editForm.get('imc');
  }

  get observaciones() {
    return this.editForm.get('observaciones');
  }

  get vacunacion() {
    return this.editForm.get('vacunacion');
  }

  updateStudentData() {
    this.editForm = this.fb.group({
      fecha: [''],
      edad: [''],
      talla: [''],
      peso: [''],
      pc: [''],
      imc: [''],
      pautas: [''],
      vacunacion: [''],
      observaciones:  ['']
    })
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    if (this.id == 'null') {
      this.controlSanoList.push(this.editForm.value);
      this.crudApi.UpdateControlSanoList(this.controlSanoList);
    } else {
      this.crudApi.UpdateControlSano(this.editForm.value);
    }
    this.toastr.success('actualizado');   // Show succes message when data is successfully submited
    this.router.navigate(['nino-sano/'+this.idPaciente]);               // Navigate to student's list page when student data is updated
  }

  goBack() {
    this.location.back();
  }
}
