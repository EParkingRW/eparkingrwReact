import DashboardIndex from "../../../callers/dashboard/dashboard";

export default {
    exact: true,
    name:'Dashboard',
    protected:false,
    guestOnly: false,
    path:'/dashboard',
    component:DashboardIndex
}