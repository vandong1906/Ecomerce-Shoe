import axiosInstance from '@components/CustomAxios/AxiosCustom';
const fetchOrderItems = async () => {
    try {
        const response = await axiosInstance.get('/order-items');
        return response.data;
    }
    catch (err) {
        throw new Error('Failed to fetch order items');
    }
};
export default fetchOrderItems;
export const createOrderItem = async (orderItem) => {
    try {
        const response = await axiosInstance.post('/order-items', orderItem);
        return response.data;
    }
    catch (err) {
        throw new Error('Failed to create order item');
    }
};
export const updateOrderItem = async (id, orderItem) => {
    try {
        const response = await axiosInstance.put(`/order-items/${id}`, orderItem);
        return response.data;
    }
    catch (err) {
        throw new Error('Failed to update order item');
    }
};
export const deleteOrderItem = async (id) => {
    try {
        await axiosInstance.delete(`/api/order-items/${id}`);
    }
    catch (err) {
        throw new Error('Failed to delete order item');
    }
};
