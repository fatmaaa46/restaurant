import Modal from '@/app/Page/Modal/Modal';
import store, { setSelectedCategorie } from '@/app/components/store';
import { Listcard } from '@/app/constants/Listcard';
import React, { useState } from 'react'
import { useSnapshot } from 'valtio';
function CardCategorie({ showModal, setShowModal }: any) {
  const { id } = useSnapshot(store)

  // const [selectedCategorie, setSelectedCategorie] = useState("");

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
            <div className="card" style={{ width: '22rem' }}>
              <h5 className="card-title" style={{ textAlign: "center" }}>{card[value.type][key].title}</h5>
              <img className="card-img-top" src={card[value.type][key].imageUrl.Default.urlDefault ? card[value.type][key].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"} alt="Card image cap" />

              <div className="card-body">

                <button

                  className="mt-5 py-2 text-center h5 rounded font-weight-bold border-0"
                  type="button"
                  style={{
                    backgroundColor: "#28a745",
                    cursor: "pointer",
                    color: "white",
                    width: "20rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleCommandeClick(card[value.type][key].title)} // Ajoutez cet événement au bouton Commander
                >
                  <span className="btn-txt">Commander</span>
                </button>



              </div>

            </div>
          </div>
        ))};
      </div>
      {/* {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />} Affichez le modal si showModal est vrai */}
    </div>
  )
};
export default CardCategorie
