import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handle Add to Cart
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      existingProduct.quantity += 1;
    } else {
      // Add the new product to the cart with an initial quantity of 1
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage
    alert(`${product.title} has been added to the cart!`);
  };

  return (
    <div id="category">
      <Header />
      <section
        className="banner-area organic-breadcrumb"
        style={{ height: "400px" }}
      >
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Shop Category Page</h1>
              <nav className="d-flex align-items-center">
                <a href="/">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">Shop Category Page</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
              <div className="head">Browse Categories</div>
              <ul className="main-categories">
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#fruitsVegetable"
                    aria-expanded="false"
                    aria-controls="fruitsVegetable"
                  >
                    <span className="lnr lnr-arrow-right"></span>Fruits and
                    Vegetables<span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="fruitsVegetable"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="fruitsVegetable"
                  >
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#meatFish"
                    aria-expanded="false"
                    aria-controls="meatFish"
                  >
                    <span className="lnr lnr-arrow-right"></span>Meat and Fish
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="meatFish"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="meatFish"
                  >
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#cooking"
                    aria-expanded="false"
                    aria-controls="cooking"
                  >
                    <span className="lnr lnr-arrow-right"></span>Cooking
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="cooking"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="cooking"
                  >
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#beverages"
                    aria-expanded="false"
                    aria-controls="beverages"
                  >
                    <span className="lnr lnr-arrow-right"></span>Beverages
                    <span className="number">(24)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="beverages"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="beverages"
                  >
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* More items can be added similarly */}
              </ul>
            </div>

            <div className="sidebar-filter mt-50">
              <div className="top-filter-head">Product Filters</div>

              <div className="common-filter">
                <div className="head">Brands</div>
                <form action="#">
                  <ul>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="apple"
                        name="brand"
                      />
                      <label htmlFor="apple">
                        Apple<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="asus"
                        name="brand"
                      />
                      <label htmlFor="asus">
                        Asus<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="gionee"
                        name="brand"
                      />
                      <label htmlFor="gionee">
                        Gionee<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="micromax"
                        name="brand"
                      />
                      <label htmlFor="micromax">
                        Micromax<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="samsung"
                        name="brand"
                      />
                      <label htmlFor="samsung">
                        Samsung<span>(19)</span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>

              <div className="common-filter">
                <div className="head">Color</div>
                <form action="#">
                  <ul>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="black"
                        name="color"
                      />
                      <label htmlFor="black">
                        Black<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="balckleather"
                        name="color"
                      />
                      <label htmlFor="balckleather">
                        Black Leather<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="blackred"
                        name="color"
                      />
                      <label htmlFor="blackred">
                        Black with red<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="gold"
                        name="color"
                      />
                      <label htmlFor="gold">
                        Gold<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input
                        className="pixel-radio"
                        type="radio"
                        id="spacegrey"
                        name="color"
                      />
                      <label htmlFor="spacegrey">
                        Spacegrey<span>(19)</span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          {/* Product Listing */}
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting">
                <select>
                  <option value="1">Default sorting</option>
                  <option value="1">Default sorting</option>
                  <option value="1">Default sorting</option>
                </select>
              </div>
              <div className="sorting mr-auto">
                <select>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                </select>
              </div>
              <div className="pagination">
                <a href="#" className="prev-arrow">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </a>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#" className="dot-dot">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
                <a href="#">6</a>
                <a href="#" className="next-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <section className="lattest-product-area pb-40 category-list">
              <div className="row">
                {products.map((product) => (
                  <div className="col-lg-4 col-md-6" key={product.id}>
                    <div className="single-product">
                      <div className="product-img">
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
                        </div>
                        <div className="prd-bottom">
                          <button
                            className="btn btn-primary"
                            onClick={() => addToCart(product)}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;
