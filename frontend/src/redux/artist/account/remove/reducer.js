import { 
    ARTIST_ACCOUNT_REMOVE_REQUEST, 
    ARTIST_ACCOUNT_REMOVE_SUCCESS,
    ARTIST_ACCOUNT_REMOVE_FAIL, 
    ARTIST_ACCOUNT_REMOVE_RESET, 
} from './constants';

export const artistAccountRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_REMOVE_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_REMOVE_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_ACCOUNT_REMOVE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_REMOVE_RESET:
            return {};
        default:
            return state;
    };
};