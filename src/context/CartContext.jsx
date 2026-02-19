import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            // const exists = prev.find(item => item.id === product.id);
            // if (exists) return prev;
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const increaseQty = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, addToCart, removeFromCart, increaseQty, decreaseQty }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
