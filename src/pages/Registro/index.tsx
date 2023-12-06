import { lazy } from "react";

const SignUp = lazy(() => import("../../components/Registro"));

const SignUpFunc = () => {
    return (
        <SignUp/>
    )
}

export default SignUpFunc