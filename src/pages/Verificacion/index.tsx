import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Verificacion from "../../components/Verificacion";

const VerificacionPage = () => {
    const auth = getAuth();
    return (
        <Verificacion/>
    )
}

export default VerificacionPage
