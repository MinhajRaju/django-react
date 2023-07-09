import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,

    CART_CLEAR_ITEMS,

    SHIPPTING_ADDRESS_REQUEST,
    SHIPPTING_ADDRESS_SUCCESS,
    SHIPPTING_ADDRESS_FAIL,
    ORDER_ITEM_REQUEST

} from "../Constant/Cart_constant";

import { initialstate } from '../store';
import store from '../store';

export const addToCart = (slug, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/product/${slug}/`)
    console.log("data", data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            title: data.title,
            qty: qty,
            mrp: data.mrp,
            slug: data.slug,
            countInStock: data.qty,
            sellerId: data.user.id
        }
    })




    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}



export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}


export const saveShippingAddress = (data) => async (dispatch) => {


    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch, getState) => {

    if (data == "cash on delivery") {

        const obj = {
            'payment_method': data,
            'payment_status': 'unpaid'
        }

        dispatch({
            type: CART_SAVE_PAYMENT_METHOD,
            payload: obj,





        })

    } else {
        const obj = {
            'payment_method': data,
            'payment_status': 'paid'
        }
        dispatch({
            type: CART_SAVE_PAYMENT_METHOD,
            payload: obj




        })

    }



    localStorage.setItem('paymentMethod', JSON.stringify(getState().cartReducer.cartItems))
}





export const ShippingAddressAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: SHIPPTING_ADDRESS_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            id
        }


        const { data } = await axios.post('/api/order/shipping/', parameter, config)

        dispatch({
            type: SHIPPTING_ADDRESS_SUCCESS,
            payload: data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: SHIPPTING_ADDRESS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}




export const orderItemSavedAction = () => async (dispatch, getState) => {


    dispatch({
        type: ORDER_ITEM_REQUEST,

    })

    const { cartItems, payment, sellerId } = getState().cartReducer


    const itemsPrice = cartItems.reduce((acc, item) => acc + item.mrp * item.qty, 0).toFixed(2)
    const shippingPrice = (itemsPrice > 1000 ? 60 : 100).toFixed(2)
    const total = Number(Number(itemsPrice) + Number(shippingPrice))
    const totalqty = cartItems.reduce((acc, item) => acc + item.qty, 0)

    console.log(itemsPrice, shippingPrice, total, payment)

    const shippingid = Number(JSON.parse(localStorage.getItem('shippingAddress')))



    const parameter = {

        cartItems,
        shippingPrice,
        total,
        payment,
        shippingid,
        totalqty,
        sellerId,



    }

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }



    const { data } = await axios.post('/api/order/ordeitemsaved/', parameter, config)





    localStorage.setItem('shippingAddress', JSON.stringify(data))
}



export const saveShippingAddressAction = (id) => async (dispatch) => {


    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: id,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(id))


}