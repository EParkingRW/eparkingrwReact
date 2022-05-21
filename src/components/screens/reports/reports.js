import React from "react";
import classes from "../../../components/screens/entrance/EntranceCss.module.css";
import cssClasses from "./Report.module.css";
import Clients from "../../../components/screens/parkingspace/clients";

const Reports = () => {

    return (
        <div>
            <div className={cssClasses.zIndex}>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <div className={"row"}>
                                <div className={"col"}>

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
                                                    <strong>300 </strong></p>
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

                <Clients/>
            </div>
        </div>


    )
}
export default Reports