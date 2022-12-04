const express = require('express');
const orderrouter = express.Router();

const {
    createOrder, 
    getAllOrders,
    getOrderById,
} = require('../controller/orderController');
const { isAuth } = require("../utils");

//@desc set order
//@route GET /api/orders
orderrouter.post('/order', createOrder);
orderrouter.get('/order/:id', getOrderById);
orderrouter.get('/', isAuth, getAllOrders);


module.exports = orderrouter;