import Page from '../components/page';
import React from 'react';

const Default = ({ children }) => <Page>{children}</Page>;

export const getLayout = (page) => <Default>{page}</Default>;

export default Default;
