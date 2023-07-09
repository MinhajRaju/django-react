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
import { saveShippingAddressAction } from "../Actions/CartAction";
import { ShippingAddressAction } from "../Actions/CartAction";
import PaymentScreen from './Payment.js'

const mapStateToProps = (state) => {


    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo, products: state.AllproductReducer.allProductInfo, cart: state.cartReducer.cartItems, address: state.shippingAddressReducer.shippingAddressInfo }



}



export default connect(mapStateToProps)(withRouter(class CartScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: [],
            id: null,
            cal: null,
            address: ""
        }




    }


    componentDidMount() {

        console.log(this.props)
        store.dispatch(AllProductAction())
        store.dispatch(ShippingAddressAction(1))



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



    render() {

        console.log(this.props.cart)
        store.dispatch(saveShippingAddressAction(this.state.address))
        const cart = JSON.parse(localStorage.getItem('cartItems'));






        const itemsPrice = cart.reduce((acc, item) => acc + item.mrp * item.qty, 0).toFixed(2)
        const shippingPrice = (itemsPrice > 1000 ? 60 : 100).toFixed(2)
        const total = Number(Number(itemsPrice) + Number(shippingPrice))




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
                                        <table class="shop-table cart-table">

                                            <tbody>
                                                {this.props.cart == undefined ? null : this.props.cart == 0 ? (<div class="banner-content text-center">
                                                    <h2 class="banner-title">
                                                        <br /><span class="text-secondary">Empty!!!</span> Your cart
                                                    </h2>

                                                </div>) : (this.props.cart.map((data) => {


                                                    return (
                                                        <tr>
                                                            <td class="product-thumbnail">
                                                                <div class="p-relative">
                                                                    <a href="product-default.html">
                                                                        <figure>
                                                                            <img src="assets/images/shop/12.jpg" alt="product"
                                                                                width="300" height="338" />
                                                                        </figure>
                                                                    </a>
                                                                    <button type="submit" class="btn btn-close"><i onClick={() => this.removeItem(data.product)}
                                                                        class="fas fa-times"></i></button>
                                                                </div>
                                                            </td>
                                                            <td class="product-name">
                                                                <a href="product-default.html">
                                                                    {data.title}
                                                                </a>
                                                            </td>
                                                            <td class="product-price"><span class="amount">&#2547; {data.mrp}</span></td>
                                                            <td class="product-quantity">
                                                                <div class="input-group">
                                                                    <Form.Control
                                                                        as="select"
                                                                        value={data.qty}
                                                                        onChange={(e) => store.dispatch(addToCart(data.slug, Number(e.target.value)))}
                                                                    >
                                                                        {

                                                                            [...Array(data.countInStock).keys()].map((x) => (
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                            ))
                                                                        }

                                                                    </Form.Control>

                                                                </div>
                                                            </td>
                                                            <td class="product-subtotal">
                                                                <span class="amount"></span>
                                                            </td>
                                                        </tr>

                                                    )

                                                }))}


                                            </tbody>
                                        </table>

                                        <div class="cart-action mb-6">

                                            <button type="submit" class="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">Clear Cart</button>

                                        </div>


                                    </div>
                                    <div class="col-lg-4 sticky-sidebar-wrapper">




                                        <div class="sticky-sidebar">

                                            <div class="cart-summary mb-4">
                                                <div class="form-group">
                                                    <h3 class="cart-title text-uppercase">Shipping Address</h3>
                                                    <div class="select-box">
                                                        <select name="country" class="form-control form-control-md" onChange={(e) => this.setState({ address: e.target.value })}>
                                                            {this.props.address == undefined ? null : (this.props.address.map((data) => {

                                                                return (
                                                                    <option value={data.id} selected="selected">{data.name}</option>
                                                                )

                                                            }))}


                                                        </select>
                                                    </div>
                                                </div>
                                                <br />
                                                {this.props.address == undefined ? null : (this.props.address.map((data) => {

                                                    if (data.id == this.state.address) {
                                                        return (
                                                            <div>
                                                                <table class="order-table">

                                                                    <tr>

                                                                        <td>

                                                                            <span class="icon-box-icon text-dark">
                                                                                <i class="w-icon-shipping"></i>
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <div class="icon-box-content">
                                                                                <h4 class="icon-box-title">{data.name}</h4>
                                                                                <p>{data.region} , {data.city} , {data.area} , {data.address}</p>
                                                                            </div>
                                                                        </td>

                                                                    </tr>


                                                                    <hr class="divider" />
                                                                    <tr>

                                                                        <td>

                                                                            <span class="icon-box-icon text-dark">
                                                                                <i class="w-icon-phone"></i>
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <div class="icon-box-content">
                                                                                <h4 class="icon-box-title">{data.phone_number}</h4>
                                                                                <p></p>
                                                                            </div>
                                                                        </td>

                                                                    </tr>

                                                                    <tr>

                                                                        <td>

                                                                            <span class="icon-box-icon text-dark">
                                                                                <i class="w-icon-envelop"></i>
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <div class="icon-box-content">
                                                                                <h4 class="icon-box-title">{data.email}</h4>
                                                                                <p></p>
                                                                            </div>
                                                                        </td>

                                                                    </tr>



                                                                </table>
                                                            </div>



                                                        )
                                                    }

                                                }))}


                                                <br />
                                                <h3 class="cart-title text-uppercase">Cart Totals</h3>
                                                <table class="order-table">
                                                    <thead>
                                                        <tr>




                                                        </tr>
                                                    </thead>
                                                    <tbody>


                                                        {cart == undefined ? null : cart.map((item, index) => {

                                                            return (
                                                                <tr class="bb-no">

                                                                    <td class="product-name">{item.title.substr(0, 10)}</td> <td><span
                                                                        class="product-quantity">{item.mrp}</span> <i
                                                                            class="fas fa-times"></i> <span
                                                                                class="product-quantity">{item.qty}</span></td>
                                                                    <td class="product-total"><b>&#2547; {(item.qty * item.mrp).toFixed(2)}</b> </td>
                                                                </tr>

                                                            )


                                                        })}


                                                        <tr class="cart-subtotal bb-no">

                                                            <td> <label class="ls-25">Subtotal ({this.props.cart.reduce((acc, item) => acc + item.qty, 0)}) items</label>
                                                            </td>
                                                            <td></td>

                                                            <td>
                                                                <b> <span>&#2547; {this.props.cart.reduce((acc, item) => acc + item.qty * item.mrp, 0).toFixed(2)}</span>

                                                                </b>
                                                            </td>

                                                        </tr>

                                                        <hr class="divider" />





                                                        <tr class="cart-subtotal bb-no">

                                                            <td>
                                                                <b>Shipping</b>
                                                            </td>
                                                            <td></td>
                                                            <td>
                                                                <b>{shippingPrice}</b>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <br />
                                                    <tfoot>

                                                        <tr style={{ backgroundColor: "#00BAA3", padding: "50px" }} class="order-total">

                                                            <td style={{ padding: "10px" }} >
                                                                <b style={{ color: "white" }}>Total</b>
                                                            </td>
                                                            <td></td>
                                                            <td style={{ padding: "10px" }}>
                                                                <b style={{ color: "white" }}>&#2547; {total}</b>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>

                                                <br />


                                                <form class="coupon">
                                                    <h5 class="title coupon-title font-weight-bold text-uppercase">Coupon Discount</h5>
                                                    <input type="text" class="form-control mb-4" placeholder="Enter coupon code here..." required />
                                                    <button class="btn btn-dark btn-outline btn-rounded">Apply Coupon</button>
                                                </form>



                                                <hr class="divider mb-6" />
                                                <div class="order-total d-flex justify-content-between align-items-center">
                                                    <label>Total</label>
                                                    <span class="ls-50">&#2547; {Number(this.props.cart.reduce((acc, item) => (acc + item.qty * item.mrp), 0).toFixed(2))}</span>
                                                </div>
                                                <a href="/payment"
                                                    class="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                                                    Proceed to checkout<i class="w-icon-long-arrow-right"></i></a>
                                            </div>
                                        </div>
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

