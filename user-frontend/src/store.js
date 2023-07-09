import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { NestedcategoryReducer } from './Reducers/CategoryReducers'
import { AllproductReducer, SingleproductReducer } from './Reducers/ProductReducer'
import { cartReducer } from './Reducers/CartReducers'
import { shippingAddressReducer } from './Reducers/CartReducers'
import { orderItemSaveReducer } from './Reducers/CartReducers'
import { userRegisterReducer } from './Reducers/UserReducer'
import { customerLoginReducer, customerDetailsInformationReducers } from './Reducers/UserReducer'


const reducer = combineReducers({
    NestedcategoryReducer,
    AllproductReducer,
    cartReducer,
    shippingAddressReducer,
    orderItemSaveReducer,
    SingleproductReducer,
    userRegisterReducer,
    customerLoginReducer,
    customerDetailsInformationReducers


})
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

export const initialstate = {

    cart: {
        cartItems: cartItemsFromStorage,

    }
}

const middleware = [thunk]

const store = createStore(reducer, initialstate,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store