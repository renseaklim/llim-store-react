import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [paidFor, setPaidFor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
    setCheckoutCart(storedCart);
  }, []);

  const calculateTotal = () => {
    return checkoutCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleApprove = (orderID) => {
    // Payment successful, redirect to ConfirmOrder.jsx
    setPaidFor(true);
    localStorage.setItem("orderDetails", JSON.stringify(checkoutCart));
    localStorage.removeItem("checkoutCart");
    setCheckoutCart([]);
    localStorage.removeItem("cart");
    navigate("/confirm"); // Redirect to ConfirmOrder.jsx
  };

  const handleError = (error) => {
    console.error("PayPal Checkout Error:", error);
    alert("Something went wrong with your payment. Please try again.");
  };

  return (
    <div>
      <Header />
      <section
        className="banner-area organic-breadcrumb"
        style={{ height: "400px" }}
      >
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Checkout</h1>
              <nav className="d-flex align-items-center">
                <a href="/">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">Checkout</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout_area section_gap">
        <div className="container">
          <div className="row">
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
                  <span
                    className="placeholder"
                    data-placeholder="First name"
                  ></span>
                </div>
                <div className="col-md-6 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="last"
                    name="name"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Last name"
                  ></span>
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
                  <input
                    type="text"
                    className="form-control"
                    id="add1"
                    name="add1"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Address line 01"
                  ></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="add2"
                    name="add2"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Address line 02"
                  ></span>
                </div>
                <div className="col-md-12 form-group p_star">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                  />
                  <span
                    className="placeholder"
                    data-placeholder="Town/City"
                  ></span>
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
                    <label htmlFor="f-option3">
                      Ship to a different address?
                    </label>
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
            <div className="col-lg-4 order_box">
              <h2>Your Order</h2>
              <ul className="list">
                <li>
                  <p>
                    Product <span>Total</span>
                  </p>
                </li>
                {checkoutCart.map((item) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <span className="middle">x {item.quantity}</span> ={" "}
                    <span className="last">${item.quantity * item.price}</span>
                  </li>
                ))}
              </ul>
              <ul className="list list_2 mt-3">
                <li>
                  <h5>Subtotal: ${calculateTotal().toFixed(2)}</h5>
                </li>
                <li>
                  <h4>Total: ${calculateTotal().toFixed(2)}</h4>
                </li>
              </ul>

              {/* PayPal Buttons */}
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AXqySVxFA2XMXCnJFKr9VvRlm9X_se2FTnGQs3JD7pUJ_EgvSU7t4P3EyrzwxKtV0GluDPM-fBw-X9hu",
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: calculateTotal().toFixed(2), // Total price
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order
                      .capture()
                      .then((details) => {
                        console.log(
                          "Transaction completed by",
                          details.payer.name.given_name
                        );
                        handleApprove(data.orderID);
                      })
                      .catch(handleError);
                  }}
                  onError={handleError}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
