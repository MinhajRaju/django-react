import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'


export default class Header extends React.Component {





    render() {


        return (

            <div>

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>


                    <hr className="sidebar-divider my-0" />


                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Interface
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Products</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Products</h6>
                                <a className="collapse-item"> <LinkContainer to='/product/add'>
                                    <NavDropdown.Item>Add Product</NavDropdown.Item>
                                </LinkContainer></a>
                                <a className="collapse-item" > <LinkContainer to='/product/all'>
                                    <NavDropdown.Item>All Product</NavDropdown.Item>
                                </LinkContainer></a>
                            </div>
                        </div>
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="true" aria-controls="collapseThree">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Order</span>
                        </a>

                        <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Order Overview</h6>
                                <a className="collapse-item" href="buttons.html"> <LinkContainer to='/orders/'>
                                    <NavDropdown.Item>Manage Order</NavDropdown.Item>
                                </LinkContainer></a>

                            </div>
                        </div>
                    </li>







                </ul>



            </div>



        )

    }



}