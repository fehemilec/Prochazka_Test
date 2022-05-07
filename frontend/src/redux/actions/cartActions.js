import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const addToCart_hor = (
  hor, ver, idCounter, price, control_dir, control_len, lamellaColor, profileColor, qty) => async (dispatch, getState) => {

  dispatch({
    type: actionTypes.ADD_TO_CART_HOR,
    payload: {
      product: idCounter,
      width: hor, //syrka
      height: ver, //vyska
      price: price,
      control: control_dir,
      control_length: control_len,
      lamella_color: lamellaColor, //barva lamely
      profile_color: profileColor , //barva profilu
     //design: ,
     //color: ,
     //material window: ,
     //washers: ,
     qty,
    },
  });

  localStorage.setItem("cart_hor", JSON.stringify(getState().cart.cartItems_hor));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart_Hor = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART_HOR,
    payload: id,
  });

  localStorage.setItem("cart_hor", JSON.stringify(getState().cart.cartItems_hor));
};

export const emptyCart = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_EMPTY
  });

  localStorage.removeItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const saveBillingAddress = (data) => (dispatch) => {
  dispatch({type: actionTypes.CART_SAVE_BILLING_ADDRESS, payload: data});
  localStorage.setItem('billingAddress', JSON.stringify(data));
}
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({type: actionTypes.CART_SAVE_SHIPPING_ADDRESS, payload: data});
  localStorage.setItem('shippingAddress', JSON.stringify(data));
}
