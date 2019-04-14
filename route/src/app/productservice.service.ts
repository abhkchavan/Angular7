import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, ObservableLike } from 'rxjs';
import { Iproduct } from 'src/product';
import { Istudent } from 'postgresql/student';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 
 private _url:string="http://localhost:3000/product";


  constructor(private http:HttpClient) { }

  getConfig():Observable<Istudent[]> {
    return this.http.get<Istudent[]>(this._url);
  }


}
