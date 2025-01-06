import React from "react";
import HeroPic1 from "../../public/assets/img/banner/banner-img.png";
const HeroBanner = () => {
  return (
    <section className="banner-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 align-items-center">
            <div className="">
              {/* single-slide */}
              <div className="row single-slide align-items-center d-flex">
                <div className="col-lg-5 col-md-6">
                  <div className="banner-content">
                    <h1>
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a className="add-btn" href="">
                        <span className="lnr lnr-cross"></span>
                      </a>
                      <span className="add-text text-uppercase">
                        Add to Bag
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <img className="img-fluid" src={HeroPic1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
