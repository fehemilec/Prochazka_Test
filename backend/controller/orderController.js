const Order = require("../models/Order");
var jwt = require('jsonwebtoken');


const isTokenValid = (req, res) =>{
  const authorization = req.headers.authorization;
  if(authorization){
      const token = authorization.slice(7, authorization.length);
      jwt.verify(
          token,
          process.env.JWT_SECRET,
          (err, decode)=>{
              if(err){
                  res.status(401).send({message:'Invalid Token'});
              }else{
                console.log("DECODE token, ", decode);
                res.status(200).send({message:'Valid Token'});
              }
          }
      )
  }
}


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


const getOrderById = async (req, res) => {

  try {
    const order = await Order.findById(req.params.id);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


const createOrder = async (req, res) => {
        if(req.body.cartItems.length === 0 && req.body.cartItems_hor.length === 0){
          res.status(400).send({message: 'Cart is empty'})
        }else if(req.body.cartItems.length === 0){
            const order = new Order({
                orderItems_hor: req.body.cartItems_hor,
                shippingAddress: req.body.shippingAddress,
                paymentMethod: 'card',
                itemsPrice: 55,
                shippingPrice: 25,
                taxPrice: 444,
                totalPrice: 344,
                user: req.body.billingAddress.fullName,

            })
            const createdOrder = await order.save()
            res.status(201).send({message: 'New order created', order: createdOrder})
        }else if(req.body.cartItems_hor.length === 0){
          const order = new Order({
            orderItems: req.body.cartItems, //this info is coming from cart
            shippingAddress: req.body.shippingAddress,
            paymentMethod: 'card',
            itemsPrice: 55,
            shippingPrice: 25,
            taxPrice: 444,
            totalPrice: 344,
            user: req.body.billingAddress.fullName,

        })
        const createdOrder = await order.save()
        res.status(201).send({message: 'New order created', order: createdOrder})
        }
    
    };


module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    isTokenValid,
};