import { PURCHASE_ADD_REQUEST ,
        PRUCHASE_ADD_SUCCESS , 
        PURCHASE_ADD_FAIL

} from "../Constant/Purchase_constant";




export const purchaseReducer = (state={} , action) =>{
    
    switch(action.type){
        case PURCHASE_ADD_REQUEST:
            return {loading:true}
        case PRUCHASE_ADD_SUCCESS:
            return {loading:false, productInfo:action.payload}
        case PURCHASE_ADD_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


