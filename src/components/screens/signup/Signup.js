
import classes from "./Css.module.css";
import {useRef, useContext, useState, useEffect} from "react";
import UserContext from "../../../components/context/UserContext";
import config from "../../../config";
import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

export default function Signup(){
    const {userCreation,handleSignUp} = useContext(UserContext);
    const email = useRef()
    const name = useRef()
    const phone = useRef()
    const [messagePart, setMessagePart] = useState(null)
    useEffect(()=>{
        if(messagePart!==null){
            setTimeout(() => {
                setMessagePart(null)
            },2000)
        }
    });
    const handleSubmit = async () => {
         const data = {"email":email.current.value,"name":name.current.value,"phone":phone.current.value}
        handleSignUp(data).then((userCreationA => {
            if(userCreationA.status === config.status.ERROR){
                try {
                    setMessagePart(<div className="alert alert-danger" role="alert">
                        {userCreationA.payload.error.message}
                    </div>)
                }catch (e) {
                    console.log(e)
                }
            }
            else if(userCreationA.status === config.status.DONE){
                setMessagePart(<div className="alert alert-success" role="alert">
                    creation successful
                </div>)
            }
        }));
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
                        <h1 className={classes.head} id="head">user creation</h1>
                        <div><img className={"rounded img-fluid "+classes.image }id="image" alt={""}
                                  src="logo.svg"/></div>
                        <div className="form-group mb-3"><input ref={email}
                            onChange={() => {}}
                            className={"form-control "+classes.formum} type="email" id="emailControl"
                                                                placeholder="Email"/></div>
                        <div className="form-group mb-3"><input ref={name} className={"form-control "+classes.formum} type="text" id="usernameControl"
                                                                placeholder="Username"/></div>
                        <div className="form-group mb-3"><input ref={phone} className={"form-control "+classes.formum} type="tel" id="phoneControl"
                                                                placeholder="phone"/></div>
                        {
                            userCreation.status !== config.status.LOADING?(
                                <button
                                    onClick={() => handleSubmit()}

                                >
                                    Signup
                                </button>
                            ):(
                                <button disabled

                                >
                                    loading
                                </button>
                            )
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}