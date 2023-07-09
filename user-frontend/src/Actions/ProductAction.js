import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,

    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL






} from "../Constant/Product_constant"

import axios from "axios"


export const AllProductAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get('/api/product/product/all/', config)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



export const SingleProductAction = (slug) => async (dispatch) => {

    try {
        dispatch({
            type: SINGLE_PRODUCT_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get(`/api/product/product/${slug}/`, config)

        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}








let visible = 6

export const DashProductAction = () => async (dispatch) => {



    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,

        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        visible += 6

        console.log(visible)


        const { data } = await axios.get(`/api/product/dashproduct/${visible}/`, config)



        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })
        localStorage.setItem('AllProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}
