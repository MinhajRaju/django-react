import axios from 'axios'

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL


} from '../Constant/user_constant'


export const loginAction = (email, password) => async (dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
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
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }
}


export const registerAction = (username, password) => async (dispatch) => {

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {

            'Content-type': 'application/json'
        }

        const parameter = {
            "username": username,
            'password': password,
            'account_type': "seller",
        }

        const { data } = await axios.post('/api/user/register/', parameter, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })



    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })

    }


}