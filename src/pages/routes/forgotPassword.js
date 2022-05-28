import ForgotPassword from "../../components/screens/login/ForgotPassword";

export default {
    exact: true,
    name:'reset-password',
    protected:false,
    guestOnly: false,
    path:'/reset-password',
    component:ForgotPassword
}