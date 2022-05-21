import { getLayout } from '../../layouts/dashboard';
import {Reports} from "../../components/screens/reports";
import React from "react";

const DashboardReports = () => <Reports/>;

DashboardReports.getLayout = getLayout;

export default DashboardReports;
