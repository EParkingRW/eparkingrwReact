import classes from "../../../components/screens/exit/ExitCss.module.css";
import PayByCard from "../../../components/screens/exit/PayByCard";
import React, {useContext, useEffect, useState} from "react";
import {convertFromStringToDate, validatePhoneNumber} from "../../../utils/functions";
import config from "../../../config";
import SocketContext from "../../context/socket";

export default function CarAtGate({setShowPayByCash, setShowPayByMomo,showPayByMomo,setShowPayByCard,showPayByCash,
                                      showPayByCard, exitCar,handlePay, hidePay, setHidePay}){
    const [mobileNumber, setMobileNumber] = useState("078");
    const [incorrectTelMessage, setIncorrectTelMessage] = useState(null);
    const [message,setMessage] = useState(null);
    const {lastPaymentStatus} = useContext(SocketContext)

    useEffect(() => {
        setHidePay(false)
        setMessage(null)
    },[exitCar])
    useEffect(() => {
        if(lastPaymentStatus !== null){
            if(lastPaymentStatus.status === 200 || lastPaymentStatus.status === 201){
                setMessage(<div className="alert alert-success" role="alert">
                    payment complete successful
                </div>)
            }else{
                setMessage(<div className="alert alert-danger" role="alert">
                    payment fail
                </div>)
            }
        }
    },[lastPaymentStatus])
    let moneyToPay = config.minimumMoneyToPay;
    function handlePayByMomo() {
        if(validatePhoneNumber(mobileNumber)){
            console.log("correct")
            setMessage(<div className="alert alert-primary" role="alert">
                loading
            </div>);
            handlePay({payBy:"momo",amount:moneyToPay, phone_number:mobileNumber}).then(response => {
                if(response.status === config.status.DONE){
                    setMessage(<div className="alert alert-success" role="alert">
                        request send you will be redirected shortly
                    </div>);
                    setHidePay(true);
                }else {
                    setMessage(<div className="alert alert-danger" role="alert">
                        something wrong happen
                    </div>);
                }

            })
        }
        else {
            console.log("not correct")
        }

    }
    function handlePayByCash(){
        setMessage(<div className="alert alert-primary" role="alert">
            loading
        </div>);
        handlePay({payBy:"cash",amount:moneyToPay}).then(response => {
            if(response.status === config.status.DONE){
                setMessage(<div className="alert alert-success" role="alert">
                    pay by cash success
                </div>);
                setHidePay(true);
            }else {
                setMessage(<div className="alert alert-danger" role="alert">
                    error
                </div>);
            }

        })
    }
    const handleMobileNumberChange = (event) => {
        if(validatePhoneNumber(event.target.value)){
            setIncorrectTelMessage(null);
        }
        else {
            setIncorrectTelMessage("enter correct phoneNumber");
        }
        setMobileNumber(event.target.value);
    }
    if(exitCar==null){
        return (<div>no car at gate</div>)
    }
    else {
        const entranceDate = convertFromStringToDate(exitCar.createdAt);
        const exitedDate = convertFromStringToDate(exitCar.exitedAt);

        let difference= Math.abs(exitedDate-entranceDate);
        let min = (difference/(1000 * 60)).toFixed(2)
        moneyToPay = Math.round(min*config.paymentRate)
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
                                    {message}
                                    {hidePay?"": <div className="row">
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
                                                        {/*<div className="col">*/}
                                                        {/*    <button onClick={() => {setShowPayByCard((i)=>!i)}} className={"btn btn-primary "+classes.bankButton} type="button">Bank*/}
                                                        {/*    </button>*/}
                                                        {/*</div>*/}
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
                                                                            <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange}
                                                                                   className="form-control"
                                                                                   id="exampleInputTel"
                                                                                   aria-describedby="TelHelp"/>
                                                                            <div id="emailHelp"
                                                                                 className="form-text">Enter customer phone number
                                                                            </div>
                                                                            {incorrectTelMessage===null?null:<div>
                                                                                <div className="alert alert-danger"
                                                                                     role="alert">
                                                                                    {incorrectTelMessage}
                                                                                </div>
                                                                            </div>}
                                                                        </div>

                                                                        <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={handlePayByMomo} type="button">pay
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className={showPayByCash?"d-block ":"d-none"}>
                                                                <div>
                                                                    <form>
                                                                        <button className={"btn btn-primary "+classes.mobileMoneyText} onClick={handlePayByCash} type="button">pay
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className={showPayByCard?"d-block ":"d-none"}>
                                                                <PayByCard/>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div> }
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