import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        🛒 <span>zha super market</span>
      </div>

      {/* Navigation */}
      <nav className={menu ? "nav-links active" : "nav-links"}>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
        <a href="#checkout">Checkout</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" onClick={() => setSearchOpen(true)} />
        <div className="user-wrapper">
          <FaUser className="icon user-icon" onClick={() => setUserMenuOpen((prev) => !prev)} />
          {userMenuOpen && (
            <div className="user-menu">
              <div className="user-top">
                <p className="user-title">Signed in as</p>
                <strong className="user-name">{user?.name || "Guest User"}</strong>
                <span className="user-email">{user?.email || "guest@example.com"}</span>
                {user?.phone && <span className="user-phone">{user.phone}</span>}
              </div>
              <button
                type="button"
                className="logout-btn"
                onClick={() => {
                  onLogout();
                  setUserMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="cart">
          <FaShoppingCart className="icon" />
          <span>{totalItems}</span>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="search-modal" onClick={handleSearchClose}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button className="search-close" onClick={handleSearchClose}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;