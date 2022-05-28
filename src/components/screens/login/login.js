
import classes from "./Css.module.css";
import {useContext, useEffect, useRef, useState} from "react";
import UserContext from "../../../components/context/UserContext";
import config from "../../../config";
import {useNavigate  } from "react-router-dom";
import React from "react";
import {Button} from "react-bootstrap";


export default function Login(){
    const {handleLogin, user} = useContext(UserContext)
    const login = useRef();
    const password = useRef();
    const [forgetPass, setForgetPass] = useState(false);
    const [messagePart, setMessagePart] = useState(null)

    let navigate = useNavigate() ;

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
                navigate('/dashboard', { replace: true })
                // history.push("/dashboard");
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
                            forgetPass?(<Button className={"btn-dark"}
                                onClick={() => {}}

                            >
                                send Recover Email
                            </Button>)
                                :
                                (<Button className={"btn-dark"} type={"button"}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleSubmit()
                                }}

                            >
                                Login
                            </Button>)
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