const express = require('express');
const orderrouter = express.Router();

const {
    createOrder, 
} = require('../controller/orderController');

//@desc set order
//@route GET /api/orders
orderrouter.post('/order', createOrder);


module.exports = orderrouter;