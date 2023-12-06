import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Planes from "../pages/Planes";
import Register from "../pages/Registro";
import Templates from "../pages/Templates";
import routes from "./config";
import { Styles } from "../styles/styles";
import { initializeApp } from 'firebase/app';
import { config } from '../config/config';
import AuthRoute from "../components/AuthRoute/AuthRoute";
import Loading from "../common/Loading";
initializeApp(config.firebaseConfig);

const Router = () => {

    const location = useLocation();
    const noHeaderFooterRoutes = [
        "/login", 
        "/registro", 
        "/verificacion", 
        "/recuperar", 
        "/verificada",
        "/welcome"
    ];
    const protectedRoutes = ["/admin"];
    
    const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);
    const protect = location.pathname.includes(protectedRoutes[0])

    return (
        <Suspense fallback={<Loading></Loading>}>
            <Styles />
            {showHeaderFooter && <Header />} 
                <Routes>
                    {/* <Route path="/login" element={<Login />}></Route>
                    <Route path="/" element={<AuthRoute><Home /></AuthRoute>}></Route>
                    <Route path="/admin" element={<AuthRoute><Admin /></AuthRoute>}></Route>
                    <Route path="/planes" element={<AuthRoute><Planes /></AuthRoute>}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/templates" element={<AuthRoute><Templates /></AuthRoute>}></Route> */}
                    {routes.map((route, index) => {
                        const Component = lazy(route.component);
                        if (protect) {
                            return <Route path={route.path} element={<AuthRoute><Component /></AuthRoute>} />;
                        }
                        return <Route path={route.path} element={<Component />} />;
                    })}
                </Routes>
            {showHeaderFooter && <Footer />}
        </Suspense>
    );
};

export default Router;


<Route path="/login" element={<Login />}></Route>