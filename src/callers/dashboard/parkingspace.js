
import {Clients} from "../../components/screens/parkingspace";
import React from "react";
import Layout from "../../components/dashboard/Layout";
import {useContext} from "react";
import SocketContext from "../../components/context/socket";
const DashboardDocuments = () => {
    const {carsIn} = useContext(SocketContext);
    return(<Layout>
        <Clients carsIn={carsIn}/>
    </Layout>)
};


export default DashboardDocuments;
