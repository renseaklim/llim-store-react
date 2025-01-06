import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = storedCart.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartCount(totalItems);
  };

  useEffect(() => {
    // Initialize cart count on component mount
    updateCartCount();

    // Listen for storage event to update cart count dynamically
    window.addEventListener("storage", updateCartCount);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <header className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            <a className="navbar-brand logo_h" href="/">
              <img src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/product-page">
                        All Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/product-detail">
                        Product Details
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/checkout">
                        Product Checkout
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/confirm">
                        Confirmation
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/single-blog">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tracking">
                        Tracking
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/elements">
                        Elements
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <a href="/cart" className="cart">
                    <span className="ti-bag position-relative">
                      {cartCount > 0 && (
                        <p className="position-absolute translate-middle badge rounded-pill bg-danger text-white">
                          {cartCount}
                        </p>
                      )}
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <button className="search">
                    <span className="lnr lnr-magnifier" id="search"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
