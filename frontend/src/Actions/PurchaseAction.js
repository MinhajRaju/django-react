import { PURCHASE_ADD_REQUEST ,
    PRUCHASE_ADD_SUCCESS , 
    PURCHASE_ADD_FAIL

} from "../Constant/Purchase_constant";

import axios from "axios";
import { initialstate } from "../store";



export const PurchaseAddAction = (productId,sourcing_price,quantity,supplier,warehouse) => async(dispatch) =>{

    try{
        dispatch({
            type:PURCHASE_ADD_REQUEST
        })

        const {access} = initialstate.userInfo

   

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${access}`
              
            }
        }

        const parameter = {
            productId,
            sourcing_price,
            quantity,
            supplier,
            warehouse
        }
    



        const {data} = await  axios.post('/testing/purchase/add/' , parameter,  config)
        
        dispatch({
            type:PRUCHASE_ADD_SUCCESS , 

            payload:data
        })
        localStorage.setItem('ProductInfo' , JSON.stringify(data))

    }
    catch(error){
        dispatch({
            type:PURCHASE_ADD_FAIL,
            payload:error.response && error.response.data.detail ?  error.response.data.detail :error.message,})

    }
}

