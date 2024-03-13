import React from 'react'
import Header from '../Boutique/Header'
import CardProduit from './CardProduit'
import MenuCategorie from '../Boutique/MenuCategorie'
import Header1 from '@/app/components/Header1'

function ListProduit() {
  return (
    <div>
      <Header1 />
      <Header />
      <MenuCategorie />
      <CardProduit />




    </div>
  )
}

export default ListProduit
