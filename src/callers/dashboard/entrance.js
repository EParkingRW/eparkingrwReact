import { getLayout } from '../../layouts/dashboard';
import {Entrance} from "../../components/screens/entrance";
import React, {Fragment} from "react";

const DashboardDocuments = () =><Fragment> <Entrance/></Fragment>;

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
