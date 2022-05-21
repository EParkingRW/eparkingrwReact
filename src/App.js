import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types";
import {SocketProvider} from "./components/context/socket";
import {UserProvider} from "./components/context/UserContext";
import {StateProvider} from "./components/context/StateContext";
import AppRoutes from "./AppRoutes";
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import DefaultLayout from './layouts/default';
import routes from './pages'
// import Nprogress from "./components/nprogress";
import {Fragment} from "react";
import theme from './components/design-system';

function Providers(props) {
  return null;
}
Providers.propTypes = {children: PropTypes.node};

function App() {
  return (
      <SocketProvider>
        <UserProvider>
          <StateProvider>

            <ChakraProvider theme={theme}>
              {/*<CSSReset />*/}
              {/*<Nprogress />*/}
              {/*{getLayout(<Component {...pageProps} />)}*/}
                <Router>
                    <AppRoutes routes={routes} />
                </Router>
            </ChakraProvider>
          </StateProvider>
        </UserProvider>
      </SocketProvider>
  );
}

export default App;
