import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

//REDUCERS
import {cartReducer} from './reducers/cartReducer'
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducers'
import { userSigninReducer } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers';


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    userSignin: userSigninReducer,
    orderCreate: orderCreateReducer
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const cart_Hor_FromLocalStorage = localStorage.getItem("cart_hor") ? JSON.parse(localStorage.getItem("cart_hor")) : []
const addressFromLocalStorage = localStorage.getItem("billingAddress") ? JSON.parse(localStorage.getItem("billingAddress")) : {}
const shipaddressFromLocalStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}



const INITIAL_STATE = {
 
    cart: {
        cartItems: cartFromLocalStorage,
        cartItems_hor: cart_Hor_FromLocalStorage,
        billingAddress: addressFromLocalStorage,
        shippingAddress: shipaddressFromLocalStorage,
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
