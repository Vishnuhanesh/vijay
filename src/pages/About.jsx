import "./About.css";
import {
  FaLeaf,
  FaShippingFast,
  FaAward,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <div id="about" className="about">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-text">
          <h1>About Fresh Market</h1>

          <p>
            Welcome to Fresh Market, your trusted destination for
            fresh fruits, vegetables, groceries, bakery items,
            dairy products, beverages, and daily essentials.
            We are committed to providing premium quality products
            at affordable prices with fast doorstep delivery.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
            alt="Fresh Market"
          />
        </div>
      </section>

      {/* Features */}
      <section className="about-features">

        <div className="feature-card">
          <FaLeaf className="icon" />
          <h3>Fresh Products</h3>
          <p>
            We source farm-fresh vegetables and fruits every day.
          </p>
        </div>

        <div className="feature-card">
          <FaShippingFast className="icon" />
          <h3>Fast Delivery</h3>
          <p>
            Get your groceries delivered quickly and safely.
          </p>
        </div>

        <div className="feature-card">
          <FaAward className="icon" />
          <h3>Premium Quality</h3>
          <p>
            High-quality products with guaranteed freshness.
          </p>
        </div>

        <div className="feature-card">
          <FaUsers className="icon" />
          <h3>Happy Customers</h3>
          <p>
            Thousands of families trust Fresh Market every day.
          </p>
        </div>

      </section>

      {/* Mission */}
      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to make grocery shopping simple,
          affordable, and convenient by delivering fresh,
          high-quality products directly to your doorstep.
          We believe in healthy living, customer satisfaction,
          and providing the best shopping experience.
        </p>

      </section>

    </div>
  );
}

export default About;