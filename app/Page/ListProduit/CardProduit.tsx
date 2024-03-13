"use client"
import store, { setSelectedCategorie } from '@/app/components/store';


import React from 'react'
import { useSnapshot } from 'valtio';
import Modal2 from '../Modal2/Modal2';

function CardProduit({ showModal, setShowModal }: any) {
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

            {Object.entries(card.workflow).map(([key, value]: any) => (
                <div className=" my-2 " key={key}>
                    <h5 className="card-title my-5">{card[value.type][key].title}</h5>
                    <div className="row">
                        {Object.entries(value.content).map(([innerKey, innerValue]: any) => (
                            <div className="col-md-4 my-3">

                                <div className="card" style={{ width: "18rem" }} key={innerKey}>
                                    <img
                                        className="card-img-top"
                                        src={
                                            card[innerValue.type][innerKey].imageUrl.Default.urlDefault ? card[innerValue.type][innerKey].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
                                        }
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {card[innerValue.type][innerKey].title}
                                        </h5>
                                        <p className="card-text">{card[innerValue.type][innerKey].title} </p>

                                        <button

                                            className="mt-5 py-2 text-center h5 rounded font-weight-bold border-0"
                                            type="button"
                                            style={{
                                                backgroundColor: "#28a745",
                                                cursor: "pointer",
                                                color: "white",
                                                width: "16rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        // Ajoutez cet événement au bouton Commander
                                        >
                                            <span className="btn-txt" onClick={() => handleCommandeClick(card[innerValue.type][innerKey].title)}>Commander</span>
                                        </button>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
          {showModal && <Modal2 showModal={showModal} setShowModal={setShowModal} />}
        </div>
    );
}

export default CardProduit


