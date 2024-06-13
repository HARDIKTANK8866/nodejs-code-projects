require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const sendEmail = require("./controllers/sendEmail");

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});
app.get("/send", sendEmail);

// Error Handling Middleware:These middleware functions handle 404 errors and other errors.
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// Server Initialization
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connectDB
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
