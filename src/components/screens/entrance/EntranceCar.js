import classes from "../../../components/screens/entrance/EntranceCss.module.css";
import {Image} from "@chakra-ui/core";
import React from "react";

export default function EntranceCar({entranceCar,elapsedTime, setElapsedTime}){

    if(entranceCar===null){
        return <div></div>
    }else {
        return(
            <div>
                <h1 className={classes.carAtGateText}>Car at gate</h1>
                <div className={"card "+classes.carAtGateCard}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h4 className={"text-center "+classes.carAtGateValue}>{entranceCar.plateText}</h4>
                            </div>
                        </div>
                        <div className={"row "+classes.carAtGateImageRow}>
                            <div className="col d-flex justify-content-xl-center">
                                <Image className={classes.carAtGateImage}
                                       maxH={260}
                                                fallbackSrc={"/fallback1.svg"}
                                                src={entranceCar.imageUrl}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className={"text-end "+classes.carAtGateTimePass}>{elapsedTime + "s"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}