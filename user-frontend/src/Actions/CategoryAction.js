import axios from 'axios'
import {
    ALL_NESTED_CATEGORY_FAIL, ALL_NESTED_CATEGORY_REQUEST,

    ALL_NESTED_CATEGORY_SUCCESS,
} from "../Constant/Category_constant"


export const NestedCategoryAction = () => async (dispatch) => {

    try {
        dispatch({
            type: ALL_NESTED_CATEGORY_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get('/api/category/categorynested/', config)

        dispatch({
            type: ALL_NESTED_CATEGORY_SUCCESS,
            payload: data
        })
        localStorage.setItem('Category', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: ALL_NESTED_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}

