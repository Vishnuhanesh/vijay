import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact">

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We are here to help you with orders, delivery issues,
            and any questions about Fresh Market.
          </p>
        </div>

        <div className="contact-container">

          {/* Contact Form */}
          <form className="contact-form">

            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

          {/* Contact Info */}
          <div className="contact-info">

            <h3>Get in Touch</h3>

            <p>📍 tamil Nadu, india </p>
            <p>📞 +91 888</p>
            <p>📧 vishnuhanesh2005@gamil.com</p>

            <div className="map-box">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;