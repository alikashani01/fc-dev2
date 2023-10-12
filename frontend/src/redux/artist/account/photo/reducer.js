import {
    ARTIST_ACCOUNT_PHOTO_EDIT_REQUEST,
    ARTIST_ACCOUNT_PHOTO_EDIT_SUCCESS,
    ARTIST_ACCOUNT_PHOTO_EDIT_FAIL,
    ARTIST_ACCOUNT_PHOTO_EDIT_RESET,
    ARTIST_ACCOUNT_PHOTO_REMOVE_REQUEST,
    ARTIST_ACCOUNT_PHOTO_REMOVE_SUCCESS,
    ARTIST_ACCOUNT_PHOTO_REMOVE_FAIL,
    ARTIST_ACCOUNT_PHOTO_REMOVE_RESET, 
} from './constants';


export const artistAccountPhotoEditReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_PHOTO_EDIT_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_PHOTO_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_ACCOUNT_PHOTO_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_PHOTO_EDIT_RESET:
            return {};
        default:
            return state;
    };
};
export const artistAccountPhotoRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_ACCOUNT_PHOTO_REMOVE_REQUEST:
            return { ...state, loading: true };
        case ARTIST_ACCOUNT_PHOTO_REMOVE_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_ACCOUNT_PHOTO_REMOVE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_ACCOUNT_PHOTO_REMOVE_RESET:
            return {};
        default:
            return state;
    };
};
