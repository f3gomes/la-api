const { User } = require("../db/models");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
require("dotenv").config();

const token = (email, password) => {
  const jwtConfig = {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRES_IN,
  };

  const secret = process.env.JWT_SECRET_KEY;

  return jwt.sign({ email, password }, secret, jwtConfig);
};

const signIn = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password: md5(password) },
    attributes: { exclude: ["password"] },
  });

  if (!user) throw new Error("Email or passowrd incorrects!");
  user.token = token(email, password);

  return user;
};

const signUp = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (user) throw new Error("There is already an account with that email!");

  const newUser = await User.create({
    email,
    password: md5(password),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return newUser;
};

module.exports = {
  signIn,
  signUp,
  token,
};
