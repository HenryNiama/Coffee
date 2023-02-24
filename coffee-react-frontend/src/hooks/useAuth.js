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

    const register = async (data, setErrors)=> {
        try {
            const response = await clientAxios.post('/api/register', data);
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            setErrors([]);
            await mutate();
            // console.log(response);
        } catch (error) {
            console.log(Object.values(error.response.data.errors));
            setErrors(Object.values(error.response.data.errors));
        }
    };


    const logout = async ()=> {

        try {
            await clientAxios.post('/api/logout',null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('AUTH_TOKEN');
            // mutate().then(r => navigate('/auth/login'));
            await mutate(undefined);
        } catch (error) {

            throw Error(error?.response?.data?.errors);
        }
    };

    useEffect(() => {
        if (middleware === 'guest' && user && url) navigate(url);
        if(middleware === 'guest' && user && user.admin) navigate('/admin');
        if (middleware === 'admin' && user && !user.admin) navigate('/');
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