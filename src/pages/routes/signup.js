import SignUpPage from "../../callers/signup";

export default {
    exact: true,
    name:'SignUp',
    protected:false,
    guestOnly: false,
    path:'/signup',
    component:SignUpPage
}