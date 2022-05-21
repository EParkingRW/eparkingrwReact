import React, {useContext, useEffect, useState} from "react";

import classes from "./Css.module.css"
import StateContext from "../../../components/context/StateContext";
import useColorMode from "../../../utils/color-mode";
export default function Wallet (){
    const {newColorMode } = useColorMode();
    const [isLight, setLight] = useState(() =>newColorMode==='light');
    const pageTitle = "Wallet";
    const {setPageTitle} = useContext(StateContext);

    useEffect(() => {
        setPageTitle(pageTitle);
    },)

    useEffect(() => {
        setLight(newColorMode==="light")
    },[newColorMode])
    return(
        <div>
            <div className={"container-fluid pt-5 d-flex"+classes.withdrawContainer}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-lg-center align-items-lg-center">
                        <div>
                            <h1 className={classes.moneyTransfer +" "+(isLight?" text-light ":" text-dark ")}>Online Money Transfer</h1>
                            <div className={classes.moneyCard}>
                                <h3 className={"text-center "+classes.balance+" "+(isLight?" text-light ":" text-dark ")}>your balance is</h3>
                                <p className={"text-center "+classes.balanceP+" "+(isLight?" text-light ":" text-dark ")}>300, 000 RWF</p>
                                <div
                                    className="d-flex justify-content-center align-items-center justify-content-md-center">
                                    <button className={"btn "+classes.withdrawBtn+" "+(isLight?" text-light ":" text-dark ")} type="button">Withdraw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"><img className="d-none d-sm-none d-md-block d-lg-block" align={""}
                                                   src="/withdraw.svg"/></div>
                </div>
            </div>
            <div className={"container-fluid "+classes.historyContailer}>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <p className="text-primary m-0 fw-bold">Withdraw history</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 text-nowrap">
                                        <div id="dataTable_length" className="dataTables_length"
                                             aria-controls="dataTable"><label className="form-label">Show&nbsp;
                                            <select defaultValue={"10"}
                                            className="d-inline-block form-select form-select-sm">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>&nbsp;</label></div>
                                    </div>
                                </div>
                                <div className="table-responsive table mt-2" id="dataTable-1" role="grid"
                                     aria-describedby="dataTable_info">
                                    <table className="table my-0" id="dataTable">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>actor</th>
                                            <th>transaction time</th>
                                            <th>money</th>
                                            <th>status</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="container">
                                                    <div className={"row "+classes.idCell}>
                                                        <div className="col-md-8">
                                                            <div><span className={classes.idCellText}>23234353</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div><span className={classes.idCellText}>Eric</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div><span className="d-none d-sm-none d-md-flex d-lg-flex">on 24.05.2021&nbsp; 3:30 pm</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div><span className={classes.idCellText}>200, 000 RWF</span></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={"badge bg-primary "+classes.statusBirge}>done</span></td>
                                            <td><i className="fa fa-ellipsis-v"></i></td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td><strong>id</strong></td>
                                            <td><strong>actor</strong></td>
                                            <td><strong>Withdraw time</strong></td>
                                            <td><strong>money</strong></td>
                                            <td><strong>status</strong></td>
                                            <td><strong></strong></td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <p id="dataTable_info" className={"dataTables_info"} role="status"
                                           aria-live="polite">Showing 1 to 10 of 27</p>
                                    </div>
                                    <div className="col-md-6">
                                        <nav
                                            className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                            <ul className="pagination">
                                                <li className="page-item disabled"><a className="page-link" href="#"
                                                                                      aria-label="Previous"><span
                                                    aria-hidden="true">«</span></a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#"
                                                                             aria-label="Next"><span
                                                    aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}