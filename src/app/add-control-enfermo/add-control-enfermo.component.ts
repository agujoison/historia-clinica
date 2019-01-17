import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { ControlEnfermo } from './../shared/control-enfermo';   // Student interface class for Data types.
import { Student } from './../shared/student';   // Student interface class for Data types.

@Component({
  selector: 'app-add-control-enfermo',
  templateUrl: './add-control-enfermo.component.html',
  styleUrls: ['./add-control-enfermo.component.css']
})
export class AddControlEnfermoComponent implements OnInit {

  editForm: FormGroup;  // Define FormGroup to student's edit form
  idPaciente: string;
  id: string;
  controlEnfermoList = [];

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
      if (data.controlEnfermoList != null) {
        this.controlEnfermoList = data.controlEnfermoList;
      } else {
        this.controlEnfermoList = [];
      }
    })
    if (this.id != 'null') {
      console.log(this.id);
      this.crudApi.GetControlEnfermo(this.idPaciente, this.id).valueChanges().subscribe(data => {
        this.editForm.setValue(data)
      })
    }
  }

  get fecha() {
    return this.editForm.get('fecha');
  }

  get motivo() {
    return this.editForm.get('motivo');
  }

  get antecedentesEnfermedad() {
    return this.editForm.get('antecedentesEnfermedad');
  }

  get examenFisico() {
    return this.editForm.get('examenFisico');
  }

  get diagnostico() {
    return this.editForm.get('diagnostico');
  }

  get conducta() {
    return this.editForm.get('conducta');
  }

  get tratamiento() {
    return this.editForm.get('tratamiento');
  }


  updateStudentData() {
    this.editForm = this.fb.group({
      fecha: [''],
      motivo: [''],
      antecedentesEnfermedad: [''],
      examenFisico: [''],
      diagnostico: [''],
      conducta: [''],
      tratamiento: ['']
    })
  }

  // Below methods fire when somebody click on submit button
  updateForm(){
    if (this.id == 'null') {
      this.controlEnfermoList.push(this.editForm.value);
      this.crudApi.UpdateControlEnfermoList(this.controlEnfermoList);
    } else {
      this.crudApi.UpdateControlEnfermo(this.editForm.value);
    }
    this.toastr.success('actualizado');   // Show succes message when data is successfully submited
    this.router.navigate(['nino-enfermo/'+this.idPaciente]);               // Navigate to student's list page when student data is updated
  }

  goBack() {
    this.location.back();
  }
}
