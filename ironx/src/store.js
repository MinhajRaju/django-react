import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers'





const reducer = combineReducers({

    userLoginReducer,
    userRegisterReducer,



})


const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null



export const initialstate = {

    userInfo

}

const middleware = [thunk]

const store = createStore(reducer, initialstate,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store