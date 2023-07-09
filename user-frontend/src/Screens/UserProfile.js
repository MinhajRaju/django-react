import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";
import { AllProductAction, SingleProductAction } from "../Actions/ProductAction";


import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { StaticRouter, withRouter } from "react-router-dom";
import store from "../store";
import Footer from "../Components/Footer";

import HeaderShopAndProduct from "../Components/ShopAndProductHeader";
import HeaderTop from "../Components/Header";

import { addToCart } from "../Actions/CartAction";
import { removeFromCart } from "../Actions/CartAction";
import { saveShippingAddressAction } from "../Actions/CartAction";
import { ShippingAddressAction } from "../Actions/CartAction";
import PaymentScreen from './Payment.js'
import Rating from "../Components/Rating";
import _ from 'lodash';
import monent from 'moment'

import { loginAction } from "../Actions/UserAction";
import { CustomerDetailsInfomation } from "../Actions/UserAction";
import moment from "moment";


const mapStateToProps = (state) => {

    return { cutomerFullProfileInfo: state.customerDetailsInformationReducers.userInfo }



}



export default connect(mapStateToProps)(withRouter(class CustomerProfileScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: "",



        }
    }


    componentDidMount() {
        const { id } = JSON.parse(localStorage.getItem('customeruserInfo'))
        console.log(id)


        store.dispatch(CustomerDetailsInfomation(id))
    }




    render() {





        return (


            <div>


                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">
                        <HeaderTop />
                        <HeaderShopAndProduct />

                    </header>
                    <main class="main mb-10 pb-1">




                        <div class="container emp-profile">
                            <form method="post">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="profile-img">

                                            <h5>
                                                HEllo Kshiti Ghelani
                                            </h5>
                                        </div>
                                    </div>






                                </div>


                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="profile-work">
                                            <a href=""><p>Manage My Account</p></a>
                                            <a href="">My Profile</a><br />
                                            <a href="">Address Book</a><br />
                                            <a href="">My Payment Options</a><br />
                                            <a href="">Voucher</a>


                                        </div>
                                    </div>
                                    <div class="col-md-8">


                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#order</th>
                                                    <th scope="col">Placed on</th>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.cutomerFullProfileInfo == undefined ? null : this.props.cutomerFullProfileInfo.order_details.map((x) => {

                                                    return <tr>
                                                        <th scope="row">{x.id}</th>
                                                        <td>{moment(x.order_date).format('LLLL')}</td>
                                                        <td>{x.product.product_image}</td>
                                                        <td>{x.retail_price}</td>
                                                    </tr>







                                                })}







                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </form>
                        </div>



                    </main>








                </div >


                <Footer />

            </div >

        )

    }



}))

