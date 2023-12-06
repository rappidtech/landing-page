import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CuentaVerificada from "../../components/CuentaVerificada";

const CuentaVerificadaPage = () => {
    const auth = getAuth();
    return (
        <CuentaVerificada/>
    )
}

export default CuentaVerificadaPage
