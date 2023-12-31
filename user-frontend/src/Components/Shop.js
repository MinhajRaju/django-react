import React from "react";
import { connect } from 'react-redux';
import { NestedCategoryAction } from "../Actions/CategoryAction";


import { withRouter } from "react-router-dom";
import store from "../store";
import Footer from "./Footer";
import HeaderShopAndProduct from "./ShopAndProductHeader";
import HeaderTop from "./Header";




const mapStateToProps = (state) => {


    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo }



}



export default connect(mapStateToProps)(withRouter(class ShopIndex extends React.Component {


    constructor(props) {
        super(props)



    }


    componentDidMount() {

        console.log(this.props)

    }

    handel = (id) => {



    }

    handel2 = (id) => {


    }





    render() {

        console.log(this.props)

        return (

            <div>
                <div className="page-wrapper">
                    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>

                    <header className="header">
                        <HeaderTop />
                        <HeaderShopAndProduct />

                    </header>
                    <main class="main">

                        <nav class="breadcrumb-nav">
                            <div class="container">
                                <ul class="breadcrumb bb-no">
                                    <li><a href="demo1.html">Home</a></li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </nav>

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
                                        <div class="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                                            <div class="swiper-slide category-wrap">
                                                <div class="category category-ellipse">
                                                    <figure class="category-media">
                                                        <a href="shop-banner-sidebar.html">
                                                            <img src="/assets/images/categories/category-4.jpg" alt="Categroy"
                                                                width="190" height="190" style={{ backgroundColor: "#5C92C0" }} />
                                                        </a>
                                                    </figure>
                                                    <div class="category-content">
                                                        <h4 class="category-name">
                                                            <a href="shop-banner-sidebar.html">Sports</a>
                                                        </h4>
                                                    </div>
                                                </div>
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
                                        <nav class="toolbox sticky-toolbox sticky-content fix-top">
                                            <div class="toolbox-left">
                                                <a href="#" class="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                        btn-icon-left d-block d-lg-none"><i
                                                        class="w-icon-category"></i><span>Filters</span></a>
                                                <div class="toolbox-item toolbox-sort select-box text-dark">
                                                    <label>Sort By :</label>
                                                    <select name="orderby" class="form-control">
                                                        <option value="default" selected="selected">Default sorting</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="toolbox-right">
                                                <div class="toolbox-item toolbox-show select-box">
                                                    <select name="count" class="form-control">
                                                        <option value="9">Show 9</option>
                                                        <option value="12" selected="selected">Show 12</option>
                                                        <option value="24">Show 24</option>
                                                        <option value="36">Show 36</option>
                                                    </select>
                                                </div>
                                                <div class="toolbox-item toolbox-layout">
                                                    <a href="shop-banner-sidebar.html" class="icon-mode-grid btn-layout active">
                                                        <i class="w-icon-grid"></i>
                                                    </a>
                                                    <a href="shop-list.html" class="icon-mode-list btn-layout">
                                                        <i class="w-icon-list"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </nav>
                                        <div class="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                                            <div class="product-wrap">
                                                <div class="product text-center">
                                                    <figure class="product-media">
                                                        <a href="product-default.html">
                                                            <img src="/assets/images/shop/1.jpg" alt="Product" width="300"
                                                                height="338" />
                                                        </a>
                                                        <div class="product-action-horizontal">
                                                            <a href="#" class="btn-product-icon btn-cart w-icon-cart"
                                                                title="Add to cart"></a>
                                                            <a href="#" class="btn-product-icon btn-wishlist w-icon-heart"
                                                                title="Wishlist"></a>
                                                            <a href="#" class="btn-product-icon btn-compare w-icon-compare"
                                                                title="Compare"></a>
                                                            <a href="#" class="btn-product-icon btn-quickview w-icon-search"
                                                                title="Quick View"></a>
                                                        </div>
                                                    </figure>
                                                    <div class="product-details">
                                                        <div class="product-cat">
                                                            <a href="shop-banner-sidebar.html">Electronics</a>
                                                        </div>
                                                        <h3 class="product-name">
                                                            <a href="product-default.html">3D Television</a>
                                                        </h3>
                                                        <div class="ratings-container">
                                                            <div class="ratings-full">
                                                                <span class="ratings" style={{ width: "100%" }}></span>
                                                                <span class="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <a href="product-default.html" class="rating-reviews">(3 reviews)</a>
                                                        </div>
                                                        <div class="product-pa-wrapper">
                                                            <div class="product-price">
                                                                $220.00 - $230.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>








                                        </div>

                                        <div class="toolbox toolbox-pagination justify-content-between">
                                            <p class="showing-info mb-2 mb-sm-0">
                                                Showing<span>1-12 of 60</span>Products
                                            </p>
                                            <ul class="pagination">
                                                <li class="prev disabled">
                                                    <a href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                                        <i class="w-icon-long-arrow-left"></i>Prev
                                                    </a>
                                                </li>
                                                <li class="page-item active">
                                                    <a class="page-link" href="#">1</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">2</a>
                                                </li>
                                                <li class="next">
                                                    <a href="#" aria-label="Next">
                                                        Next<i class="w-icon-long-arrow-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </main>







                </div>

                <Footer />

            </div>

        )

    }



}))

