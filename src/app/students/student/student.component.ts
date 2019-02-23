import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService) { }

  departments = [
    { id:1, value: 'Dep 1'},
    { id:2, value: 'Dep 2'},
    { id:3, value: 'Dep 3'}];

  ngOnInit() {
  }


  onClear(){
    this.service.form.reset();
    this.service.initialFormGroup();
  }
}
