import React from "react";
import { Button } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext";
import Image from 'next/image'; 
import i1 from "../../../public/image/i1.jpg"
import { useSnapshot } from "valtio";
import store from "../store";
const { Panier } = useSnapshot(store)
let data = {
  uiiditem: "1223",
  title: "pizza",
  qte: 1,
  prixuniter: "7",
  prix :"total"
}
let copy = Panier 
copy.push(data)
const Cart: React.FC = () => {
  // const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>

        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
          // onClick={openCart}
        >
          <Image
            src={i1}
            width={80}
            height={80}
            className="hidden md:block"
            alt="Picture of the author"
          />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          ></div>
      </Button>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
};

export default Cart;
