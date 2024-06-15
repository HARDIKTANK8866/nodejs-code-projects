const jwt = require("jsonwebtoken");
const {UnauthenticatedError} = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];
  console.log("Received Token:", token); // Debugging
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Debugging
    const {id,username} = decoded
    req.user={id,username}
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Debugging
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};
module.exports = authenticationMiddleware;

// const authenticateUser = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     throw new CustomAPIError('No token provided', 401);
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     throw new CustomAPIError('Not authorized to access this route', 401);
//   }
// };

// module.exports = authenticateUser;
