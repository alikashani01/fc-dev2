import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import {  
    ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_FAIL, 
    ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_REQUEST, 
    ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_SUCCESS,
} from './constants';

const API = `${ARTIST_API}/dashboard/schedule`;

export const editTime = (day, time) => async(dispatch, getState) => {
    try {
    
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_REQUEST,
        });
    
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
     
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
      
        const { data } = await axios.patch(
            `${API}/day/time`,
            { day, time },
            config,
        );
      
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SCHEDULE_TIME_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};