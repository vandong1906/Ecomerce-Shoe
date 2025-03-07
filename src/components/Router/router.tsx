import Home from "@Pages/Home/Home";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import * as React from "react";
import { IAuthContext, useAuthentication } from "@contexts/Authuciance";

import UserProduct from "@components/user/UserProduct";
import UserProfile from "@components/user/profile/UserProfile";

import Verify from "@components/Form/VerifyEmail";
import ManagingUser from "@components/user/ManagingUser";
import FillterProduct from "@Pages/Product/FilterProduct";
import ProductDetail from "@Pages/Product/ProductDetails";
import SpeedDial from "@components/speedDial/SpeedDial";
import ScrollToTop from "./scrollToTop";
import NavBar from "@layout/Navbar/navbar";
import { DashBoard } from "@Pages/DashBoard/DashBoard";
import SiderBarMenu from "@layout/SiderBar/SiderBar";
import ManagingProduct from "@components/table/ManagingProduct";
interface RouteConfig {
  path: string;
  component: React.ReactElement;
  isPrivate?: boolean;
  allowedRoles?: string[];
}

function Router() {
  const authContext = useAuthentication();
  const [isLoading, setIsLoading] = React.useState(true);
  const routes: RouteConfig[] = [
    { path: "/", component: <Home />, isPrivate: false },
    { path: "/register/verify", component: <Verify />, isPrivate: false },
    { path: "/product", component: <ProductDetail />, isPrivate: false },
    { path: "/ManagingProduct", component: <ManagingProduct />, isPrivate: false },
    { path: "/total-product", component: <FillterProduct />, isPrivate: false },
    { path: "/user-products", component: <UserProduct />, isPrivate: false }, 
    { path: "/user-management", component: <ManagingUser />, isPrivate: false },
    { path: "/user-profile", component: <UserProfile />, isPrivate: true, allowedRoles: ["admin", "user"] },
    { path: "/dashboard", component: <DashBoard />, isPrivate: true, allowedRoles: ["admin"] },
  ];

  React.useEffect(() => {
    if (authContext.login !== undefined) {
      setIsLoading(false);
    }
  }, [authContext.login]);

  if (isLoading) {
    return <div>is loading ..... </div> // Use a reusable loading component
  }

  const renderRoute = (route: RouteConfig) => {
    if (route.isPrivate) {
      if (!authContext.login) {
        return <Navigate to="/" replace />;
      }
      if (route.allowedRoles && !route.allowedRoles.includes(authContext.user?.role || "")) {
        return <Navigate to="/" replace />;
      }
      return route.component;
    }
    return route.component;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
   
    <SiderBarMenu />
     {/* Consider conditional rendering based on route or auth */}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={renderRoute(route)}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
      <SpeedDial /> {/* Consider conditional rendering based on route or auth */}
    </BrowserRouter>
  );
}
export default Router;
