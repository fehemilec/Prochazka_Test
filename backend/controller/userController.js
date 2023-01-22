const User = require("../models/User");
var bcrypt = require('bcryptjs');
const { generateToken } = require("../utils");
//require('dotenv').config();


const getUsers = async (req, res) => {
    try {
      console.log("USER: ",  req.body.email)
      //console.log("VAR:", process.env.REACT_APP_PROD_URL)
        const user = await User.findOne({email: req.body.email});
        if(user){
          if(bcrypt.compareSync(req.body.password, user.password)){
              res.json({
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  isAdmin: user.isAdmin,
                  token: generateToken(user),
              });
              return;
          }else{
            res.status(401).json({ message: "No user found" });
          }
        }
      } catch (error) {
        res.status(401).json({ message: "Invalid user email or password" });
      }
    };


module.exports = {
    getUsers,
};