import React, {Fragment} from "react";
import classes from "./ClientsCSS.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
export const ClientTable = React.forwardRef(({isLight, displayingItems}, ref) => {
    return (
        <table className="table my-0 tableToPrint" id="dataTable" ref={ref}>
            <thead>
            <tr>
                <th className={isLight?classes.light:""}>plate number</th>
                <th className={isLight?classes.light:""}>Entrance time</th>
                <th className={isLight?classes.light:""}>Exit time</th>
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
                <td className={isLight?classes.light:""}><strong>Exit time</strong></td>
                <td className={isLight?classes.light:""}><strong>Total min</strong></td>
                <td className={isLight?classes.light:""}><strong>Money</strong></td>
                <td className={isLight?classes.light:""}><strong></strong></td>
            </tr>
            </tfoot>
        </table>
    );
});
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
                            <div><span className={classes.tableRowUpperSpan}>{client.ExitedTime}</span></div>
                            <div><span className={"d-none d-sm-none d-md-flex d-lg-flex "+classes.tableRowLowerSpan}
                            >{"on "+client.ExitedDate}</span>
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