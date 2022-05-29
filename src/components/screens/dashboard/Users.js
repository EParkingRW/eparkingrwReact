import {Fragment, useContext} from "react";
import classes from "./Css.module.css"
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import userContext from "../../context/UserContext";
const DashContent = () => {
    const {user} = useContext(userContext)
    return(
        <Fragment>
            <main className={"page "+classes.page} >
                <section className="clean-block about-us">
                    <div className={"row justify-content-center "+classes.mainRow}>
                        <div className={"col "}>
                            <div className="card clean-card text-center">
                                <FontAwesomeIcon className="card-img-top w-100 d-block" size={"10x"} icon={faUser} color="yellow" />

                                <div className="card-body info">
                                    <div className={"row "+classes.cardBodyRow}>
                                        <div className={"col-md-12 "+classes.cardBodyCol}>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="labels"><strong>Name</strong></p>
                                                </div>
                                                <div className="col">
                                                    <p className="labels">{user.user.name}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="labels"><strong>Email</strong></p>
                                                </div>
                                                <div className="col">
                                                    <p className="labels">{user.user.email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="labels"><strong>Phone Number</strong></p>
                                                </div>
                                                <div className="col">
                                                    <p className="labels">{user.user.phoneNumber}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="labels"><strong>Role</strong></p>
                                                </div>
                                                <div className="col">
                                                    <p className="labels">{user.user.role.title}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    </Fragment>)
}



const Users =() =>{
    return <DashContent/>
}

export default Users;