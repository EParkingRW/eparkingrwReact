import classes from './ClientsCSS.module.css';
import React, {Fragment, useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faFilter, faEllipsisV,faSortAmountDesc } from '@fortawesome/free-solid-svg-icons'
import StateContext from "../../../components/context/StateContext";
import SocketContext from "../../../components/context/socket";

const Clients = () => {

    const {newColorMode } = useState("light");

    const {setPageTitle} = useContext(StateContext);
    const [isLight, setLight] = useState(() =>newColorMode==='light');

    const {carsIn} = useContext(SocketContext);

    const [searchText, setSearchText] = useState(null);
    const [nItemsToShow, setNItemsToShow] = useState(10)
    const [activePage, setActivePage] = useState(1)
    const [displayingItems, setDisplayingItems] = useState([])
    let endIndex = null;
    let startIndex = null;
    let numberOfPages = null;


    useEffect(() => {
        let endI = nItemsToShow*activePage < carsIn.length ? nItemsToShow*activePage:carsIn.length
        endIndex = endI
        let startI = 0;
        if(!(endIndex - nItemsToShow <=0)){
            startI = endIndex - nItemsToShow
        }
        startIndex = startI;
        setDisplayingItems([])
        carsIn.forEach((each, index) => {
            if(index >= startI && index < endI){
                console.log("index " + true)
                if(searchText===undefined ||searchText==null || searchText==="" || searchText===" "){
                    setDisplayingItems(displaying => [...displaying, {...each}])
                }
                else {
                    if(each.plateText.toLowerCase().includes(searchText.toLowerCase())){
                        setDisplayingItems(displaying => [...displaying, {...each}])
                    }
                }
            }
        })
        numberOfPages = Math.ceil(displayingItems.length/nItemsToShow)
    },[searchText, nItemsToShow, activePage, carsIn])
    const pageTitle = "Parking space";
    useEffect(() => {
        setPageTitle(pageTitle);
    })

    useEffect(() => {
        setLight(newColorMode==="light")
    },[newColorMode])

    let pageList = [];
    let i = 1;
    while (i <= numberOfPages){
        let list = null;
        if(i === activePage){
            list = <li key={"pageList"+i} className="page-item active"><a className="page-link">{i}</a></li>
        }
        else {
            list = <li key={"pageList"+i} onClick={() => {setActivePage(i)}} className="page-item"><a className="page-link">{i}</a></li>
        }
        i++;
        pageList.push(list)
    }
    console.log("activePage " + activePage +" num " +numberOfPages)

    return (
        <div className="shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">all Clients</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label
                            className="form-label">Show&nbsp;
                            <select placeholder={"10"}
                            className="d-inline-block form-select form-select-sm">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>&nbsp;</label></div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end dataTables_filter" id="dataTable_filter">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-lg-8"><label className="col-form-label"><input
                                        type="search" onChange={(event) => {
                                            setSearchText(event.target.value.trim())
                                    }} className="form-control form-control-sm" aria-controls="dataTable"
                                        placeholder="Search"/></label></div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                                    {/*    <span>*/}
                                    {/*    <FontAwesomeIcon icon={faSortAmountDesc} color={"black"}/>Sort</span><span className={classes.sort}>*/}
                                    {/*    <FontAwesomeIcon icon={faFilter} color={"black"}/>Filter*/}
                                    {/*</span>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-2" id="dataTable-1" role="grid"
                     aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                        <tr>
                            <th className={isLight?classes.light:""}>plate number</th>
                            <th className={isLight?classes.light:""}>Entrance time</th>
                            <th className={isLight?classes.light:""}>Total min</th>
                            <th className={isLight?classes.light:""}>Money</th>
                            <th className={isLight?classes.light:""}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {displayingItems?.map((each, index) => {
                            return <Fragment key={each.plateText+index}>
                                <SingleRowOfClient client={each}/>
                            </Fragment>

                        })}

                        </tbody>
                        <tfoot>
                        <tr>
                            <td className={isLight?classes.light:""}><strong>plate number</strong></td>
                            <td className={isLight?classes.light:""}><strong>Entrance time</strong></td>
                            <td className={isLight?classes.light:""}><strong>Total min</strong></td>
                            <td className={isLight?classes.light:""}><strong>Money</strong></td>
                            <td className={isLight?classes.light:""}><strong></strong></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing {startIndex+1} to
                            {endIndex} of {carsIn.length}</p>
                    </div>
                    <div className="col-md-6">
                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            {/*<ul className="pagination">
                                {activePage<=1?"":(
                                    <li className="page-item disabled"><a className="page-link" href="#"
                                                                          aria-label="Previous"><span
                                        aria-hidden="true">«</span></a></li>
                                )}

                                {pageList}
                                {
                                    activePage===numberOfPages?"":(
                                        <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span
                                            aria-hidden="true">»</span></a></li>
                                    )
                                }
                            </ul>*/}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

    function SingleRowOfClient ({client}) {
        return (
            <tr>
                <td>
                    <div className={"container "}
                    >
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4"><img alt={""}
                                                                                         className="rounded-circle d-none d-sm-none d-md-inline-block d-lg-inline-block me-2 w-25"
                                                                                          src={client.imageUrl}/></div>
                            <div className="col-md-8">
                                <div><span className={classes.tableRowUpperSpan}>{client.plateText}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex " + classes.tableRowLowerSpan}
                                >
                                    {/*last sync 1 min ago*/}
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div><span className={classes.tableRowUpperSpan}>{client.EntranceTime}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex "+classes.tableRowLowerSpan}
                                >{"on "+client.EntranceDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div><span className={classes.tableRowUpperSpan}>{client.totalMin+ " min"}</span></div>
                                <div><span className={"d-none d-sm-none d-md-flex d-lg-flex "+classes.tableRowLowerSpan}>
                                    {client.inHours}
                                    {/*2.05h*/}
                                </span></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td><span className="badge rounded-pill bg-warning">{client.money +" RWF"}</span></td>
                <td> <FontAwesomeIcon icon={faEllipsisV} color="blue"/></td>
            </tr>
        )
    }
}

export default Clients;