import {Login} from "../components/screens/login";
import React from "react";
import { getLayout } from '../layouts/login';
const LoginPage = () =>{
    return(
        <Login/>
    )
};
LoginPage.getLayout = getLayout;
export default LoginPage