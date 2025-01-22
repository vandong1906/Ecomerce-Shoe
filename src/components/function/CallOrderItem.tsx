import axiosInstance from '@components/CustomAxios/AxiosCustom';
import { IOrderItem } from '@components/Types/OrderItem';

interface OrderItem extends IOrderItem {}

const fetchOrderItems = async (): Promise<OrderItem[]> => {
    try {
        const response = await axiosInstance.get('/order-items');
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch order items');
    }
};

export default fetchOrderItems;
export const createOrderItem = async (orderItem: OrderItem): Promise<OrderItem> => {
    try {
        const response = await axiosInstance.post('/order-items', orderItem);
        return response.data;
    } catch (err) {
        throw new Error('Failed to create order item');
    }
};

export const updateOrderItem = async (id: number, orderItem: OrderItem): Promise<OrderItem> => {
    try {
        const response = await axiosInstance.put(`/order-items/${id}`, orderItem);
        return response.data;
    } catch (err) {
        throw new Error('Failed to update order item');
    }
};

export const deleteOrderItem = async (id: number): Promise<void> => {
    try {
        await axiosInstance.delete(`/api/order-items/${id}`);
    } catch (err) {
        throw new Error('Failed to delete order item');
    }
};