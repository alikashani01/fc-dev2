import {
    ARTIST_DASHBOARD_SERVICE_REMOVE_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_FAIL,
    ARTIST_DASHBOARD_SERVICE_REMOVE_RESET,
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_FAIL,
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_RESET,
} from './constants';

export const artistDashboardServiceRemoveReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_SERVICE_REMOVE_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_RESET:
            return {};
        default:
            return state;
    };
};
export const artistDashboardServiceRemoveAllReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_RESET:
            return {};
        default:
            return state;
    };
};