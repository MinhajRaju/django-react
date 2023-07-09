import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,


    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL


} from "../Constant/Product_constant"



export const AllproductReducer = (state = {}, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return { loading: true }
        case ALL_PRODUCT_SUCCESS:
            return { loading: false, allProductInfo: action.payload }
        case ALL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const SingleproductReducer = (state = {}, action) => {

    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return { loading: true }
        case SINGLE_PRODUCT_SUCCESS:
            return { loading: false, singleProductInfo: action.payload }
        case SINGLE_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}