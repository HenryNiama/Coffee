import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import AuthLayout from './layouts/AuthLayout'
import Inicio from "./views/Inicio.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Orders from "./views/Orders.jsx";
import Products from "./views/Products.jsx";



const router = createBrowserRouter([
    { path: '/', element: <Layout />,
        children: [
            {index: true, element: <Inicio />}
        ]
    },
    { path: '/auth', element: <AuthLayout />,
        children: [
            {path: '/auth/login', element: <Login />},
            {path: '/auth/register', element: <Register />}
        ]
    },
    {
        path: '/admin', element: <AdminLayout />,
        children: [{
            index: true,
            element: <Orders />
        },
            {path: '/admin/products', element: <Products />}
        ]

    }
]);

export default router;