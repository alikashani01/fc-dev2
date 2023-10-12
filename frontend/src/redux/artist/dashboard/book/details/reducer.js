import { 
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_RESET,
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
    ARTIST_DASHBOARD_BOOK_DETAILS_FAIL,
    ARTIST_DASHBOARD_BOOK_DETAILS_REQUEST,
    ARTIST_DASHBOARD_BOOK_DETAILS_RESET,
    ARTIST_DASHBOARD_BOOK_DETAILS_SUCCESS,

} from "./constants";

export const artistDashboardBookDetailsReducer = (state = { book: {
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
        case ARTIST_DASHBOARD_BOOK_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, book: action.payload };
        case ARTIST_DASHBOARD_BOOK_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};
export const artistDashboardBookCurrentDetailsReducer = (state = { book: {
    artist: {},
    userInfo: {
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
        case ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, book: action.payload };
        case ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};