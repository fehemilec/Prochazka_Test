import "./Product.css";

const OrderDetailsNahradni = ({ name, qty, price}) => {
  return (
    <div className="product">

      <div className="product__info_narhradni">
        <p className="info__name">Name Product: {name}</p>
        <p className="info__quantity">Quantity: {qty}</p>
        <p className="info__price">Kč {price}</p>
      </div>
    </div>
  );
};

export default OrderDetailsNahradni;