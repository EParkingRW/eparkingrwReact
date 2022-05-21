
import React from 'react';

const Default = ({ children }) => <div>{children}</div>;

export const getLayout = (page) => <Default>{page}</Default>;

export default Default;
