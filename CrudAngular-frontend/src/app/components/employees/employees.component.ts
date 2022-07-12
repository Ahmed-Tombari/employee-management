import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  id:any;

constructor(private employessService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();


  }


  private getEmployees(){
    this.employessService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  getEmployeeById(id: number){
    this.router.navigate(['employee_details', id]);

  }

  updateEmployee(id: number){
   this.router.navigate(['update_employee', id]);
  }

  deleteEmployee(id: number){
    this.employessService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
