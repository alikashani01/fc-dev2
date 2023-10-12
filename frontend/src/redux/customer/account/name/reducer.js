import { 
    CUSTOMER_ACCOUNT_NAME_EDIT_FAIL,
    CUSTOMER_ACCOUNT_NAME_EDIT_REQUEST, 
    CUSTOMER_ACCOUNT_NAME_EDIT_RESET, 
    CUSTOMER_ACCOUNT_NAME_EDIT_SUCCESS
} from './constants';


export const customerAccountNameEditReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_NAME_EDIT_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_NAME_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, customer: action.payload };
        case CUSTOMER_ACCOUNT_NAME_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_NAME_EDIT_RESET:
            return {};
        default:
            return state;
    };
};