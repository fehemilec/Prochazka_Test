import "./CartItemHor.css";

const CartItemHor = ({ item, qtyChangeHandlerHor, removeHandler }) => {
  return (
    <div className="cartitem_hor">
      <div className="cartItem_col">
        <div className="cartitem_hor_lamely">
          Barva lamely: {item.lamella_color}
        </div>
        <div className="cartitem_hor_profilu">
          Barva profilu: {item.profile_color}
        </div>
        <div className="cartitem_hor_dir">
          Control direction: {item.control}
        </div>
        <div className="cartitem_hor_length">
          Control length: {item.control_length} mm
        </div>
        <div className="width"> Width: {item.width} mm</div>
        <div className="height"> Height: {item.height} mm</div>
        <div className="provedeni">Provedeni: {item.provedeni}</div>
        <div className="barva">Barva žebříčků: {item.barva}</div>
        <div className="okno">Okno z materiálu: {item.okno}</div>
        <div className="podlozky">Podložky: {item.podlozky}</div>
      </div>
      <div className="cartitem_hor_price">Kč {item.price.toFixed(2)}</div>

      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandlerHor(item.product, e.target.value)}
        className="cartItem_hor__select"
      >
        {[...Array(1000).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartItem_hor__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItemHor;
