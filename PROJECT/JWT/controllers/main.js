// const jwt = require("jsonwebtoken");
// const CustomAPIError = require("../errors/custom-error");

// const login = async (req, res, next) => {
//   const { username, password } = req.body;

//   try {
//     if (!username || !password) {
//       throw new CustomAPIError("Please provide email and password", 400);
//     }

//     console.log("Username and password received:", username, password); // Debugging

//     const id = new Date().getDate();
//     console.log("JWT Secret:", process.env.JWT_SECRET); // Debugging

//     const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
//       expiresIn: "30d",
//     });

//     console.log("Generated Token:", token); // Debugging
//     console.log(req.headers); // Debugging
//     const dashboard = async (req, res) => {;
//     const authHeader = req.headers.authorization;
    
//     if (!authHeader || !authHeader.startWith("Bearer ")) {
//       throw new CustomAPIError("No token Provide", 400);
//     }

//     const Token = authHeader.split("")[1];
//     console.log(token); //Debugging
//     try {
//       const decoded = jwt.verify(Token, process.env.JWT_SECRET);
//       console.log(decoded);
//       const luckyNumber = Math.floor(Math.random() * 100);
//       res.status(200).json({
//         msg: `Hello, ${req.user.username}`,
//         secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
//       });
      
//     } catch (error) {
//       throw new CustomAPIError("Not authorized  to access  this route", 401);
//     }
  

//     res.status(200).json({ msg: "user created", token });
//   } catch (error) {
//     console.error("Error in login:", error); // Debugging
//     next(error);
//   }
// };


// module.exports = {
//   login,
//   dashboard,
// };
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

// Login Function
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new CustomAPIError("Please provide email and password", 400);
    }

    console.log("Username and password received:", username, password); // Debugging

    const id = new Date().getDate();
    console.log("JWT Secret:", process.env.JWT_SECRET); // Debugging

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    console.log("Generated Token:", token); // Debugging

    res.status(200).json({ msg: "user created", token });
  } catch (error) {
    console.error("Error in login:", error); // Debugging
    next(error);
  }
};

// Dashboard Function
const dashboard = async (req, res, next) => {
  console.log(req.user);
  
  const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });

  
};

module.exports = {
  login,
  dashboard,
};
