import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IEmpolyee} from './employee';

import { Observable, ObservableLike } from 'rxjs';
import { user } from 'src/class/user';
import { UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="http://localhost:3000/formdata";
  
  constructor(private http:HttpClient) { }
 
 
 


getform(user :user)
{
return  this.http.post(this._url,user);
}


}
