import "./CartItemOrder.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CartItemOrder = ({ item }) => {


  return (
    <div className="cart_Item_Order_Hor">
      <div className="cart_product_info">
        <div className="cart_lamella">lamella color: {item.lamella_color}</div>
        <div className="cart_profile">profile color: {item.profile_color}</div>
        <div className="cart_length">control length: {item.control_length}</div>
        <div className="cart_control">control: {item.control}</div>
        <div className="cart_width">width: {item.width}</div>
        <div className="cart_height">height: {item.height}</div>
      </div>
      <div className="cartitem__price">{item.qty}x{item.price} = Kč {(item.price*item.qty).toFixed(2)}</div>
    </div>
  );
};

export default CartItemOrder;