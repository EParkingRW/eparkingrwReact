import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types";
import {SocketProvider} from "./components/context/socket";
import {UserProvider} from "./components/context/UserContext";
import {StateProvider} from "./components/context/StateContext";
import AppRoutes from "./AppRoutes";
import routes from './pages'
import {PayProvider} from "./components/context/PayContext";


function Providers(props) {
  return null;
}
Providers.propTypes = {children: PropTypes.node};

function App() {
  return (
      <SocketProvider>
        <UserProvider>
          <StateProvider>
              <PayProvider>


                            <Router>
                    <AppRoutes routes={routes} />
                </Router>
              </PayProvider>
                     </StateProvider>
        </UserProvider>
      </SocketProvider>
  );
}

export default App;
