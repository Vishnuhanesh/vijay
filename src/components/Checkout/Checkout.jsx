import { useCart } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, totalPrice, totalItems, clearCart } = useCart();

  return (
    <section id="checkout" className="checkout">
      <div className="checkout-header">
        <h2>Order Summary</h2>
        <p>{totalItems} item(s) in your cart</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="checkout-list">
          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="checkout-item-info">
                <h3>{item.name}</h3>
                <p>Qty: {item.quantity}</p>
                <p>${item.price} each</p>
              </div>
              <div className="checkout-item-total">
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>
            <strong>${totalPrice}</strong>
          </div>

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}

export default Checkout;
