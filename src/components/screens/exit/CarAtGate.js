import classes from "../../../components/screens/exit/ExitCss.module.css";
import PayByMomo from "../../../components/screens/exit/PayByMomo";
import PayByCard from "../../../components/screens/exit/PayByCard";
import React from "react";
import {convertFromStringToDate} from "../../../utils/functions";
import config from "../../../config";

export default function CarAtGate({setShowPayByCash, setShowPayByMomo,showPayByMomo,setShowPayByCard,showPayByCash,
                                      showPayByCard, exitCar}){
    if(exitCar==null){
        return (<div>no car at gate</div>)
    }
    else {
        const entranceDate = convertFromStringToDate(exitCar.createdAt);
        const exitedDate = convertFromStringToDate(exitCar.exitedAt);

        let difference= Math.abs(exitedDate-entranceDate);
        let min = (difference/(1000 * 60)).toFixed(2)
        let moneyToPay = Math.round(min*config.paymentRate)
        moneyToPay = moneyToPay > config.minimumMoneyToPay ? moneyToPay : config.minimumMoneyToPay
        return(
            <div className={"row "+classes.carAtGateRow}>
                <div className="col">
                    <h1 className={ classes.carAtGateText}>Car at gate</h1>
                    <div className={classes.carAtGateCardBody}>
                        <div className="p-3 ">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <div className="row">
                                        <div className="col">
                                            <p className={ classes.carAtGatePlateNumber}>{exitCar.plateText}</p>
                                        </div>
                                    </div>
                                    <div className="row w-100">
                                        <div className="col w-100">
                                            <img className={classes.carAtGateImage}
                                                                          src={exitCar.imageUrl}/></div>
                                    </div>
                                    <h1 className={classes.payByText}>Pay
                                        by</h1>
                                    <div className="row">
                                        <div className="col justify-content-xxl-center align-items-xxl-center">
                                            <div className={"card "+classes.modeOfPaymentCard}>
                                                <div
                                                    className="card-body d-flex justify-content-xxl-center align-items-xxl-center">
                                                    <div className="row">
                                                        <div className="col">
                                                            <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={() => {setShowPayByMomo((i)=>!i)}} type="button">Mobile money
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button onClick={() => {setShowPayByCash((i)=>!i)}} className={"btn btn-primary " + classes.cashText} type="button">Cash
                                                            </button>
                                                        </div>
                                                        <div className="col">
                                                            <button onClick={() => {setShowPayByCard((i)=>!i)}} className={"btn btn-primary "+classes.bankButton} type="button">Bank
                                                            </button>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className={"card-footer"}>
                                                    <div className={"row"}>
                                                        <div className={"col"}>
                                                            <div className={showPayByMomo?"d-block ":"d-none"}>
                                                                <div>
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="exampleInputTel"
                                                                                   className="form-label">phone number</label>
                                                                            <input type="email"
                                                                                   className="form-control"
                                                                                   id="exampleInputTel"
                                                                                   aria-describedby="TelHelp"/>
                                                                            <div id="emailHelp"
                                                                                 className="form-text">Enter customer phone number
                                                                            </div>
                                                                        </div>

                                                                        <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={() => {}} type="button">pay
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className={showPayByCash?"d-block ":"d-none"}>
                                                                <PayByMomo amount={2000}/>
                                                            </div>
                                                            <div className={showPayByCard?"d-block ":"d-none"}>
                                                                <PayByCard/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.entranceTimeCard}>
                                                <div className={"card-body "+ classes.entranceTimeCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.entranceTimeText}>Entrance
                                                        Time</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.entranceTimeValue}>
                                                        {
                                                            entranceDate.getHours()+": "+ entranceDate.getMinutes()
                                                        }
                                                        {/*3: 30 pm*/}
                                                    </p>
                                                    <p className={"text-center card-text "+classes.entranceTimeDateValue}>{
                                                        "on "+entranceDate.getDate()+"."+entranceDate.getMonth()+"."+entranceDate.getFullYear()
                                                    }
                                                    {/*on 24.05.2022*/}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row "+classes.moneyToPayRow}>
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.moneyToPayCard}>
                                                <div className={"card-body "+classes.moneyToPayCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.moneyToPayText}>Money
                                                        to pay</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.moneyToPayValue}>
                                                        {moneyToPay +" rwf"}
                                                        {/*130, 000 rwf*/}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row "+classes.totalTimeRow}>
                                        <div className="col d-flex justify-content-center justify-content-md-center">
                                            <div className={"card border rounded "+classes.totalTimeCard}>
                                                <div className={"card-body "+classes.totalTimeCardBody}>
                                                    <h4 className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-title "+classes.totalTimeCardText}>Total
                                                        min</h4>
                                                    <p className={"text-center text-sm-center text-md-center text-lg-center text-xl-center text-xxl-center card-text "+classes.totalTimeCardValue}>
                                                        {
                                                            min +" min"
                                                        }
                                                        {/*120 min*/}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}