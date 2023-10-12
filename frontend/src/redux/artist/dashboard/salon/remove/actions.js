import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import {
    ARTIST_DASHBOARD_SALON_REMOVE_REQUEST, 
    ARTIST_DASHBOARD_SALON_REMOVE_SUCCESS, 
    ARTIST_DASHBOARD_SALON_REMOVE_FAIL,
} from './constants';

const API = `${ARTIST_API}/dashboard/salon`;
export const removeSalon = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_SALON_REMOVE_REQUEST,
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.delete(
            API,
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_SALON_REMOVE_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SALON_REMOVE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};