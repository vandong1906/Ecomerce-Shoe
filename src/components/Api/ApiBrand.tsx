import axiosInstance from "@components/CustomAxios/AxiosCustom";
export interface IBrand {
    Brand_id: string;
    Brand_Name: string;
}

function CallBrand(){
    const createBrand =async(brand:IBrand)=>{
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