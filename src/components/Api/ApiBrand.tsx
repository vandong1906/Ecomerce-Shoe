import axiosInstance from "@components/CustomAxios/AxiosCustom";
import { Ibrands } from "@Types/brand";

function CallBrand(){
    const createBrand =async(brand:Ibrands)=>{
        const response =await  axiosInstance.post("/api/brands",brand);
      
        return response;
    }
    const getBrand = async()=>{
        const response = await axiosInstance.get("/api/brands");
      
        return response.data;
    }
    return {createBrand,getBrand};
}
export default CallBrand;