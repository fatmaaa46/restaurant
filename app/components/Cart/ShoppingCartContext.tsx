import React, { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

interface Item {
    id: string;
    quantity: number;
}

interface ShoppingCartContextType {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    openCart: () => void;
    closeCart: () => void;
    cartQuantity: number;
    cartItems: Item[];
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
    getItemQuantity: () => 0,
    increaseCartQuantity: () => { },
    decreaseCartQuantity: () => { },
    removeFromCart: () => { },
    openCart: () => { },
    closeCart: () => { },
    cartQuantity: 0,
    cartItems: [],
});

const initialCartItems: Item[] = localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart")!)
    : [];

const ShoppingCartProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<Item[]>(initialCartItems);

    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQuantity: number = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = (): void => {
        setIsOpen(true);
    };

    const closeCart = (): void => {
        setIsOpen(false);
    };

    const getItemQuantity = (id: string): number => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id: string): void => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id: string): void => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeFromCart = (id: string): void => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartQuantity,
                cartItems,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
export const useShoppingCart = (): ShoppingCartContextType => {
    return useContext(ShoppingCartContext);
};
