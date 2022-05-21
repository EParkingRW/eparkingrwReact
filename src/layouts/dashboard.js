
import React from 'react';

const DashboardLayout = ({ children }) => <div>{children}</div>;

export const getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardLayout;
