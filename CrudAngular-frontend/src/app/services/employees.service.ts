import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Employee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private baseURL = environment.employeeApiUrl + '/employees';
  private countURL = environment.employeeApiUrl + '/number';
  private createURL = environment.employeeApiUrl  + '/create_employee';
  private getByIdURL = environment.employeeApiUrl  + '/getById_employee';
  private updateURL = environment.employeeApiUrl  + '/update_employee';
  private deleteURL = environment.employeeApiUrl  + '/delete_employee';

  constructor(private httpClient: HttpClient) { }

  // get all employees
 /* getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }*/

  getEmployeesList() {

    // need to build URL based on category "id"

        return this.httpClient.get(this.baseURL);
      }


      countemployees() {

        // need to build URL based on category "id"

            return this.httpClient.get(this.countURL);
          }


  // create employee rest api
  creatEmployee(employee: Employee){
    return this.httpClient.post(`${this.createURL}`, employee);
  }


   // get employee by id rest api
   getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.getByIdURL}/${id}`);
  }

  // create employee rest api
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, employee);
  }

  // delete employee rest api
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }



  /********************** */


}
interface GetResponseProducts {
  _embedded: {
  employees: Employee[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

/*
  // get all employees
  getEmployeesList(): Observable<Employee[]> {
     return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  // create employee rest api
  creatEmployee(employee: Employee): Observable<object> {
    return this.httpClient.post(`${this.baseURL}/add_employee`, employee);
 }

 // get employee by id rest api
 getEmployeesById(id: number): Observable<Employee> {
  return this.httpClient.get<Employee>(`${this.baseURL}/employee/${id}`);
}

  // update employee rest api
  updateEmployee(id: number, employee: Employee): Observable<object> {
    return this.httpClient.put(`${this.baseURL}/update_employee/${id}`, employee);
 }

}
*/


