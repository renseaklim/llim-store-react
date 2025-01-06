import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleIncrease = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const handleDecrease = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Header />
      <section
        className="banner-area organic-breadcrumb"
        style={{ height: "400px" }}
      >
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Shopping Cart</h1>
              <nav className="d-flex align-items-center">
                <a href="/">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">Cart</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        Your cart is empty.
                      </td>
                    </tr>
                  ) : (
                    cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <div className="media-body">
                              <p>{item.title}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>${item.price.toFixed(2)}</h5>
                        </td>
                        <td>
                          <div className="product_count">
                            <input
                              type="text"
                              name="qty"
                              value={item.quantity}
                              className="input-text qty"
                              readOnly
                            />
                            <button
                              onClick={() => handleIncrease(item.id)}
                              className="increase items-count"
                              type="button"
                            >
                              <i className="lnr lnr-chevron-up"></i>
                            </button>
                            <button
                              onClick={() => handleDecrease(item.id)}
                              className="reduced items-count"
                              type="button"
                            >
                              <i className="lnr lnr-chevron-down"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                        </td>
                        <td>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                  <tr className="bottom_button">
                    <td>
                      <a className="gray_btn" href="/">
                        Continue Shopping
                      </a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${calculateTotal().toFixed(2)}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <div className="checkout_btn_inner d-flex align-items-center">
                        <a className="gray_btn" href="/">
                          Back to Shop
                        </a>
                        <a
                          className="primary-btn"
                          href="/checkout"
                          onClick={() =>
                            localStorage.setItem(
                              "checkoutCart",
                              JSON.stringify(cart)
                            )
                          }
                        >
                          Proceed to Checkout
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
