const express = require("express");
const userrouter = express.Router();

const { getUsers } = require("../controller/userController");

//@desc GET all products from DB
//@route GET /api/users
userrouter.post("/signin", getUsers);

module.exports = userrouter;
