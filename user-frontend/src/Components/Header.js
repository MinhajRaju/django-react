import React from 'react'
import $ from 'jquery';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/CartAction';
import store from '../store';
import { CustomerDetailsInfomation } from '../Actions/UserAction';


const mapStateToProps = (state) => {

    console.log('state from user frondend header', state)

    return { cart: state.cartReducer.cartItems, customerUserInfo: state.customerLoginReducer.userInfo, customerDetailInfo: state.customerDetailsInformationReducers.userInfo }


}


export default connect(mapStateToProps)(class HeaderTop extends React.Component {



    constructor(props) {

        super(props)


        if (!localStorage.getItem('customeruserInfo')) {

            window.location.replace('/login')

        }



    }

    componentDidMount() {

        const { id } = JSON.parse(localStorage.getItem('customeruserInfo'))
        console.log(id)
        store.dispatch(CustomerDetailsInfomation(id))






    }






    open = () => {
        console.log("ASDFASdfa")
        $('#open').addClass('opened')


    }
    close = () => {
        console.log("ASDFAggaddfSdfa")
        $('#open').removeClass('opened')

    }


    removeItem = (id) => {
        store.dispatch(removeFromCart(id))
    }

    logout = () => {
        localStorage.removeItem('customeruserInfo')
        window.location.replace('/login')
    }



    render() {

        console.log(this.props.cart)
        console.log(this.props.customerDetailInfo)
        return (


            <div>

                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-left mr-md-4">
                                <a href="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
                                </a>
                                <a href="demo4.html" className="logo ml-lg-0">
                                    <img src="/assets/images/demos/demo4/header-logo.png" alt="logo" width="145" height="45" />
                                </a>



                            </div>
                        </div>


                        <div className="header-right pr-0">


                            {this.props.customerDetailInfo == undefined ? null : <a href="/profile" className="ml-0 d-lg-show login register">{this.props.customerDetailInfo.userr.user.username}</a>}

                            <span className="divider d-lg-show"></span>


                            <span className="delimiter d-lg-show"></span>
                            {!localStorage.getItem('customeruserInfo') ? null : <a href="#" onClick={this.logout} className="ml-0 d-lg-show login register">Logout</a>}


                        </div>
                    </div>
                </div>

            </div>
        )
    }



})