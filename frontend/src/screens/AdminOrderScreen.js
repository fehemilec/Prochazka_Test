import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";
import Order from "../components/Order";
import { getOrders as listOrders } from "../redux/actions/orderActions";


export default function AdminOrderScreen() {
    const dispatch = useDispatch();

    const getOrders = useSelector((state) => state.getOrders);
    const { orders, loading, error } = getOrders;
  
    useEffect(() => {
      dispatch(listOrders());
    }, [dispatch]);

    return(  
        <div className="homescreen">
      <h2 className="homescreen__title">Orders</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
            orders.map((order) => (
                <Order
                  key={order._id}
                  //naorderItemsme={order.orderItems}
                  //orderItems_hor={order.orderItems_hor}
                  shippingAddress={order.shippingAddress}
                  paymentMethod={order.paymentMethod}
                  //itemsPrice={order.itemsPrice}
                  //shippingPrice={order.shippingPrice}
                  //taxPrice={order.taxPrice}
                  //totalPrice={order.totalPrice}
                  user={order.user}
                  //ispaid={order.ispaid}
                />
          ))
        )}
      </div>

    </div>

    ) 
  }