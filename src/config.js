const settings = {
    backendURLLocal: "http://localhost:2023",
    backendURLRemote:"https://e-parking-be.herokuapp.com",

}
const constants = {
    Bearer: "Bearer "
}
const status = {
    LOADING: 1,
    DONE: 2,
    ERROR: 3,
    NOTHING: 4
};
export default {
    backendURL:settings.backendURLLocal,
    status,
    paymentRate:23,
    minimumMoneyToPay:300,
    totalSlots: 560,
    constants
}