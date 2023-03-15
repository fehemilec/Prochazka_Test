import "./Product.css";
import { Link } from "react-router-dom";

const Order = ({ totalPrice, shippingPrice, paymentMethod, user, orderId }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="info__name">{totalPrice}</p>
        <p className="info__name">{shippingPrice}</p>

        <p className="info__description">{paymentMethod}</p>

        <p className="info__price">{user}</p>

        <Link to={`/orders/order/${orderId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Order;
