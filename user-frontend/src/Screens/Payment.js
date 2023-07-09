import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";
import { AllProductAction } from "../Actions/ProductAction";


import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import store from "../store";
import Footer from "../Components/Footer";

import HeaderShopAndProduct from "../Components/ShopAndProductHeader";
import HeaderTop from "../Components/Header";

import { addToCart } from "../Actions/CartAction";
import { removeFromCart } from "../Actions/CartAction";
import { savePaymentMethod } from "../Actions/CartAction";
import { orderItemSavedAction } from "../Actions/CartAction";


const mapStateToProps = (state) => {


    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo, products: state.AllproductReducer.allProductInfo, cart: state.cartReducer.cartItems }



}



export default connect(mapStateToProps)(withRouter(class PaymentScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {

            payment: ""
        }




    }


    componentDidMount() {

        console.log(this.props)
        store.dispatch(AllProductAction())



    }

    handel = (id) => {



    }

    handel2 = (id) => {


    }

    removeItem = (id) => {

        store.dispatch(removeFromCart(id))
    }

    qty = (id, e) => {
        console.log(id, parseInt(e.target.value))

        this.setState()

        return "raju"


    }

    handelpayment = () => {





        store.dispatch(savePaymentMethod(this.state.payment))
        store.dispatch(orderItemSavedAction())



        this.props.history.push('/placeorder')

    }



    render() {

        console.log(this.state.payment, this.props)




        return (


            <div>
                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">
                        <HeaderTop />
                        <HeaderShopAndProduct />

                    </header>
                    <main class="main cart">



                        <div class="page-content">
                            <div class="container">
                                <div class="row gutter-lg mb-10">
                                    <div class="col-lg-8 pr-lg-4 mb-6">

                                        <input type="radio" id="html" name="fav_language" value="bank transfer" onChange={(e) => this.setState({ payment: e.target.value })} />
                                        <label for="html">bank transfer</label><br />
                                        <input type="radio" id="css" name="fav_language" value="cash on delivery" onChange={(e) => this.setState({ payment: e.target.value })} />
                                        <label for="css">cash on delivery</label><br />
                                        <button class="btn btn-primary" onClick={this.handelpayment}>proced to place order</button>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </main>








                </div >

                <Footer />

            </div >

        )

    }



}))

