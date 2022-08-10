import {createContext, useContext, useState} from "react";
import config from ".././../config";
import axios from "axios";
import UserContext from "./UserContext";

const PayContext = createContext();
export default PayContext;

export function PayProvider({children}){
    const {user} = useContext(UserContext)
    const [userCreation, setPayCreation] = useState({status:config.status.NOTHING,payload: {}});


    function turnGateUp(){
        try{
            let config1 = {
                method: 'get',
                url: `${config.arduinoURL}`,
                headers: { }
            };
            axios(config1)
                .then(function (response) {
                    if(response.status === 200 || response.status === 201){
                        console.log("complete setup");
                    }
    
                })
                .catch(function (error) {
                    console.log(error);
                });
        }catch (e) {
            console.log(e);
        }
    }


    async function handlePay(data){
        console.log(data)
        if(user.token === null){
            console.log("token is null")
            return {payload:null, status:config.status.ERROR}
        }
        if(data.payBy === "momo"){
            console.log(config.constants.Bearer+user.token)
            let dataNew = JSON.stringify({
                "amount": data.amount.toString(),
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

            return axios(configL)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    turnGateUp();
                    return {payload:response.data, status:config.status.DONE}
                })
                .catch(function (error) {
                    console.log(error);
                    return {payload:error, status:config.status.ERROR}
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

            return axios(configL)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    turnGateUp();
                    return {payload:response.data, status:config.status.DONE}
                })
                .catch(function (error) {
                    console.log(error);
                    return {payload:error, status:config.status.ERROR}
                });
        }
        return {payload:"", status:config.status.ERROR}

    }

    return (
        <PayContext.Provider value={{handlePay}}>
            {children}
        </PayContext.Provider>
    )
}