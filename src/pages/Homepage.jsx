import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import CategoryArea from "../components/CategoryArea";
import ProductCardSlide from "../components/ProductCardSlide";
const Homepage = () => {
  return (
    <>
      <Header />
      <HeroBanner />

      <section className="features-area section_gap">
        <div className="container">
          <div className="row features-inner">
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon1.png" alt="" />
                </div>
                <h6>Free Delivery</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon2.png" alt="" />
                </div>
                <h6>Return Policy</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon3.png" alt="" />
                </div>
                <h6>24/7 Support</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* single features */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="img/features/f-icon4.png" alt="" />
                </div>
                <h6>Secure Payment</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoryArea />
      <ProductCardSlide />
      <Footer />
    </>
  );
};

export default Homepage;
