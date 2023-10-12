import {
    ARTIST_DASHBOARD_SERVICE_ADD_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_ADD_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_ADD_FAIL,  
    ARTIST_DASHBOARD_SERVICE_ADD_RESET,  
} from './constants';

export const artistDashboardServiceAddReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_SERVICE_ADD_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_SERVICE_ADD_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_SERVICE_ADD_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_SERVICE_ADD_RESET:
            return {};
        default:
            return state;
    };
};