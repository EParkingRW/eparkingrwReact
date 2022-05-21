import LoginPage from "../../callers/login";

export default {
    exact: true,
    name:'Login',
    protected:false,
    guestOnly: false,
    path:'/login',
    component:LoginPage
}