import "./Product.css";
import { Link } from "react-router-dom";

const OrderDetailsHor = ({ name, amount, price, width, height, control, control_length, lamella_color, profile_color}) => {
  return (
    <div className="product">

      <div className="product__info">
        <p className="info__name">Name Product: {name}</p>
        <p className="info__description">Pieces Ordered: {amount}</p>
        <p className="info__price">Kč {price}</p>
        <p className="info__widht">Width: {width}</p>
        <p className="info__height">Height: {height}</p>
        <p className="info__control">Control Type: {control}</p>
        <p className="info__control_length">Control Length: {control_length}</p>
        <p className="info__lamella_color">Lamella Color: {lamella_color}</p>
        <p className="info__profile_color">Profile Color: {profile_color}</p>

        <Link to={`/product/${name}`} className="info__button">
          Vice
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsHor;