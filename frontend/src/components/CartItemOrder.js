import "./CartItemOrder.css";

const CartItemOrder = ({ item }) => {
  return (
    <div className="cartitem1">
      <div className="cartitem__image1">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <p className="name">{item.name}</p>
      <p className="cartitem__price">
        {item.qty}x{item.price} = Kč {Number(item.qty * item.price).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItemOrder;
