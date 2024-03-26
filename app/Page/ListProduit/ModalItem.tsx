/* eslint-disable @next/next/no-img-element */
import store, { addToCart } from "@/app/components/store";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSnapshot } from "valtio";

function ModalItem({ modal, setModal, Item }: any) {
    const { Panier } = useSnapshot(store);
    const toggle = () => setModal(!modal);
    const imageUrl =
        Item.imageUrl.Default.urlDefault ||
        "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp";

    const onClickAdd = () => {
        let copPanier: any = [...Panier];
        let prix = Item?.price?.priceHT || 0;
        copPanier.push({
            uiiditem: Item.id,
            title: Item.title,
            qte: 1,
            prixuniter: prix,
            prix: prix,
        });

        addToCart(copPanier);
        toggle();
    };

    return (
        <Modal show={modal} onHide={toggle}>
            <Modal.Header closeButton>
                <Modal.Title>{Item.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                Composition de base :
                {Item?.basicCompositio?.title || 0}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClickAdd}>
                    Ajouter Produit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalItem;
