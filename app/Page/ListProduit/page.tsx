"use client"
import React, { useState } from 'react'

import CardProduit from './CardProduit'
import MenuCategorie from '../Boutique/MenuCategorie'


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderNav from '@/app/components/Navbar/Headerpanier'
import Modal2 from '../Modal2/Modal2';
import Hero2 from '@/app/components/Hero2/Hero2';

function ListProduit() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <HeaderNav />
      <Hero2 />
      <MenuCategorie />
      <CardProduit showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Modal2 showModal={showModal} setShowModal={setShowModal} />}



    </div>
  )
}

export default ListProduit
