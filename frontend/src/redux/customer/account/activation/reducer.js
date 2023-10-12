import { 
    CUSTOMER_ACCOUNT_ACTIVATION_FAIL,
    CUSTOMER_ACCOUNT_ACTIVATION_REQUEST,
    CUSTOMER_ACCOUNT_ACTIVATION_RESET,
    CUSTOMER_ACCOUNT_ACTIVATION_SUCCESS,
} from "./constants";

export const customerAccountActivationReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSTOMER_ACCOUNT_ACTIVATION_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_ACCOUNT_ACTIVATION_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case CUSTOMER_ACCOUNT_ACTIVATION_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_ACCOUNT_ACTIVATION_RESET:
            return {};
        default:
            return state;
    };
};
