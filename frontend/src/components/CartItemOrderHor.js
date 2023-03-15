import "./CartItemOrder.css";

const CartItemOrder = ({ item }) => {
  return (
    <div className="cart_Item_Order_Hor">
      <div className="cart_product_info">
        <div className="cart_lamella">Barva lamely: {item.lamella_color}</div>
        <div className="cart_profile">Barva profilu: {item.profile_color}</div>
        <div className="cart_control">Control direction: {item.control}</div>
        <div className="cart_length">Control length: {item.control_length}</div>
        <div className="cart_width">Width: {item.width}</div>
        <div className="cart_height">Height: {item.height}</div>
        <div className="provedeni">Provedeni: {item.provedeni}</div>
        <div className="cart_barva">Barva žebříčků: {item.barva}</div>
        <div className="cart_okno">Okno z materiálu: {item.okno}</div>
        <div className="cart_podlozky">Podložky: {item.podlozky}</div>
      </div>
      <div className="cartitem__price">
        {item.qty}x{item.price.toFixed(2)} = Kč{" "}
        {(item.price * item.qty).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItemOrder;
