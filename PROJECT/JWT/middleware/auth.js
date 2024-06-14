const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 400);
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
    throw new CustomAPIError("Not authorized to access this route", 401);
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
