import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private   user:UserService,private router:Router) { }

  ngOnInit() {

  }

  onSubmit(event) {
    event.preventDefault();
    const errors=[]
    const target=event.target
    const username=target.querySelector('#username').value;
   
    const password=target.querySelector('#password').value;
   

    
    
      this.user.reguser(username,password).subscribe(
        data=>{console.log('sasas',data)
        if(data.success){
          this.router.navigate(['/dashboard'])
        }
        else{
          window.alert("unsuccessfull");
        }
       } );
    
 console.log(username,password)


  }

}

////

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';


interface register{
  success:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private _url:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  reguser(username,password){

   return this.http.post<register>(this._url+'/login',{username,password});
  }

 
  
}

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'temp',
  password: 'abcd@12345',
  port: 5432,
})
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// const getProduct = (request, response) => {
//   d1='2019-6-24';
//     pool.query('SELECT * FROM examd where date = $1 ',[d1], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }
///////////////////////////////////////////////////
  // const getuser = (req, res) => {
  //   const username = req.body
  //   const password = req.body
  //   console.log(username,password)
  //   pool.query('SELECT * FROM users WHERE username = ? ',[username], function (error, results) {
  //   if (error) {
  //     console.log("error ocurred",error);
  //     res.send({
  //       "code":400,
  //       "failed":"error ocurred"
  //     })
  //   }else{
  //    // console.log('The solution is: ', results);
  //     if(results.length > 0){
  //       if(results[0].password == password){
  //         res.send({
  //           "code":200,
  //           "success":"login sucessfull"
  //             });
  //       }
  //       else{
  //         res.send({
  //           "code":204,
  //           "success":"username and password does not match"
  //             });
  //       }
  //     }
  //     else{
  //       res.send({
  //         "code":204,
  //         "success":"username does not exits"
  //           });
  //     }
  //   }
  //   });
  //////////////////////////////////////////////////////////

  const getuser=(req,res)=>{
    var username= req.body.username;
  var password = req.body.password;
  
  console.log(username,password)
  pool.query('SELECT * FROM users WHERE username = ? ',[username], function (error, results) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    console.log('The solution is: ', results);
    if(results.length > 0){
      if(results[0].password == password){
        
          res.send({
            "code":200,
            "success":"login sucessfull"
          })
      
       
      }
      else{
        res.send({
             "code":204,
             "success":"username and password does not match"
        })
      }

    }
    else{
      res.send({
        "code":204,
        "success":"username does not exists"
          });
    }


  }
  });
}
  


  module.exports = {
    // getProduct,
    // getdate,

    getuser
 
  
    
  }



  //////////////
 //////

// pool.query('insert into users (username,email,passwords) values ($1,$2,$3)',[username,email,password],(error,results)=>{

//   if(error){
//     throw error
//   }
//   response.status(200).json(results.rows)
// })

  

  // const getdates = (req, response) => {
   




  //   pool.query('SELECT * FROM examd ', (error, results) => {
  //           if (error) {
  //             throw error
  //           }
  //           response.status(200).json(results.rows)
  //         })
  //    }
  
  //   const loginuser= (req, res)=> {

  //     const{username,password}=req.body
  //     console.log(username,password)
     
  //   }
     
          
        
      
      
  
