import { 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET, 
} from "./constants";

export const customerAccountRegistrationMobileAddReducer = (state = { customer: {
    mobile: '',
    
} }, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS:
            return { ...state, loading: false, success: true, customer: action.payload };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET:
            return {};
        default:
            return state;
    };
};
export const customerAccountRegistrationMobileVerifyReducer = (state = { customerInfo: {} }, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS:
            return { ...state, loading: false, success: true, customerInfo: action.payload };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET:
            return {};
        default:
            return state;
    };
};