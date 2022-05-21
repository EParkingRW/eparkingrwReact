
import classes from "./Css.module.css";
import {useContext, useEffect, useRef, useState} from "react";
import UserContext from "../../../components/context/UserContext";
import config from "../../../config";
import {Router} from "react-router-dom";
import React from "react";


export default function Login(){
    const {handleLogin, user} = useContext(UserContext)
    const login = useRef();
    const password = useRef();
    const [forgetPass, setForgetPass] = useState(false);
    const [messagePart, setMessagePart] = useState(null)

    useEffect(()=>{
        if(messagePart!==null){
            setTimeout(() => {
                setMessagePart(null)
            },2000)
        }
    });

    const handleSubmit = () =>{
        handleLogin({login:login.current.value, password: password.current.value}).then((response) => {
            if(response.status === config.status.ERROR){
                try {
                    setMessagePart(<div className="alert alert-danger" role="alert">
                        {response.payload.error.message}
                    </div>)
                }catch (e) {
                    console.log(e)
                }
            }
            else if(response.status === config.status.DONE){
                Router.push("/dashboard")
            }
        });
    }
    return(
        <div className={"container-fluid "}
        >
            <div className="row">
                <div className="col">
                    <form className={"text-center " + classes.form} id="form">
                        <div>
                            {messagePart}
                        </div>
                        <h1 className={classes.head} id="head">Login</h1>
                        <div><img className={"rounded img-fluid "+classes.image }id="image" alt={""}
                                  src="logo.svg"/></div>
                        <div className="form-group mb-3"><input ref={login} className={"form-control "+classes.formum} type="email" id="formum"
                                                                placeholder="Email"/></div>
                        {
                            forgetPass?"":(<div className="form-group mb-3"><input ref={password} className={"form-control "+classes.formum2} type="password" id="formum2"
                                                                                   placeholder="Password"/></div>)
                        }
                        {
                            forgetPass?(<button
                                onClick={() => {}}
                                as="a"
                                fontWeight="medium"
                                colorScheme='blue' variant='outline'
                                mt={4}
                                maxW="200px"

                            >
                                send Recover Email
                            </button>)
                                :
                                (<button
                                onClick={() => handleSubmit()}
                                as="a"

                                fontWeight="medium"
                                colorScheme='blue' variant='outline'
                                mt={4}
                                maxW="200px"

                            >
                                Login
                            </button>)
                        }
                        {
                            forgetPass?(
                                <a onClick={(event) => {event.preventDefault(); setForgetPass(false)}} id="linkas" className={classes.linkas}>back to login</a>
                            ):(<a onClick={(event) => {event.preventDefault(); setForgetPass(true)}} id="linkasf" className={classes.linkas} href="#">Forgot your e mail or password?</a>)
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}