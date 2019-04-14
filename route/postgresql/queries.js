const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'abcd@1234',
  port: 5432,
})



const getProduct = (request, response) => {
    pool.query('SELECT * FROM product', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const createuser =(request,response) =>{
const {username,email,password}=request.body

pool.query('INSERT INTO persons (username, email,password) VALUES ($1, $2,$3)', [username, email,password], (error, results) => {
  if (error) {
    throw error
  }
  response.status(201).send(`User added with ID: ${results.insertId}`)
})
  }

  module.exports = {
    getProduct,
    createuser
    
  }