import { 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET, 
} from "./constants";

export const artistAccountRegistrationMobileAddReducer = (state = { artist: {
    mobile: '',
    
} }, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS:
            return { ...state, loading: false, success: true, artist: action.payload };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET:
            return {};
        default:
            return state;
    };
};
export const artistAccountRegistrationMobileVerifyReducer = (state = { artistInfo: {} }, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS:
            return { ...state, loading: false, success: true, artistInfo: action.payload };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET:
            return {};
        default:
            return state;
    };
};