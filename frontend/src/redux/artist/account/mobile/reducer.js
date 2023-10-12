import { 
    ARTIST_ACCOUNT_MOBILE_EDIT_FAIL, 
    ARTIST_ACCOUNT_MOBILE_EDIT_REQUEST, 
    ARTIST_ACCOUNT_MOBILE_EDIT_RESET, 
    ARTIST_ACCOUNT_MOBILE_EDIT_SUCCESS, 
    ARTIST_ACCOUNT_MOBILE_VERIFY_FAIL, 
    ARTIST_ACCOUNT_MOBILE_VERIFY_REQUEST, 
    ARTIST_ACCOUNT_MOBILE_VERIFY_RESET, 
    ARTIST_ACCOUNT_MOBILE_VERIFY_SUCCESS,
} from './constants';

export const artistAccountMobileEditReducer = (state = { artist: {
    mobile: ''
} }, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_MOBILE_EDIT_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_MOBILE_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, artist: action.payload };
        case ARTIST_ACCOUNT_MOBILE_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_MOBILE_EDIT_RESET:
            return {};
        default:
            return state;
    };
};
export const artistAccountMobileVerifyReducer = (state = { artistInfo: {} }, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_MOBILE_VERIFY_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_MOBILE_VERIFY_SUCCESS:
            return { ...state, loading: false, success: true, artistInfo: action.payload };
        case ARTIST_ACCOUNT_MOBILE_VERIFY_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_MOBILE_VERIFY_RESET:
            return {};
        default:
            return state;
    };
};
