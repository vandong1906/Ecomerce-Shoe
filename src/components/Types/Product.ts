import {Isize} from "@components/Types/size";


export interface IAddProduct {
    Product_name: string;
    number: number;
    Brand_id: number;
    description: string;
}

export interface IProduct {
    product_id: number;
    product_Name: string;
    price: number;
    number: number;
    description: string;
    image_data: string;
}