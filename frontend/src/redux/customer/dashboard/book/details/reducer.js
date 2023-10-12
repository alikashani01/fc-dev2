import { 
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_RESET,
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_FAIL,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_RESET,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_SUCCESS,

} from "./constants";

export const customerDashboardBookDetailsReducer = (state = { book: {
    artist: {},
    services: [],
    skills: [],
    date: {
        time: {
            hour: 0,
            minute: 0,
        },
        dayName: '',
        dayNumber: '',
        month: '',
        date: '',
    },
    finalDate: {
        time: {
            hour: 0,
            minute: 0,
        },
        dayName: '',
        dayNumber: '',
        month: '',
        date: '',
    },
} }, action) => {
    switch (action.type) {
        case CUSTOMER_DASHBOARD_BOOK_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_DASHBOARD_BOOK_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, book: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};
export const customerDashboardBookCurrentDetailsReducer = (state = { book: {
    customer: {},
    customerInfo: {
        fullName: '',
        photo: '',
    },
    artist: {},
    artistInfo: {
        fullName: '',
        photo: '',
    },
    services: [],
    skills: [],
    date: {
        time: 0,
        dayName: '',
        dayNumber: '',
        month: '',
        date: '',
    },
    startedDate: {
        time: {
            hour: 0,
            minute: 0,
        },
        dayName: '',
        dayNumber: '',
        month: '',
    },
} }, action) => {
    switch (action.type) {
        case CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, book: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};