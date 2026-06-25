import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Shop.css";

function Shop() {
  return (
    <>
      <Navbar />

      <section className="shop">

        <div className="shop-header">
          <h1>Our Shop</h1>
          <p>
            Discover fresh groceries, vegetables, fruits, dairy products,
            bakery items and beverages at the best prices.
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

      </section>

      <Footer />
    </>
  );
}

export default Shop;