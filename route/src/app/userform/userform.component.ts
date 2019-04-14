import { Component, OnInit } from '@angular/core';
import { user } from 'src/class/user';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private formsevice:EmployeeService) { }



  usermodel =new user('','','');

  ngOnInit() {
  }
  onSubmit(){
  
    this.formsevice.getform(this.usermodel).subscribe(
      data => console.log('successfully posted',data),
      error => console.error('error!',error))

      alert("submited data successfully");
    
  }

}
