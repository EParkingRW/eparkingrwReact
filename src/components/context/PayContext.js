import {createContext, useContext, useState} from "react";
import config from ".././../config";
import axios from "axios";
import UserContext from "./UserContext";

const PayContext = createContext();
export default PayContext;

export function PayProvider({children}){
    const {user} = useContext(UserContext)
    const [userCreation, setPayCreation] = useState({status:config.status.NOTHING,payload: {}});



    const  handlePay =(data) =>{
        console.log(data)
        if(user.token === null){
            console.log("token is null")
            return
        }
        if(data.payBy === "momo"){
            console.log(config.constants.Bearer+user.token)
            let dataNew = JSON.stringify({
                "amount": data.amount,
                "phone_number": data.phone_number
            });

            let configL = {
                method: 'post',
                url: config.backendURL+"/api/v1/payment/momo",
                headers: {
                    'Authorization': config.constants.Bearer+user.token,
                    'Content-Type': 'application/json'
                },
                data : dataNew
            };

            axios(configL)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if(data.payBy === "cash"){
            let dataNew = JSON.stringify({
                "amount": data.amount
            });

            let configL = {
                method: 'post',
                url: config.backendURL+"/api/v1/payment/cash",
                headers: {
                    'Authorization': config.constants.Bearer+user.token,
                    'Content-Type': 'application/json'
                },
                data : dataNew
            };

            axios(configL)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    return (
        <PayContext.Provider value={{handlePay}}>
            {children}
        </PayContext.Provider>
    )
}