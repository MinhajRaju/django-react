import React from "react";
import { connect } from 'react-redux';
import { CategoryOneAction, CategoryTwoAction, NestedCategoryAction } from "../Actions/CategoryAction";



import { withRouter } from "react-router-dom";

import store from "../store";
import Footer from "./Footer";
import HeaderTop from "./Header";
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'



const mapStateToProps = (state) => {




    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo }



}



export default connect(mapStateToProps)(withRouter(class Index extends React.Component {


    constructor(props) {
        super(props)

        store.dispatch(NestedCategoryAction())

        this.state = {
            cat_depth_one: [],
            cat_depth_two: [],
        }

    }


    componentDidMount() {

        console.log(this)


    }

    handel = (id) => {


        const result = this.props.nestedCategory.filter(data => data.level == 1 && data.parent == id)
        this.setState({ cat_depth_one: result })

    }

    handel2 = (id) => {

        const result = this.props.nestedCategory.filter(data => data.level == 2 && data.parent == id)
        this.setState({ cat_depth_two: result })

    }





    render() {



        return (

            <div>
                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">

                        <HeaderTop />

                        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
                            <div className="container">
                                <div className="inner-wrap">
                                    <div className="header-left flex-1">
                                        <div className="dropdown category-dropdown show-dropdown" data-visible="true">
                                            <a href="#" className="category-toggle text-white" role="button" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="true" data-display="static"
                                                title="Browse Categories">
                                                <i className="w-icon-category"></i>
                                                <span>Browse Categories</span>
                                            </a>

                                            <div className="dropdown-box">
                                                <ul className="menu vertical-menu category-menu">


                                                    <li>
                                                        <a href="shop-fullwidth-banner.html">
                                                            <i className="w-icon-electronics"></i>Electronics
                                                        </a>
                                                        <ul className="megamenu">
                                                            <li>
                                                                <h4 className="menu-title">Laptops &amp; Computers</h4>
                                                                <hr className="divider" />
                                                                <ul>
                                                                    <li><a href="shop-fullwidth-banner.html">Desktop
                                                                        Computers</a></li>

                                                                </ul>

                                                                <h4 className="menu-title mt-1">TV &amp; Video</h4>
                                                                <hr className="divider" />
                                                                <ul>
                                                                    <li><a href="shop-fullwidth-banner.html">TVs</a></li>

                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <h4 className="menu-title">Digital Cameras</h4>
                                                                <hr className="divider" />
                                                                <ul>
                                                                    <li><a href="shop-fullwidth-banner.html">Digital SLR
                                                                        Cameras</a></li>

                                                                </ul>

                                                                <h4 className="menu-title mt-1">Cell Phones</h4>
                                                                <hr className="divider" />
                                                                <ul>
                                                                    <li><a href="shop-fullwidth-banner.html">Carrier Phones</a>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div className="menu-banner banner-fixed menu-banner4">
                                                                    <figure>
                                                                        <img src="assets/images/menu/banner-4.jpg" alt="Menu Banner"
                                                                            width="235" height="433" />
                                                                    </figure>
                                                                    <div className="banner-content">
                                                                        <h4 className="banner-subtitle font-weight-normal">Deals Of The
                                                                            Week</h4>
                                                                        <h3 className="banner-title text-white">Save On Smart EarPhone
                                                                        </h3>
                                                                        <div
                                                                            className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                                                            20% Off</div>
                                                                        <a href="shop-banner-sidebar.html"
                                                                            className="btn btn-white btn-outline btn-sm btn-rounded">Shop
                                                                            Now</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="shop-fullwidth-banner.html">
                                                            <i className="w-icon-furniture"></i>Furniture
                                                        </a>
                                                        <ul className="megamenu type2">
                                                            <li className="row">
                                                                <div className="col-md-3 col-lg-3 col-6">
                                                                    <h4 className="menu-title">Furniture</h4>
                                                                    <hr className="divider" />
                                                                    <ul>
                                                                        <li><a href="shop-fullwidth-banner.html">Sofas & Couches</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-6">
                                                                    <h4 className="menu-title">Lighting</h4>
                                                                    <hr className="divider" />
                                                                    <ul>
                                                                        <li><a href="shop-fullwidth-banner.html">Light Bulbs</a>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-6">
                                                                    <h4 className="menu-title">Home Accessories</h4>
                                                                    <hr className="divider" />
                                                                    <ul>
                                                                        <li><a href="shop-fullwidth-banner.html">Decorative
                                                                            Accessories</a></li>

                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-6">
                                                                    <h4 className="menu-title">Garden & Outdoors</h4>
                                                                    <hr className="divider" />
                                                                    <ul>
                                                                        <li><a href="shop-fullwidth-banner.html">Garden
                                                                            Furniture</a></li>

                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="row">
                                                                <div className="col-6">
                                                                    <div className="banner banner-fixed menu-banner5 br-xs">
                                                                        <figure>
                                                                            <img src="assets/images/menu/banner-5.jpg" alt="Banner"
                                                                                width="410" height="123"
                                                                                style={{ backgroundColor: "#D2D2D2" }} />
                                                                        </figure>
                                                                        <div className="banner-content text-right y-50">
                                                                            <h4
                                                                                className="banner-subtitle font-weight-normal text-default text-capitalize">
                                                                                New Arrivals</h4>
                                                                            <h3
                                                                                className="banner-title font-weight-bolder text-capitalize ls-normal">
                                                                                Amazing Sofa</h3>
                                                                            <div
                                                                                className="banner-price-info font-weight-normal ls-normal">
                                                                                Starting at <strong>$125.00</strong></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="banner banner-fixed menu-banner5 br-xs">
                                                                        <figure>
                                                                            <img src="assets/images/menu/banner-6.jpg" alt="Banner"
                                                                                width="410" height="123"
                                                                                style={{ backgroundColor: "#9F9888" }} />
                                                                        </figure>
                                                                        <div className="banner-content y-50">
                                                                            <h4
                                                                                className="banner-subtitle font-weight-normal text-white text-capitalize">
                                                                                Best Seller</h4>
                                                                            <h3
                                                                                className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                                                                Chair &amp; Lamp</h3>
                                                                            <div
                                                                                className="banner-price-info font-weight-normal ls-normal text-white">
                                                                                From <strong>$165.00</strong></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li>
                                                        <a href="shop-banner-sidebar.html"
                                                            className="font-weight-bold text-uppercase ls-15">
                                                            View All Categories<i className="w-icon-angle-right"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <nav className="main-nav">
                                            <ul className="menu">
                                                <li className="active">
                                                    <a href="demo4.html">Home</a>
                                                </li>

                                                <li>
                                                    <a href="vendor-dokan-store.html">Category</a>
                                                    <ul>
                                                        <li>
                                                            {this.props.nestedCategory == undefined ? null
                                                                : (this.props.nestedCategory.map((data) => {

                                                                    console.log(data.parent)

                                                                    if (data.parent == null) {
                                                                        return (<a href="#" onMouseOver={() => this.handel(data.id)}>

                                                                            <LinkContainer to={`/shop/${data.id}/`} >
                                                                                <NavDropdown.Item>{data.name}</NavDropdown.Item >
                                                                            </LinkContainer>

                                                                        </a>)
                                                                    }

                                                                }))



                                                            }

                                                            <ul>



                                                                <li>
                                                                    {this.state.cat_depth_one == undefined ? null
                                                                        : (this.state.cat_depth_one.map((data) => {

                                                                            return <a href="vendor-dokan-store-list.html" onMouseOver={() => this.handel2(data.id)}>{data.name}</a>

                                                                        }))



                                                                    }

                                                                    <ul>
                                                                        {this.state.cat_depth_two == undefined ? null
                                                                            : (this.state.cat_depth_two.map((data) => {

                                                                                return <a href="vendor-dokan-store-list.html" >{data.name}</a>



                                                                            }))



                                                                        }

                                                                    </ul>

                                                                    <ul>

                                                                        {this.state.cat_depth_two == undefined ? null : this.state.cat_depth_two.length == 0 ? <li>No Category</li>
                                                                            : (this.state.cat_depth_two.map((data) => {


                                                                                return <li><a href="vendor-dokan-store-list.html" >{data.name}</a></li>






                                                                            }))



                                                                        }

                                                                    </ul>



                                                                </li>

                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </li>


                                            </ul>
                                        </nav>


                                        <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">

                                            <input type="text" className="form-control" name="search" id="search"
                                                placeholder="Search in..." required />
                                            <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                                            </button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>


                    </header>


                    <div className="main">
                        <section className="intro-section bg-grey">
                            <div className="container">
                                <div className="intro-wrapper pt-4">
                                    <div className="row">
                                        <div className="col-lg-7 col-xl-8">
                                            <div className="swiper-container swiper-theme animation-slider pg-inner" data-swiper-options="{
                                    'autoplay': {
                                        'delay': 8000,
                                        'disableOnInteraction': false
                                    }
                                }">
                                                <div className="swiper-wrapper row gutter-no cols-1">
                                                    <div className="swiper-slide banner banner-fixed intro-slide intro-slide1 br-sm"
                                                        style={{ backgroundImage: "url(assets/images/demos/demo4/slides/slide-1.jpg)", backgroundColor: "#3D434B" }}>
                                                        <div className="banner-content y-50">
                                                            <div className="slide-animate" data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'duration': '1s'
                                                }">
                                                                <h5
                                                                    className="banner-subtitle text-uppercase text-primary font-weight-bolder ls-25">
                                                                    Best Sellers</h5>
                                                                <h3 className="banner-title text-capitalize text-white ls-25 lh-1 mb-3">New
                                                                    Lifestyle Collection</h3>
                                                                <div
                                                                    className="banner-price-info text-white text-uppercase font-weight-normal">
                                                                    <strong>Up To 10%</strong> Discount
                                                                </div>
                                                                <a href="shop-banner-sidebar.html"
                                                                    className="btn btn-white btn-outline btn-rounded">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                                                        style={{ backgroundImage: "url(assets/images/demos/demo4/slides/slide-2.jpg)", backgroundColor: "#fff" }}>
                                                        <div className="banner-content y-50">
                                                            <div className="slide-animate" data-animation-options="{
                                                    'name': 'fadeInDownShorter', 'duration': '1s'
                                                }">
                                                                <h5
                                                                    className="banner-subtitle text-primary text-uppercase font-weight-bolder ls-25">
                                                                    New Arrivals</h5>
                                                                <h3 className="banner-title font-weight-normal text-uppercase ls-25 lh-1">
                                                                    Comfortable<strong className="text-capitalize"> Royale Remix</strong>
                                                                </h3>
                                                                <div className="banner-price-info text-uppercase text-default ls-25">
                                                                    Starting At<strong className="text-secondary"> $250.99</strong>
                                                                </div>
                                                                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded">Shop
                                                                    Now</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide banner banner-fixed intro-slide intro-slide3 br-sm"
                                                        style={{ backgroundImage: "url(assets/images/demos/demo4/slides/slide-3.jpg)", backgroundColor: "#37363E" }}>
                                                        <div className="banner-content x-50 w-100 text-center">
                                                            <h5 className="banner-subtitle text-uppercase font-weight-normal text-light slide-animate"
                                                                data-animation-options="{
                                                    'name': 'fadeInDownShorter', 'duration': '1s'
                                                }">Financing Offer</h5>
                                                            <h3 className="banner-title text-white ls-25 mb-1 slide-animate"
                                                                data-animation-options="{
                                                    'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.4s'
                                                }">Camera, Phone and Tools</h3>
                                                            <div className="banner-price-info text-capitalize font-weight-normal text-light ls-25 slide-animate"
                                                                data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.6s'}">
                                                                <strong className="text-secondary">35% Off</strong> Discount
                                                            </div>
                                                            <a href="shop-banner-sidebar.html"
                                                                className="btn btn-white btn-link btn-underline btn-icon-right slide-animate"
                                                                data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1s', 'delay': '.8s'}">
                                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-xl-4 right-sidebar sidebar-fixed">
                                            <div className="sidebar-overlay">
                                                <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                            </div>
                                            <a href="#" className="sidebar-toggle"><i className="fas fa-chevron-left"></i></a>
                                            <div className="sidebar-content h-100">
                                                <div className="title-link-wrapper mb-0">
                                                    <h4 className="title title-link">You May Like</h4>
                                                </div>
                                                <div className="widget widget-products">
                                                    <div className="product product-widget pt-0">
                                                        <figure className="product-media">
                                                            <a href="product-default.html">
                                                                <img src="assets/images/demos/demo4/products/1-1.jpg" alt="Product"
                                                                    width="300" height="338" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h4 className="product-name">
                                                                <a href="product-default.html">Automatic Watch</a>
                                                            </h4>
                                                            <div className="product-price">
                                                                <ins className="new-price">$145.62</ins><del
                                                                    className="old-price">$152.13</del>
                                                            </div>
                                                            <div className="sold-by">
                                                                Sold By
                                                                <a href="vendor-wcfm-store-product-grid.html">Vendor 2</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product product-widget pt-0">
                                                        <figure className="product-media">
                                                            <a href="product-default.html">
                                                                <img src="assets/images/demos/demo4/products/1-2.jpg" alt="Product"
                                                                    width="300" height="338" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h4 className="product-name">
                                                                <a href="product-default.html">Black Crusher</a>
                                                            </h4>
                                                            <div className="product-price">
                                                                <ins className="new-price">$300.00</ins><del
                                                                    className="old-price">$355.69</del>
                                                            </div>
                                                            <div className="sold-by">
                                                                Sold By
                                                                <a href="vendor-wcfm-store-product-grid.html">Vendor 4</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product product-widget pt-0">
                                                        <figure className="product-media">
                                                            <a href="product-default.html">
                                                                <img src="assets/images/demos/demo4/products/1-3.jpg" alt="Product"
                                                                    width="300" height="338" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h4 className="product-name">
                                                                <a href="product-default.html">Bluetooth Music Recorder</a>
                                                            </h4>
                                                            <div className="product-price">
                                                                <ins className="new-price">$21.50</ins><del
                                                                    className="old-price">$26.11</del>
                                                            </div>
                                                            <div className="sold-by">
                                                                Sold By
                                                                <a href="vendor-wcfm-store-product-grid.html">Vendor 4</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product product-widget pt-0">
                                                        <figure className="product-media">
                                                            <a href="product-default.html">
                                                                <img src="assets/images/demos/demo4/products/1-4.jpg" alt="Product"
                                                                    width="300" height="338" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h4 className="product-name">
                                                                <a href="product-default.html">Bodycare Smooth Powder</a>
                                                            </h4>
                                                            <div className="product-price">
                                                                <ins className="new-price">$28.01</ins><del
                                                                    className="old-price">$29.25</del>
                                                            </div>
                                                            <div className="sold-by">
                                                                Sold By
                                                                <a href="vendor-wcfm-store-product-grid.html">Vendor 3</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="container mb-10 pb-2">
                            <div className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white" data-swiper-options="{
                    'loop': true,
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 4000,
                        'disableOnInteraction': false
                    },
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '992': {
                            'slidesPerView': 3,
                            'spaceBetween': 20
                        },
                        '1200': {
                            'slidesPerView': 4,
                            'spaceBetween': 20
                        }
                    }
                }">
                                <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                                    <div className="swiper-slide icon-box icon-box-side text-dark">
                                        <span className="icon-box-icon icon-shipping">
                                            <i className="w-icon-truck"></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title font-weight-bolder ls-normal">Free Shipping & Returns</h4>
                                            <p className="text-default">For all orders over $99</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box icon-box-side text-dark">
                                        <span className="icon-box-icon icon-payment">
                                            <i className="w-icon-bag"></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title font-weight-bolder ls-normal">Secure Payment</h4>
                                            <p className="text-default">We ensure secure payment</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box icon-box-side text-dark icon-box-money">
                                        <span className="icon-box-icon icon-money">
                                            <i className="w-icon-money"></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title font-weight-bolder ls-normal">Money Back Guarantee</h4>
                                            <p className="text-default">Any back within 30 days</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box icon-box-side text-dark icon-box-chat">
                                        <span className="icon-box-icon icon-chat">
                                            <i className="w-icon-chat"></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title font-weight-bolder ls-normal">Customer Support</h4>
                                            <p className="text-default">Call or email us 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row category-wrapper cols-lg-3 cols-sm-2 appear-animate mb-8">
                                <div className="category-wrap mb-4">
                                    <div className="category category-group-image br-sm">
                                        <div className="category-content">
                                            <h4 className="category-name"><a href="shop-fullwidth-banner.html">Clothings</a>
                                            </h4>
                                            <ul className="category-list">
                                                <li><a href="shop-fullwidth-banner.html">Knitwears</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Jumpers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Trousers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Dress &amp; Skirts</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Men's</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                            </ul>
                                        </div>
                                        <a href="shop-fullwidth-banner.html">
                                            <figure className="category-media">
                                                <img src="assets/images/demos/demo4/categories/1-1.jpg" alt="Category" width="190"
                                                    height="215" />
                                            </figure>
                                        </a>
                                    </div>
                                </div>





                            </div>


                            <div className="category-banner-wrapper row grid appear-animate">
                                <div className="grid-item col-lg-6 col-md-8 col-sm-7 height-x2">
                                    <div className="banner banner-fixed br-sm banner-lg">
                                        <figure>
                                            <img src="assets/images/demos/demo4/banners/1-1.jpg" alt="Banner" width="640"
                                                height="460" style={{ backgroundColor: "#F6F6F6" }} />
                                        </figure>
                                        <div className="banner-content y-50">
                                            <h3 className="banner-title text-capitalize ls-25 mb-0">Season<br />Women
                                                Fashion<br />Collection</h3>
                                            <p>Free shipping on all over <strong className="text-secondary">$99</strong></p>
                                            <a href="shop-banner-sidebar.html"
                                                className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-lg-3 col-sm-6 height-x1">
                                    <div className="banner banner-fixed br-sm banner-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo4/banners/1-2.jpg" alt="Banner" width="310"
                                                height="220" style={{ backgroundColor: "#F2F2F2" }} />
                                        </figure>
                                        <div className="banner-content y-50 pt-2">
                                            <h5 className="banner-subtitle font-weight-bold text-capitalize mb-2 ls-25">Best Seller</h5>
                                            <h3 className="banner-title text-uppercase mb-0">Cosmetic</h3>
                                            <div className="banner-price-info text-secondary text-capitalize ls-25">45% Off</div>
                                            <a href="shop-banner-sidebar.html"
                                                className="btn btn-dark btn-link btn-underline btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-lg-3 col-md-4 col-sm-5 height-x2">
                                    <div className="banner banner-fixed br-sm banner-md">
                                        <figure>
                                            <img src="assets/images/demos/demo4/banners/1-3.jpg" alt="Banner" width="310"
                                                height="220" style={{ backgroundColor: "#3D4753" }} />
                                        </figure>
                                        <div className="banner-content x-50 w-100 text-center">
                                            <div className="banner-price-info text-white font-weight-bolder text-uppercase ls-25">40
                                                <sup className="font-weight-bold p-relative">%</sup>
                                                <sub className="font-weight-bold p-relative ls-normal">Off</sub>
                                            </div>
                                            <h3 className="banner-title text-uppercase text-white">Ultimate Sale</h3>
                                            <p className="text-capitalize">Discount Selected Items</p>
                                            <a href="shop-banner-sidebar.html"
                                                className="btn btn-white btn-outline btn-rounded btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item col-lg-3 col-sm-6 height-x1">
                                    <div className="banner banner-fixed br-sm banner-sm">
                                        <figure>
                                            <img src="assets/images/demos/demo4/banners/1-4.jpg" alt="Banner" width="310"
                                                height="220" style={{ backgroundColor: "#414A59" }} />
                                        </figure>
                                        <div className="banner-content y-50 pt-2">
                                            <h5 className="banner-subtitle text-white font-weight-bold text-capitalize mb-2 ls-25">
                                                Featured Event</h5>
                                            <h3 className="banner-title text-white text-uppercase mb-0 ls-25">Electronics</h3>
                                            <div className="banner-price-info text-primary text-capitalize ls-25">Sale</div>
                                            <a href="shop-banner-sidebar.html"
                                                className="btn btn-white btn-link btn-underline btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-space col-1"></div>
                            </div>

                        </div>


                        <section className="grey-section pt-10">
                            <div className="container mt-2 mb-3">
                                <div className="filter-with-title appear-animate">
                                    <h2 className="title title-filter">Clothing &amp; Apparel</h2>
                                    <ul className="nav-filters filter-boxed mb-0" data-target="#products-1">
                                        <li><a className="nav-filter active" href="#" data-filter="*">New Arrivals</a></li>
                                        <li><a className="nav-filter" href="#" data-filter=".best-seller">Best Seller</a></li>
                                        <li><a className="nav-filter" href="#" data-filter=".most-popular">Most Popular</a></li>
                                        <li><a className="nav-filter" href="#" data-filter="*">View All</a></li>
                                    </ul>
                                </div>

                                <div className="row grid mb-10 cols-xl-5 cols-md-4 cols-sm-3 cols-2 appear-animate" id="products-1">
                                    <div className="grid-item product-wrap best-seller">
                                        <div className="product product-simple text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo4/products/2-1-1.jpg" alt="Product"
                                                        width="300" height="338" />
                                                    <img src="assets/images/demos/demo4/products/2-1-2.jpg" alt="Product"
                                                        width="300" height="338" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="wishlist.html" className="btn-product-icon btn-wishlist"
                                                        title="Add to wishlist"><i className="w-icon-heart"></i></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                        title="Add to Compare"></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name"><a href="product-default.html">Leather Stripe Watch</a>
                                                </h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width: "100%" }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">(12 Reviews)</a>
                                                </div>
                                                <div className="product-pa-wrapper">
                                                    <div className="product-price">
                                                        <ins className="new-price">$56.50</ins>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="btn-cart btn-product btn-link btn-underline">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item product-wrap most-popular">
                                        <div className="product product-simple text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo4/products/2-2.jpg" alt="Product" width="300"
                                                        height="338" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="wishlist.html" className="btn-product-icon btn-wishlist"
                                                        title="Add to wishlist"><i className="w-icon-heart"></i></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                        title="Add to Compare"></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name"><a href="product-default.html">Casual Handbag</a></h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width: "100%" }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                                                </div>
                                                <div className="product-pa-wrapper">
                                                    <div className="product-price">
                                                        <ins className="new-price">$72.30 - $90.45</ins>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="btn-cart btn-product btn-link btn-underline">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item product-wrap best-seller">
                                        <div className="product product-simple text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo4/products/2-3-1.jpg" alt="Product"
                                                        width="300" height="338" />
                                                    <img src="assets/images/demos/demo4/products/2-3-2.jpg" alt="Product"
                                                        width="300" height="338" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="wishlist.html" className="btn-product-icon btn-wishlist"
                                                        title="Add to wishlist"><i className="w-icon-heart"></i></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                        title="Add to Compare"></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name"><a href="product-default.html">Multi Function Watch</a>
                                                </h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width: "100%" }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">(10 Reviews)</a>
                                                </div>
                                                <div className="product-pa-wrapper">
                                                    <div className="product-price">
                                                        <ins className="new-price">$65.88</ins><del className="old-price">$73.15</del>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="btn-cart btn-product btn-link btn-underline">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item product-wrap most-popular">
                                        <div className="product product-simple text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo4/products/2-4-1.jpg" alt="Product"
                                                        width="300" height="338" />
                                                    <img src="assets/images/demos/demo4/products/2-4-2.jpg" alt="Product"
                                                        width="300" height="338" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="wishlist.html" className="btn-product-icon btn-wishlist"
                                                        title="Add to wishlist"><i className="w-icon-heart"></i></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                        title="Add to Compare"></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name"><a href="product-default.html">Perfect classNameic Hat</a></h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width: "80%" }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                                                </div>
                                                <div className="product-pa-wrapper">
                                                    <div className="product-price">
                                                        <ins className="new-price">$69.99</ins><del className="old-price">$84.16</del>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="btn-cart btn-product btn-link btn-underline">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-item product-wrap best-seller">
                                        <div className="product product-simple text-center">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo4/products/2-5.jpg" alt="Product" width="300"
                                                        height="338" />
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="wishlist.html" className="btn-product-icon btn-wishlist"
                                                        title="Add to wishlist"><i className="w-icon-heart"></i></a>
                                                    <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                        title="Add to Compare"></a>
                                                </div>
                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </div>
                                            </figure>
                                            <div className="product-details">
                                                <h4 className="product-name"><a href="product-default.html">Men's Suede Belt</a></h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings" style={{ width: "100%" }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                                                </div>
                                                <div className="product-pa-wrapper">
                                                    <div className="product-price">
                                                        <ins className="new-price">$38.19</ins>
                                                    </div>
                                                    <div className="product-action">
                                                        <a href="#" className="btn-cart btn-product btn-link btn-underline">Add To
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-space col-xl-5col col-1"></div>
                                </div>
                                <h2 className="title mb-5 pt-1 appear-animate">Top Weekly Vendors</h2>
                                <div className="swiper-container swiper-theme vendor-wrapper mb-9 appear-animate" data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 1,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 2
                            },
                            '768': {
                                'slidesPerView': 3
                            },
                            '1200': {
                                'slidesPerView': 4
                            }
                        }
                    }">
                                    <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                                        <div className="swiper-slide vendor-widget vendor-widget-1 mb-0">
                                            <div className="vendor-products grid-type">
                                                <div className="vendor-product lg-item">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/demos/demo4/products/3-1.jpg" alt="Vendor Product"
                                                                width="300" height="338" />
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="vendor-product sm-item">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/demos/demo4/products/3-2.jpg" alt="Vendor Product"
                                                                width="300" height="338" />
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="vendor-product sm-item">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/demos/demo4/products/3-3.jpg" alt="Vendor Product"
                                                                width="300" height="338" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="vendor-details">
                                                <figure className="vendor-logo">
                                                    <a href="vendor-dokan-store.html">
                                                        <img src="assets/images/demos/demo4/vendor-logo/1.png" alt="Vendor Logo"
                                                            width="70" height="70" />
                                                    </a>
                                                </figure>
                                                <div className="vendor-personal">
                                                    <h4 className="vendor-name">
                                                        <a href="vendor-dokan-store.html">Vendor 1</a>
                                                    </h4>
                                                    <span className="vendor-product-count">(27 Products)</span>
                                                    <div className="ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings" style={{ width: "100%" }}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>


                                <div className="swiper-container swiper-theme category-banner-3cols mb-10 pb-2 appear-animate" data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 1,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 2
                            },
                            '992': {
                                'slidesPerView': 3
                            }
                        }
                    }">
                                    <div className="swiper-wrapper row cols-lg-3 cols-sm-2 cols-1">
                                        <div className="swiper-slide banner banner-fixed br-sm">
                                            <figure>
                                                <img src="assets/images/demos/demo4/categories/2-1.jpg" alt="Category Banner"
                                                    width="420" height="200" style={{ backgroundColor: "#ACACAC" }} />
                                            </figure>
                                            <div className="banner-content y-50">
                                                <h5 className="banner-subtitle text-white font-weight-normal text-capitalize ls-25">New
                                                    Collection</h5>
                                                <h3 className="banner-title text-white text-uppercase ls-25">
                                                    Online classNamees<br /><span className="text-capitalize">Yoga</span>
                                                </h3>
                                                <a href="shop-banner-sidebar.html"
                                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="swiper-slide banner banner-fixed br-sm">
                                            <figure>
                                                <img src="assets/images/demos/demo4/categories/2-2.jpg" alt="Category Banner"
                                                    width="420" height="200" style={{ backgroundColor: "#414247" }} />
                                            </figure>
                                            <div className="banner-content y-50">
                                                <h5 className="banner-subtitle text-white font-weight-normal text-capitalize ls-25">New
                                                    Arrivals</h5>
                                                <h3 className="banner-title text-white text-uppercase ls-25">
                                                    Cosmetic Sale<br /><span className="text-capitalize text-secondary">25% Off</span>
                                                </h3>
                                                <a href="shop-banner-sidebar.html"
                                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="swiper-slide banner banner-fixed br-sm">
                                            <figure>
                                                <img src="assets/images/demos/demo4/categories/2-3.jpg" alt="Category Banner"
                                                    width="420" height="200" style={{ backgroundColor: "#9FA7AA" }} />
                                            </figure>
                                            <div className="banner-content y-50">
                                                <h5 className="banner-subtitle text-white font-weight-normal text-capitalize ls-25">Top
                                                    Products</h5>
                                                <h3 className="banner-title text-white text-uppercase ls-25">
                                                    Trend Sports<br /><span className="text-capitalize">Shoes</span>
                                                </h3>
                                                <a href="shop-banner-sidebar.html"
                                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>










                            </div>

                        </section>


                        <div className="container mt-10 pt-2 mb-10">
                            <div className="banner banner-gift br-sm mb-9 appear-animate" style={{
                                backgroundImage: "url(assets/images/demos/demo4/banners/2.jpg)",
                                backgroundColor: "#393C41"
                            }}>
                                <div className="banner-content">
                                    <div className="content-left mr-auto">
                                        <h3 className="banner-title text-white text-uppercase mb-0 lh-1">Get Our Perfect Gift</h3>
                                        <p className="font-weight-normal text-white text-capitalize">Special Offer Collection</p>
                                        <a href="shop-banner-sidebar.html"
                                            className="btn btn-primary btn-link btn-underline btn-icon-right">
                                            View All Collection<i className="w-icon-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="content-right swiper-container swiper-nav-md" data-swiper-options="{                     'slidesPerView': 1                        }">
                                        <div className="swiper-wrapper row cols-1">
                                            <div className="swiper-slide item text-center">
                                                <p className="text-uppercase font-weight-bold">On Headphone</p>
                                                <strong className="text-secondary text-uppercase">40% Off</strong>
                                                <a href="shop-banner-sidebar.html"
                                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                            <div className="swiper-slide item text-center">
                                                <p className="text-uppercase font-weight-bold">On Headphone</p>
                                                <strong className="text-secondary text-uppercase">40% Off</strong>
                                                <a href="shop-banner-sidebar.html"
                                                    className="btn btn-white btn-link btn-underline btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <button className="swiper-button-next"></button>
                                        <button className="swiper-button-prev"></button>
                                    </div>
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

