import Home from "@components/layout/Home";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import * as React from 'react';
import { IAuthContext, useAuthentication} from "@contexts/Authuciance";
import ManagingProduct from "@components/table/ManagingProduct";
import UserProduct from "@components/table/UserProduct";
import UserProfile from "@components/SettingUser/UserProfile";
import SiderBarMenu from "@components/SiderBar/SiderBarMenu";
import Verify from "@components/Form/Verify";
import OrderItem from "@components/table/OderItem";
import ManagingUser from "@components/ManagingUser/ManagingUser";
import TotalProduct from "@components/Product/TotalProduct";
import ProductDetail from "@Pages/ProductDetail/ProductDetails";
import NavBar from "@components/Navbar/navbar";
import Footer from "@components/footer/footer";
import SpeedDial from "@components/speedDial/SpeedDial";
import ScrollToTop from "./scrollToTop";
import { DashBoard } from "@components/DashBoard/DashBoard";

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