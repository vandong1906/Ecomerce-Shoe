import {Isize} from "Types/size";
import IProductVariant from "./ProductVariant";


export interface IAddProduct {
    name: string;
    brand_id: number;
    description?: string;
    base_price: number;
}

export interface IProduct {
    id: number;
    name: string;
    brand_id: number;
    description?: string;
    base_price: number;
    ProductVariants: IProductVariant[];
    stock:number
}