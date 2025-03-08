import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from "@Pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import * as React from "react";
import { useAuthentication } from "@contexts/Authuciance";
import UserProduct from "@components/user/UserProduct";
import UserProfile from "@components/user/profile/UserProfile";
import Verify from "@components/Form/VerifyEmail";
import ManagingUser from "@components/user/ManagingUser";
import FillterProduct from "@Pages/Product/FilterProduct";
import ProductDetail from "@Pages/Product/ProductDetails";
import SpeedDial from "@components/speedDial/SpeedDial";
import ScrollToTop from "./scrollToTop";
import { DashBoard } from "@Pages/DashBoard/DashBoard";
import SiderBarMenu from "@layout/SiderBar/SiderBar";
import ManagingProduct from "@components/table/ManagingProduct";
function Router() {
    const authContext = useAuthentication();
    const [isLoading, setIsLoading] = React.useState(true);
    const routes = [
        { path: "/", component: _jsx(Home, {}), isPrivate: false },
        { path: "/register/verify", component: _jsx(Verify, {}), isPrivate: false },
        { path: "/product", component: _jsx(ProductDetail, {}), isPrivate: false },
        { path: "/ManagingProduct", component: _jsx(ManagingProduct, {}), isPrivate: false },
        { path: "/total-product", component: _jsx(FillterProduct, {}), isPrivate: false },
        { path: "/user-products", component: _jsx(UserProduct, {}), isPrivate: false },
        { path: "/user-management", component: _jsx(ManagingUser, {}), isPrivate: false },
        { path: "/user-profile", component: _jsx(UserProfile, {}), isPrivate: true, allowedRoles: ["admin", "user"] },
        { path: "/dashboard", component: _jsx(DashBoard, {}), isPrivate: true, allowedRoles: ["admin"] },
    ];
    React.useEffect(() => {
        if (authContext.login !== undefined) {
            setIsLoading(false);
        }
    }, [authContext.login]);
    if (isLoading) {
        return _jsx("div", { children: "is loading ..... " }); // Use a reusable loading component
    }
    const renderRoute = (route) => {
        if (route.isPrivate) {
            if (!authContext.login) {
                return _jsx(Navigate, { to: "/", replace: true });
            }
            if (route.allowedRoles && !route.allowedRoles.includes(authContext.user?.role || "")) {
                return _jsx(Navigate, { to: "/", replace: true });
            }
            return route.component;
        }
        return route.component;
    };
    return (_jsxs(BrowserRouter, { children: [_jsx(ScrollToTop, {}), _jsx(SiderBarMenu, {}), _jsxs(Routes, { children: [routes.map((route, index) => (_jsx(Route, { path: route.path, element: renderRoute(route) }, index))), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }), _jsx(SpeedDial, {}), " "] }));
}
export default Router;
