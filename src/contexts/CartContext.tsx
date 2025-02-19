import { IOrderItem } from "Types/OrderItem";
import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { IProduct } from "Types/Product";
interface CartContextType {
  getItem: () => IProduct[] | undefined;
  setItemCart: (product: IProduct | IProduct[]) => void;
  removeFromCart: (id: number) => void;
  deleteAllCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [item, setItem] = useState<IProduct[] | undefined>();
  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (Cookies.get("item")) {
      const data = Cookies.get("item");
      if (data != null) {
        setItem(JSON.parse(data));
      }
    }
  }, [])
  useEffect(() => {

    if (item) {
      const total = item.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.number
      }, 0);
      setTotal(total);
    }
  });
  useEffect(() => {
    if (item) {
      const amount = item.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.number;
      }, 0);
      setItemAmount(amount);
    }
  }, [item]);

  // add to cart

  const setItemCart = (product: IProduct | IProduct[]) => {
    if (Array.isArray(product)) {
      setItem(product);
      Cookies.set("item", JSON.stringify(product), { expires: 7 });
    }
    else {
      setItem((prevState) => {
        if (prevState) {
          const productIndex = prevState.findIndex((item) => item.product_id === product.product_id);
          if (productIndex !== -1) {
            const updatedState = [...prevState];
            updatedState[productIndex].number += 1;
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
  const removeFromCart = (id: number) => {
    setItem((prevState) => {
      if (prevState != null) {
        Cookies.set("item", JSON.stringify(prevState.filter((product) => product.product_id !== id)), { expires: 7 });
        return prevState.filter((product) => product.product_id !== id);
      }
    });
  };
  const deleteAllCart = () => {
    Cookies.remove("item");
  }
  const getItem = () => {
    return item;
  }

  // increase amount
  const increaseAmount = (id: number) => {
    if (item) {
      const cartItem = item.find((item) => item.product_id === id);
      cartItem && setItemCart(cartItem);
    }
  };

  const decreaseAmount = (id: number) => {
    if (item) {
      const cartItem = item.find((item) => item.product_id === id);
      if (cartItem) {
        const newCart = item.map((item) => {
          if (item.product_id === id) {
            return { ...item, number: cartItem.number - 1 };
          } else {
            return item;
          }
        });
        setItemCart(newCart);
      }
      cartItem && cartItem?.number < 2 && removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        getItem,
        setItemCart,
        removeFromCart,
        deleteAllCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = ()=>{
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within an CartProvider');
  }
  return context;
};
export default CartProvider;