import { 
    ARTIST_DASHBOARD_BOOK_LIST_REQUEST,
    ARTIST_DASHBOARD_BOOK_LIST_SUCCESS,
    ARTIST_DASHBOARD_BOOK_LIST_FAIL,
    ARTIST_DASHBOARD_BOOK_LIST_RESET,

} from "./constants";

export const artistDashboardBookListReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_BOOK_LIST_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_LIST_SUCCESS:
            return { ...state, loading: false, success: true, books: action.payload };
        case ARTIST_DASHBOARD_BOOK_LIST_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_LIST_RESET:
            return {};
        default:
            return state;
    };
};
