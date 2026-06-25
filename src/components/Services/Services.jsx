import {
  FaShippingFast,
  FaLeaf,
  FaCreditCard,
  FaHeadset,
  FaTags,
  FaShoppingBasket,
} from "react-icons/fa";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Free Delivery",
      description:
        "Free delivery on all orders above ₹999 anywhere in your city.",
    },
    {
      id: 2,
      icon: <FaLeaf />,
      title: "100% Fresh Products",
      description:
        "We deliver fresh vegetables, fruits, and groceries every day.",
    },
    {
      id: 3,
      icon: <FaCreditCard />,
      title: "Secure Payment",
      description:
        "Pay safely using UPI, Debit Card, Credit Card, or Cash on Delivery.",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our customer support team is always ready to help you.",
    },
    {
      id: 5,
      icon: <FaTags />,
      title: "Best Offers",
      description:
        "Enjoy exciting discounts and special offers on your favorite products every day.",
    },
    {
      id: 6,
      icon: <FaShoppingBasket />,
      title: "Wide Product Range",
      description:
        "Shop from thousands of groceries, fruits, vegetables, dairy, bakery, and household essentials.",
    },
  ];

  return (
    <section id="offers" className="services">
      <div className="service-title">
        <h2>Why Choose Us?</h2>
        <p>
          We provide fresh groceries with the best quality and fastest delivery.
        </p>
      </div>

      <div className="service-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;