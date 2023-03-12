const express = require('express');
const orderrouter = express.Router();

const {
    isTokenValid,
    createOrder, 
    getAllOrders,
    getOrderById,
} = require('../controller/orderController');
const { isAuth } = require("../utils");

//@desc set order
//@route GET /api/orders
orderrouter.post('/order', createOrder);
orderrouter.get('/order/:id', isAuth, getOrderById);
orderrouter.get('/', isAuth, getAllOrders);
orderrouter.get('/token', isTokenValid);


module.exports = orderrouter;