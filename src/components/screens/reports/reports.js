import React, {useContext, useRef, useState} from "react";
import classes from "../../../components/screens/entrance/EntranceCss.module.css";
import cssClasses from "./Report.module.css";
import Clients from "../../../components/screens/parkingspace/clients";
import {Form} from "react-bootstrap";
import axios from "axios";
import config from "../../../config";
import SocketContext from "../../context/socket";

const Reports = () => {
    const fromDateRef = useRef(undefined);
    const toDateRef = useRef(undefined);
    const [cars, setCars] = useState([])
    const {carsInRange} = useContext(SocketContext)


    function handleChange(){
        const from = fromDateRef.current.value;
        const to = toDateRef.current.value;
        if(from!==undefined && to!==undefined && from.length > 5 &&from.length > 5){
            console.log("from "+from);
            console.log("to "+to);
            carsInRange(from,to).then((response) => {
                setCars([...response]);
            })
        }

    }

    return (
        <div>
            <div className={cssClasses.zIndex}>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <Form.Group controlId="dob">
                                                <Form.Label>from</Form.Label>
                                                <Form.Control onChange={() => {handleChange()}} ref={fromDateRef} type="date" name="dob" placeholder="from" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col"}>
                                            <Form.Group controlId="dob">
                                                <Form.Label>to</Form.Label>
                                                <Form.Control onChange={() => {handleChange()}} ref={toDateRef} type="date" name="dob" placeholder="to" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col"}>
                            <div className={"container " + classes.containerCustom}>
                                <div className="row">
                                    <div className={"col-sm-12 col-md-6 col-lg-3 " + classes.colOfSlots}>
                                        <div className="card border rounded">
                                            <div className={"card-body " + classes.slotsCardBody}>
                                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.availableSlotsValue}
                                                >
                                                    <strong>{cars.length} </strong></p>
                                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " + classes.availableSlots}>
                                                    Cars </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-12 col-md-6 col-lg-3 " + classes.cardColumn}>
                                        <div className="card border rounded">
                                            <div className={"card-body " + classes.vehicleInCardBody}>
                                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.vehicleInValue}>2300 RWF</p>
                                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " + classes.vehicleInText}>
                                                    in cash</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-md-6 col-lg-3 " + classes.cardColumn}>
                                        <div className="card border rounded">
                                            <div className={"card-body " + classes.totalClientsCardBody}
                                            >
                                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.totalClientsValue}>
                                                    <strong>43000 rwf</strong></p>
                                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " + classes.totalClientsText}>
                                                    on Mono</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cssClasses.mt100}>

                <Clients carsIn={cars}/>
            </div>
        </div>


    )
}
export default Reports