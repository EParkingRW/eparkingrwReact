import React from 'react';
import LoginPage from "../components/LoginPage";

const LoginLayout = ({ children }) => <LoginPage>{children}</LoginPage>;

export const getLayout = (page) => <LoginLayout>{page}</LoginLayout>;

export default LoginLayout;
