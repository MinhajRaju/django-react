import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,

    CART_CLEAR_ITEMS,

    SHIPPTING_ADDRESS_REQUEST,
    SHIPPTING_ADDRESS_SUCCESS,
    SHIPPTING_ADDRESS_FAIL,


    ORDER_ITEM_REQUEST,
    ORDER_ITEM_SUCCESS,
    ORDER_ITEM_FAIL

} from "../Constant/Cart_constant";

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []


export const cartReducer = (state = { cartItems: cartItemsFromStorage, shippingAddress: {}, payment: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {


                return {

                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                payment: action.payload,

            }

        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}


export const shippingAddressReducer = (state = {}, action) => {

    switch (action.type) {
        case SHIPPTING_ADDRESS_REQUEST:
            return { loading: true }
        case SHIPPTING_ADDRESS_SUCCESS:
            return { loading: false, shippingAddressInfo: action.payload }
        case SHIPPTING_ADDRESS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const orderItemSaveReducer = (state = {}, action) => {

    switch (action.type) {
        case ORDER_ITEM_REQUEST:
            return { loading: true }
        case ORDER_ITEM_SUCCESS:
            return { loading: false, orderSaved: action.payload }
        case ORDER_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}