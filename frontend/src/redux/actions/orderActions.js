import axios from "axios";
import * as actionTypes from '../constants/orderConstants';

export const createOrder = (order) => async(dispatch, getState) =>{
    dispatch({type: actionTypes.ORDER_CREATE_REQUEST, payload: order });

    try {
        const {data} = await axios.post('api/orders/order', order);
        dispatch({type: actionTypes.ORDER_CREATE_SUCCESS, payload:data.order})
        //localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const getOrders = () => async (dispatch, getState) => {

  dispatch({ type: actionTypes.ORDER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
      const { data } = await axios.get("/api/orders", {
        headers:{
          Authorization: `Bearer ${userInfo.token}`,
        }
      });
      dispatch({
        type: actionTypes.ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ORDER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getOrderDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_ORDER_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/orders/order/${id}`);
  
      dispatch({
        type: actionTypes.GET_ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ORDER_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };