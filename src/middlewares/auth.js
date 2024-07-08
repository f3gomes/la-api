require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = "";
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET_KEY;

  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  try {
    if (!authorization)
      return res
        .status(401)
        .json({ message: "You must provide a token to access this route" });

    jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({ message: "Token must be a valid token" });
  }
  return next();
};

module.exports = auth;
