import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeeValidators } from 'src/app/validators/employee-validators';

//import { EmployeeValidators } from 'src/app/validators/employee-validators';

@Component({
  selector: 'app-ajouter-employee',
  templateUrl: './ajouter-employee.component.html',
  styleUrls: ['./ajouter-employee.component.scss']
})
export class AjouterEmployeeComponent implements OnInit {

  employee: Employee = new Employee();


  constructor(private router: Router, private employeeService: EmployeesService) { }

  ngOnInit(): void {

}

saveEmployee(){
  this.employeeService.creatEmployee(this.employee).subscribe( data => {
    console.log(data);
    this.goToEmployeeList();
  },
  error => console.log(error));
}

goToEmployeeList(){
  this.router.navigate(['employees']);
}

 onSubmit() {
  this.saveEmployee();
  console.log(this.employee);
  console.log("Handling the submit button");


}

}
