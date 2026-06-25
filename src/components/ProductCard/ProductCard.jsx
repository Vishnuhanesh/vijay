import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image">

        <img src={product.image} alt={product.name} />

        <button className="wishlist-btn">
          <FaHeart />
        </button>

      </div>

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>(4.8)</span>
        </div>

        <div className="price-row">

          <h2>${product.price}</h2>

          <button className="cart-btn" onClick={() => addToCart(product)}>
            <FaShoppingCart />
            Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;