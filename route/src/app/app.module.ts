import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { ProductComponent } from './product/product.component';
import { ProductserviceService } from './productservice.service';
import { ExcelComponent } from './excel/excel.component';

import {FormsModule} from '@angular/forms';

import { UserformComponent } from './userform/userform.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent,
    ExcelComponent,
    UserformComponent,
   
   
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    FormsModule

    
  ],
  providers: [EmployeeService,ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
