import Home from "@Pages/Home/Home";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import * as React from "react";
import { IAuthContext, useAuthentication } from "@contexts/Authuciance";
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
import SiderBarMenu from "@layout/SiderBar/SiderBar";
import NavBar from "@layout/Navbar/navbar";
import Footer from "@layout/footer/footer";
import { DashBoard } from "@Pages/DashBoard/DashBoard";

function Router() {
  const authContextValue: IAuthContext = useAuthentication();
  const [Loading, setLoading] = React.useState(false);
  const publicRouter = [
    {
      component: <SiderBarMenu />,
      path: "/SiderBarMenu",
    },
    {
      component: <Home />,
      path: "/",
    },
    {
      component: <Verify />,
      path: "/register/verify",
    },
    {
      component: <ProductDetail />,
      path: "/product",
    },
    {
      component: <TotalProduct />,
      path: "/totalProduct",
    },
    {
      component: <UserProduct />,
      path: "/UserProduct",
    },
    {
      component: <ManagingUser />,
      path: "/ManagingUser",
    },
  ];
  const privateRouter = [
    {
      component: <UserProfile />,
      path: "/UserProfile",
    },
    {
      component: <DashBoard />,
      path: "/DashBoard",
    },
  ];

  React.useEffect(() => {
    console.log(authContextValue.login);
    if (authContextValue.login !== undefined) {
      setLoading(false);
    }
  }, [authContextValue.login]);

  if (Loading) {
    return <div>Loading...</div>;
  }
  console.log(authContextValue.login);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          {publicRouter.map((router, index) => {
            return (
              <Route
                key={index}
                element={router.component}
                path={router.path}
              />
            );
          })}

          {privateRouter.map((router, index) => (
            <Route
              key={index}
              path={router.path}
              element={
                authContextValue.login ? (
                  authContextValue.user?.role === "admin" ? (
                    router.component
                  ) : (
                    <Navigate to="/" />
                  )
                ) : (
                  <div>Loading...</div>
                )
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <SpeedDial />
      </BrowserRouter>
    </>
  );
}
export default Router;
