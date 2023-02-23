import clientAxios from "../config/axios.js";
import useSWR from "swr";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const useAuth = ({middleware, url}) => {

    const navigate = useNavigate();

    const token = localStorage.getItem('AUTH_TOKEN');

    const {data: user, error, mutate} = useSWR('/api/user', () =>
        clientAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors);
            })
    );

    const login = async (data, setErrors)=> {
        try {
            const response = await clientAxios.post('/api/login', data);
            // console.log(response.data.token);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            console.log(Object.values(error.response.data.errors));
            setErrors(Object.values(error.response.data.errors));
        }
    };

    const register = ()=> {};

    const logout = ()=> {};

    useEffect(() => {
        if (middleware === 'guest' && user && url) navigate(url);
        if (middleware === 'auth' && error) navigate('/auth/login');
    }, [user, error]);




    return {
        login,
        register,
        logout,
        user,
        error,
    }

}