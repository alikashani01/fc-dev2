import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import {
    ARTIST_DASHBOARD_SERVICE_REMOVE_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_FAIL,
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_REQUEST, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_SUCCESS, 
    ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_FAIL,
} from './constants';

const API = `${ARTIST_API}/dashboard/service`;
export const removeService = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_REQUEST,
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.delete(
            `${API}/details/${id}`,
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
export const removeAllServices = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_REQUEST,
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.delete(
            `${API}/remove-all`,
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_SERVICE_REMOVE_ALL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};