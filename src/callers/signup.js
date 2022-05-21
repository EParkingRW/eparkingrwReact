import {Signup} from "../components/screens/signup";
import React from "react";
import { getLayout } from '../layouts/dashboard';
import LoginLayout from "../layouts/loginLayout";
const SignUpPage = () =>{
    return(
        <LoginLayout>
            <Signup/>
        </LoginLayout>

    )
};
SignUpPage.getLayout = getLayout;
export default SignUpPage