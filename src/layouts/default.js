import Page from '../components/Page';
import React from 'react';

const Default = ({ children }) => <Page>{children}</Page>;

export const getLayout = (page) => <Default>{page}</Default>;

export default Default;
