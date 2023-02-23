import clientAxios from "../config/axios.js";


export const useAuth = ({middleware, url}) => {

    const login = async (data, setErrors)=> {
        try {
            const response = await clientAxios.post('/api/login', data);
            // console.log(response.data.token);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
        } catch (error) {
            console.log(Object.values(error.response.data.errors));
            setErrors(Object.values(error.response.data.errors));
        }
    };

    const register = ()=> {};

    const logout = ()=> {};


    return {
        login,
        register,
        logout
    }

}