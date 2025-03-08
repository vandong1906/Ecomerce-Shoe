import axiosInstance from "@components/CustomAxios/AxiosCustom";
import axios from "axios";
function CallProduct() {
    const createProduct = async (Product) => {
        try {
            console.log("Form data being sent:", Product);
            // Send the FormData to the server
            const response = await axios.post("/api/products", Product);
            //  const response = await axiosInstance.post("/v1/product", Product);
            console.log("Response from server:", response);
            return response;
        }
        catch (error) {
            console.error("Error creating product:", error);
            throw error; // Optionally, handle the error as needed
        }
    };
    const getProduct = async () => {
        const response = await axiosInstance.post("/api/products");
        console.log(response);
        return response.data;
    };
    const getProductById = async (id) => {
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products/" + id);
        return response;
    };
    const getPagnigationProduct = async (page, size) => {
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products/getPaginatedProducts?" + 'page=' + page + '&' + 'size=' + size);
        return response.data;
    };
    const getProductWithFilter = async (filters) => {
        let query = '';
        if (filters.category) {
            query += `category=${filters.category}&`;
        }
        if (filters.priceMin) {
            query += `priceMin=${filters.priceMin}&`;
        }
        if (filters.priceMax) {
            query += `priceMax=${filters.priceMax}&`;
        }
        query = query.endsWith('&') ? query.slice(0, -1) : query;
        console.log("Query:", query);
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products?" + query);
        return response.data;
    };
    return { createProduct, getProduct, getProductById, getPagnigationProduct, getProductWithFilter };
}
export default CallProduct;
