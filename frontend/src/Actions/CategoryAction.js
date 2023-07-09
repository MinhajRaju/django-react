import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,

    SUB_CATEGORY_REQUEST,
    SUB_CATEGORY_SUCCESS,
    SUB_CATEGORY_FAIL,

    SUB_SUB_CATEGORY_REQUEST,
    SUB_SUB_CATEGORY_SUCCESS,
    SUB_SUB_CATEGORY_FAIL,

    BRAND_REQUEST,
    BRAND_SUCCESS,
    BRAND_FAIL

} from "../Constant/category_constant";
import axios from "axios";


export const CategoryAction = () => async (dispatch) => {

    try {
        dispatch({
            type: CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get('/api/category/', config)

        dispatch({
            type: CATEGORY_SUCCESS,
            payload: data
        })
        localStorage.setItem('Category', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}

export const subCategoryAction2 = (id) => async (dispatch) => {

    try {
        dispatch({
            type: SUB_SUB_CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get(`/api/category/category/${id}/`, config)

        dispatch({
            type: SUB_SUB_CATEGORY_SUCCESS,
            payload: data
        })
        localStorage.setItem('subCategory2', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: SUB_SUB_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const subCategoryAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: SUB_CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get(`/api/category/category/${id}/`, config)

        dispatch({
            type: SUB_CATEGORY_SUCCESS,
            payload: data
        })
        localStorage.setItem('subCategory', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: SUB_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}





export const BrandAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: BRAND_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get(`/api/category/brand/${id}/`, config)

        dispatch({
            type: BRAND_SUCCESS,
            payload: data
        })
        localStorage.setItem('subCategory', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: BRAND_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}

