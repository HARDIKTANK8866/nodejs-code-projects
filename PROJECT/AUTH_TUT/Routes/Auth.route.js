const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/User.model");
const { authSchema } = require("../helpers/validation.schema");
const {signaAccessToken} = require('../helpers/jwt_helper')

router.post("/register", async (req, res, next) => {
  // console.log(req.body);
  // res.send("register route")

  try {
    // const { email, password } = req.body;
    // if (!email || !password) throw createError.BadRequest();
    const result = await authSchema.validateAsync(req.body);
    console.log(result); // Debugging log

    const doesExit = await User.findOne({ email: result.email });
    if (doesExit)
      throw createError.Conflict(`${result.email} is already been registered `);

    // Create a new user using the validated result
    // const user = new User({ result });
    // const saveUser = await user.save();

    // res.send(saveUser);
    const user = new User({
      email: result.email,
      password: result.password,
    });
    const savedUser = await user.save()
    const accessToken = await signaAccessToken(savedUser.id);

    // Send the saved user as the response
    res.status(201).json({accessToken});

  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  res.send("login route");
});

router.post("/refresh-token", async (req, res, next) => {
  res.send("refresh token route");
});

router.delete("/logout", async (req, res, next) => {
  res.send("logout route");
});

module.exports = router;
