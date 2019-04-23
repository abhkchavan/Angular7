const express = require('express')
const db = require('./queries')
var cors = require('cors')

const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)



app.use((request,respose,next)=>{
respose.header("Acess-Control-Allow-Origin","*");
respose.header("Acess-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
next();
})



app.listen(port,()=>{
    console.log("port running on 3000");
})

app.get('/',(request,response)=>{
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/product', db.getProduct)
app.post('/senddate', db.getdate)
app.get('/send', db.getdate)