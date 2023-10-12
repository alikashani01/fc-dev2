import {
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_FAIL, 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_REQUEST, 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_RESET, 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_SUCCESS, 
} from './constants';

export const artistDashboardScheduleDayClosedReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_RESET:
            return {};
        default:
            return state;
    };
};