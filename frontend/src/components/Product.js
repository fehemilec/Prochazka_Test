import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, sku, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{sku}</p>

        <p className="info__price">Kč {price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          Vice
        </Link>
      </div>
    </div>
  );
};

export default Product;
