import React from "react";

const ProductDetailArea = () => {
  return (
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_Product_carousel">
              <div className="single-prd-item">
                <img className="img-fluid" src="img/category/s-p1.jpg" alt="" />
              </div>
              <div className="single-prd-item">
                <img className="img-fluid" src="img/category/s-p1.jpg" alt="" />
              </div>
              <div className="single-prd-item">
                <img className="img-fluid" src="img/category/s-p1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul className="list">
                <li>
                  <a className="active" href="#">
                    <span>Category</span> : Household
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Availibility</span> : In Stock
                  </a>
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <div className="product_count">
                <label for="qty">Quantity:</label>
                <input
                  type="text"
                  name="qty"
                  id="sst"
                  maxlength="12"
                  value="1"
                  title="Quantity:"
                  className="input-text qty"
                />
                <button
                  onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                  className="increase items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-up"></i>
                </button>
                <button
                  onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                  className="reduced items-count"
                  type="button"
                >
                  <i className="lnr lnr-chevron-down"></i>
                </button>
              </div>
              <div className="card_area d-flex align-items-center">
                <a className="primary-btn" href="#">
                  Add to Cart
                </a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-diamond"></i>
                </a>
                <a className="icon_btn" href="#">
                  <i className="lnr lnr lnr-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailArea;
