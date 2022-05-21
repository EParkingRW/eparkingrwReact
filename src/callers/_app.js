import React, {Fragment} from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import Nprogress from '../components/nprogress';
import theme from '../components/design-system';
import DefaultLayout from '../layouts/default';
import 'bootstrap/dist/css/bootstrap.css'
import {UserProvider} from "../components/context/UserContext";
import {StateProvider} from "../components/context/StateContext";
import {SocketProvider} from "../components/context/socket";

const App = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) =><Fragment>
          <DefaultLayout children={page} />

    </Fragment>);

  return (
      <SocketProvider>
          <UserProvider>
              <StateProvider>
                  <ChakraProvider theme={theme}>
                      <CSSReset />
                      <Nprogress />
                      {getLayout(<Component {...pageProps} />)}
                  </ChakraProvider>
              </StateProvider>
          </UserProvider>
      </SocketProvider>
  );
};

export default App;
