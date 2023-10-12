import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import {
    ARTIST_DASHBOARD_SERVICE_ADD_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_ADD_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_ADD_FAIL,  
} from './constants';

const API = `${ARTIST_API}/dashboard/service`;
export const addService = (service) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_ADD_REQUEST,
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.post(
            `${API}/add`,
            service,
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_ADD_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_ADD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
