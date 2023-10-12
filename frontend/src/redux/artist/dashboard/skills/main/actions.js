import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import { 
    ARTIST_DASHBOARD_SKILL_MAIN_EDIT_REQUEST, 
    ARTIST_DASHBOARD_SKILL_MAIN_EDIT_SUCCESS, 
    ARTIST_DASHBOARD_SKILL_MAIN_EDIT_FAIL, 
} from './constants';

const API = `${ARTIST_API}/dashboard/skill`;
export const editMainSkill = (skill) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_SKILL_MAIN_EDIT_REQUEST
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/main`,
            { skill },
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_SKILL_MAIN_EDIT_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SKILL_MAIN_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
