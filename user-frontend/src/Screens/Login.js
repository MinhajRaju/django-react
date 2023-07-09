import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";
import { AllProductAction, SingleProductAction } from "../Actions/ProductAction";


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
import Rating from "../Components/Rating";
import _ from 'lodash';

import { loginAction } from "../Actions/UserAction";



const mapStateToProps = (state) => {


    return { productInfo: state.SingleproductReducer.singleProductInfo, logiState: state.customerLoginReducer.login }



}



export default connect(mapStateToProps)(withRouter(class LoginScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: "",



        }
    }


    componentDidMount() {

        if (!localStorage.getItem('customeruserInfo')) {
            this.props.history.push('/login')
        } else {
            this.props.history.push('/')

        }


    }





    handelSubmit = (e) => {

        console.log(this.props)

        e.preventDefault()
        try {


            store.dispatch(loginAction(this.state.email, this.state.password))




        }
        catch {
            console.log("Erro")

        }



    }




    render() {

        console.log(this.state.name, this.state.email, this.state.password, this.state.confirmpassword)







        return (


            <div>



                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>


                    <main class="main mb-10 pb-1">



                        <div class="page-content">
                            <div class="container">
                                <div class="row gutter-lg">
                                    <div class="main-content">


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="page-wrapper">



                            <header class="header">
                                <nav class="navbar navbar-expand-lg navbar-light py-3">
                                    <div class="container">

                                        <a href="#" class="navbar-brand">
                                            <img src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg" alt="logo" width="150" />
                                        </a>
                                    </div>
                                </nav>
                            </header>


                            <div class="container">
                                <div class="row py-5 mt-4 align-items-center">

                                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                                        <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block" />
                                        <h1>Login</h1>

                                    </div>


                                    <div class="col-md-7 col-lg-6 ml-auto">

                                        <div class="row">


                                            <Form onSubmit={this.handelSubmit} >

                                                <Form.Group controlId='name'>
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type='name'
                                                        placeholder='Enter name'
                                                        onChange={(e) => this.setState({ email: e.target.value })}

                                                    >
                                                    </Form.Control>
                                                </Form.Group>




                                                <Form.Group controlId='password'>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type='password'
                                                        placeholder='Enter Password'
                                                        onChange={(e) => this.setState({ password: e.target.value })}

                                                    >
                                                    </Form.Control>
                                                </Form.Group>



                                                <Button type='submit' variant='primary'>
                                                    Login
                                                </Button>

                                            </Form>


                                            <div class="input-group col-lg-6 mb-4">


                                            </div>


                                            <div class="form-group col-lg-12 mx-auto mb-0">
                                                <a href="#" class="btn btn-primary btn-block py-2">
                                                    <span class="font-weight-bold">Create your account</span>
                                                </a>
                                            </div>


                                            <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                                <div class="border-bottom w-100 ml-5"></div>
                                                <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                                <div class="border-bottom w-100 mr-5"></div>
                                            </div>


                                            <div class="form-group col-lg-12 mx-auto">
                                                <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                                                    <i class="fa fa-facebook-f mr-2"></i>
                                                    <span class="font-weight-bold">Continue with Facebook</span>
                                                </a>
                                                <a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
                                                    <i class="fa fa-twitter mr-2"></i>
                                                    <span class="font-weight-bold">Continue with Twitter</span>
                                                </a>
                                            </div>


                                            <div class="text-center w-100">
                                                <p class="text-muted font-weight-bold">Already Registered? <a href="#" class="text-primary ml-2">Login</a></p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>










                        </div >



                    </main>








                </div >



            </div >

        )

    }



}))

