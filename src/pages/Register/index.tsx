import { lazy } from "react";

const SignUp = lazy(() => import("../../components/Register"));

const SignUpFunc = () => {
    return (
        <SignUp/>
    )
}

export default SignUpFunc