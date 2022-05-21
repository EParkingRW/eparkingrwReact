
import classes from "./screens/login/Css.module.css"
import React from "react";
const LoginPage = ({children}) => {
    return <div className={classes.containerMain}>
        <div>
            <div >
                {children}
            </div>
        </div>

    </div>
}
export default LoginPage