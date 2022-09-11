const express = require('express');
const orderrouter = express.Router();

const {
    setOrder, 
} = require('../controller/orderController');

//@desc set order
//@route GET /api/orders
orderrouter.post('/order', setOrder);


module.exports = orderrouter;