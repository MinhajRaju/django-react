import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";
import { AllProductAction } from "../Actions/ProductAction";


import { withRouter } from "react-router-dom";
import store from "../store";
import Footer from "../Components/Footer";

import HeaderShopAndProduct from "../Components/ShopAndProductHeader";
import HeaderTop from "../Components/Header";

import { addToCart } from "../Actions/CartAction";

import { removeFromCart } from '../Actions/CartAction';




const mapStateToProps = (state) => {


    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo, products: state.AllproductReducer.allProductInfo }



}



export default connect(mapStateToProps)(withRouter(class CategoryProductScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            data: [],
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





    render() {






        return (


            <div>
                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">
                        <HeaderTop />
                        <HeaderShopAndProduct />

                    </header>
                    <main class="main">


                        <div class="page-content">
                            <div class="container">

                                <div class="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
                                    style={{ backgroundImage: "url(/assets/images/shop/banner1.jpg)", backgroundColor: "#FFC74E" }}>
                                    <div class="banner-content">
                                        <h4 class="banner-subtitle font-weight-bold">Accessories Collection</h4>
                                        <h3 class="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart Wrist
                                            Watches</h3>
                                        <a href="shop-banner-sidebar.html" class="btn btn-dark btn-rounded btn-icon-right">Discover
                                            Now<i class="w-icon-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="shop-default-category category-ellipse-section mb-6">
                                    <div class="swiper-container swiper-theme shadow-swiper"
                                        data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 3
                                },
                                '576': {
                                    'slidesPerView': 4
                                },
                                '768': {
                                    'slidesPerView': 6
                                },
                                '992': {
                                    'slidesPerView': 7
                                },
                                '1200': {
                                    'slidesPerView': 8,
                                    'spaceBetween': 30
                                }
                            }
                        }">



                                        <div class="swiper-wrapper row gutter-no cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>
                                            <div class="swiper-slide brand-col">
                                                <figure class="brand-wrapper">
                                                    <img src="/assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94" />
                                                    <a href="shop-banner-sidebar.html" style={{ margin: "5pc" }}>Sports</a>
                                                </figure>
                                            </div>


                                        </div>








                                        <div class="swiper-pagination"></div>
                                    </div>
                                </div>


                                <div class="shop-content row gutter-lg mb-10">

                                    <aside class="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">

                                        <div class="sidebar-overlay"></div>
                                        <a class="sidebar-close" href="#"><i class="close-icon"></i></a>

                                        <div class="sidebar-content scrollable">

                                            <div class="sticky-sidebar">
                                                <div class="filter-actions">
                                                    <label>Filter :</label>
                                                    <a href="#" class="btn btn-dark btn-link filter-clean">Clean All</a>
                                                </div>

                                                <div class="widget widget-collapsible">
                                                    <h3 class="widget-title"><label>All Categories</label></h3>
                                                    <ul class="widget-body filter-items search-ul">
                                                        <li><a href="#">Accessories</a></li>

                                                    </ul>
                                                </div>

                                                <div class="widget widget-collapsible">
                                                    <h3 class="widget-title"><label>Price</label></h3>
                                                    <div class="widget-body">
                                                        <ul class="filter-items search-ul">
                                                            <li><a href="#">$0.00 - $100.00</a></li>

                                                        </ul>
                                                        <form class="price-range">
                                                            <input type="number" name="min_price" class="min_price text-center"
                                                                placeholder="$min" /><span class="delimiter" >-</span><input
                                                                type="number" name="max_price" class="max_price text-center"
                                                                placeholder="$max" /><a href="#"
                                                                    class="btn btn-primary btn-rounded">Go</a>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div class="widget widget-collapsible">
                                                    <h3 class="widget-title"><label>Size</label></h3>
                                                    <ul class="widget-body filter-items item-check mt-1">
                                                        <li><a href="#">Extra Large</a></li>

                                                    </ul>
                                                </div>

                                                <div class="widget widget-collapsible">
                                                    <h3 class="widget-title"><label>Brand</label></h3>
                                                    <ul class="widget-body filter-items item-check mt-1">
                                                        <li><a href="#">Elegant Auto Group</a></li>

                                                    </ul>
                                                </div>

                                                <div class="widget widget-collapsible">
                                                    <h3 class="widget-title"><label>Color</label></h3>
                                                    <ul class="widget-body filter-items item-check mt-1">
                                                        <li><a href="#">Black</a></li>

                                                    </ul>
                                                </div>

                                            </div>

                                        </div>

                                    </aside>

                                    <div class="main-content">
                                        <div class="title-link-wrapper title-deals appear-animate">
                                            <h2 class="title">Deals Hot Of The Day</h2>
                                            <a style={{ curson: "none" }} href="shop-boxed-banner.html" class="font-weight-bold ls-25">sort by <i
                                                class="w-icon-long-arrow-righ"></i></a>
                                            <div class="toolbox-left mr-0">
                                                <div class="toolbox-item toolbox-sort select-menu">
                                                    <a href="#" class="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                        btn-icon-left d-block d-lg-none mb-0"><i
                                                            class="w-icon-category"></i><span>Filters</span></a>
                                                    <select name="orderby" class="form-control">
                                                        <option value="default" selected="selected">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="rating">Sort by average rating</option>
                                                        <option value="date">Sort by latest</option>
                                                        <option value="price-low">Sort by pric: low to high</option>
                                                        <option value="price-high">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>


                                        <div class="row product-wrapper show-code-action">


                                            {this.props.products == undefined ? null : (

                                                this.props.products.map((data) => {
                                                    if (data.category == this.props.match.params.id || data.sub_category == this.props.match.params.id || data.sub_sub_category == this.props.match.params.id) {
                                                        return (


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
                                                                                <a href={`/product/${data.id}`}>{data.title}</a>
                                                                            </h3>
                                                                            <div class="product-price">
                                                                                <ins class="new-price">$25.70</ins>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-hidden-details">
                                                                            <div class="product-action">
                                                                                <a href="#" class="btn-product btn-cart" title="Add to Cart" onClick={() => store.dispatch(addToCart(data.slug, 1, data.user.id))}>
                                                                                    <i class="w-icon-cart"></i><span>Add To Cart</span></a>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )

                                                    }


                                                })

                                            )}









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

