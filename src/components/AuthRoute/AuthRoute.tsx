import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
    console.log('AuthRoute')
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                navigate("/login");
            }
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('authorized', user);
            setLoading(false);
        } else {
            console.log("unauthorized");
            navigate("/login");
        }
    });
    
    if (isAuthenticated === null) {
        return <div>loading...</div>;
    }

    return (
        isAuthenticated ? <>{children}</> : null
    );
};

export default AuthRoute;