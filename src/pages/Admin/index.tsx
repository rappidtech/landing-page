import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const auth = getAuth();
    return (
        <div>
            AdminPage
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    )
}

export default AdminPage
