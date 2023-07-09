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


import axios from "axios";


export const registerAction = (username, password, email) => async (dispatch) => {

    try {
        dispatch({
            type: CUSOTMER_REGISTER_REQUEST
        })

        const config = {

            'Content-type': 'application/json'
        }

        const parameter = {
            "username": username,
            'password': password,
            'email': email

        }

        const { data } = await axios.post('/api/user/register/customer/', parameter, config)

        dispatch({
            type: CUSOTMER_REGISTER_SUCCESS,
            payload: data
        })
        window.location.replace('/login');



    }
    catch (error) {
        dispatch({
            type: CUSOTMER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }


}


export const loginAction = (email, password) => async (dispatch) => {

    try {
        dispatch({
            type: CUSOTMER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const parameter = {
            'username': email,
            'password': password,

        }
        console.log(parameter)

        const { data } = await axios.post('/api/user/login/', parameter, config)

        dispatch({
            type: CUSOTMER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('customeruserInfo', JSON.stringify(data))
        window.location.replace('/');


    }
    catch (error) {
        dispatch({
            type: CUSOTMER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })


    }
}




export const CustomerDetailsInfomation = (id) => async (dispatch) => {

    try {
        dispatch({
            type: CUSTOMER_DETAILS_INFORMATION_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }



        const { data } = await axios.get(`/api/user/customerprofile/${id}`, config)

        dispatch({
            type: CUSTOMER_DETAILS_INFORMATION_SUCCESS,
            payload: data
        })
        localStorage.setItem('cutomerDetailsInformation', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: CUSTOMER_DETAILS_INFORMATION_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}
