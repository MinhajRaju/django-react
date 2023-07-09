import { 
    
    PRODUCT_ADD_REQUEST,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,

    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL , 

    COLOR_REQUEST,
    COLOR_SUCCESS,
    COLOR_FAIL,

    PUBLISH_REQUEST,
    PUBLISH_SUCCESS,
    PUBLISH_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL , 

    PRODUCT_DELETE_MANY_REQUEST,
    PRODUCT_DELETE_MANY_SUCCESS,
    PRODUCT_DELETE_MANY_FAIL,


    GENERATE_SKU_REQUEST,
    GENERATE_SKU_SUCCESS,
    GENERATE_SKU_FAIL,

    PRODUCT_STOCK_REQUEST,
    PRODUCT_STOCK_SUCCESS,
    PRODUCT_STOCK_FAIL




} from "../Constant/Product_constant";



export const productReducer = (state={} , action) =>{
    
    switch(action.type){
        case PRODUCT_ADD_REQUEST:
            return {loading:true}
        case PRODUCT_ADD_SUCCESS:
            return {loading:false, productInfo:action.payload}
        case PRODUCT_ADD_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}



export const AllproductReducer = (state={} , action) =>{
    
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return {loading:true}
        case ALL_PRODUCT_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case ALL_PRODUCT_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}



export const ColorReducer = (state={} , action) =>{
    
    switch(action.type){
        case COLOR_REQUEST:
            return {loading:true}
        case COLOR_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case COLOR_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const PublishReducer = (state={} , action) =>{
    
    switch(action.type){
        case PUBLISH_REQUEST:
            return {loading:true}
        case PUBLISH_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case PUBLISH_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}

export const DeleteReducer = (state={} , action) =>{
    
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading:true}
        case PRODUCT_DELETE_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case PRODUCT_DELETE_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const ManyDeleteReducer = (state={} , action) =>{
    
    switch(action.type){
        case PRODUCT_DELETE_MANY_REQUEST:
            return {loading:true}
        case PRODUCT_DELETE_MANY_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case PRODUCT_DELETE_MANY_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const SkuReducer = (state={} , action) =>{
    
    switch(action.type){
        case GENERATE_SKU_REQUEST:
            return {loading:true}
        case GENERATE_SKU_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case GENERATE_SKU_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const ProductStockUpdateReducer = (state={} , action) =>{
    
    switch(action.type){
        case PRODUCT_STOCK_REQUEST:
            return {loading:true}
        case PRODUCT_STOCK_SUCCESS:
            return {loading:false, allProductInfo:action.payload}
        case PRODUCT_STOCK_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}








