import * as actionTypes from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return { loading: true };
    case actionTypes.ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case actionTypes.ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.ORDER_LIST_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case actionTypes.ORDER_LIST_SUCCESS:
      return {
        orders: action.payload,
        loading: false,
      };
    case actionTypes.ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getOrderDetailsReducer = (
  state = { order: {}, loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case actionTypes.GET_ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_ORDER_DETAILS_RESET:
      return {
        order: {},
      };
    default:
      return state;
  }
};
