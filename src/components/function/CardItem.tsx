import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IProduct } from "@components/Types/Product";


function CardItem() {
    const [item, setItem] = useState<IProduct[]>();
    useEffect(() => {
        if (Cookies.get("item")) {
            const data = Cookies.get("item");
            if (data != null) {
                setItem(JSON.parse(data));
            }
        }
    }, [])
    const setItemProduct = (product: IProduct) => {
        setItem((prevState) => {
            if(prevState){
                const productIndex = prevState.findIndex((item) => item.product_id === product.product_id);
                if (productIndex !== -1 ) {
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
    };
    const removeProduct = (id: number) => {
        setItem((prevState) => {
            if (prevState != null) {
                Cookies.set("item", JSON.stringify( prevState.filter((product) => product.product_id !== id)), { expires: 7 });
                return prevState.filter((product) => product.product_id !== id);
            }
        });
    };
    const deleteProduct = () => {
        Cookies.remove("item");
    }
    const getItem = () => {
        return item;
    }
    return { setItemProduct, getItem, removeProduct, deleteProduct };
}
export default CardItem;