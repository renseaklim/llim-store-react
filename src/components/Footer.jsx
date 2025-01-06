import React from "react";
import i1 from "../../public/assets/img/i1.jpg";
import i2 from "../../public/assets/img/i2.jpg";
import i3 from "../../public/assets/img/i3.jpg";
import i4 from "../../public/assets/img/i4.jpg";
import i5 from "../../public/assets/img/i5.jpg";
import i6 from "../../public/assets/img/i6.jpg";
import i7 from "../../public/assets/img/i7.jpg";
import i8 from "../../public/assets/img/i8.jpg";
const Footer = () => {
  return (
    <footer className="footer-area section_gap">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay updated with our latest</p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  noValidate
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <div className="d-flex flex-row">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email"
                      onFocus={() => (this.placeholder = "")}
                      onBlur={() => (this.placeholder = "Enter Email")}
                      required
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex="-1"
                        value=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>

          {/* Instagram Feed Section */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Instagram Feed</h6>
              <ul className="instafeed d-flex flex-wrap">
                <li>
                  <img src={i1} alt="Instagram 1" />
                </li>
                <li>
                  <img src={i2} alt="Instagram 2" />
                </li>
                <li>
                  <img src={i3} alt="Instagram 3" />
                </li>
                <li>
                  <img src={i4} alt="Instagram 4" />
                </li>
                <li>
                  <img src={i5} alt="Instagram 5" />
                </li>
                <li>
                  <img src={i6} alt="Instagram 6" />
                </li>
                <li>
                  <img src={i7} alt="Instagram 7" />
                </li>
                <li>
                  <img src={i8} alt="Instagram 8" />
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
          <p className="footer-text m-0">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
