import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
const CartContext = createContext(undefined);
const CartProvider = ({ children }) => {
    const [item, setItem] = useState();
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (Cookies.get("item")) {
            const data = Cookies.get("item");
            if (data != null) {
                setItem(JSON.parse(data));
            }
        }
    }, []);
    useEffect(() => {
        if (item) {
            const total = item.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.base_price * currentItem.stock;
            }, 0);
            setTotal(total);
        }
    });
    useEffect(() => {
        if (item) {
            const amount = item.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.stock;
            }, 0);
            setItemAmount(amount);
        }
    }, [item]);
    // add to cart
    const setItemCart = (product) => {
        if (Array.isArray(product)) {
            setItem(product);
            Cookies.set("item", JSON.stringify(product), { expires: 7 });
        }
        else {
            setItem((prevState) => {
                if (prevState) {
                    const productIndex = prevState.findIndex((item) => item.id === product.id);
                    if (productIndex !== -1) {
                        const updatedState = [...prevState];
                        updatedState[productIndex].stock += 1;
                        Cookies.set("item", JSON.stringify(updatedState), { expires: 7 });
                        return updatedState;
                    }
                    console.log(product);
                    Cookies.set("item", JSON.stringify([...prevState, { ...product, number: 1 }]), { expires: 7 });
                    return [...prevState, { ...product, number: 1 }];
                }
                Cookies.set("item", JSON.stringify([product]), { expires: 7 });
                return [product];
            });
        }
    };
    const removeFromCart = (id) => {
        setItem((prevState) => {
            if (prevState != null) {
                Cookies.set("item", JSON.stringify(prevState.filter((product) => product.id !== id)), { expires: 7 });
                return prevState.filter((product) => product.id !== id);
            }
        });
    };
    const deleteAllCart = () => {
        Cookies.remove("item");
    };
    const getItem = () => {
        return item;
    };
    // increase amount
    const increaseAmount = (id) => {
        if (item) {
            const cartItem = item.find((item) => item.id === id);
            cartItem && setItemCart(cartItem);
        }
    };
    const decreaseAmount = (id) => {
        if (item) {
            const cartItem = item.find((item) => item.id === id);
            if (cartItem) {
                const newCart = item.map((item) => {
                    if (item.id === id) {
                        return { ...item, stock: cartItem.stock - 1 };
                    }
                    else {
                        return item;
                    }
                });
                setItemCart(newCart);
            }
            cartItem && cartItem?.stock < 2 && removeFromCart(id);
        }
    };
    return (_jsx(CartContext.Provider, { value: {
            getItem,
            setItemCart,
            removeFromCart,
            deleteAllCart,
            increaseAmount,
            decreaseAmount,
        }, children: children }));
};
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within an CartProvider');
    }
    return context;
};
export default CartProvider;
