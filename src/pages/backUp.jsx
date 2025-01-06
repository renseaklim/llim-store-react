import React from "react";
import Logo from "../../public/assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <Link className="navbar-brand logo_h" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
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

            {/* Collect the nav links, forms, and other content for toggling */}
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
                      <Link className="nav-link" to="/confirmation">
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
                {/* Cart icon links to cart page */}
                <li className="nav-item">
                  <Link to="/cart" className="cart">
                    <span className="ti-bag"></span>
                  </Link>
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

      <div className="col-lg-8">
        <h3>Billing Details</h3>
        <form
          className="row contact_form"
          action="#"
          method="post"
          noValidate="novalidate"
        >
          <div className="col-md-6 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="first"
              name="name"
            />
            <span className="placeholder" data-placeholder="First name"></span>
          </div>
          <div className="col-md-6 form-group p_star">
            <input type="text" className="form-control" id="last" name="name" />
            <span className="placeholder" data-placeholder="Last name"></span>
          </div>
          <div className="col-md-12 form-group">
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              placeholder="Company name"
            />
          </div>
          <div className="col-md-6 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
            />
            <span
              className="placeholder"
              data-placeholder="Phone number"
            ></span>
          </div>
          <div className="col-md-6 form-group p_star">
            <input
              type="text"
              className="form-control"
              id="email"
              name="compemailany"
            />
            <span
              className="placeholder"
              data-placeholder="Email Address"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <select className="country_select">
              <option value="1">Country</option>
              <option value="2">Country</option>
              <option value="4">Country</option>
            </select>
          </div>
          <div className="col-md-12 form-group p_star">
            <input type="text" className="form-control" id="add1" name="add1" />
            <span
              className="placeholder"
              data-placeholder="Address line 01"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <input type="text" className="form-control" id="add2" name="add2" />
            <span
              className="placeholder"
              data-placeholder="Address line 02"
            ></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <input type="text" className="form-control" id="city" name="city" />
            <span className="placeholder" data-placeholder="Town/City"></span>
          </div>
          <div className="col-md-12 form-group p_star">
            <select className="country_select">
              <option value="1">District</option>
              <option value="2">District</option>
              <option value="4">District</option>
            </select>
          </div>
          <div className="col-md-12 form-group">
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              placeholder="Postcode/ZIP"
            />
          </div>
          <div className="col-md-12 form-group">
            <div className="creat_account">
              <input type="checkbox" id="f-option2" name="selector" />
              <label htmlFor="f-option2">Create an account?</label>
            </div>
          </div>
          <div className="col-md-12 form-group">
            <div className="creat_account">
              <h3>Shipping Details</h3>
              <input type="checkbox" id="f-option3" name="selector" />
              <label htmlFor="f-option3">Ship to a different address?</label>
            </div>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="1"
              placeholder="Order Notes"
            ></textarea>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
