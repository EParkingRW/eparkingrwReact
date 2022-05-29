import React, {Fragment, useContext, useState} from "react";
import "./dasboardlayout.css"
import {Link, useNavigate} from "react-router-dom";
import userContext from "../context/UserContext";
import logo from "../../asserts/logo.svg"
import config from "../../config";
import {
    faListAlt,
    faUser,
    faStar,
    faDashboard,
    faCarTunnel,
    faCar,
    faParking,
    faSignal,
    faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Modal} from "react-bootstrap";
import Users from "../screens/dashboard/Users";

export default function Layout({children}) {
    const [toggle, setToggle] = useState("bx-x");
    const [nav, setNav] = useState("show");
    const [bodypd, setbodypd] = useState("content-pd");
    const [headerpd, setHeaderpd] = useState("body-pd");
    const [isShowing, setShowing] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
    const {user,handleSignOut} = useContext(userContext);
    let navigate = useNavigate() ;


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const toggling = () => {
        setShowing((i) => !i);
        if (isShowing) {
            setNav("show");
            setToggle("bx-x")
            setbodypd("content-pd")
            setHeaderpd("body-pd")
        } else {
            setNav("");
            setToggle("")
            setbodypd("")
            setHeaderpd("")
        }
    }

    function handleLogout(event) {
        event.preventDefault();
        handleSignOut().then(response => {
            navigate('/', { replace: true })
        });
    }

    return (<Fragment>
        <div id="sidemenu" className={"mainDashboard"}>
            <header id="header" className={"header " + headerpd}>
                <div id="header_toggle-1" className={"header_toggle " + toggle}>
                    <FontAwesomeIcon onClick={() => {toggling();}} icon={faListAlt}  id="header-toggle" color="#da7427"/>
                </div>
                <div className="header_img">
                        <FontAwesomeIcon onClick={handleShow} size={"2x"} icon={faUser} color="#da7427" />
                </div>
            </header>
            <div id="nav-bar" className={"l-navbar " + nav}>
                <nav className={"nav "}>
                    <div><a onClick={() => {
                        toggling();
                    }} id="header_toggle-2" className="nav_logo header_toggle" href="#">

                        <img height={"70%"} src={logo} alt={""}/>
                        <span
                        className="nav_logo-name">E-parking</span></a>
                        <div className="nav_list">
                            <Link className={"nav_link active"} to={"/dashboard"}>
                                <FontAwesomeIcon icon={faDashboard} color="#da7427" />
                            <span
                            className="nav_name">Dashboard</span></Link><Link className={"nav_link "}
                                                                              to={"/entrance"}>
                            <FontAwesomeIcon icon={faCarTunnel} color="#da7427" /><span
                            className="nav_name">Entrance</span></Link><Link
                            className="nav_link" to="/exit">
                            <FontAwesomeIcon icon={faCar} color="#da7427" />
                            <span
                            className="nav_name">Exit</span></Link>
                            <Link className={"nav_link "}
                                                                         to="/space">
                            <FontAwesomeIcon icon={faParking} color="#da7427" />
                            <span
                            className="nav_name">Space</span></Link>
                            {
                                user.user!==null && (user.user.role.title !== "normal")?(
                                    <Fragment>
                                    <Link className={"nav_link "} to="/reports">
                                        <FontAwesomeIcon icon={faSignal} color="#da7427" />
                                        <span
                                        className="nav_name">Reports</span></Link>
                                    <Link className={"nav_link "} to="/signup">
                                        <FontAwesomeIcon icon={faUserAlt} color="#da7427"/>
                                        <span
                                        className="nav_name">New user</span></Link>
                                </Fragment>)
                                    :""
                            }

                        </div>
                    </div>
                </nav>
            </div>
            <div className={"" + bodypd}>{children}
                <Modal className={"w-100"} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>your profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={"w-100"}>
                        <Users/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleLogout}>
                            Logout
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
        </Fragment>
    )
}