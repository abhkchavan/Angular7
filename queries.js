const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'temp',
  password: 'abcd@12345',
  port: 5432,
})



const getProduct = (request, response) => {
    pool.query('SELECT * FROM student', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getdate = (request, response) => {

  const {from,to}=request.body
    
    console.log(from,to)


    pool.query('SELECT * FROM examd where date BETWEEN $1 AND $2',[from,to], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getProduct,
    getdate
    
  }