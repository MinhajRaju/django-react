import {
    ALL_ORDER_REQUEST,
    ALL_ORDER_SUCCESS,
    ALL_ORDER_FAIL,

    PENDING_ORDER_REQUEST,
    PENDING_ORDER_SUCCESS,
    PENDING_ORDER_FAIL,

    RTS_ORDER_REQUEST,
    RTS_ORDER_SUCCESS,
    RTS_ORDER_FAIL,

    DELIVERY_FAILED_REQUEST,
    DELIVERY_FAILED_SUCCESS,
    DELIVERY_FAILED_FAIL,


    CANCELLED_REQUEST,
    CANCELLED_SUCCESS,
    CANCELLED_FAIL,


    ALL_CANCELLED_REQUEST,
    ALL_CANCELLED_SUCCESS,
    ALL_CANCELLED_FAIL,


    ALL_ORDER_DETAILS_REQUEST,
    ALL_ORDER_DETAILS_SUCCESS,
    ALL_ORDER_DETAILS_FAIL,



    INVOICE_REQUEST,
    INVOICE_SUCCESS,
    INVOICE_FAIL

} from "../Constant/order_constant";



export const orderReducer = (state = {}, action) => {

    switch (action.type) {
        case ALL_ORDER_REQUEST:
            return { loading: true }
        case ALL_ORDER_SUCCESS:
            return { loading: false, orderInfo: action.payload }
        case ALL_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const PendingReducer = (state = {}, action) => {

    switch (action.type) {
        case PENDING_ORDER_REQUEST:
            return { loading: true }
        case PENDING_ORDER_SUCCESS:
            return { loading: false, pendingInfo: action.payload }
        case PENDING_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const RtsReducer = (state = {}, action) => {

    switch (action.type) {
        case RTS_ORDER_REQUEST:
            return { loading: true }
        case RTS_ORDER_SUCCESS:
            return { loading: false, rtsInfo: action.payload }
        case RTS_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const CancelledReducer = (state = {}, action) => {

    switch (action.type) {
        case CANCELLED_REQUEST:
            return { loading: true }
        case CANCELLED_SUCCESS:
            return { loading: false, cancelledInfo: action.payload }
        case CANCELLED_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const AllCancelledReducer = (state = {}, action) => {

    switch (action.type) {
        case ALL_CANCELLED_REQUEST:
            return { loading: true }
        case ALL_CANCELLED_SUCCESS:
            return { loading: false, AllcancelledInfo: action.payload }
        case ALL_CANCELLED_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const orderDetailReducer = (state = {}, action) => {

    switch (action.type) {
        case ALL_ORDER_DETAILS_REQUEST:
            return { loading: true }
        case ALL_ORDER_DETAILS_SUCCESS:
            return { loading: false, orderDetailsInfo: action.payload }
        case ALL_ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const InvoiceReducer = (state = {}, action) => {

    switch (action.type) {
        case INVOICE_REQUEST:
            return { loading: true }
        case INVOICE_SUCCESS:
            return { loading: false, invoiceDetailsInfo: action.payload }
        case INVOICE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
