import React from 'react'




export default class Footer extends React.Component {


    render() {

        return (

            <div>

                <footer className="footer footer-dark appear-animate" data-animation-options="{
            'name': 'fadeIn'
        }">

                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="widget widget-about">
                                        <a href="demo4.html" className="logo-footer">
                                            <img src="assets/images/demos/demo4/footer-logo.png" alt="logo-footer" width="145"
                                                height="45" />
                                        </a>
                                        <div className="widget-body">
                                            <p className="widget-about-title">Got Question? Call us 24/7</p>
                                            <a href="tel:18005707777" className="widget-about-call">1-800-570-7777</a>
                                            <p className="widget-about-desc">Register now to get updates on pronot get up icons
                                                & coupons ster now toon.
                                            </p>

                                            <div className="social-icons social-icons-colored">
                                                <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                                                <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                                                <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h3 className="widget-title">Company</h3>
                                        <ul className="widget-body">
                                            <li><a href="about-us.html">About Us</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>
                                        <ul className="widget-body">
                                            <li><a href="#">Track My Order</a></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>
                                        <ul className="widget-body">
                                            <li><a href="#">Payment Methods</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-middle">
                            <div className="widget widget-category">
                                <div className="category-box">
                                    <h6 className="category-name">Consumer Electric:</h6>
                                    <a href="#">TV Television</a>

                                </div>
                                <div className="category-box">
                                    <h6 className="category-name">Clothing & Apparel:</h6>
                                    <a href="#">Men's T-shirt</a>

                                </div>
                                <div className="category-box">
                                    <h6 className="category-name">Home, Garden & Kitchen:</h6>
                                    <a href="#">Sofa</a>

                                </div>
                                <div className="category-box">
                                    <h6 className="category-name">Health & Beauty:</h6>
                                    <a href="#">Skin Care</a>

                                </div>
                                <div className="category-box">
                                    <h6 className="category-name">Jewelry & Watches:</h6>
                                    <a href="#">Necklace</a>

                                </div>
                                <div className="category-box">
                                    <h6 className="category-name">Computer & Technologies:</h6>
                                    <a href="#">Laptop</a>

                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-left">
                                <p className="copyright">Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
                            </div>
                            <div className="footer-right">
                                <span className="payment-label mr-lg-8">We're using safe payment for</span>
                                <figure className="payment">
                                    <img src="assets/images/payment.png" alt="payment" width="159" height="25" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        )

    }



}