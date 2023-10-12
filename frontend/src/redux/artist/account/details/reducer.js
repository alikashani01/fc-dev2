import { 
    ARTIST_ACCOUNT_DETAILS_FAIL, 
    ARTIST_ACCOUNT_DETAILS_REQUEST, 
    ARTIST_ACCOUNT_DETAILS_RESET, 
    ARTIST_ACCOUNT_DETAILS_SUCCESS, 
} from './constants';

export const artistAccountDetailsReducer = (state = { artist: {
    skills: {
        main: '',
        sub: [],
    },
    services: [],
    books: [],
    salon: {},
    schedule: [],
} }, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_DETAILS_SUCCESS:
            return { ...state, loading: false, success: true, artist: action.payload };
        case ARTIST_ACCOUNT_DETAILS_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_DETAILS_RESET:
            return {};
        default:
            return state;
    };
};
