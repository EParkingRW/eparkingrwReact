import {Signup} from "../components/screens/signup";
import React from "react";
import { getLayout } from '../layouts/dashboard';
import Login from "../layouts/login";
const SignUpPage = () =>{
    return(
        <Login>
            <Signup/>
        </Login>

    )
};
SignUpPage.getLayout = getLayout;
export default SignUpPage