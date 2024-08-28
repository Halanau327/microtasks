import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "./Login";
import * as React from "react";


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED_PAGE: '/protectedPage',
    ERROR: '/error',
    LOGIN: '/login'
} as const


const publicRoutes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to={"/adidas"}/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
        errorElement: <Error404/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: "/protectedPage",
        element: <ProtectedPage/>
    },

]

export const PrivateRoutes = () => {
    const isAuth = false
    return <>{isAuth ? <Outlet/> : <Navigate to={'/login'}/>}</>

};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes,
            },
            ...publicRoutes
        ],
    },
]);

