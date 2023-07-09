import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import store from "../store";
import { InvoiceAction } from "../Actions/OrderAction";

import moment from "moment";




const mapStateToProps = (state) => {


    console.log(state)

    return { invoiceDetails: state.InvoiceReducer.invoiceDetailsInfo }


}


export default connect(mapStateToProps)(withRouter(class Invoice extends React.Component {





    componentDidMount() {



        store.dispatch(InvoiceAction(this.props.match.params.id))


    }

    print = () => {

        window.print()
    }


    render() {



        const data = this.props.orderDetail == undefined ? null : this.props.orderDetail.filter((x) => x.order.id == this.props.match.params.id)


        if (data == undefined) {

        } else {
            const { order } = data
            console.log(data)
        }



        return (



            < div >
                {this.props.invoiceDetails == undefined ? null : (


                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                <div id="invoice">
                                    <div class="toolbar hidden-print">
                                        <div class="text-end">
                                            <button type="button" onClick={this.print} class="btn btn-dark hidden-print"><i class="fa fa-print"></i> Print</button>

                                        </div>
                                        <hr />


                                    </div>
                                    <div class="invoice overflow-auto">
                                        <div style={{ minWidth: "600px" }}>
                                            <header>
                                                <div class="row">
                                                    <h4> Daraz Purchase Summary - {this.props.invoiceDetails.order_no} </h4><h4 style={{ marginLeft: "16pc" }}>{moment(this.props.invoiceDetails.order_date).format('MM-DD-YYYY')}</h4>
                                                </div>
                                            </header>
                                            <main>
                                                <div class="row contacts">
                                                    <table class="table table-sm table-bordered">

                                                        <tbody>
                                                            <tr>

                                                                <td><img src="https://picsum.photos/100/100" /></td>
                                                                <td><img src="/images/Screenshot_2.png" /><br /><h1><b>SELLER</b>CENTER</h1 ></td>

                                                            </tr>
                                                            <tr>

                                                                <td>{this.props.invoiceDetails.associated_seller.username}</td>
                                                                <td>{this.props.invoiceDetails.order_no} </td>

                                                            </tr>

                                                        </tbody>
                                                    </table>

                                                    <br />
                                                    <br />

                                                    <table class="table table-sm table-bordered">

                                                        <tbody>
                                                            <tr>

                                                                <td>Purchase Summary Number</td>
                                                                <td></td>
                                                                <td>Payment Methond</td>
                                                                <td>{this.props.invoiceDetails.payment_type} </td>

                                                            </tr>
                                                            <tr>

                                                                <td>Purchase Summary Date</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>

                                                            </tr>

                                                            <tr>

                                                                <td>BILL TO</td>
                                                                <td>{this.props.invoiceDetails.customer.user.username} </td>
                                                                <td>DELIVER TO</td>
                                                                <td>{this.props.invoiceDetails.shipping.name} </td>

                                                            </tr>

                                                            <tr>

                                                                <td>ADDRESS</td>
                                                                <td><b>Name :</b>{this.props.invoiceDetails.shipping.name}<br /> Phone:{this.props.invoiceDetails.shipping.phone_number}  <br /> Region: {this.props.invoiceDetails.shipping.region} <br /> City: {this.props.invoiceDetails.shipping.city}  <br /> Area:{this.props.invoiceDetails.shipping.area}  <br /> Address:{this.props.invoiceDetails.shipping.address} <br /></td>
                                                                <td>ADDRESS</td>
                                                                <td><b>Name :</b>{this.props.invoiceDetails.shipping.name}<br /> Phone:{this.props.invoiceDetails.shipping.phone_number}  <br /> Region: {this.props.invoiceDetails.shipping.region} <br /> City: {this.props.invoiceDetails.shipping.city}  <br /> Area:{this.props.invoiceDetails.shipping.area}  <br /> Address:{this.props.invoiceDetails.shipping.address} <br /></td>

                                                            </tr>

                                                            <tr>

                                                                <td>PHONE</td>
                                                                <td>{this.props.invoiceDetails.shipping.phone_number}</td>
                                                                <td>PHONE</td>
                                                                <td>{this.props.invoiceDetails.shipping.phone_number}</td>

                                                            </tr>



                                                        </tbody>
                                                    </table>



                                                    <h2>YOUR ORDERED ITEMS</h2>
                                                    <br /><br />

                                                    <table class="table table-sm table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Shop Sku</th>
                                                                <th scope="col">Seller Sku</th>
                                                                <th scope="col">Qty</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Item total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>


                                                            {this.props.invoiceDetails.product.map((x, index) => {


                                                                return (<tr>
                                                                    <th scope="row">{index += 1}</th>
                                                                    <td>{x.product.title}</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>{x.qty}</td>
                                                                    <td>{x.retail_price}</td>
                                                                    <td>{x.qty * x.retail_price}</td>
                                                                </tr>)




                                                            })}

                                                        </tbody>
                                                    </table>
                                                    <br /><br />  <br /><br />  <br /><br />





                                                    <table class="table table-sm table-bordered" style={{ width: "30%", marginLeft: "40pc" }}>

                                                        <tbody>
                                                            <tr>

                                                                <td>Subtotal</td>
                                                                <td> {this.props.invoiceDetails.product.reduce((acc, item) => acc + item.retail_price * item.qty, 0).toFixed(2)}</td>

                                                            </tr>
                                                            <tr>

                                                                <td>Shipping Cost</td>
                                                                <td>750</td>

                                                            </tr>
                                                            <tr>

                                                                <td>Voucher</td>
                                                                <td>750</td>

                                                            </tr>
                                                            <tr>

                                                                <td><b>Total</b></td>
                                                                <td><b>{this.props.invoiceDetails.product.reduce((acc, item) => acc + item.retail_price * item.qty, 0).toFixed(2)}</b></td>

                                                            </tr>

                                                        </tbody>
                                                    </table>



                                                </div>


                                            </main>
                                            <footer>Invoice was created on a computer and is valid without the signature and seal.</footer>
                                        </div>

                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                )}


            </div >







        )


    }




}))