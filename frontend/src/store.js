import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers'
import { categoryReducer, subCategoryReducer, subCategoryReducer2, BrandReducer } from './Reducers/CategoryReducers'
import { productReducer, AllproductReducer, ColorReducer, PublishReducer, DeleteReducer, ManyDeleteReducer, SkuReducer, ProductStockUpdateReducer } from './Reducers/ProductReducers'
import { purchaseReducer } from './Reducers/PurchaseReducer'
import { orderReducer, PendingReducer, RtsReducer, CancelledReducer, AllCancelledReducer, orderDetailReducer, InvoiceReducer } from './Reducers/OrderReducer'




const reducer = combineReducers({

    userLoginReducer,
    userRegisterReducer,
    categoryReducer,
    subCategoryReducer,
    subCategoryReducer2,
    BrandReducer,
    ColorReducer,


    productReducer,
    AllproductReducer,

    purchaseReducer,
    PublishReducer,
    DeleteReducer,

    ManyDeleteReducer,
    SkuReducer,
    ProductStockUpdateReducer,
    orderReducer,
    PendingReducer,
    RtsReducer,
    CancelledReducer,
    AllCancelledReducer,
    orderDetailReducer,
    InvoiceReducer


})


const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null



export const initialstate = {



}

const middleware = [thunk]

const store = createStore(reducer, initialstate,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store