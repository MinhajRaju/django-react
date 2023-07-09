import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";
import { AllProductAction } from "../Actions/ProductAction";
import { DashProductAction } from "../Actions/ProductAction";


import { withRouter } from "react-router-dom";

import store from "../store";

import Footer from "../Components/Footer";
import HeaderTop from "../Components/Header";
import HeaderShopAndProduct from "../Components/ShopAndProductHeader";


import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import $ from 'jquery';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const mapStateToProps = (state) => {


    console.log(state)

    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo, cart: state.cartReducer.cartItems, allProduct: state.AllproductReducer.allProductInfo, loading: state.AllproductReducer.loading }



}



export default connect(mapStateToProps)(withRouter(class Dashboard extends React.Component {


    constructor(props) {
        super(props)

        store.dispatch(NestedCategoryAction())
        store.dispatch(AllProductAction())

        this.state = {
            cat_depth_one: [],
            cat_depth_two: [],
        }

    }


    componentDidMount() {

        console.log(this)



    }


    loadmore = () => {

        store.dispatch(DashProductAction())

    }






    render() {



        console.log(this.props.allProduct)

        return (

            <div>
                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">

                        <HeaderTop />

                        <HeaderShopAndProduct />


                    </header>


                    <div className="main">


                        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} showStatus={false} showArrows={false}>
                            <div>
                                <img src="assets/images/demos/demo9/banner/1-2.jpg" alt="Banner" width="670"
                                    height="450" style={{ backgroundColor: "#2D2E32;" }} />


                            </div>
                            <div>
                                <img src="assets/images/demos/demo9/banner/1-2.jpg" alt="Banner" width="670"
                                    height="450" style={{ backgroundColor: "#2D2E32;" }} />


                            </div>
                            <div>
                                <img src="assets/images/demos/demo9/banner/1-2.jpg" alt="Banner" width="670"
                                    height="450" style={{ backgroundColor: "#2D2E32;" }} />


                            </div>
                        </Carousel>
















                        <div className="container mb-10 pb-2">

                            <div class="title-link-wrapper appear-animate">
                                <h2 class="title">Top Rated Products</h2>
                                <a href="shop-boxed-banner.html" class="font-weight-bold ls-25">More Products<i
                                    class="w-icon-long-arrow-right"></i></a>
                            </div>

                            <div class="row cols-lg-4 cols-md-3 cols-xs-2 cols-1 appear-animate">
                                <div class="product-wrap mb-0">
                                    <div class="product product-widget">
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/7-5.jpg" alt="Product" width="600"
                                                    height="675" />
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <h4 class="product-name">
                                                <a href="product-default.html">Red Cap Sound Marker</a>
                                            </h4>
                                            <div class="product-price">$89.50</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-wrap mb-0">
                                    <div class="product product-widget">
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/8-1.jpg" alt="Product" width="600"
                                                    height="675" />
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <h4 class="product-name">
                                                <a href="product-default.html">Mini Wireless Earphone</a>
                                            </h4>
                                            <div class="product-price">$120.57</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap mb-0">
                                    <div class="product product-widget">
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/8-1.jpg" alt="Product" width="600"
                                                    height="675" />
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <h4 class="product-name">
                                                <a href="product-default.html">Mini Wireless Earphone</a>
                                            </h4>
                                            <div class="product-price">$120.57</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap mb-0">
                                    <div class="product product-widget">
                                        <figure class="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/demos/demo9/product/8-1.jpg" alt="Product" width="600"
                                                    height="675" />
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <h4 class="product-name">
                                                <a href="product-default.html">Mini Wireless Earphone</a>
                                            </h4>
                                            <div class="product-price">$120.57</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="row grid grid-float pt-2 banner-grid mb-9 appear-animate">
                                <div class="grid-item col-lg-6 height-x2">
                                    <div class="banner banner-fixed banner-lg br-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo9/banner/1-1.jpg" alt="Banner" width="670"
                                                height="450" style={{ backgroundColor: "#E3E7EA;" }} />
                                        </figure>
                                        <div class="banner-content y-50">
                                            <h5 class="banner-subtitle text-capitalize font-weight-normal mb-0 ls-25">
                                                Flash Sale <strong class="text-secondary text-uppercase">50% Off</strong>
                                            </h5>
                                            <h3 class="banner-title text-capitalize">Kitchen Collection</h3>
                                            <p>Only until the end of this Week</p>
                                            <a href="demo9-shop.html" class="btn btn-dark btn-outline btn-rounded btn-icon-right">
                                                Shop Now<i class="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item col-lg-6 height-x1">
                                    <div class="banner banner-fixed banner-md br-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo9/banner/1-2.jpg" alt="Banner" width="670"
                                                height="450" style={{ backgroundColor: "#2D2E32;" }} />
                                        </figure>
                                        <div class="banner-content">
                                            <h3 class="banner-title text-white ls-25">
                                                Accessories<br /><span class="font-weight-normal ls-normal">Collection</span>
                                            </h3>
                                            <a href="demo9-shop.html" class="btn btn-white btn-link btn-underline btn-icon-right">
                                                Shop Now<i class="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item col-sm-6 col-lg-3 height-x1">
                                    <div class="banner banner-fixed banner-sm br-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo9/banner/1-3.jpg" alt="Banner" width="330"
                                                height="215" style={{ backgroundColor: "#181818;" }} />
                                        </figure>
                                        <div class="banner-content x-50 y-50 w-100 text-center">
                                            <h3 class="banner-title font-secondary font-weight-normal mb-0 ls-25">Sale</h3>
                                            <div class="banner-price-info font-weight-normal text-white mb-3">
                                                Up to <strong class="text-uppercase">20% Off</strong>
                                            </div>
                                            <a href="demo9-shop.html" class="btn btn-white btn-link btn-underline">Shop
                                                Collection</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item col-sm-6 col-lg-3 height-x1">
                                    <div class="banner banner-fixed banner-sm br-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo9/banner/1-4.jpg" alt="Banner" width="330"
                                                height="215" style={{ backgroundColor: "#A3A8A6;" }} />
                                        </figure>
                                        <div class="banner-content">
                                            <h5 class="banner-subtitle text-uppercase font-weight-bold">20% Off</h5>
                                            <h3 class="banner-title text-capitalize ls-25">Kids Store</h3>
                                            <a href="https://www.portotheme.com/html/wolmart/demdo9-shop.html" class="btn btn-dark btn-link btn-underline btn-icon-right">
                                                Shop Now<i class="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="title-link-wrapper title-deals appear-animate">
                                <h2 class="title">Deals Hot Of The Day</h2>
                                <a href="shop-boxed-banner.html" class="font-weight-bold ls-25">More Products<i
                                    class="w-icon-long-arrow-right"></i></a>
                            </div>
                            <div class="swiper-wrapper row gutter-no cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                                <div class="swiper-slide brand-col">
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                </div>
                                <div class="swiper-slide brand-col">
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                </div>
                                <div class="swiper-slide brand-col">
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                </div>
                                <div class="swiper-slide brand-col">
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                </div>
                                <div class="swiper-slide brand-col">
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                    <figure class="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94" />
                                    </figure>
                                </div>
                            </div>









                            <div class="title-link-wrapper title-deals appear-animate">
                                <h2 class="title">Deals Hot Of The Day</h2>
                                <a href="shop-boxed-banner.html" class="font-weight-bold ls-25">More Products<i
                                    class="w-icon-long-arrow-right"></i></a>
                            </div>




                            <div class="container">
                                <div class="row">

                                    {this.props.allProduct == undefined ? null : this.props.allProduct.map((x) => {


                                        return (

                                            <div class="col-6 col-md-2">
                                                <figure class="product-media">
                                                    <a href="product-default.html">
                                                        <img src="https://static-01.daraz.com.bd/p/a0495557c13ecbd5dde6b166727f73a3.jpg_200x200q80-product.jpg_.webp" alt="Product"
                                                            width="187" height="210" style={{ borderTop: "1px solid #00BAA3", borderLeft: "1px solid #00BAA3", borderRight: "1px solid #00BAA3" }} />
                                                    </a>

                                                </figure>
                                                <div class="product-details" style={{ borderLeft: "1px solid #00BAA3", borderRight: "1px solid #00BAA3", borderBottom: "1px solid #00BAA3" }}>
                                                    <h3 class="product-name">
                                                        <a href={`/product/${x.slug}`}>{x.title}</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <ins class="new-price">{x.mrp}</ins>
                                                    </div>



                                                </div>
                                                <a href="#" class="btn-product" title="Add to Cart">
                                                    <span>Add To Cart</span></a>




                                            </div>

                                        )




                                    })}



                                    {this.props.loading == true ? (
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : null
                                    }

                                    <div class=" title title-center title-link-wrapper title-deals appear-animate"><button style={{ fontSize: "30px", backgroundColor: "#00BAA3" }} class="btn btn-primary" onClick={this.loadmore}>Loading... </button>    </div>










                                </div>
                            </div>
























                        </div>














                    </div>



                </div>

                <Footer />

            </div>

        )

    }



}))

