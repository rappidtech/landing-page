import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/Welcome";

const WelcomePage = () => {
    const auth = getAuth();
    return (
        <Welcome/>
    )
}

export default WelcomePage
