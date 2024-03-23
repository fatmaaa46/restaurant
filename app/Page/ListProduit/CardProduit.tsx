"use client"
import store, { setSelectedCategorie, setSelectedImage } from '@/app/components/store';
import React, { ChangeEvent, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import Modal2 from '../Modal2/Modal2';


function CardProduit({ showModal, setShowModal }: any) {
    useEffect(() => {
        const cartIcon = document.querySelector('.add-cart');
        const cart = document.querySelector('.offcanvas');
        const closecart = document.querySelector('.btn-close');

        if (cartIcon && cart && closecart) {
            cartIcon.addEventListener('click', () => {
                cart.classList.add('active');
            });

            closecart.addEventListener('click', () => {
                cart.classList.remove('active');
            });
        }

        // Nettoyage des écouteurs d'événements lors du démontage du composant
        return () => {
            if (cartIcon && cart && closecart) {
                cartIcon.removeEventListener('click', () => {
                    cart.classList.add('active');
                });
                closecart.removeEventListener('click', () => {
                    cart.classList.remove('active');
                });
            }
        };
    }, []);

    useEffect(() => {
        const removeCartButtons = document.querySelectorAll('.cart-remove');

        removeCartButtons.forEach((button) => {
            button.addEventListener('click', removeCartItem);
        });

        return () => {
            removeCartButtons.forEach((button) => {
                button.removeEventListener('click', removeCartItem);
            });
        };
    }, []);

    useEffect(() => {
        const quantityInputs = document.querySelectorAll('.cart-quantity');
        const addCart = document.querySelectorAll('.add-cart');

        quantityInputs.forEach((input) => {
            input.addEventListener('change', quantityChanged);
        });

        addCart.forEach((button) => {
            button.addEventListener('click', addCartClicked);
        });

        return () => {
            quantityInputs.forEach((input) => {
                input.removeEventListener('change', quantityChanged);
            });
            addCart.forEach((button) => {
                button.removeEventListener('click', addCartClicked);
            });
        };
    }, []);

    function addProductToCart(title: string, price: string, img: string) {
        let cartShopBox = document.createElement('div');
        cartShopBox.classList.add('cart-box');
        let cartItems = document.getElementsByClassName('cart-context')[0];
        let cartItemsNames = cartItems.getElementsByClassName('product-title');
        for (let i = 0; i < cartItemsNames.length; i++) {
            if (cartItemsNames[i].innerHTML == title) {
                alert('you have already added this item to cart');
                return;
            }
        }

        let cartBoxContent = `
      <img src="${img}" alt="" class="product-img" />
      <div class="detail-box">
        <div class="product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input
          defaultValue="1"
          type="number"
          class="cart-quantity"
        />
      </div>
      <img
        class="bx bxs-trash-alt cart-remove"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOZJREFUSEvtlkEOAUEQRd/EyoojOIK4AM7AwoJwA4m4hQVHkLCRcIbhAuIIjsDKTugEmQw9NTUjaZLubVfV619VXd0BjlbgiIsGXADGQNFy2AswAa5pxGjAM2AoBJ0Co2+C+8A8TUCgA6wk27jiBhBKThn3m8D26fsz4AowyKhIcjOlOtoUR52rQFmKJuyfgMMnm6SuNvWo5wTv7nU1ffO2PDiaEp/qLH3mm+uVNX+d/HXys1o7RP5rgKyBllZizH4DtLXvcRdY5AT3gKUWbOxrj19ISXmAM2Dqu7f5aT70SnayuTPwDXrVNh/ho6CWAAAAAElFTkSuQmCC"
        alt="Remove"
      />
    `;

        cartShopBox.innerHTML = cartBoxContent;
        cartItems.appendChild(cartShopBox);
        cartShopBox
            .getElementsByClassName('cart-remove')[0]
            ?.addEventListener('click', removeCartItem);
        cartShopBox
            .getElementsByClassName('cart-quantity')[0]
            ?.addEventListener('change', quantityChanged);

        updatetotal();
    }
    function updatetotal() {
        let cartContext = document.getElementsByClassName('cart-context')[0];
        let cartBoxes = cartContext?.getElementsByClassName('cart-box');
        let total = 0;

        for (let i = 0; i < cartBoxes.length; i++) {
            let cartBox = cartBoxes[i];
            let priceElement = cartBox?.getElementsByClassName('cart-price')[0];
            let quantityElement = cartBox?.getElementsByClassName(
                'cart-quantity'
            )[0] as HTMLInputElement;
            let price = parseFloat(priceElement.innerHTML);
            let quantity = parseInt(quantityElement.value);
            total += price * quantity;
        }

        total = Math.round(total * 100) / 100;
        let totalPriceElement = document.getElementsByClassName('total-price')[0];
        totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
    }

    function removeCartItem(event: any) {
        const buttonClicked = event.target;
        buttonClicked.parentElement?.remove();
        updatetotal();
    }

    function quantityChanged(event: any) {
        const input = event.target as HTMLInputElement;
        if (isNaN(parseInt(input.value)) || parseInt(input.value) <= 0) {
            input.value = '1';
        }
        updatetotal();
    }

    function addCartClicked(event: any) {
        const button = event.target;
        let shopProducts = button.closest('.product-box');
        const titleElement = shopProducts.querySelector('.product-title');
        const priceElement = shopProducts.querySelector('.cart-price');
        const productImg = shopProducts.querySelector('.product-img');
        const title = titleElement?.innerHTML;
        const price = priceElement?.innerHTML;
        const img = (productImg as HTMLImageElement)?.src;

        if (title && price && img) {
            addProductToCart(title, price, img);
        } else {
            console.error('One or more required elements not found');
        }
    }



    const { id } = useSnapshot(store)
    const handleCommandeClick = (item: string) => {
        setSelectedCategorie(item)
        setShowModal(true);
        // console.log({ selectedCategorie })
    };

    const cat: any = localStorage.getItem("card");

    let card = JSON.parse(cat || null);

    return (
        <div className="shop container">

            {Object.entries(card.workflow).map(([key, value]: any) => (
                <div className=" my-2 " key={key}>
                    <h5 className="card-title my-5">{card[value.type][key].title}</h5>
                    <div className="row row-cols-1 row-cols-md-4"   >
                        {Object.entries(value.content).map(([innerKey, innerValue]: any) => (
                            <div className="col-md-4 my-3">

                                <div className="shop-content" style={{ width: "18rem" }} key={innerKey}>
                                    <div className="product-box">
                                        <img
                                            className="product-img"
                                            src={
                                                card[innerValue.type][innerKey].imageUrl.Default.urlDefault ? card[innerValue.type][innerKey].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"
                                            }
                                            alt="Card image cap"
                                            onClick={() => { setSelectedImage(card[innerValue.type][innerKey].imageUrl.Default.urlDefault ? card[innerValue.type][innerKey].imageUrl.Default.urlDefault : "https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/3/web/Famille122.webp"); handleCommandeClick(card[innerValue.type][innerKey].title) }}
                                        />
                                        <h5 className="product-title"> {card[innerValue.type][innerKey].title} </h5>
                                        <span className="cart-price">{card[innerValue.type][innerKey]?.price?.priceHT ? card[innerValue.type][innerKey]?.price?.priceHT : 0} </span>

                                        <button
                                            className="add-cart"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasNavbar"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation"
                                            type="button"
                                        >
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXxJREFUSEvt1r9LVlEcx/GX4JbQ6hShUG4Z0qZig2OBW0jg/+AQJE5CY+i/ENLgIghCi1BUW0I4BWKie+DiavgcOY883e7tfk8Ij8Nzt3PO53ze9/uDe79D+vQM9Ynrf8DDeIyp/NL7+I6LkiBKwEn7Gq9wtwI5wxo2ovAS8CZethivYzkCj4IX8T4bnmbzz3k9h7e4l9fz2GuDR8E/MYaU0gf4VTEe7WTjCHfwFTM3AR7PpslrFW8aTNP+Cn7nHjj/FzwS8TS+ZJNn2G0wfN7p9p189gSp2xufCDjV8GN2eIpPDW5R3dX1KngEB7mebWUqOT/GI1ynvwpOTdHt1hLjiHa2p2R/Rdybrnc4wX0sZefuXh2oTte790eZqhHX1Slau6K7txocqV+TpjFbkYgH4JIMDFJ9/bkdNFf0KxVtsNvfXBP4EQ2nUPcQh907dYPAduefvFBo2ibfwoteUR047aUxZrJmUGgDVM/T/PUNH6oHkdGnFBbS9w18CQsNax/K6ElAAAAAAElFTkSuQmCC" />
                                        </button>
                                        <div
                                            className="offcanvas offcanvas-end"
                                            id="offcanvasNavbar"
                                            aria-labelledby="offcanvasNavbarLabel"
                                        >
                                            <div className="offcanvas-header">
                                                <h5 className="cart-title" id="offcanvasNavbarLabel">
                                                    your cart
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="offcanvas"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <header className="header">
                                                    <div className="nav container">
                                                        <div className="cart">
                                                            <div className="cart-context"></div>
                                                            <div className="total">
                                                                <div className="total-title">total:</div>
                                                                <div className="total-price">0 $</div>
                                                            </div>
                                                            <button type="button" className="btn-buy">
                                                                Buy now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </header>
                                            </div>
                                        </div>
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


