import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Loading from "../../common/Loading";

export interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                navigate("/admin")
            } else {
                setIsAuthenticated(false);
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);


    if (isAuthenticated === null) {
        return <Loading/>;
    }

    return (
        isAuthenticated ? <>{children}</> : null
    );
};

export default AuthRoute;