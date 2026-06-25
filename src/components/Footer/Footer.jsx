import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-box">
          <h2 className="zha-super-market">
            🛒 ZHA Super Market
          </h2>

          <p>
            Fresh vegetables, fruits, dairy products, groceries, beverages,
            bakery items, and daily essentials delivered fresh to your doorstep.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-box">
          <h3>Categories</h3>

          <ul>
            <li>Fresh Fruits</li>
            <li>Vegetables</li>
            <li>Dairy Products</li>
            <li>Bakery</li>
            <li>Beverages</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p><FaMapMarkerAlt /> Tamil Nadu, India </p>
          <p><FaPhoneAlt /> +91 88836 56755</p>
          <p><FaEnvelope /> vishnuhanesh2005@gmail.com</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 <strong>ZHA Super Market</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;