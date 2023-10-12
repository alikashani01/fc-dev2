import { 
    CUSTOMER_ACCOUNT_MOBILE_EDIT_FAIL, 
    CUSTOMER_ACCOUNT_MOBILE_EDIT_REQUEST, 
    CUSTOMER_ACCOUNT_MOBILE_EDIT_RESET, 
    CUSTOMER_ACCOUNT_MOBILE_EDIT_SUCCESS, 
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_FAIL, 
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_REQUEST, 
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_RESET, 
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_SUCCESS,
} from './constants';

export const customerAccountMobileEditReducer = (state = { customer: {
    mobile: ''
} }, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_MOBILE_EDIT_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_MOBILE_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, customer: action.payload };
        case CUSTOMER_ACCOUNT_MOBILE_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_MOBILE_EDIT_RESET:
            return {};
        default:
            return state;
    };
};
export const customerAccountMobileVerifyReducer = (state = { customerInfo: {} }, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_MOBILE_VERIFY_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_MOBILE_VERIFY_SUCCESS:
            return { ...state, loading: false, success: true, customerInfo: action.payload };
        case CUSTOMER_ACCOUNT_MOBILE_VERIFY_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_MOBILE_VERIFY_RESET:
            return {};
        default:
            return state;
    };
};
