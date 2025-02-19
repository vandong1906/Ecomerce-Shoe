import { IOrder } from "./Order";

export interface IUser {
    name: string;
    email: string;
    password: string;
    orders: IOrder[];
}