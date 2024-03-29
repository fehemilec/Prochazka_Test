const User = require("../models/User");
var bcrypt = require("bcryptjs");
const { generateToken } = require("../utils");

const getUsers = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      } else {
        res.status(401).json({ message: "No user found" });
      }
    }
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getUsers,
};
