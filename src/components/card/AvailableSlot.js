import React from "react";
import classes from "../../components/card/CardCSS.module.css";
function AvailableSlot(){
    return (
        <div className="card border rounded">
            <div className={"card-body " + classes.cardB} >
                <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+ classes.cardHead}
                >available
                    slots</h4>
                <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text " + classes.cardBoy}
                   ><strong>12/400</strong>
                </p>
            </div>
        </div>
    )
}
export default AvailableSlot;