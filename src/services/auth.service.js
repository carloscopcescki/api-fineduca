import jwt from "jsonwebtoken";
import user from "../models/user.js";

const loginService = (email) =>
  user.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, {
    expiresIn: 86400,
  });

export { loginService, generateToken };
