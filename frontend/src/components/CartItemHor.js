import "./CartItemHor.css";
import { Link } from "react-router-dom";

const CartItemHor = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem_hor">
      <p>width: {item.width}</p>
      <p>height: {item.height}</p>

      <p className="cartitem_hor__price">Kč {item.price}</p>
      <p className="cartitem_hor__price">Control length: {item.control_length}</p>
      <p className="cartitem_hor__price">Control dir: {item.control}</p>
      <p className="cartitem_hor__price">Barva lamely: {item.lamella_color}</p>
      <p className="cartitem_hor__price">Barva profilu: {item.profile_color}</p>



      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem_hor__select"
      >
        {[...Array(1000).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartItem_hor__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItemHor;