import React from "react";
import classes from "../../../components/screens/entrance/EntranceCss.module.css";
import {DatePicker} from "chakra-ui-date-input";
import {Box, Container, FormLabel, HStack, VStack} from "@chakra-ui/core";
import cssClasses from "./Report.module.css";
import Clients from "../../../components/screens/parkingspace/clients";

const Reports = () => {

    return (
        <div>
            <div className={cssClasses.zIndex}>
                <HStack spacing='24px'>
                    <Box w='30%' h='40px'>
                        <VStack>
                            <Container minH={"400px"} maxW='md' bg='blue.600' color='white'>
                                <HStack spacing={"20px"}>
                                    <Box>
                                        <FormLabel>from</FormLabel>
                                    </Box>
                                    <Box>
                                        <DatePicker
                                            placeholder='click to pick'
                                            name='date'
                                            onChange={(event) => console.log(event)}
                                        />
                                    </Box>
                                </HStack>
                            </Container>
                            <Container color='white'>
                                <HStack spacing={"20px"}>
                                    <Box>
                                        <FormLabel>To</FormLabel>
                                    </Box>
                                    <Box>
                                        <DatePicker
                                            position={"relative"}
                                            z-index={"1"}
                                            placeholder='click to pick'
                                            name='date'
                                            onChange={(event) => console.log(event)}
                                        />
                                    </Box>
                                </HStack>
                            </Container>
                        </VStack>
                    </Box>
                    <Box w='70%' h='100%'>
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
                    </Box>

                </HStack>
            </div>
            <div className={cssClasses.mt100}>

                <Clients/>
            </div>
        </div>


    )
}
export default Reports