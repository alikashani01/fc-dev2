import { BOOKING_ARTIST_DETAILS_FAIL, 
    BOOKING_ARTIST_DETAILS_REQUEST, 
    BOOKING_ARTIST_DETAILS_RESET, 
    BOOKING_ARTIST_DETAILS_SUCCESS, 
    BOOKING_ARTIST_LIST_FAIL, 
    BOOKING_ARTIST_LIST_REQUEST, 
    BOOKING_ARTIST_LIST_RESET, 
    BOOKING_ARTIST_LIST_SUCCESS, 
    BOOKING_CUSTOMER_DETAILS_FAIL, 
    BOOKING_CUSTOMER_DETAILS_REQUEST, 
    BOOKING_CUSTOMER_DETAILS_RESET, 
    BOOKING_CUSTOMER_DETAILS_SUCCESS,
} from './constants';

export const bookingArtistListReducer = (state = { artists: [] }, action) => {
    switch (action.type) {
        case BOOKING_ARTIST_LIST_REQUEST:
            return { ...state, loading: true };
        case BOOKING_ARTIST_LIST_SUCCESS:
            return { ...state, loading: false, success: true, artists: action.payload };
        case BOOKING_ARTIST_LIST_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case BOOKING_ARTIST_LIST_RESET:
            return {};
        default:
            return state;
    };
};

export const bookingArtistDetailsReducer = (state = { artist: {
    services: [],
} }, action) => {
    switch (action.type) {
        case BOOKING_ARTIST_DETAILS_REQUEST:
            return { ...state, loading: true };
        case BOOKING_ARTIST_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, artist: action.payload };
        case BOOKING_ARTIST_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case BOOKING_ARTIST_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};

export const bookingCustomerDetailsReducer = (state = { customer: {} }, action) => {
    switch (action.type) {
        case BOOKING_CUSTOMER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case BOOKING_CUSTOMER_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, customer: action.payload };
        case BOOKING_CUSTOMER_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case BOOKING_CUSTOMER_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};