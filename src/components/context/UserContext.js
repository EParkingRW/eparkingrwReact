import {createContext, useState} from "react";
import config from "../../config";
import axios from "axios";

const UserContext = createContext();
export default UserContext;

export function UserProvider({children}){

    const userD = require('../assert/user.json');
    const [user, setUser] = useState({token: null,user: null});
    const [userCreation, setUserCreation] = useState({status:config.status.NOTHING,payload: {}});





    async function handleSignOut (){
        let configL = {
            method: 'post',
            url: config.backendURL+"/api/v1/auth/logout",
            headers: {
                'Authorization': config.constants.Bearer+user.token,
                'Content-Type': 'application/json'
            }
        };
        return axios(configL).then(reponse => {
            setUser({token: null,user: null});

            return reponse.data;
        }).catch(error => {
            setUser({token: null,user: null});
            return error
        })
    }
    async function handleSignUp(data){
        console.log(JSON.stringify({...data}));
        setUserCreation({...userCreation, status: config.status.LOADING});
        return axios.post(config.backendURL+"/api/v1/auth/signup", {...data})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log(response.data);
                    setUserCreation({payload: {...response.data}, status: config.status.DONE});
                    return {payload: {...response.data}, status: config.status.DONE}
                }
                else {
                    setUserCreation({payload: {...response.data}, status: config.status.ERROR});
                    return {payload: {...response.data}, status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error.response.data);
                setUserCreation({payload: {...error.response.data}, status: config.status.ERROR});
                return {payload: {...error.response.data}, status: config.status.ERROR}
            });
    }
    async function handleResetPassword(data){
        let configL = {
            method: 'put',
            url: config.backendURL+"/api/v1/auth/resetingpassword",
            data : {password:data.password, token:data.token}
        };
        return axios(configL).then(response => {
            console.log("reset pass")
            if(response.status === 200 || response.status === 201){
                console.log(response)
                return {payload:response.data, status:config.status.DONE}
            }
            else {
                console.log(response)
                return {payload:response.data, status:config.status.ERROR}
            }

        }).catch(error => {
            console.log(error)
            return {payload:error, status:config.status.ERROR}
        })
    }

    async function handleForgotPassword(data){
        let configL = {
            method: 'put',
            url: config.backendURL+"/api/v1/auth/forgot-password",
            headers: {
                'Authorization': config.constants.Bearer+user.token,
                'Content-Type': 'application/json'
            },
            data : {email:data.email}
        };
        return axios(configL).then(response => {
            console.log("forgot pass")
            if(response.status === 200 || response.status === 201){
                console.log(response)
                return {payload:response.data.data, status:config.status.DONE}
            }
            else {
                console.log(response)
                return {payload:response.data, status:config.status.ERROR}
            }

        }).catch(error => {
            console.log(error)
            return {payload:error, status:config.status.ERROR}
        })
    }

    async function handleLogin(data){
        return axios.post(config.backendURL+"/api/v1/auth/login", {...data})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log(response.data);
                    console.log(response.data.data.token)
                    let configL = {
                        method: 'get',
                        url: config.backendURL+"/api/v1/auth/profile",
                        headers: {
                            'Authorization': config.constants.Bearer+response.data.data.token,
                            'Content-Type': 'application/json'
                        }
                    };




                    setUser({...user, token:response.data.data.token});
                    return axios(configL).then(response => {
                        console.log("profile");
                        console.log(response.data.data.profile)
                        setUser({...user,user:response.data.data.profile})
                        return {payload: {...response.data}, status: config.status.DONE}
                    }).catch(error => {
                        console.log(error)
                        return {payload: {...response.data}, status: config.status.ERROR}
                    });
                }
                else {
                    return {payload: {...response.data}, status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error.response.data);
                setUserCreation({payload: {...error.response.data}, status: config.status.ERROR});
                return {payload: {...error.response.data}, status: config.status.ERROR}
            });
    }

    return (
        <UserContext.Provider value={{user, setUser,handleSignOut, handleResetPassword, handleForgotPassword, handleSignUp,handleLogin,userCreation, setUserCreation}}>
            {children}
        </UserContext.Provider>
    )
}