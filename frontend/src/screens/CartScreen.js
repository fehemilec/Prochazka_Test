import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";
import CartItemHor from "../components/CartItemHor";

// Actions
import { addToCart, removeFromCart, removeFromCart_Hor } from "../redux/actions/cartActions";


const CartScreen = () => {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { cartItems_hor } = cart;


  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const removeFromCartHandlerHor = (id) => {
    dispatch(removeFromCart_Hor(id));
  };

  const getCartCount = () => {
    console.log(cartItems.qty);
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const checkoutHandler = () => {
    navigate('/shipping');
  };

  return (
    <>
     <h2 className="shop_cart">Shopping Cart</h2>
      <div className="cartscreen">
       
        <div className="cartscreen__left">

          {cartItems.length === 0  && cartItems_hor.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/services">Go Back</Link>
            </div>
          ) : (

            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))


          )}
        </div>

        <div className="cartscreen__left_bottom">

        {(
            cartItems_hor.map((item) => (
              <CartItemHor
                key={item.product}
                item={item}
                removeHandler={removeFromCartHandlerHor}
              />
            ))


          )}

        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Kč {getCartSubTotal()}</p>
          </div>
          <div>
            <button onClick={checkoutHandler}>Proceed To Checkout</button>
          </div>
        </div>

      </div>

    </>
  );
};

export default CartScreen;