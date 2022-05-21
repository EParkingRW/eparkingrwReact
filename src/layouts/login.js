import React from 'react';
import LoginPage from "../components/loginPage";

const Login = ({ children }) => <LoginPage>{children}</LoginPage>;

export const getLayout = (page) => <Login>{page}</Login>;

export default Login;
