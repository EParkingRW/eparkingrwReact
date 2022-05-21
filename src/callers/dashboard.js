import { getLayout } from '../layouts/dashboard';
import {Dashboard} from "../components/screens/Dashboard";
import React from "react";
const DashboardIndex = () => <Dashboard/>;

DashboardIndex.getLayout = getLayout;

export default DashboardIndex;
