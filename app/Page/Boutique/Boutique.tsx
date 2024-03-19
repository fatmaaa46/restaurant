"use client";
import React from "react";
import Header from "./Header";
import MenuCategorie from "./MenuCategorie";
import CardCategorie from "./CardCategorie";
import Modal from "../Modal/Modal";

function Boutique() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>

       <Header /> 
      <MenuCategorie showModal={showModal} setShowModal={setShowModal} />
      <CardCategorie showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default Boutique;
