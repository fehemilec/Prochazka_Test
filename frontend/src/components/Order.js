
import "./Product.css";

const Order = ({ shippingAddress, paymentMethod, user }) => {
  return (
    <div className="product">

      <div className="product__info">
        <p className="info__name">{shippingAddress}</p>

        <p className="info__description">{paymentMethod}</p>

        <p className="info__price">{user}</p>
      </div>
    </div>
  );
};

export default Order;