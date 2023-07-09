import {

    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,

    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,

    COLOR_REQUEST,
    COLOR_SUCCESS,
    COLOR_FAIL,

    PUBLISH_REQUEST,
    PUBLISH_SUCCESS,
    PUBLISH_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_DELETE_MANY_REQUEST,
    PRODUCT_DELETE_MANY_SUCCESS,
    PRODUCT_DELETE_MANY_FAIL,

    GENERATE_SKU_REQUEST,
    GENERATE_SKU_SUCCESS,
    GENERATE_SKU_FAIL,

    PRODUCT_STOCK_REQUEST,
    PRODUCT_STOCK_SUCCESS,
    PRODUCT_STOCK_FAIL


} from "../Constant/Product_constant";


import axios from "axios";
import { initialstate } from "../store";

export const ProductAddAction = (title, cat, cat_depth_one, cat_depth_two, brand, stock) => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_ADD_REQUEST
        })

        const { access } = initialstate.userInfo



        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${access}`

            }
        }

        const parameter = {
            title,
            cat,
            cat_depth_one,
            cat_depth_two,
            brand,
            stock
        }



        const { data } = await axios.post('/api/product/product/add/', parameter, config)

        dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: data
        })
        localStorage.setItem('ProductInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PRODUCT_ADD_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


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


        const { id } = JSON.parse(localStorage.getItem('userInfo'))

        const seller_data = data.filter((x) => x.seller_id == id)






        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: seller_data
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


export const ColorAction = () => async (dispatch) => {

    try {
        dispatch({
            type: COLOR_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }



        const { data } = await axios.get('/api/product/color/all/', config)

        dispatch({
            type: COLOR_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: COLOR_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



export const PublishAction = (id, bool) => async (dispatch) => {

    try {
        dispatch({
            type: PUBLISH_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            bool
        }

        const { data } = await axios.post(`/api/product/publish/${id}/`, parameter, config)

        dispatch({
            type: PUBLISH_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PUBLISH_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const DeleteAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }


        const { data } = await axios.delete(`/api/product/delete/${id}/`, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const ManyDeleteAction = (idArray) => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_DELETE_MANY_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            idArray
        }
        console.log("form action ", parameter)

        const { data } = await axios.post(`/api/product/deletemany/`, parameter, config)

        dispatch({
            type: PRODUCT_DELETE_MANY_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PRODUCT_DELETE_MANY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



export const GenerateSkuAction = (idArray) => async (dispatch) => {

    try {
        dispatch({
            type: GENERATE_SKU_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            idArray
        }
        console.log("form action ", parameter)

        const { data } = await axios.post(`/api/product/generatesku/`, parameter, config)

        dispatch({
            type: GENERATE_SKU_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: GENERATE_SKU_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}



export const ProductUpdateAction = (sign, value, id) => async (dispatch) => {

    try {
        dispatch({
            type: PRODUCT_STOCK_REQUEST
        })





        const config = {
            headers: {
                'Content-type': 'application/json',


            }
        }

        const parameter = {
            sign,
            value,
            id,
        }
        console.log("form action ", parameter)

        const { data } = await axios.post(`/api/product/stockupdate/`, parameter, config)

        dispatch({
            type: PRODUCT_STOCK_SUCCESS,
            payload: data
        })
        localStorage.setItem('color', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: PRODUCT_STOCK_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}