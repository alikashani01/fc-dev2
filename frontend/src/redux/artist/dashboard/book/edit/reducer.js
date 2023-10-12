import { 
    ARTIST_DASHBOARD_BOOK_CANCEL_REQUEST,
    ARTIST_DASHBOARD_BOOK_CANCEL_SUCCESS,
    ARTIST_DASHBOARD_BOOK_CANCEL_FAIL,
    ARTIST_DASHBOARD_BOOK_CANCEL_RESET,
    ARTIST_DASHBOARD_BOOK_END_REQUEST,
    ARTIST_DASHBOARD_BOOK_END_SUCCESS,
    ARTIST_DASHBOARD_BOOK_END_FAIL,
    ARTIST_DASHBOARD_BOOK_END_RESET,
    ARTIST_DASHBOARD_BOOK_START_REQUEST, 
    ARTIST_DASHBOARD_BOOK_START_SUCCESS,
    ARTIST_DASHBOARD_BOOK_START_FAIL, 
    ARTIST_DASHBOARD_BOOK_START_RESET,
} from "./constants";

export const artistDashboardBookStartReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_BOOK_START_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_START_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_BOOK_START_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_START_RESET:
            return {};
        default:
            return state;
    };
};
export const artistDashboardBookEndReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_BOOK_END_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_END_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_BOOK_END_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_END_RESET:
            return {};
        default:
            return state;
    };
};
export const artistDashboardBookCancelReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_BOOK_CANCEL_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_CANCEL_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_BOOK_CANCEL_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_CANCEL_RESET:
            return {};
        default:
            return state;
    };
};
