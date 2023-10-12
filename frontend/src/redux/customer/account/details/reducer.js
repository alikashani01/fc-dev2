import { 
    CUSTOMER_ACCOUNT_DETAILS_FAIL, 
    CUSTOMER_ACCOUNT_DETAILS_REQUEST, 
    CUSTOMER_ACCOUNT_DETAILS_RESET, 
    CUSTOMER_ACCOUNT_DETAILS_SUCCESS, 
} from './constants';

export const customerAccountDetailsReducer = (state = { customer: {
    books: [],
} }, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, customer: action.payload };
        case CUSTOMER_ACCOUNT_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};
