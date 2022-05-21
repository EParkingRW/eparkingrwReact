const settings = {
    backendURLLocal: "http://localhost:2023",
    backendURLRemote:"https://e-parking-be.herokuapp.com",
}
const status = {
    LOADING: 1,
    DONE: 2,
    ERROR: 3,
    NOTHING: 4
};
export default {
    backendURL:settings.backendURLRemote,
    status,
    paymentRate:23,
    minimumMoneyToPay:300,
    totalSlots: 560
}