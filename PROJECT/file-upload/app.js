require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()


const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/',(req,res)=>{
    res.send('<h1>File Upload Starter </h1>')
})

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;
 
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(` File Upload Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();