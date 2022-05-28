import {Link} from "react-router-dom";
import logo from "../asserts/logo.svg"
import {Button} from "react-bootstrap";
import classes from "./Css.module.css";
export default function Home(){
    return(
        <div>
            <div className={"container"}>
                <div className={"row pt-5"}>
                    <div className={"col"}>
                        <img src={logo} align={""}/>
                    </div>
                    <div className={"col"}>
                        <p className={"d-flex justify-content-center align-items-center "+classes.fontSize20}>welcome on e-parking system</p>
                        <div className={"d-flex justify-content-center align-items-center"}>
                            <Button className={"btn-light "}><Link to={"/login"}>Login</Link></Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}