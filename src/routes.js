import React from "react";
import Home from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Error from "./pages/not-found/NotFound";
import { useRoutes } from "react-router-dom";
import Favorites from "./pages/favorites/Favorites";
import ProductViewW from "./pages/productView/women/ProductViewW";
import ProductViewM from "./pages/productView/men/ProductViewM";
import CategoryM from "./pages/categoryPage/men/CategoryM";
import CategoryW from "./pages/categoryPage/women/CategoryW";

export const Routes = () => {
    const token = localStorage.getItem("access");
    const authorized = React.useMemo(() => Boolean(token), [token]);
    const PublicRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/cart", element: <Cart /> },
                { path: "/favorites", element: <Favorites /> },
                { path: "/login", element: <Login /> },
                { path: "/categories-woman/:category", element: <CategoryW /> },
                { path: "/categories-men/:category", element: <CategoryM /> },
                { path: "/categories-woman/:category/:id", element: <ProductViewW /> },
                { path: "/categories-men/:category/:id", element: <ProductViewM /> },
                { path: "*", element: <Error /> },
            ],
        },
    ];
    const PrivateRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/cart", element: <Cart /> },
                { path: "/favorites", element: <Favorites /> },
                { path: "/profile/info", element: <Profile /> },
                { path: "*", element: <Error /> },
            ],
        },
    ];

    return useRoutes(authorized ? PrivateRoute : PublicRoute);
};
