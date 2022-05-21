import classes from "../../../components/screens/exit/ExitCss.module.css";
import React, {useRef} from "react";

export default function PayByMomo({amount}){
    const mobileNumber = useRef();

    const handleButton = () => {

    }

    return(
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputTel"
                           className="form-label">phone number</label>
                    <input type="email"
                           className="form-control"
                           id="exampleInputTel"
                           ref={mobileNumber}
                           aria-describedby="TelHelp"/>
                    <div id="emailHelp"
                         className="form-text">Enter customer phone number
                    </div>
                </div>

                <button onClick={() => {}} className={"btn btn-primary " + classes.cashText} type="button">Cash
                </button>
            </form>
        </div>
    )
}