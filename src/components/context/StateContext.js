import {createContext, useContext, useEffect, useState} from "react";

const StateContext = createContext();
export default StateContext;

export function StateProvider({children}){
    const [pageTitle, setPageTitle] = useState("E-parking");

    return (
        <StateContext.Provider value={{pageTitle, setPageTitle }}>
            {children}
        </StateContext.Provider>
    )
}