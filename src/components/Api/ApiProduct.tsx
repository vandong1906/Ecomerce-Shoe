
import axiosInstance from "@components/CustomAxios/AxiosCustom";
import axios from "axios";
function CallProduct() {
    const createProduct = async (Product: FormData) => {
        try {
            console.log("Form data being sent:", Product);

            // Send the FormData to the server
            const response = await axios.post("http://localhost:3000/api/products", Product);
            //  const response = await axiosInstance.post("/v1/product", Product);

            console.log("Response from server:", response);
            return response;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error; // Optionally, handle the error as needed
        }
    };
    const getProduct = async () => {
        const response = await axiosInstance.get("http://localhost:3000/api/products");
        return response.data;

    }
    const getProductById = async (id:number) => {
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products/" + id);
        return response;

    }

    const getPagnigationProduct = async (page: number, size: number) => {
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products/getPaginatedProducts?" + 'page=' + page + '&' + 'size=' + size);
      
        return response.data;
    }
    const getProductWithFilter = async (filters: { category: string, priceMin: string, priceMax: string })=>{
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
        const response = await axiosInstance.get(import.meta.env.VITE_API_URL + "/api/products?"+query);
        return response.data;

    }
    return { createProduct, getProduct, getProductById, getPagnigationProduct,getProductWithFilter};
}

export default CallProduct;