"use client"
import React, { useState } from 'react'
import Header from '../Boutique/Header'
import CardProduit from './CardProduit'
import MenuCategorie from '../Boutique/MenuCategorie'
import Header1 from '@/app/components/Header1'
import Modal2 from '../Modal2/Modal2'

function ListProduit() {
  const [showModal, setShowModal] =useState(false);
  return (
    <div>
      <Header1 />
      <Header />
      <MenuCategorie />
      <CardProduit showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Modal2 />}



    </div>
  )
}

export default ListProduit
