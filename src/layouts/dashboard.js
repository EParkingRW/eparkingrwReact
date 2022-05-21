import { Dashboard } from '../components/dashboard';
import React from 'react';

const DashboardLayout = ({ children }) => <Dashboard>{children}</Dashboard>;

export const getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardLayout;
