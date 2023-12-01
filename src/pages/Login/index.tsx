import { lazy } from "react";

const Login = lazy(() => import("../../components/Login"));

const LoginFunc = () => {
    return (
        <Login/>
    )
}

export default LoginFunc