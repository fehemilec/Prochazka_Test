import axios from "axios";
import * as actionTypes from '../constants/orderConstants';

export const createOrder = (order) => async(dispatch, getState) =>{
    dispatch({type: ORDER_CREATE_REQUEST, payload: order });

    try {
        const {data} = await axios.post('api/orders/order', order);
        dispatch({type: ORDER_CREATE_SUCCESS, payload:data.order})
        //localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const getOrders = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ORDERS_REQUEST });
  
      const { data } = await axios.get("/api/orders");
  
      dispatch({
        type: actionTypes.GET_ORDERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ORDERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };