import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from 'react-router-dom';
import "./HomeScreen.css";
import Order from "../components/Order";
import { getOrders as listOrders } from "../redux/actions/orderActions";


export default function AdminOrderScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getOrders = useSelector((state) => state.getOrders);
    const { orders, loading, error } = getOrders;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
  
    useEffect(() => {
      if(userInfo){
        dispatch(listOrders());
      }else{navigate('/admin/login')}
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
                  orderId={order._id}
                  totalPrice={order.totalPrice}
                  shippingPrice={order.shippingPrice}
                  //naorderItemsme={order.orderItems}
                  //orderItems_hor={order.orderItems_hor}
                  //shippingAddress={order.shippingPrice}
                  paymentMethod={order.paymentMethod}
                  //itemsPrice={order.itemsPrice}
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