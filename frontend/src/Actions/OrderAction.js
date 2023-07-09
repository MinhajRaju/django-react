import {
    ALL_ORDER_REQUEST,
    ALL_ORDER_SUCCESS,
    ALL_ORDER_FAIL,

    ALL_ORDER_DETAILS_REQUEST,
    ALL_ORDER_DETAILS_SUCCESS,
    ALL_ORDER_DETAILS_FAIL,

    PENDING_ORDER_REQUEST,
    PENDING_ORDER_SUCCESS,
    PENDING_ORDER_FAIL,

    RTS_ORDER_REQUEST,
    RTS_ORDER_SUCCESS,
    RTS_ORDER_FAIL,

    CANCELLED_REQUEST,
    CANCELLED_SUCCESS,
    CANCELLED_FAIL,

    ALL_CANCELLED_REQUEST,
    ALL_CANCELLED_SUCCESS,
    ALL_CANCELLED_FAIL,

    INVOICE_REQUEST,
    INVOICE_SUCCESS,
    INVOICE_FAIL


} from "../Constant/order_constant";
import axios from "axios";

import _ from 'lodash'


export const AllOrderDetailsAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_ORDER_DETAILS_REQUEST
        })






        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }





        const { data } = await axios.get('/api/order/orderdetails/', config)

        const { id } = JSON.parse(localStorage.getItem('userInfo'))

        const seller_order_data = data.filter((x) => x.seller_id.id == id)






        dispatch({
            type: ALL_ORDER_DETAILS_SUCCESS,
            payload: seller_order_data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}




export const AllOrderAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_ORDER_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get('/api/order/order/', config)


        console.log(data)



        //const te = data.filter((x) => _.includes(x.listed_seller, id.toString()))
        const { id } = JSON.parse(localStorage.getItem('userInfo'))
        const data_filter = data.filter((x) => x.associated_seller.id == id.toString())














        dispatch({
            type: ALL_ORDER_SUCCESS,
            payload: data_filter
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_ORDER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}






export const PendingOrderAction = () => async (dispatch) => {

    try {
        dispatch({
            type: PENDING_ORDER_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get('/api/order/pending/', config)
        const { id } = JSON.parse(localStorage.getItem('userInfo'))
        const data_filter = data.filter((x) => x.associated_seller.id == id.toString())


        dispatch({
            type: PENDING_ORDER_SUCCESS,
            payload: data_filter
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PENDING_ORDER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



export const RtsOrderAction = () => async (dispatch) => {

    try {
        dispatch({
            type: RTS_ORDER_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get('/api/order/rts/', config)

        const { id } = JSON.parse(localStorage.getItem('userInfo'))
        const data_filter = data.filter((x) => x.associated_seller.id == id.toString())

        dispatch({
            type: RTS_ORDER_SUCCESS,
            payload: data_filter
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: RTS_ORDER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const CancelledAction = (cid) => async (dispatch) => {

    try {
        dispatch({
            type: CANCELLED_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            cid

        }


        const { data } = await axios.post('/api/order/cancelled/', parameter, config)

        const { id } = JSON.parse(localStorage.getItem('userInfo'))
        const data_filter = data.filter((x) => x.associated_seller.id == id.toString())

        dispatch({
            type: CANCELLED_SUCCESS,
            payload: data_filter
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: CANCELLED_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const AllCancelledAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_CANCELLED_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }




        const { data } = await axios.get('/api/order/allcancelled/', config)


        const { id } = JSON.parse(localStorage.getItem('userInfo'))
        const data_filter = data.filter((x) => x.associated_seller.id == id.toString())

        dispatch({
            type: ALL_CANCELLED_SUCCESS,
            payload: data_filter
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_CANCELLED_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}







export const InvoiceAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: INVOICE_REQUEST
        })






        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }







        const { data } = await axios.get(`/api/order/invoice/${id}`, config)








        dispatch({
            type: INVOICE_SUCCESS,
            payload: data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: INVOICE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



