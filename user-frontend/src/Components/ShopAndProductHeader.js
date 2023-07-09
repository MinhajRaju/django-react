import React from "react";

import { connect } from 'react-redux';

import store from "../store";

import { NestedCategoryAction } from "../Actions/CategoryAction";
const mapStateToProps = (state) => {

    return { nestedCategory: state.NestedcategoryReducer.nestedcategoryInfo, cart: state.cartReducer.cartItems }

}


export default connect(mapStateToProps)(class HeaderShopAndProduct extends React.Component {



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

                <header class="header header-border">

                    <div class="header-bottom sticky-content fix-top sticky-header ">
                        <div class="container">
                            <div class="inner-wrap">
                                <div class="header-left">

                                    <nav class="main-nav">
                                        <ul class="menu active-underline">
                                            <li>
                                                <a href="demo1.html">Home</a>
                                            </li>

                                            <li>
                                                <a href="vendor-dokan-store.html">Category</a>
                                                <ul>
                                                    <li>
                                                        {this.props.nestedCategory == undefined ? null
                                                            : (this.props.nestedCategory.map((data) => {


                                                                if (data.parent == null) {
                                                                    return (<a key={data.id} href={`/category/${data.id}/`} onMouseOver={() => this.handel(data.id)}>{data.name}</a>)
                                                                }

                                                            }))



                                                        }

                                                        <ul>



                                                            <li>
                                                                {this.state.cat_depth_one == undefined ? null
                                                                    : (this.state.cat_depth_one.map((data) => {

                                                                        return <a key={data.id} href={`/category/${data.id}/`} onMouseOver={() => this.handel2(data.id)}>{data.name}</a>

                                                                    }))



                                                                }

                                                                <ul>
                                                                    {this.state.cat_depth_two == undefined ? null
                                                                        : (this.state.cat_depth_two.map((data) => {

                                                                            return <a key={data.id} href={`/category/${data.id}/`}  >{data.name}</a>



                                                                        }))



                                                                    }

                                                                </ul>

                                                                <ul>

                                                                    {this.state.cat_depth_two == undefined ? null : this.state.cat_depth_two.length == 0 ? <li>No Category</li>
                                                                        : (this.state.cat_depth_two.map((data) => {


                                                                            return <li><a href={`/category/${data.id}/`} >{data.name}</a></li>






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
                                </div>

                                <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">

                                    <input type="text" className="form-control" name="search" id="search"
                                        placeholder="Search in..." required />
                                    <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                                    </button>
                                </form>

                                <div id="open" className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 d">
                                    <div className="cart-overlay"></div>
                                    <a href="/cart" className="cart-toggle label-down link">
                                        <i style={{ color: "white" }} className="w-icon-cart">
                                            <span style={{ backgroundColor: "#00BAA3" }} className="cart-count">{this.props.cart.length}</span>
                                        </i>

                                    </a>


                                </div>


                            </div>
                        </div>
                    </div>
                </header>
            </div>

        )
    }


})