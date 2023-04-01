import "./OrderDetailsNahradni.css";

const OrderDetailsNahradni = ({ name, qty, price }) => {
  return (
    <div className="product_nahradni">
      <div className="product__info_nahradni">
        <p className="info__nahradni__name">Name Product: {name}</p>
        <p className="info__nahradni__quantity">Quantity: {qty}</p>
        <p className="info__nahradni__price">Price per item: <b>Kč {price}</b></p>
      </div>
    </div>
  );
};

export default OrderDetailsNahradni;
