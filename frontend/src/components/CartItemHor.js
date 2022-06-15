import "./CartItemHor.css";
import { Link } from "react-router-dom";

const CartItemHor = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem_hor">
      <div className="cartItem_col">
           
      <div className="cartitem_hor_lamely">Barva lamely: {item.lamella_color}</div>
      <div className="cartitem_hor_profilu">Barva profilu: {item.profile_color}</div>
      <div className="cartitem_hor_dir">Control dir: {item.control}</div>
      

      
      <div className= "width"> width: {item.width}</div>
      <div className= "height"> height: {item.height}</div>
      <div className="cartitem_hor_length">Control length: {item.control_length}</div>      
      
      </div>
      <div className="cartitem_hor_price">Kč {item.price}</div>



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