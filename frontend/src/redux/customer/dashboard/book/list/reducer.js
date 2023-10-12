import { 
    CUSTOMER_DASHBOARD_BOOK_LIST_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_LIST_SUCCESS,
    CUSTOMER_DASHBOARD_BOOK_LIST_FAIL,
    CUSTOMER_DASHBOARD_BOOK_LIST_RESET,

} from "./constants";

export const customerDashboardBookListReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case CUSTOMER_DASHBOARD_BOOK_LIST_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_DASHBOARD_BOOK_LIST_SUCCESS:
            return { ...state, loading: false, success: true, books: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_LIST_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_LIST_RESET:
            return {};
        default:
            return state;
    };
};
