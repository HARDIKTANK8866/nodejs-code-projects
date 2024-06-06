const express = require("express");
const app = express();

// const route= express.Router();
// route.use(reqFilter)
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can access this page ");
  } else {
    next();
  }
};

app.use(reqFilter);         //ROUTE LEVEL MIDDLEWARE

app.get("/", (req, res) => {
  res.send("welcome to Home page");
});

app.get("/users", (req, res) => {
  res.send("welcome to users page");
});
route.get('/contact', (res, resp) => {              //SINGLE ROUTE MIDDLEWARE
    resp.send('Welcome to contact page')
});

app.use('/',route);

app.listen(2000);
