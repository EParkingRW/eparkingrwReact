import {createContext, useState} from "react";
import config from ".././../config";
import axios from "axios";
import {useContext} from "react";

const PayContext = createContext();
export default PayContext;

export function PayProvider({children}){

    const {user} = useContext()
    const [userCreation, setPayCreation] = useState({status:config.status.NOTHING,payload: {}});



    async function handlePay(data){
        const configLocal = {
            headers: { Authorization: `Bearer ${"dkdkdk"}` }
        };

        return axios.post(configLocal.backendURL+"/api/v1/payment/momo", {...data})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log(response.data);
                    //setPay({...user,...response.data})

                    return {payload: {...response.data}, status: configLocal.status.DONE}
                }
                else {
                    return {payload: {...response.data}, status: configLocal.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error.response.data);
                setPayCreation({payload: {...error.response.data}, status: configLocal.status.ERROR});
                return {payload: {...error.response.data}, status: configLocal.status.ERROR}
            });
    }

    return (
        <PayContext.Provider value={{handlePay}}>
            {children}
        </PayContext.Provider>
    )
}