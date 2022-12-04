import React, { useState, useEffect } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import CartItemOrder from "../components/CartItemOrder";
import CartItemOrderHor from "../components/CartItemOrderHor";
import "./PlaceOrderScreen.css";
import StripeCheckout from 'react-stripe-checkout'
import { Link, useNavigate } from 'react-router-dom';
import './PlaceOrderScreen.css'
import { createOrder } from '../redux/actions/orderActions';
import axios from "axios";

export default function PlaceOrderScreen() {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = cart;
  const { cartItems_hor } = cart;

  const name = cart.billingAddress.fullName;

  const [ema, setEma] = useState({
    name: "fehmi",
    lastname: "leci",
    email: "femo@live.it",
  });
  const [final_price, setFinalPrice] = useState(0);

  useEffect(()=> {
    let reviewPromises = [];
    cartItems.map((item) => (
      
      reviewPromises.push(
        fetch(`http://localhost:5000/api/products/${item.product}`)
        .then(response => response.json())
        .then(data => { return {title: item.product, price: (data.price)*item.qty}}))
      

    ))
       // console.log("DD, ", reviewPromises)

       Promise.all(reviewPromises).then((results) => {
        let total = results.reduce(function (previousValue, currentValue) {
          return previousValue + currentValue.price;
        }, 0);
      
        console.log("Results: ", results);
        console.log("Total:", total);
        setFinalPrice(total);
      });
       
  }, []);


  const placeOrderHandler = () => {
    dispatch(createOrder(cart))
  }


  async function totalPrice(id, qty) {

    return await fetch(`http://localhost:5000/api/products/${id}`)
    
        .then((response) => { 
          return response.json().then((data) => {
              return data;
          }).catch((err) => {
              console.log(err);
          }) 
      });

    //console.log("This price", (data.price)*qty));
  }


  const getCartCount = () => {
    return (cartItems.reduce((qty, item) => Number(item.qty) + qty, 0) + cartItems_hor.reduce((qty, item) => Number(item.qty) + qty, 0));
  };


  const makePayment = token => {


    const body_1 = {

      name, cartItems, cartItems_hor, token, final_price
    }

    const body = {

      token, cart, cartItems, cartItems_hor, final_price
    }

    const headers = {
      "Content-Type": "application/json"
    }



    return fetch('http://localhost:5000/payment_card', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("Response ", response)
      const { status } = response;

      if (status === 200) {

        placeOrderHandler()
        navigate('/confirmation');
        console.log("You paid fucker, Status ", status)
        console.log("Token ", token.id)
        console.log("Token mail", token.email)

        return fetch('http://localhost:5000/api/sendmail', {

          method: "POST",
          headers,
          body: JSON.stringify(body_1)
        }).then(response => {

          console.log("email response", response)
          const { status } = response;
          console.log("email response code ", status)

          console.log(token.email)
        }).catch(error => console.log(error))


      }

    })
      .catch(error => console.log(error))

  }


  return (

    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <div className="placeOrderScreen">
        <div className="placeOrderScreen__left">
          <div className="row top">
            <div className="col-2">
              <ul>
                <div className="ship_info">
                  <h2>Billing Address</h2>
                  <p>
                    <span className="fullname"><strong>Name: </strong>{cart.billingAddress.fullName}</span><br />
                    <span className="address"><strong>Address: </strong>{cart.billingAddress.address},&nbsp;
                      {cart.billingAddress.city},&nbsp;{cart.billingAddress.postalCode},&nbsp;
                      {cart.billingAddress.country}</span>
                  </p>
                </div>

                <div className="ship_info">
                  <h2>Shipping Address</h2>
                  <p>
                    <span className="fullname"><strong>Name: </strong>{cart.shippingAddress.fullName_ship}</span><br />
                    <span className="address"><strong>Address: </strong>{cart.shippingAddress.address_ship},&nbsp;
                      {cart.shippingAddress.city_ship},&nbsp;{cart.shippingAddress.postalCode_ship},&nbsp;
                      {cart.shippingAddress.country_ship}</span>
                  </p>
                </div>

                <div className="card card-body">
                  <h2>Order Items</h2>
                  {cartItems.map((item) => (
                    <CartItemOrder
                      key={item.product}
                      item={item}
                    />
                  ))}
                </div>

                <div className="placeOrderScreen__left_bottom">

                  {(
                    cartItems_hor.map((item) => (
                      <CartItemOrderHor
                        key={item.product}
                        item={item}
                      />
                    ))


                  )}

                </div>

              </ul>
              <div className="col-1">

              </div>
            </div>
          </div>
        </div>

        <div className="placeOrderScreen_right">
          <div className="placeOrderScreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Kč {(final_price).toFixed(2)}</p>
          </div>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51KG4qlEJlYE6AglXN3kXqFDvEPL5B9PZDxeZX6JmgsXYzHtxI8olvw9rZhbVqwvWD4CUsJLn79CaH14mwenxsqSe00cd34mY1y"
              token={makePayment}
              name="Purchase Order"
              amount={final_price * 100}
            >
              <button className="btn-large blue">Pay now with Card</button>
            </StripeCheckout>
          </div>
        </div>
      </div>


    </div>
  )
}