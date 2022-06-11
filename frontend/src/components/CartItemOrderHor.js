import "./CartItemOrder.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CartItemOrder = ({ item }) => {


  return (
    <div className="cartitem1">
        <p className="name">width: {item.width}</p>
        <p className="name1">height: {item.height}</p>
        <p className="name2">control: {item.control}</p>
        <p className="name3">control lenght: {item.control_length}</p>
        <p className="name4">lamella color: {item.lamella_color}</p>
        <p className="name5">profile color: {item.profile_color}</p>

      <p className="cartitem__price">{item.qty}x{item.price} = Kč {item.qty * item.price}</p>
    </div>
  );
};

export default CartItemOrder;