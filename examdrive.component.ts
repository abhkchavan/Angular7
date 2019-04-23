import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { FormControl } from '@angular/forms';
import { dates } from '../dates';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-examdrive',
  templateUrl: './examdrive.component.html',
  styleUrls: ['./examdrive.component.css']
})
export class ExamdriveComponent implements OnInit {
  
  dateModel=new dates('','');
public drive=[];

  constructor(private formservice:ExamService) {

    
    
  
   }

  ngOnInit() {
  
    
  }

  onSubmit(){
   
    this.formservice.senddate(this.dateModel).subscribe(data => this.drive=data);
 

  }

  
}
