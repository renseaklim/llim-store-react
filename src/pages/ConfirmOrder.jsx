import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ConfirmOrder = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("orderDetails")) || [];
    setOrderDetails(storedOrder);
  }, []);

  const calculateTotal = () => {
    return orderDetails.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
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
              <h1>Confirmation</h1>
              <nav className="d-flex align-items-center">
                <a href="/">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">Confirmation</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="order_details section_gap">
        <div className="container">
          <h3 className="title_confirmation">
            Thank you. Your order has been received.
          </h3>
          <div className="order_details_table">
            <h2>Order Details</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.title}</p>
                      </td>
                      <td>
                        <h5>x {item.quantity}</h5>
                      </td>
                      <td>
                        <p>${item.quantity * item.price}</p>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <h4>Subtotal</h4>
                    </td>
                    <td></td>
                    <td>
                      <p>${calculateTotal().toFixed(2)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Total</h4>
                    </td>
                    <td></td>
                    <td>
                      <p>${calculateTotal().toFixed(2)}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ConfirmOrder;
