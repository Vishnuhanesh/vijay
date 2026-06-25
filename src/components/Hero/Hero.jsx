import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="offer-tag">
          🌿 100% Fresh & Organic
        </span>

        <h1>
          Fresh Groceries
          <br />
          Delivered to
          <br />
          Your Doorstep
        </h1>

        <p>
          Shop fresh vegetables, fruits, bakery items,
          dairy products, beverages and daily essentials
          at the best prices.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="shop-btn">
            Shop Now
            <FaArrowRight />
          </a>

          <a href="#about" className="learn-btn">
            Learn More
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="https://cdn.corenexis.com/f/hquItPJfRFM.jpg"
          alt="Fresh Vegetables"
        />
      </div>

    </section>
  );
}

export default Hero;