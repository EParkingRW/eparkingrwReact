const settings = {
    backendURLLocal: "http://localhost:2023",
    backendTemporary: "https://e-parking-be.herokuapp.com",
    backendURLRemote:"https://e-parking-be.herokuapp.com",

}
const constants = {
    Bearer: "Bearer "
}
const roles = {
    admin:"b4462e58-8b81-4edd-8519-e247a1f7cca7",
    manager:"77b29bbb-a3da-44c9-b376-d7cf07088aad",
    normal:"fe2900d3-cd33-4a5f-abda-1b0cd1a91c57"

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
    constants,
    roles
}