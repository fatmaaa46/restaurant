import Modal from '@/app/Page/Modal/Modal';
import store, { setSelectedCategorie } from '@/app/components/store';
import React, { useState } from 'react'
import { useSnapshot } from 'valtio';
function CardCategorie({ showModal, setShowModal }: any) {
  const { id } = useSnapshot(store)


  const handleCommandeClick = (item: string) => {
    setSelectedCategorie(item)
    setShowModal(true);
    // console.log({ selectedCategorie })
  };

  const cat: any = localStorage.getItem("card");

  let card = JSON.parse(cat || null);
  return (
    <div className="container">
      <div className="row">
        {Object.entries(card.workflow).map(([key, value]: any) => (
          <div className="col-sm my-3" key={key}>
            <div className="card" style={{ width: '22rem' }} onClick={() => handleCommandeClick(card[value.type][key].title)} >
              <h5 className="card-title" style={{ textAlign: "center" }}>{card[value.type][key].title}</h5>
              <img className="card-img-top" src={card[value.type][key].imageUrl.Default.urlDefault ? card[value.type][key].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"} alt="Card image cap" />

            </div>
          </div>
        ))};
      </div>

    </div>
  )
};
export default CardCategorie
