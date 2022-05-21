
import React, {useContext, useEffect} from "react";
import StateContext from "../../components/context/StateContext";
import classes from "../../components/screens/entrance/EntranceCss.module.css";
import SocketContext from "../../components/context/socket";
import config from "../../config";
export const Dashboard = () => {
    const {setPageTitle} = useContext(StateContext);

    const {carsIn} = useContext(SocketContext)
    const pageTitle = "Dashboard";
    useEffect(() => {
        setPageTitle(pageTitle);
    },)
    return (
        <div>
            <div className={"container " + classes.containerCustom}>
                <div className="row">
                    <div className={"col-sm-12 col-md-6 col-lg-3 " + classes.colOfSlots} >
                        <div className="card border rounded">
                            <div className={"card-body "+classes.slotsCardBody}>
                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title " + classes.availableSlots} >available
                                    slots</h4>
                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.availableSlotsValue}
                                >
                                    <strong>
                                        {config.totalSlots-carsIn.length}
                                        /
                                        {config.totalSlots}
                                    </strong></p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6 col-lg-3 "+classes.cardColumn}>
                        <div className="card border rounded">
                            <div className={"card-body " +classes.vehicleInCardBody}>
                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.vehicleInText}>Total
                                    vehicle in</h4>
                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.vehicleInValue}>
                                    {carsIn.length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6 col-lg-3 "+classes.cardColumn}>
                        <div className="card border rounded">
                            <div className={"card-body "+classes.totalClientsCardBody}
                            >
                                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.totalClientsText}>total
                                    clients/day</h4>
                                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.totalClientsValue}>
                                    <strong>12/400</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}