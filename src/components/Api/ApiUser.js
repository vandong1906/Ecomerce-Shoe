import axiosInstance from "@components/CustomAxios/AxiosCustom";
function CallUser() {
    const create = async (User) => {
        const response = await axiosInstance.post("/v1/user/register", User);
        console.log(response);
        return response;
    };
    const login = async (User) => {
        console.log(import.meta.env.VITE_API_URL + "/v1/user");
        const response = await axiosInstance.post("/v1/user", User);
        return response.data;
    };
    const update = async (User) => {
        await axiosInstance.post("/v1/user/update", User);
    };
    return { create, login, update };
}
export default CallUser;
