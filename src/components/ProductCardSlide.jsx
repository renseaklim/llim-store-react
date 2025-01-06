import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCardSlide = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data.slice(0, 8)); // Limit to 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="active-product-area section_gap">
      <div className="single-product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Latest Products</h1>
                <p>
                  Browse our collection of the latest and most popular products.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="single-product">
                  <div className="single-product-img">
                    <img
                      className="img-fluid"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="product-details">
                    <h6>{product.title}</h6>
                    <div className="price">
                      <h6>${product.price.toFixed(2)}</h6>
                      <h6 className="l-through">
                        ${(product.price * 1.2).toFixed(2)}
                      </h6>
                    </div>
                    <div className="prd-bottom">
                      {/* Link to product detail page */}
                      <Link
                        to={`/product/${product.id}`}
                        className="social-info"
                      >
                        <span className="lnr lnr-move"></span>
                        <p className="hover-text">View more</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardSlide;
