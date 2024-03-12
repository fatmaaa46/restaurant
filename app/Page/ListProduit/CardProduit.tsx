"use client"
import store from '@/app/components/store';
import { Listcard } from '@/app/constants/Listcard';

import React from 'react'
import { useSnapshot } from 'valtio';

function CardProduit() {
    const { id } = useSnapshot(store)

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

                                <div className="card" style={{ width: "18rem", border: "none" }} key={innerKey}>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}

export default CardProduit
