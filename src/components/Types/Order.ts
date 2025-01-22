import {IOrderItem} from "@components/Types/OrderItem";

export interface IOrder {
    userId: number;
    orderDate: string;
    totalPrice: number;
    status: string;
    orderItems: IOrderItem[];
}