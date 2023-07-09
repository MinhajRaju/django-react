import React from 'react'

import store from "../store";
import { connect } from 'react-redux'
import { AllOrderAction } from '../Actions/OrderAction';
import { PendingOrderAction, RtsOrderAction, CancelledAction, AllCancelledAction, AllOrderDetailsAction } from '../Actions/OrderAction';


import DataTable, { ExpanderComponentProps, defaultThemes } from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import moment from 'moment';



const mapStateToProps = (state) => {


    console.log(state)

    return { AllOrderInfo: state.orderReducer.orderInfo, PendingOrder: state.PendingReducer.pendingInfo, RtsOrder: state.RtsReducer.rtsInfo, CancelledOrder: state.AllCancelledReducer.AllcancelledInfo, orderDetail: state.orderDetailReducer.orderDetailsInfo }


}



export default connect(mapStateToProps)(class MangeOrder extends React.Component {



    constructor(props) {
        super(props)

        this.state = {


            all: "",
            pending: "",
            rts: "",
            cancelled: "",
            id: ""

        }

    }




    componentDidMount() {
        this.setState({ all: "text" })
        store.dispatch(AllOrderAction())
        store.dispatch(PendingOrderAction())
        store.dispatch(AllOrderDetailsAction())


        setInterval(() => {
            console.log("heelo")


            this.props.AllOrderInfo.map((data) => {

                console.log(data.order_date)
                const res = moment(data.order_date).fromNow()
                console.log(res)
                if (res === '2 days ago') {
                    console.log("hit")

                    store.dispatch(CancelledAction(data.id))


                }


            })




        }, 60000);



    }







    all = () => {

        console.log("hit")
        this.setState({ all: "all", pending: "", rts: "", cancelled: "" })
        store.dispatch(AllOrderAction())


    }
    pending = () => {

        console.log("pending")
        this.setState({ all: "", pending: "pending", rts: "", cancelled: "" })
        store.dispatch(PendingOrderAction())


    }
    rts = () => {

        console.log("rts")
        this.setState({ all: "", pending: "", rts: "rts", cancelled: "" })
        store.dispatch(RtsOrderAction())
    }
    cancelled = () => {
        console.log("cancelled")
        this.setState({ all: "", pending: "", rts: "", cancelled: "cancelled" })
        store.dispatch(AllCancelledAction())



    }


    allOrderDatatable = () => {


        const columns = [
            {
                name: 'Document',
                selector: row => (<a href={`/invoice/${row.encryptId}`}>INVOICE</a>),
            },
            {
                name: 'Order  No',
                selector: row => row.order_no,
            },
            {
                name: 'Order  Date',
                selector: row => row.order_date,
            },
            {
                name: 'Update  Date',
                selector: row => row.update_date,
            },
            {
                name: 'Payment Method',
                selector: row => row.payment_type,
            },
            {
                name: 'Retail Price',
                selector: row => row.grand_total,
            },
            {
                name: '#',
                selector: row => row.total_qty,
            },
            {
                name: 'Status',
                selector: row => row.payment_status,
            },
            {
                name: 'Action',
                selector: row => row.year,
            },
        ];



        const customStyles = {
            header: {
                style: {
                    minHeight: '56px',
                },
            },
            headRow: {
                style: {
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                    borderTopColor: defaultThemes.default.divider.default,
                },
            },
            headCells: {
                style: {
                    '&:not(:last-of-type)': {
                        borderRightStyle: 'solid',
                        borderRightWidth: '1px',
                        borderRightColor: defaultThemes.default.divider.default,
                    },
                },
            },
            cells: {
                style: {
                    '&:not(:last-of-type)': {
                        borderRightStyle: 'solid',
                        borderRightWidth: '1px',
                        borderRightColor: defaultThemes.default.divider.default,
                    },
                },
            },
        };


        const ExpandedComponent = (suppData) => (data2) => {




            return (

                <>
                    <br />
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Send to</th>
                                <th scope="col">Seller sku</th>
                                <th scope="col">Product</th>
                                <th scope="col">Image</th>
                                <th scope="col">Packed</th>
                                <th scope="col">Shipping Infomation</th>
                                <th scope="col">status</th>
                                <th scope="col">qty</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.orderDetail == undefined ? null : (this.props.orderDetail.map((data) => {

                                if (data2.data.id == data.order.id) {
                                    return (
                                        <tr>
                                            <td><b>Name :</b>{data.order.shipping.name}<br /> Phone:{data.order.shipping.phone_number}  <br /> Region: {data.order.shipping.region} <br /> City: {data.order.shipping.city}  <br /> Area:{data.order.shipping.area}  <br /> Address:{data.order.shipping.address} <br /> Email:{data.order.shipping.email} </td>
                                            <td></td>
                                            <td>{data.product.title}</td>
                                            <td>{data.product.product_iaage}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{data.qty}</td>
                                            <td></td>

                                        </tr>
                                    )
                                }

                            }))}






                        </tbody>
                    </table>



                </>
            );
        };

        return (




            <div>

                <DataTable
                    title="Product List"
                    columns={columns}
                    data={this.props.AllOrderInfo}
                    expandableRows={true}
                    expandableRowsComponent={ExpandedComponent(this.props.AllOrderInfo)}
                    customStyles={customStyles}
                    noHeader
                    selectableRows

                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    subHeader
                    dense
                    subHeaderAlign="right"
                    subHeaderComponent={
                        <div class="form-group">
                            <button type="button" class="btn btn-rounded" >Btton</button>
                        </div>








                    }
                />
            </div>








        )
    }



    pendingAndrtsOrderDatatable = (string, data) => {

        console.log("ASdfasdf", data)


        const columns = [
            {
                name: 'Document',
                selector: row => row.title,
            },
            {
                name: 'Order  No',
                selector: row => row.order_no,
            },
            {
                name: 'Order  Date',
                selector: row =>
                    <React.Fragment>
                        {row.order_date}
                        <br /> <br />
                        <div>

                            {moment(row.order_date).fromNow() === "a day ago" ? <span class="badge badge-warning"> {moment(row.order_date).fromNow()}</span> : moment(row.order_date).fromNow() === "2 days ago" ? <span class="badge badge-danger"> {moment(row.order_date).fromNow()}</span> : <span class="badge badge-success"> {moment(row.order_date).fromNow()}</span>}

                        </div>
                        <br /> <br />


                    </React.Fragment>

            },
            {
                name: 'Update  Date',
                selector: row => row.update_date,
            },
            {
                name: 'Payment Method',
                selector: row => row.payment_method,
            },
            {
                name: 'Retail Price',
                selector: row => row.retail_price,
            },
            {
                name: '#',
                selector: row => row.qty,
            },
            {
                name: 'Status',
                selector: row => row.payment_status,
            },
            {
                name: 'Action',
                selector: row => row.year,
            },
        ];

        const ExpandedComponent = (suppData) => (data2) => {




            return (

                <>
                    <br />
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Send to</th>
                                <th scope="col">Seller sku</th>
                                <th scope="col">Product</th>
                                <th scope="col">Image</th>
                                <th scope="col">Packed</th>
                                <th scope="col">Shipping Infomation</th>
                                <th scope="col">status</th>
                                <th scope="col">qty</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.orderDetail == undefined ? null : (this.props.orderDetail.map((data) => {

                                if (data2.data.id == data.order.id) {
                                    return (
                                        <tr>
                                            <td><b>Name :</b>{data.order.shipping.name}<br /> Phone:{data.order.shipping.phone_number}  <br /> Region: {data.order.shipping.region} <br /> City: {data.order.shipping.city}  <br /> Area:{data.order.shipping.area}  <br /> Address:{data.order.shipping.address} <br /> Email:{data.order.shipping.email} </td>
                                            <td></td>
                                            <td>{data.product.title}</td>
                                            <td>{data.product.product_iaage}</td>
                                            <td></td>
                                            <td></td>

                                            <td>{data.qty}</td>
                                            <td></td>

                                        </tr>
                                    )
                                }

                            }))}






                        </tbody>
                    </table>



                </>
            );
        };




        const customStyles = {
            header: {
                style: {
                    minHeight: '56px',
                },
            },
            headRow: {
                style: {
                    borderTopStyle: 'solid',
                    borderTopWidth: '1px',
                    borderTopColor: defaultThemes.default.divider.default,
                },
            },
            headCells: {
                style: {
                    '&:not(:last-of-type)': {
                        borderRightStyle: 'solid',
                        borderRightWidth: '1px',
                        borderRightColor: defaultThemes.default.divider.default,
                    },
                },
            },
            cells: {
                style: {
                    '&:not(:last-of-type)': {
                        borderRightStyle: 'solid',
                        borderRightWidth: '1px',
                        borderRightColor: defaultThemes.default.divider.default,
                    },
                },
            },
        };


        const val = string



        return (

            <div>
                {val}

                <DataTable
                    title="Product List"
                    columns={columns}
                    data={data}
                    expandableRowsComponent={ExpandedComponent(data)}
                    expandableRows={true}
                    customStyles={customStyles}
                    noHeader
                    selectableRows

                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    subHeader
                    dense
                    subHeaderAlign="right"
                    subHeaderComponent
                />
            </div>

        )
    }






    render() {





        const data = this.props.AllOrderInfo

        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={this.all}>All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={this.pending}>Pending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#" onClick={this.rts}>Rts</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#">Shipped</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#">Delivered</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#" onClick={this.cancelled}>Cancelled</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#">Retured</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#" >Failed Delivery</a>
                            </li>
                        </ul>
                    </div>
                </nav>



                {this.state.all == 'all' ? (this.allOrderDatatable()) : null}
                {this.state.pending == 'pending' ? (this.pendingAndrtsOrderDatatable("pending", this.props.PendingOrder)) : null}
                {this.state.rts == 'rts' ? (this.pendingAndrtsOrderDatatable("rts", this.props.RtsOrder)) : null}
                {this.state.cancelled == 'cancelled' ? (this.pendingAndrtsOrderDatatable("cancelled", this.props.CancelledOrder)) : null}

            </div>







        )
    }







})