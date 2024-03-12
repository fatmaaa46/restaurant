import React from "react";
import ImgHeader from "@/app/components/ImgHeader";

import CardBoutique from "./CardBoutique";
import Header1 from "@/app/components/Header1";
import Navbar from "./Navbar";
import Hero from "@/app/components/Hero/Hero";


function ListeBoutique() {
  return (
    <div>
      <Hero />

      <div className="container">

        <div className="row">
          <CardBoutique />
        </div>
      </div>
    </div>
  );
}

export default ListeBoutique;
