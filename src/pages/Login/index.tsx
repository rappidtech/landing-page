import React, { lazy, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = lazy(() => import("../../components/Login"));

const LoginFunc = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    // const signInWithGoogle = async () => {
    //     setAuthing(true);
    //     const provider = new GoogleAuthProvider();
    //     await signInWithPopup(auth, provider)
    //     .then((result) => {
    //         setAuthing(true);
    //         navigate("/admin");
    //     })
    //     .catch((error) => {
    //         setAuthing(false);
    //     });
    // }

    // const signInWithFacebook = async () => {
    //     setAuthing(true);
    //     const provider = new FacebookAuthProvider();
    //     await signInWithPopup(auth, provider)
    //     .then((result) => {
    //         setAuthing(true);
    //         navigate("/admin");
    //     })
    //     .catch((error) => {
    //         setAuthing(false);
    //     });
    // }

    return (
        <>
            <Login/>
        </>
    )
}

export default LoginFunc