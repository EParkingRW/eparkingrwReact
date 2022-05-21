import Entrance from "../../../callers/dashboard/entrance";

export default {
    exact: true,
    name:'Entrance',
    protected:false,
    guestOnly: false,
    path:'/entrance',
    component:Entrance
}