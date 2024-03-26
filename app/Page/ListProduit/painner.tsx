import store, { addToCart } from "@/app/components/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSnapshot } from "valtio";

function Painner() {
    const [modal, setModal] = useState(false);
    const panierSnapshot = useSnapshot(store);
    const Panier = panierSnapshot.Panier;
    const toggle = () => setModal(!modal);
    const [Somme, SetSomme] = useState(0);

    const increaseQuantity = (itemId: any) => {
        let copPanier: any = [...Panier];
        for (let item of copPanier) {
            if (item.uiiditem === itemId) {
                let mutableItem = { ...item };
                mutableItem.qte += 1;
                mutableItem.prix += mutableItem.qte * mutableItem.prixuniter;
                copPanier[copPanier.indexOf(item)] = mutableItem;
                addToCart(copPanier);
                return;
            }
        }
    };

    const decreaseQuantity = (itemId: any) => {
        let copPanier: any = [...Panier];
        for (let item of copPanier) {
            if (item.uiiditem === itemId) {
                let mutableItem = { ...item };
                mutableItem.qte -= 1;
                if (mutableItem.qte > 0) {
                    mutableItem.prix += mutableItem.qte * mutableItem.prixuniter;
                    copPanier[copPanier.indexOf(item)] = mutableItem;
                    addToCart(copPanier);
                } else {
                    delete copPanier[copPanier.indexOf(item)];
                    addToCart(copPanier);
                }

                return;
            }
        }
    };

    useEffect(() => {
        let s = 0;
        for (let item of Panier) {
            s += parseFloat(item.prix);
        }
        SetSomme(s);
    }, [Panier]);

    return (
        <>
            <Button
                style={{
                    position: "fixed",
                    right: "0",
                    top: "50%",
                    zIndex: "3",
                    width: "130px",
                }}
                onClick={toggle}
            >
                {/* Display the total sum */}
                {Somme.toFixed(2)} €
            </Button>
            <Modal show={modal} onHide={toggle}>
                <Modal.Header closeButton>Painner</Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            {Panier.map((item, index) => (
                                <div className="col-12" key={index}>
                                    <div className="d-flex flex-row bd-highlight mb-3">
                                        <div className="p-2 bd-highlight">
                                            <span style={{ marginRight: "5px" }}>{item.qte}</span>
                                        </div>

                                        <div className="p-2 bd-highlight">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="p-2 bd-highlight">
                                            <p>{item.prix} €</p>
                                        </div>
                                        <div className="p-2 bd-highlight">
                                            <Button
                                                onClick={() => {
                                                    increaseQuantity(item.uiiditem);
                                                }}
                                                style={{ width: "40px" }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="p-2 bd-highlight">
                                            <Button
                                                onClick={() => decreaseQuantity(item.uiiditem)}
                                                style={{ width: "40px" }}
                                            >
                                                -
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Painner;
