import {createContext, useEffect, useState} from "react";
import io from "socket.io-client";
import config from "../../config";
import {convertFromStringToDate} from "../../utils/functions";
import axios from "axios";

const SocketContext = createContext();
export default SocketContext;

export function SocketProvider({children}){
    const socket = io(config.backendURL);
    const [exitCar, setExitCar] = useState(null);
    const [entranceCar, setEntranceCar] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [allCars, setAllCars] = useState([])
    const [carsIn, setCarsIn] = useState([])
    const [payedByCash, setPayedByCash] = useState([]);
    const [payedByMomo, setPayedByMomo] = useState([])
    function addMoreField(each) {
        let EntranceDateFormed = null;
        let EntranceTime = null;
        let min = null;
        let moneyToPay = null;
        let inHours = null;
        try {
            const entranceDate = convertFromStringToDate(each.createdAt);
            let exitedDate = convertFromStringToDate(each.exitedAt);
            if(entranceDate.toString() === exitedDate.toString()){
                exitedDate = Date.now()
            }
            let difference= Math.abs(exitedDate-entranceDate);
            min = (difference/(1000 * 60)).toFixed(2)

            let h = Math.floor(min / 60);
            let m = Math.floor(min % 60);
            inHours = h+" : "+m +" h";
            moneyToPay = Math.round(min*config.paymentRate)
            moneyToPay = moneyToPay > config.minimumMoneyToPay ? moneyToPay : config.minimumMoneyToPay

            EntranceDateFormed = entranceDate.getDate()+"."+(entranceDate.getMonth()+1)+"."+entranceDate.getFullYear();
            EntranceTime = entranceDate.getHours()+": "+ entranceDate.getMinutes();
        }catch (e) {

        }finally {
            return{
                ...each, "EntranceTime":EntranceTime,
                "EntranceDate":EntranceDateFormed,
                totalMin:min,
                inHours:inHours,
                money:moneyToPay
            }
        }
    }
    const loadCars = () => {
        return axios.get(config.backendURL+"/api/v1/vehicles")
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log("inside state")
                    console.log(response.data.data.data);

                    return {payload: [...response.data.data.data], status: config.status.DONE}
                }
                else {
                    return {payload: [response.data], status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error)
                return {payload: {...error.response}, status: config.status.ERROR}
            });
    }
    const carsInRange = (from, to) => {
        return axios.post(config.backendURL+"/api/v1/vehicles/range", {startingDate:from, endingDate:to})
            .then(function (response) {
                if(response.status === 201 || response.status === 200){
                    console.log("inside state")
                    console.log(response.data.data.data);

                    return {payload: [...response.data.data.data], status: config.status.DONE}
                }
                else {
                    return {payload: [response.data], status: config.status.ERROR}
                }

            }).then((output) => {
                return {...output}
            }).then(data => {
                console.log(data)
                let all = []
                try {
                    all = data?.payload?.map(each => {
                        return addMoreField(each);

                    })
                }catch (e) {
                }


                return [...all]
            })
            .catch(function (error) {
                console.log("before error")
                console.log(error)
                return {payload: {...error.response}, status: config.status.ERROR}
            });
    }

    useEffect(() => {
        loadCars().then(data => {
            console.log("inside clients")
            console.log(data)
            let all = []
            try {
                all = data?.payload?.map(each => {
                    return addMoreField(each);

                })
            }catch (e) {
            }


            setAllCars([...all])
        })
    },[])
    useEffect(() => {
        if(allCars.length !== 0){
            allCars.forEach(each => {
                if(each.isInside){
                    let found = false;
                    carsIn.forEach(eachIn => {
                        if(each.plateText === eachIn.plateText){
                            found = true;
                        }
                    });
                    if(!found){
                        setCarsIn([...carsIn, {...each}])
                    }
                }
            })
        }
    },[allCars])
    useEffect(() => {
        if(exitCar !== null){
            let newArray = [];
            carsIn.forEach(each => {
                if(each.plateText !== exitCar.plateText){
                    newArray.push(each)
                }
            });
            setCarsIn(newArray)
        }
    }, [exitCar])
    useEffect(() => {
        setAllCars([...allCars, addMoreField(entranceCar)])
    },[entranceCar])

    useEffect(() => {
        // const socket = io(config.backendURL);
        socket.on("connection", () => console.log("connected"));
        socket.on("disconnect", () => console.log("disconnected"));
        socket.on("data", (data) => {
            console.log(data);
            setEntranceCar({...data.data})
            setElapsedTime(0);
        });


    },[])

    useEffect(() => {
        // const socket = io(config.backendURL);
        socket.on("connection", () => console.log("connected"));
        socket.on("disconnect", () => console.log("disconnected"));
        socket.on("exit", (data) => {
            console.log(data.data);
            setExitCar({...data.data})
        });
        const date = convertFromStringToDate("2022-05-12T12:30:41.813Z")
        console.log("date")
        console.log(date.getDay())


    },[])

    return (
        <SocketContext.Provider value={{exitCar,setExitCar,
            entranceCar, setEntranceCar,elapsedTime, setElapsedTime,allCars, carsIn,carsInRange}}>
            {children}
        </SocketContext.Provider>
    )
}