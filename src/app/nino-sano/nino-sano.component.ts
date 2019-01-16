import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';  // CRUD API service class
import { ControlSano } from './../shared/control-sano';   // Student interface class for Data types.
import { Student } from './../shared/student';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component

@Component({
  selector: 'app-nino-sano',
  templateUrl: './nino-sano.component.html',
  styleUrls: ['./nino-sano.component.css']
})
export class NinoSanoComponent implements OnInit {

  p: number = 1;                      // Fix for AOT compilation error for NGX pagination
  ControlSano: ControlSano[];         // Save students data in Student's array.
  hideWhenNoStudent: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  id: string;
  Student: {};

  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService, // Toastr service for alert message
    private actRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dataState(); // Initialize student's list, when component is ready
    this.crudApi.GetStudent(this.id).valueChanges().subscribe(data => {
      this.Student = data;
    })
    console.log(this.Student)
    let s = this.crudApi.GetControlSanoList(this.id);
    s.snapshotChanges().subscribe(data => {
      this.ControlSano = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.ControlSano.push(a as ControlSano);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.GetControlSanoList(this.id).valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  deleteControlSano(patientId, controlSano) {
    if (window.confirm('Esta seguro que desea eliminar el control ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeleteControlSano(patientId, controlSano.$key) // Using Delete student API to delete student.
      this.toastr.success('Control eliminado!'); // Alert message will show up when student successfully deleted.
    }
  }

  // Go back to previous component
  goBack() {
    this.router.navigate(['view-students']);
  }

}
