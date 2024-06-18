require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const fileUpload = require('express-fileupload')


//database
const connectDB = require("./db/connect");

// product router
const productRouter = require("./routes/productRoutes");

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter </h1>");
});

app.use(express.json());
app.use(fileUpload())


app.use("/api/v1/products", productRouter);
//MIDDLEWARE
// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    // await connectDB(process.env.MONGO_URI);
    // console.log('Connected to MongoDB');

    console.log("MongoDB URI:", process.env.MONGO_URI);
   
   
    app.listen(port, () =>
      console.log(` File Upload Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();