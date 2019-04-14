import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public emp=[];
public errMsg;
  employees: any;
  constructor(private empservice:EmployeeService) { }

                                                                                          
  ngOnInit() {
  
  }
                                                                                   

}
