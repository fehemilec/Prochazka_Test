const Order = require("../models/Order");

const setOrder = async (req, res) => {
        if(req.body.orderItems.length === 0){
          res.status(400).send({message: 'Cart is empty'})
        }else{
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                paymentMethod: "vv",
                itemsPrice: 55,
                shippingPrice: 25,
                taxPrice: 444,
                totalPrice: 344,
                user: "kurdo",

            })
            const createdOrder = await order.save()
            res.status(201).send({message: 'New order created', order: createdOrder})
        }
    
    };


module.exports = {
    setOrder,
};