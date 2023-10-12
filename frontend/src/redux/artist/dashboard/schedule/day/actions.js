import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import { 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_FAIL, 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_REQUEST, 
    ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_SUCCESS, 
} from './constants';

const API = `${ARTIST_API}/dashboard/schedule`;

export const closed = (day) => async(dispatch, getState) => {
    try {
       
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_REQUEST,
        });
       
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
       
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
       
        const { data } = await axios.patch(
            `${API}/day`,
            { day },
            config,
        );
       
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_DAY_CLOSED_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};