"use client"
import React, { useState } from 'react'
import Header from '../Boutique/Header'
import CardProduit from './CardProduit'
import MenuCategorie from '../Boutique/MenuCategorie'
import Header1 from '@/app/components/Header1'
import Modal2 from '../Modal2/Modal2'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from '@/app/components/Navbar/Headerpanier'

function ListProduit() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <HeaderNav />
      <Header />
      <MenuCategorie />
      <CardProduit showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Modal2 showModal={showModal} setShowModal={setShowModal} />}



    </div>
  )
}

export default ListProduit
