import { 
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,

    SUB_CATEGORY_REQUEST,
    SUB_CATEGORY_SUCCESS,
    SUB_CATEGORY_FAIL,

    SUB_SUB_CATEGORY_REQUEST,
    SUB_SUB_CATEGORY_SUCCESS,
    SUB_SUB_CATEGORY_FAIL,

    BRAND_REQUEST,
    BRAND_SUCCESS,
    BRAND_FAIL

} from "../Constant/category_constant";




export const categoryReducer = (state={} , action) =>{
    
    switch(action.type){
        case CATEGORY_REQUEST:
            return {loading:true}
        case CATEGORY_SUCCESS:
            return {loading:false, categoryInfo:action.payload}
        case CATEGORY_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const subCategoryReducer = (state={} , action) =>{
    
    switch(action.type){
        case SUB_CATEGORY_REQUEST:
            return {loading:true}
        case SUB_CATEGORY_SUCCESS:
            return {loading:false, subcategoryInfo:action.payload}
        case SUB_CATEGORY_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}


export const subCategoryReducer2 = (state={} , action) =>{
    
    switch(action.type){
        case SUB_SUB_CATEGORY_REQUEST:
            return {loading:true}
        case SUB_SUB_CATEGORY_SUCCESS:
            return {loading:false, subsubcategoryInfo:action.payload}
        case SUB_SUB_CATEGORY_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}



export const BrandReducer = (state={} , action) =>{
    
    switch(action.type){
        case BRAND_REQUEST:
            return {loading:true}
        case BRAND_SUCCESS:
            return {loading:false, BrandInfo:action.payload}
        case BRAND_FAIL:
            return {loading:false , error:action.payload}       
        default:
            return state
    }
}