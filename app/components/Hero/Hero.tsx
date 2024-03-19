import React from "react";
import "./styleHero.css";
function Hero() {
  return (
    <>
      <div className="hero_area mb-5">
        {/* header section starts */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
            </nav>
          </div>
        </header>

        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="detail-box">
                  <h1>Pizza Time </h1>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum
                  </p>
                </div>

                <div className="find_container">
                  <div className="container">
                    <form className="row">
                      <div className="form-group col-sm">
                        <input
                          type="text"
                          className="form-control"
                          id="inputHotel"
                          placeholder="Restaurant Name"
                        />
                      </div>
                      <div className="form-group col-sm ">
                        <input
                          type="text"
                          className="form-control"
                          id="inputLocation"
                          placeholder="All Locations"
                        />
                        <span className="location_icon">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                      <div className="form-group col-sm">
                        <div className="btn-box">
                          <button type="submit" className="btn">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ zIndex: "1" }}>
          <form className="row">
            <div className="col-sm">
              <div className="item">
                <div className="img-box">
                  <img src="images/slider-img2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="img-box">
                <img src="images/slider-img3.png" alt="" />
              </div>
            </div>
            <div className="col-sm">
              <div className="img-box">
                <img src="images/slider-img4.png" alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hero;
