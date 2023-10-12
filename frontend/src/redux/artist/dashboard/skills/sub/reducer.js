import {
    ARTIST_DASHBOARD_SKILL_SUB_EDIT_REQUEST, 
    ARTIST_DASHBOARD_SKILL_SUB_EDIT_SUCCESS, 
    ARTIST_DASHBOARD_SKILL_SUB_EDIT_FAIL, 
    ARTIST_DASHBOARD_SKILL_SUB_EDIT_RESET,
} from './constants';

export const artistDashboardSkillSubEditReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTIST_DASHBOARD_SKILL_SUB_EDIT_REQUEST:
            return { ...state, loading: true };
        case ARTIST_DASHBOARD_SKILL_SUB_EDIT_SUCCESS:
            return { ...state, loading: false, success: true, message: action.payload };
        case ARTIST_DASHBOARD_SKILL_SUB_EDIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case ARTIST_DASHBOARD_SKILL_SUB_EDIT_RESET:
            return {};
        default:
            return state;
    };
};
