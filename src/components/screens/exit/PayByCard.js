import React from "react";

export default function PayByCard(){
    return(
        <div>
            <div className="container-fluid">

                <div className="row">
                    <div className="col mx-auto">
                        <div
                            className="bg-white rounded-lg shadow-sm p-5">
                            <ul role="tablist"
                                className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                                <li className="nav-item">
                                    <a data-toggle="pill"
                                       href="#nav-tab-card"
                                       className="nav-link active rounded-pill">
                                        <i className="fa fa-credit-card"></i>
                                        Credit Card
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">

                                <div id="nav-tab-card"
                                     className="tab-pane fade show active">
                                    <p className="alert alert-success">Some
                                        text success or
                                        error</p>
                                    <form role="form">
                                        <div
                                            className="form-group">
                                            <label
                                                htmlFor="username">Full
                                                name (on the
                                                card)</label>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Jeff Doe"
                                                required
                                                className="form-control" />
                                        </div>
                                        <div
                                            className="form-group">
                                            <label
                                                htmlFor="cardNumber">Card
                                                number</label>
                                            <div
                                                className="input-group">
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    placeholder="Your card number"
                                                    className="form-control"
                                                    required />
                                                <div
                                                    className="input-group-append">
                                                                                                                <span className="input-group-text text-muted">
                                                                                                                                            <i className="fa fa-cc-visa mx-1"></i>
                                                                                                                                            <i className="fa fa-cc-amex mx-1"></i>
                                                                                                                                            <i className="fa fa-cc-mastercard mx-1"></i>
                                                                                                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="row">
                                            <div
                                                className="col-sm-8">
                                                <div
                                                    className="form-group">
                                                    <label><span
                                                        className="hidden-xs">Expiration</span></label>
                                                    <div
                                                        className="input-group">
                                                        <input
                                                            type="number"
                                                            placeholder="MM"
                                                            name=""
                                                            className="form-control"
                                                            required />
                                                        <input
                                                            type="number"
                                                            placeholder="YY"
                                                            name=""
                                                            className="form-control"
                                                            required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-sm-4">
                                                <div
                                                    className="form-group mb-4">
                                                    <label
                                                        data-toggle="tooltip"
                                                        title="Three-digits code on the back of your card">CVV
                                                        <i className="fa fa-question-circle"></i>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-control" />
                                                </div>
                                            </div>


                                        </div>
                                        <button
                                            type="button"
                                            className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm
                                        </button>
                                    </form>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}