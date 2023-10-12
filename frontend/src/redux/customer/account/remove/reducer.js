import { 
    CUSTOMER_ACCOUNT_REMOVE_REQUEST, 
    CUSTOMER_ACCOUNT_REMOVE_SUCCESS,
    CUSTOMER_ACCOUNT_REMOVE_FAIL, 
    CUSTOMER_ACCOUNT_REMOVE_RESET, 
} from './constants';

export const customerAccountRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_REMOVE_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_REMOVE_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case CUSTOMER_ACCOUNT_REMOVE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_REMOVE_RESET:
            return {};
        default:
            return state;
    };
};