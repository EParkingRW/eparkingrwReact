import { getLayout } from '../../layouts/dashboard';
import {Clients} from "../../components/screens/parkingspace";
import React from "react";
import Layout from "../../components/dashboard/Layout";
const DashboardDocuments = () => <Layout><Clients/></Layout>;

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
