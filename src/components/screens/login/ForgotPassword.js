import {Link, useSearchParams} from "react-router-dom";
import classes from "../signup/Css.module.css";
import logo from "../../../asserts/logo.svg"
import {Button} from "react-bootstrap";
import React, {Fragment, useContext, useRef,useState} from "react";
import LoginLayout from "../../../layouts/loginLayout";
import userContext from "../../context/UserContext";
import config from "../../../config";

export default function ForgotPassword(){
    return<Fragment>
        <LoginLayout>
            <ForgotPasswordContent/>
        </LoginLayout>
    </Fragment>
}
 function ForgotPasswordContent(){
    const [searchParams] = useSearchParams();
    const passField = useRef();
    const {handleResetPassword} = useContext(userContext);
     const [messagePart, setMessagePart] = useState(null);
     const [resetComplete, setResetComplete ] = useState(false);

    const token = searchParams.get("token");

    const handleResetButton = ()=> {
        handleResetPassword({password:passField.current.value, token:token}).then(response => {
            if(response.status === config.status.DONE){
                setMessagePart(<div className="alert alert-success" role="alert">
                    success, go to Login
                </div>)
                setResetComplete(true);
            }
            else {
                setMessagePart(<div className="alert alert-danger" role="alert">
                    fail to reset! try again
                </div>)
                setResetComplete(false);
            }

        });
    }
    return (<div className={"container-fluid "}
    >
        <div className="row">
            <div className="col">
                <form className={"text-center " + classes.form} id="form">
                    <div>
                        {messagePart}
                    </div>
                    <h4 className={classes.head} id="head">Reset password</h4>
                    <div><img className={"rounded img-fluid "+classes.image }id="image" alt={""}
                              src={logo}/></div>

                    <div className="form-group mb-3"><input ref={passField} className={"form-control "+classes.formum} type="password" id="phoneControl"
                                                            placeholder="password"/></div>
                    {/*{*/}
                    {/*    userCreation.status !== config.status.LOADING?(*/}
                    {
                        resetComplete?(<Button className={"btn-dark"}
                        >
                            <Link to ="/login">
                                goto login
                            </Link>

                        </Button>):(<Button className={"btn-dark"}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleResetButton();
                                            }}

                        >
                            reset password
                        </Button>)
                    }

                    {/*//     ):(
                    //         <Button className={"btn-dark"} disabled
                    //
                    //         >
                    //             loading
                    //         </Button>
                    //     )
                    // }*/}

                </form>
            </div>
        </div>
    </div>)
}