import { getLayout } from '../../layouts/dashboard';
import {Clients} from "../../components/screens/parkingspace";
import React from "react";
const DashboardDocuments = () => <Clients/>;

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
