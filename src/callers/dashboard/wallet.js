import { getLayout } from '../../layouts/dashboard';
import {Wallet} from "../../components/screens/wallet";
import React from "react";

const DashboardDocuments = () => <Wallet/>;

DashboardDocuments.getLayout = getLayout;

export default DashboardDocuments;
