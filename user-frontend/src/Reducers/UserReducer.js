import {
    CUSOTMER_REGISTER_REQUEST,
    CUSOTMER_REGISTER_SUCCESS,
    CUSOTMER_REGISTER_FAIL,


    CUSOTMER_LOGIN_REQUEST,
    CUSOTMER_LOGIN_SUCCESS,
    CUSOTMER_LOGIN_FAIL,

    CUSTOMER_DETAILS_INFORMATION_REQUEST,
    CUSTOMER_DETAILS_INFORMATION_SUCCESS,
    CUSTOMER_DETAILS_INFORMATION_FAIL


} from "../Constant/Customer_constants";


export const customerLoginReducer = (state = {}, action) => {

    switch (action.type) {
        case CUSOTMER_LOGIN_REQUEST:
            return { loading: true }
        case CUSOTMER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, }
        case CUSOTMER_LOGIN_FAIL:
            return { loading: false, error: action.payload, }

        default:
            return state
    }
}


export const userRegisterReducer = (state = {}, action) => {

    switch (action.type) {
        case CUSOTMER_REGISTER_REQUEST:
            return { loading: true }
        case CUSOTMER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case CUSOTMER_REGISTER_FAIL:
            return {}

        default:
            return state

    }
}


export const customerDetailsInformationReducers = (state = {}, action) => {

    switch (action.type) {
        case CUSTOMER_DETAILS_INFORMATION_REQUEST:
            return { loading: true }
        case CUSTOMER_DETAILS_INFORMATION_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case CUSTOMER_DETAILS_INFORMATION_FAIL:
            return {}

        default:
            return state

    }
}
