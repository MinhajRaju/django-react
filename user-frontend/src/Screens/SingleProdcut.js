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



const mapStateToProps = (state) => {


    return { productInfo: state.SingleproductReducer.singleProductInfo }



}



export default connect(mapStateToProps)(withRouter(class SingleProductScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: [],
            id: null,
            cal: null,
            address: "",
            rating: "",
            ratingOne: "",
        }




    }


    componentDidMount() {

        console.log(this.props)
        store.dispatch(AllProductAction())


        store.dispatch(SingleProductAction(this.props.match.params.slug))









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


    rating = (e) => {

        console.log("RArar", e.target.value)

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

                        <nav class="breadcrumb-nav container">
                            <ul class="breadcrumb bb-no">

                            </ul>
                            <ul class="product-nav list-style-none">


                            </ul>
                        </nav>

                        <div class="page-content">
                            <div class="container">
                                <div class="row gutter-lg">
                                    <div class="main-content">
                                        <div class="product product-single row">
                                            <div class="col-md-6 mb-6">
                                                <div class="product-gallery product-gallery-sticky">
                                                    <div class="swiper-container product-single-swiper swiper-theme nav-inner" data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }">
                                                        <div class="swiper-wrapper row cols-1 gutter-no">
                                                            <div class="swiper-slide">
                                                                <figure class="product-image">
                                                                    <img src="/assets/images/products/default/1-800x900.jpg"
                                                                        data-zoom-image="assets/images/products/default/1-800x900.jpg"
                                                                        alt="Electronics Black Wrist Watch" width="800" height="900" />
                                                                </figure>
                                                            </div>



                                                        </div>
                                                        <button class="swiper-button-next"></button>
                                                        <button class="swiper-button-prev"></button>
                                                        <a href="#" class="product-gallery-btn product-image-full"><i class="w-icon-zoom"></i></a>
                                                    </div>
                                                    <div class="product-thumbs-wrap swiper-container" data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }">
                                                        <div class="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                                            <div class="product-thumb swiper-slide">
                                                                <img src="assets/images/products/default/1-800x900.jpg"
                                                                    alt="Product Thumb" width="800" height="900" />
                                                            </div>
                                                            <div class="product-thumb swiper-slide">
                                                                <img src="assets/images/products/default/1-800x900.jpg"
                                                                    alt="Product Thumb" width="800" height="900" />
                                                            </div>

                                                            <div class="product-thumb swiper-slide">
                                                                <img src="assets/images/products/default/1-800x900.jpg"
                                                                    alt="Product Thumb" width="800" height="900" />
                                                            </div>


                                                        </div>
                                                        <button class="swiper-button-next"></button>
                                                        <button class="swiper-button-prev"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4 mb-md-6">
                                                {this.props.productInfo == undefined ? null :

                                                    (
                                                        <div class="product-details" data-sticky-options="{'minWidth': 767}">
                                                            <h1 class="product-title">{this.props.productInfo.title}</h1>
                                                            <div class="product-bm-wrapper">
                                                                <figure class="brand">
                                                                    <img src="assets/images/products/brand/brand-1.jpg" alt="Brand"
                                                                        width="102" height="48" />
                                                                </figure>
                                                                <div class="product-meta">
                                                                    <div class="product-categories">
                                                                        Category:
                                                                        <span class="product-category"><a href={`/category/${this.props.productInfo.category.id}`}>{this.props.productInfo.category != null ? this.props.productInfo.category.name : ""} </a> <a href={`/category/${this.props.productInfo.sub_category.id}`}>{this.props.productInfo.sub_category != null ? this.props.productInfo.sub_category.name : ""} <a href={`/category/${this.props.productInfo.sub_sub_category.id}`}>{this.props.productInfo.sub_sub_category != null ? this.props.productInfo.sub_sub_category.name : ""} </a> </a></span>
                                                                    </div>
                                                                    <div class="product-sku">
                                                                        Brand <span>{this.props.productInfo.brand.name.toUpperCase()}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <hr class="product-divider" />

                                                            <div class="product-price"><ins class="new-price">$40.00</ins></div>





                                                            <hr class="product-divider" />

                                                            <div class="product-form product-variation-form product-color-swatch">
                                                                <label>Color:</label>
                                                                <div class="d-flex align-items-center product-variations">
                                                                    <a href="#" class="color" style={{ backgroundColor: "#ffcc01" }}></a>
                                                                    <a href="#" class="color" style={{ backgroundColor: "#ca6d00" }}></a>
                                                                    <a href="#" class="color" style={{ backgroundColor: "#1c93cb" }}></a>
                                                                    <a href="#" class="color" style={{ backgroundColor: "#ccc" }}></a>
                                                                    <a href="#" class="color" style={{ backgroundColor: "#333" }}></a>
                                                                </div>
                                                            </div>
                                                            <div class="product-form product-variation-form product-size-swatch">
                                                                <label class="mb-1">Size:</label>
                                                                <div class="flex-wrap d-flex align-items-center product-variations">
                                                                    <a href="#" class="size">Small</a>
                                                                    <a href="#" class="size">Medium</a>
                                                                    <a href="#" class="size">Large</a>
                                                                    <a href="#" class="size">Extra Large</a>
                                                                </div>
                                                                <a href="#" class="product-variation-clean">Clean All</a>
                                                            </div>

                                                            <div class="product-variation-price">
                                                                <span></span>
                                                            </div>

                                                            <div class="fix-bottom product-sticky-content sticky-content">
                                                                <div class="product-form container">
                                                                    <div class="product-qty-form">
                                                                        <div class="input-group">

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    )


                                                }

                                            </div>
                                        </div>

                                        <div class="tab tab-nav-boxed tab-nav-underline product-tabs">
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a href="#product-tab-description" class="nav-link active">Description</a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="#product-tab-reviews" class="nav-link">Customer Reviews (3)</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="product-tab-description">
                                                    <div class="row mb-4">
                                                        <div class="col-md-6 mb-5">
                                                            <h4 class="title tab-pane-title font-weight-bold mb-2">Detail</h4>
                                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                                sed do eiusmod tempor incididunt arcu cursus vitae congue mauris.
                                                                Sagittis id consectetur purus ut. Tellus rutrum tellus pelle Vel
                                                                pretium lectus quam id leo in vitae turpis massa.</p>
                                                            <ul class="list-type-check">
                                                                <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                                                                    elit.
                                                                </li>
                                                                <li>Vivamus finibus vel mauris ut vehicula.</li>
                                                                <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-6 mb-5">
                                                            <div class="banner banner-video product-video br-xs">
                                                                <figure class="banner-media">
                                                                    <a href="#">
                                                                        <img src="assets/images/products/video-banner-610x300.jpg"
                                                                            alt="banner" width="610" height="300"
                                                                            style={{ backgroundColor: "#bebebe" }} />
                                                                    </a>
                                                                    <a class="btn-play-video btn-iframe"
                                                                        href="assets/video/memory-of-a-woman.mp4"></a>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row cols-md-3">
                                                        <div class="mb-3">
                                                            <h5 class="sub-title font-weight-bold"><span class="mr-3">1.</span>Free
                                                                Shipping &amp; Return</h5>
                                                            <p class="detail pl-5">We offer free shipping for products on orders
                                                                above 50$ and offer free delivery for all orders in US.</p>
                                                        </div>
                                                        <div class="mb-3">
                                                            <h5 class="sub-title font-weight-bold"><span>2.</span>Free and Easy
                                                                Returns</h5>
                                                            <p class="detail pl-5">We guarantee our products and you could get back
                                                                all of your money anytime you want in 30 days.</p>
                                                        </div>
                                                        <div class="mb-3">
                                                            <h5 class="sub-title font-weight-bold"><span>3.</span>Special Financing
                                                            </h5>
                                                            <p class="detail pl-5">Get 20%-50% off items over 50$ for a month or
                                                                over 250$ for a year with our special credit card.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="tab-pane" id="product-tab-reviews">


                                                    <div class="tab tab-nav-boxed tab-nav-outline tab-nav-center">

                                                        <div class="tab-content">
                                                            <div class="tab-pane active" id="show-all">
                                                                <div class="tab-pane" id="lowest-rating">
                                                                    <ul class="comments list-style-none">
                                                                        <li class="comment">
                                                                            <div class="comment-body">
                                                                                <figure class="comment-avatar">
                                                                                    <img src="/assets/images/agents/1-100x100.png"
                                                                                        alt="Commenter Avatar" width="90" height="90" />
                                                                                </figure>
                                                                                <div class="comment-content">
                                                                                    <h4 class="comment-author">
                                                                                        <a href="#">John Doe</a>
                                                                                        <span class="comment-date">March 22, 2021 at
                                                                                            1:54 pm</span>
                                                                                    </h4>
                                                                                    <div class="ratings-container comment-rating">
                                                                                        <div class="ratings-full">
                                                                                            <span class="ratings"
                                                                                                style={{ width: "60%;" }}></span>
                                                                                            <span
                                                                                                class="tooltiptext tooltip-top"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>pellentesque habitant morbi tristique senectus
                                                                                        et. In dictum non consectetur a erat.
                                                                                        Nunc ultrices eros in cursus turpis massa
                                                                                        tincidunt ante in nibh mauris cursus mattis.
                                                                                        Cras ornare arcu dui vivamus arcu felis bibendum
                                                                                        ut tristique.</p>
                                                                                    <div class="comment-action">
                                                                                        <a href="#"
                                                                                            class="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                                                                            <i class="far fa-thumbs-up"></i>Helpful (1)
                                                                                        </a>
                                                                                        <a href="#"
                                                                                            class="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                                                                            <i class="far fa-thumbs-down"></i>Unhelpful
                                                                                            (0)
                                                                                        </a>
                                                                                        <div class="review-image">
                                                                                            <a href="#">
                                                                                                <figure>
                                                                                                    <img src="/assets/images/products/default/review-img-3.jpg"
                                                                                                        width="60" height="60"
                                                                                                        alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                                                                                        data-zoom-image="/assets/images/products/default/review-img-3-800x900.jpg" />
                                                                                                </figure>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <section class="vendor-product-section">

                                            <div class="swiper-container swiper-theme" data-swiper-options="{
                                    'spaceBetween': 20,
                                    'slidesPerView': 2,
                                    'breakpoints': {
                                        '576': {
                                            'slidesPerView': 3
                                        },
                                        '768': {
                                            'slidesPerView': 4
                                        },
                                        '992': {
                                            'slidesPerView': 3
                                        }
                                    }
                                }">
                                                <div class="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">





                                                </div>
                                            </div>
                                        </section>
                                        <section class="related-product-section">
                                            <div class="title-link-wrapper mb-4">
                                                <h4 class="title">Related Products</h4>

                                            </div>

                                            <div class="swiper-wrapper row cols-xl-5 cols-lg-4 cols-md-3 cols-2">
                                                <div class="swiper-slide product-col">
                                                    <div class="product product-slideup-content">
                                                        <figure class="product-media">
                                                            <a href="product-default.html">
                                                                <img src="/assets/images/demos/demo7/products/4-1.jpg" alt="Product"
                                                                    width="187" height="210" />
                                                            </a>

                                                        </figure>
                                                        <div class="product-details">
                                                            <h3 class="product-name">
                                                                <a href="product-default.html">Colorful Flavoring Box</a>
                                                            </h3>
                                                            <div class="product-price">
                                                                <ins class="new-price">$25.70</ins>
                                                            </div>
                                                        </div>
                                                        <div class="product-hidden-details">
                                                            <div class="product-action">
                                                                <a href="#" class="btn-product btn-cart" title="Add to Cart">
                                                                    <i class="w-icon-cart"></i><span>Add To Cart</span></a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <aside class="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                                        <div class="sidebar-overlay"></div>
                                        <a class="sidebar-close" href="#"><i class="close-icon"></i></a>
                                        <a href="#" class="sidebar-toggle d-flex d-lg-none"><i class="fas fa-chevron-left"></i></a>
                                        <div class="sidebar-content scrollable">
                                            <div class="sticky-sidebar">
                                                <div class="widget widget-icon-box mb-6">
                                                    <div class="icon-box icon-box-side">
                                                        <span class="icon-box-icon text-dark">
                                                            <i class="w-icon-truck"></i>
                                                        </span>
                                                        <div class="icon-box-content">
                                                            <h4 class="icon-box-title">Free Shipping & Returns</h4>
                                                            <p>For all orders over $99</p>
                                                        </div>
                                                    </div>
                                                    <div class="icon-box icon-box-side">
                                                        <span class="icon-box-icon text-dark">
                                                            <i class="w-icon-bag"></i>
                                                        </span>
                                                        <div class="icon-box-content">
                                                            <h4 class="icon-box-title">Secure Payment</h4>
                                                            <p>We ensure secure payment</p>
                                                        </div>
                                                    </div>
                                                    <div class="icon-box icon-box-side">
                                                        <span class="icon-box-icon text-dark">
                                                            <i class="w-icon-money"></i>
                                                        </span>
                                                        <div class="icon-box-content">
                                                            <h4 class="icon-box-title">Money Back Guarantee</h4>
                                                            <p>Any back within 30 days</p>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="widget widget-banner mb-9">
                                                    <div class="banner banner-fixed br-sm">
                                                        <figure>
                                                            <img src="assets/images/shop/banner3.jpg" alt="Banner" width="266"
                                                                height="220" style={{ backgroundColor: "#1D2D44" }} />
                                                        </figure>
                                                        <div class="banner-content">
                                                            <div class="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                                                                40<sup class="font-weight-bold">%</sup><sub
                                                                    class="font-weight-bold text-uppercase ls-25">Off</sub>
                                                            </div>
                                                            <h4
                                                                class="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                                                                Ultimate Sale</h4>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </aside>

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

