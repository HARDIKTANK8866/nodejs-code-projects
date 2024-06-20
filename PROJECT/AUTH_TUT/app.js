const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require('./helpers/init_mongodb')

const AuthRoute = require('./Routes/Auth.route')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// Route for the root path
app.get("/", async (req, res, next) => {
  console.log("Root path accessed"); // Debugging log
  res.send("Hello from express.");
});

app.use('/auth',AuthRoute)

//Error Handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
