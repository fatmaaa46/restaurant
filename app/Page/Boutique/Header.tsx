"use client";
import Icons from "@/app/components/Icons/Icons";
import ImgHeader from "@/app/components/ImgHeader";
import store from "@/app/components/store";
import { ListShop } from "@/app/constants/ListShop";
import React from "react";
import { useSnapshot } from "valtio/react";

function Header() {
  const { id } = useSnapshot(store);

  const companyToShow: any = ListShop[id];

  return (
    <div className="img" style={{ position: "relative" }}>
      <ImgHeader />
      <div
        className=""
        style={{
          position: "absolute",
          top: "50%",
          left: "10%", // Adjusted to position to the right
          transform: "translateY(-50%)",
          backgroundColor: "#d7c7c7", // White background
          color: "#000000", // Black text color
          padding: "2px",
          borderRadius: "10px", // Slightly rounded corners
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Box shadow for depth
        }}
      >
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`} </p>
          <p>
            ouvert de {companyToShow.openingTime} et a{" "}
            {companyToShow.closingTime}{" "}
          </p>
          <p>
            {companyToShow.Address},{companyToShow.PostalCode}{" "}
            {companyToShow.town}
          </p>
          <a href="">Informations utiles</a>

          <Icons />
        </div>
      </div>
    </div>
  );
}

export default Header;
