import "./OrderDetailsHor.css";

const OrderDetailsHor = ({
  name,
  amount,
  price,
  width,
  height,
  control,
  control_length,
  lamella_color,
  profile_color,
}) => {
  return (
    <div className="product__hor">
      <div className="product__info_hor">
        <p className="info__name__hor">Name Product: {name}</p>
        <p className="info__description__hor">Pieces Ordered: {amount}</p>
        <p className="info__price__hor">
          Price per piece: Kč {price.toFixed()}
        </p>
        <p className="info__width__hor">Width: {width}</p>
        <p className="info__height__hor">Height: {height}</p>
        <p className="info__control__hor">Control Type: {control}</p>
        <p className="info__control_length__hor">
          Control Length: {control_length}
        </p>
        <p className="info__lamella_color__hor">
          Lamella Color: {lamella_color}
        </p>
        <p className="info__profile_color__hor">
          Profile Color: {profile_color}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailsHor;
