const jwt = require("jsonwebtoken");
const {BadRequest} = require("../errors");

// Login Function
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw new BadRequest("Please provide email and password");
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



