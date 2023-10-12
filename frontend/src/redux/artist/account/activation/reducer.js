import { 
    ARTIST_ACCOUNT_ACTIVATION_FAIL,
    ARTIST_ACCOUNT_ACTIVATION_REQUEST,
    ARTIST_ACCOUNT_ACTIVATION_RESET,
    ARTIST_ACCOUNT_ACTIVATION_SUCCESS,
} from "./constants";

export const artistAccountActivationReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_ACTIVATION_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_ACTIVATION_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_ACCOUNT_ACTIVATION_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_ACTIVATION_RESET:
            return {};
        default:
            return state;
    };
};
