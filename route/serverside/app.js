const pgp = require('pg-promise')(/*options*/);
const express= require('express');
var app=express();
const bodyparser=require('body-parser');


app.use(bodyparser.json());


var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'temp',
    user: 'postgres',
    password: 'abcd@12345'
};
// alternative:
// var cn = 'postgres://username:password@host:port/database';



var db = pgp(cn); // database instance;

// select and return user name from id:

	
	
	app.listen(5000,()=>console.log('express server is running  at port : 5000'));
	
	/*app.get('/product',(res,req)=>
	{
		db.query('SELECT * FROM product ')
    .then(user => {
        console.log(user); // print user name;
    })
    .catch(error => {
        console.log(error); // print the error

        
    });
    });*/

    const getProduct = (request, response) => {
        db.query('SELECT * FROM product', (error, results) => {
          if (error) {
            throw error
          }
          
          console.log(results);
        })
      }

      app.get('/users', getProduct)
           

       
    
	