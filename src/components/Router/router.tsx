import Home from "@Pages/Home/Home";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import * as React from 'react';
import { IAuthContext, useAuthentication} from "@contexts/Authuciance";
import ManagingProduct from "@components/table/ManagingProduct";
import UserProduct from "@components/table/UserProduct";
import UserProfile from "@components/SettingUser/UserProfile";

import Verify from "@components/Form/VerifyEmail";
import OrderItem from "@components/table/OderItem";
import ManagingUser from "@components/ManagingUser/ManagingUser";
import TotalProduct from "@Pages/Product/TotalProduct";
import ProductDetail from "@Pages/Product/ProductDetails";
import SpeedDial from "@components/speedDial/SpeedDial";
import ScrollToTop from "./scrollToTop";
import { DashBoard } from "@Pages/DashBoard/DashBoard";
import SiderBarMenu from "@layout/SiderBar/SiderBarMenu";
import NavBar from "@layout/Navbar/navbar";
import Footer from "@layout/footer/footer";

function Router() {
    const authContextValue: IAuthContext = useAuthentication();
    const publicRouter = [
        {
            component: <DashBoard/>, path: "/DashBoard"
        },
        {
            component: <SiderBarMenu/>, path: "/SiderBarMenu"
        },
        {
            component: <Home/>, path: "/"
          
        },
        {
            component: <Verify/>, path: "/register/verify"
           
        },
        {
            component: <ProductDetail/>, path: "/product"
        },
        {
            component: <TotalProduct/>, path: "/totalProduct"
        },
        {
            component: <UserProduct/>, path: "/UserProduct"
        },
        {
            component: <ManagingUser/>, path: "/ManagingUser"
        },
        {
            component: <UserProfile/>, path: "/UserProfile"
        }

    ]
    const privateRouter = [
        {
            component: <UserProfile/>, path: "/UserProfile"
        }
    ]
    return (
        <>

                <BrowserRouter> 
                <ScrollToTop/>
                <NavBar/>   
                    <Routes>
                      
                        {
                            publicRouter.map((router, index) => {
                                return <Route key={index} element={router.component} path={router.path}/>
                            })
                        }
                        {
                            authContextValue.login && privateRouter.map((router, index) => {
                                return <Route key={index} element={router.component} path={router.path}/>
                            })
                        }

                    </Routes>
                    <Footer/>
                    <SpeedDial/>
                </BrowserRouter>

        </>
    )
}
export default Router;