import { 
    CUSTOMER_DASHBOARD_BOOK_CANCEL_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_CANCEL_SUCCESS,
    CUSTOMER_DASHBOARD_BOOK_CANCEL_FAIL,
    CUSTOMER_DASHBOARD_BOOK_CANCEL_RESET,
} from "./constants";


export const customerDashboardBookCancelReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSTOMER_DASHBOARD_BOOK_CANCEL_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_DASHBOARD_BOOK_CANCEL_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_CANCEL_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_CANCEL_RESET:
            return {};
        default:
            return state;
    };
};
