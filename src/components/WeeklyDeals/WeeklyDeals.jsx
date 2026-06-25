import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
import "./WeeklyDeals.css";

function WeeklyDeals() {
  return (
    <section id="shop" className="weekly-deals">

      <div className="weekly-header">
        <h2>🔥 Weekly Deals</h2>
        <p>
          Save more with our exclusive weekly offers on fresh groceries.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className="view-more">
        <button>View All Products</button>
      </div>

    </section>
  );
}

export default WeeklyDeals;