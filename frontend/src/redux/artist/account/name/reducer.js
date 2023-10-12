import { 
    ARTIST_ACCOUNT_NAME_EDIT_FAIL,
    ARTIST_ACCOUNT_NAME_EDIT_REQUEST, 
    ARTIST_ACCOUNT_NAME_EDIT_RESET, 
    ARTIST_ACCOUNT_NAME_EDIT_SUCCESS
} from './constants';


export const artistAccountNameEditReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_NAME_EDIT_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_NAME_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, artist: action.payload };
        case ARTIST_ACCOUNT_NAME_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_NAME_EDIT_RESET:
            return {};
        default:
            return state;
    };
};