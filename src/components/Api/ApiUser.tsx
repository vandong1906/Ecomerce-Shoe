import axiosInstance from "@components/CustomAxios/AxiosCustom";

interface User {
    email: string;
    User_Name: string;
    password: string;
}
export interface Iregister {
    User_Name: string;
    password: string;
    mail: string;
}
interface login {
    User_Name: string;
    password: string;
}
function CallUser() {
    const create= async (User:Iregister)=> {
       const response=await axiosInstance.post("/v1/user/register", User);
       console.log(response);
       return response;
    }
    const login=async (User:login)=> {
        console.log(import.meta.env.VITE_API_URL+"/v1/user")
        const response = await axiosInstance.post("/v1/user", User);
        return response.data;
    }
    const update= async (User:User)=> {
        await axiosInstance.post("/v1/user/update", User);
    }
    return {create, login, update};
}

export default CallUser;