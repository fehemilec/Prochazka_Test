require("dotenv").config({ path: "./env" });

const express = require("express");
const cors = require("cors");

const productRoutes = require("./backend/routes/productRoutes");
const userRouter = require("./backend/routes/userRoutes");
const orderRoutes = require("./backend/routes/orderRoutes");
const isTokenValid = require("./backend/controller/orderController");
const connectDB = require("./backend/config/db");
const stripe = require("stripe")(process.env.S_KEY);

const nodemailer = require("nodemailer");
const path = require("path");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//SENDING EMAIL
app.post("/api/sendmail", (req, res) => {
  const { name, cartItems, cartItems_hor, token, tot_price, shippingAddress } =
    req.body;
  console.log("email form token " + token.email);

  //console.log("PRICE PAID MAIL", cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2));

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "fehemifemo@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "fehemifemo@gmail.com",
    to: token.email,
    subject: "New order",
    html: `<h1>Thanks for shopping with us</h1>
      <p>Hi ${name},</p>
      <p>We have finished processing your order.</p>
      
      <table>
      <thead>
      <tr>
      <td><strong>Product</strong></td>
      <td><strong>Quantity</strong></td>
      <td><strong align="right">Price</strong></td>
      </thead>
      <tbody>
      ${cartItems
        .map(
          (item) => `
        <tr>
        <td>${item.name}</td>
        <td align="center">${item.qty}</td>
        <td align="right"> Kc ${item.price.toFixed(2)}</td>
        </tr>
      `
        )
        .join("\n")}
        ${cartItems_hor
          .map(
            (item) => `
          <tr>
          <td>${item.name}</td>
          <td align="center">${item.qty}</td>
          <td align="right"> Kc ${item.price.toFixed(2)}</td>
          </tr>
        `
          )
          .join("\n")}
      </tbody>
      <tfoot>
      <tr>
      <td colspan="2">Items Price:</td>
      <td align="right"> Kc ${tot_price}</td>
      </tr>
      <tr>
      <td colspan="2">Tax Price:</td>
      <td align="right"> Kc</td>
      </tr>
      <tr>
      <td colspan="2">Shipping Price:</td>
      <td align="right"> Kc</td>
      </tr>
      <tr>
      <td colspan="2"><strong>Total Price:</strong></td>
      <td align="right"><strong> Kc ${tot_price}</strong></td>
      </tr>
      
      </table>
      `,
  };

  let mailOptions_shop = {
    from: "fehemifemo@gmail.com",
    to: "fehemifemo@gmail.com",
    subject: "New order",
    html: `<h1>New Order</h1>
      <p>You have a new order from ${name}</p>
      
      <table>
      <thead>
      <tr>
      <td><strong>Product</strong></td>
      <td><strong>Quantity</strong></td>
      <td><strong align="right">Price</strong></td>
      </thead>
      <tbody>
      ${cartItems
        .map(
          (item) => `
        <tr>
        <td>${item.name}</td>
        <td align="center">${item.qty}</td>
        <td align="right"> Kc ${item.price.toFixed(2)}</td>
        </tr>
      `
        )
        .join("\n")}
        ${cartItems_hor
          .map(
            (item) => `
          <tr>
          <td>${item.name}</td>
          <td align="center">${item.qty}</td>
          <td align="right"> Kc ${item.price.toFixed(2)}</td>
          </tr>
        `
          )
          .join("\n")}
      </tbody>
      <tfoot>
      <tr>
      <td colspan="2">Items Price:</td>
      <td align="right"> Kc ${tot_price}</td>
      </tr>
      <tr>
      <td colspan="2">Tax Price:</td>
      <td align="right"> Kc</td>
      </tr>
      <tr>
      <td colspan="2">Shipping Price:</td>
      <td align="right"> Kc</td>
      </tr>
      <tr>
      <td colspan="2"><strong>Total Price:</strong></td>
      <td align="right"><strong> Kc ${tot_price}</strong></td>
      </tr>
      
      </table>


      <table>
      <thead>
      <tr>
      <td><strong>Shipping Address</strong></td>
      </thead>
      <tfoot>
      <tr>
      <td colspan="2">Name</td>
      <td align="right"> ${shippingAddress.fullName_ship}</td>
      </tr>
      <tr>
      <td colspan="2">Street</td>
      <td align="right"> ${shippingAddress.address_ship}</td>
      </tr>
      <tr>
      <td colspan="2">City</td>
      <td align="right"> ${shippingAddress.city_ship}</td>
      </tr>
      <tr>
      <td colspan="2">Postal COde</td>
      <td align="right"> ${shippingAddress.postalCode_ship}</td>
      </tr>
      <tr>
      <td colspan="2"><strong>Country</strong></td>
      <td align="right"><strong>${shippingAddress.country_ship}</strong></td>
      </tr>
      
      </table>
      `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Mail to buyer sent");
    }
  });

  smtpTransport.sendMail(mailOptions_shop, (error, response) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Mail to seller sent");
    }
  });

  smtpTransport.close();
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRoutes);

//Pay

app.post("/payment_card", (req, res) => {
  const { token, cart, cartItems, cartItems_hor, tot_price } = req.body;
  //console.log("PRODUCT ", product);
  console.log(
    "PRICE",
    cartItems_hor
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  );
  console.log("REAL PRICE", tot_price);
  //const idempotencyKey = uuid()

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: tot_price * 100,
        currency: "czk",
        customer: customer.id,
        receipt_email: token.email,
        shipping: {
          name: cart.shippingAddress.fullName_ship,
          address: {
            country: cart.shippingAddress.country_ship,
            city: cart.shippingAddress.city_ship,
            postal_code: cart.shippingAddress.postalCode_ship,
          },
        },
      });
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//SERVE IF IN PRODUCTION

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
