require("dotenv").config({ path: "./config.env" });

const data = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/User");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data.products);

    await User.deleteMany({});
    await User.insertMany(data.users);
    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import:", error);
    process.exit(1);
  }
};

importData();
