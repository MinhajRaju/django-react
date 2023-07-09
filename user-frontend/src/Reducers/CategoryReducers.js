import {
    ALL_NESTED_CATEGORY_FAIL,
    ALL_NESTED_CATEGORY_REQUEST,
    ALL_NESTED_CATEGORY_SUCCESS,

} from "../Constant/Category_constant"


export const NestedcategoryReducer = (state = {}, action) => {

    switch (action.type) {
        case ALL_NESTED_CATEGORY_REQUEST:
            return { loading: true }
        case ALL_NESTED_CATEGORY_SUCCESS:
            return { loading: false, nestedcategoryInfo: action.payload }
        case ALL_NESTED_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
