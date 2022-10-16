const express = require('express');
const orderrouter = express.Router();

const {
    createOrder, 
    getAllOrders
} = require('../controller/orderController');

//@desc set order
//@route GET /api/orders
orderrouter.post('/order', createOrder);
orderrouter.get('/', getAllOrders);


module.exports = orderrouter;