"use client";

import React from "react";
import "./styleHero2.css";
import store from "@/app/components/store";
import { ListShop } from "@/app/constants/ListShop";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useSnapshot } from "valtio/react";

function Hero2() {
  const { id } = useSnapshot(store);
  let shopId = id === 0 ? JSON.parse(JSON.stringify(localStorage.getItem("id"))) : id

  const companyToShow: any = ListShop[shopId];
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
                <div className="find_container">
                  <div className="container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>

                    <div className="img" >

                      <div
                        className=""
                        style={{

                          marginTop: "80px ",
                          marginBottom: "30px ",
                          textAlign: "center",
                          color: "#ffffff",
                          transform: "translateY(-70%)",
                        }}
                      >
                        <div>
                          <h2> {companyToShow.Company} </h2>
                          <p>
                            ouvert de {companyToShow.openingTime} et a{" "}
                            {companyToShow.closingTime}{" "}
                          </p>
                          <p>
                            {companyToShow.Address},{companyToShow.PostalCode}{" "}
                            {companyToShow.town}
                          </p>

                          <div className="container my-5">
                            <div className="row social-links d-flex">
                              <div className="col-sm">
                                {" "}
                                <a
                                  href="https://www.commande-pizzatime.fr/cesarweb"
                                  className="facebook"
                                >
                                  <FaFacebook />
                                </a>
                              </div>
                              <div className="col-sm">
                                <a
                                  href="https://www.instagram.com/pizzatimefrance/"
                                  className="instagram"
                                >
                                  <FaInstagram />
                                </a>
                              </div>
                              <div className="col-sm">
                                <a href="#" className="twitter">
                                  <FaTwitter />
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>


                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
}

export default Hero2;
