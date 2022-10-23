
import "./Product.css";

const Order = ({ totalPrice, shippingPrice, paymentMethod, user }) => {
  return (
    <div className="product">

      <div className="product__info">
      <p className="info__name">{totalPrice}</p>
        <p className="info__name">{shippingPrice}</p>

        <p className="info__description">{paymentMethod}</p>

        <p className="info__price">{user}</p>
      </div>
    </div>
  );
};

export default Order;