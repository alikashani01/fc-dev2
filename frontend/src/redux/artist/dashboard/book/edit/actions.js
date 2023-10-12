import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import { 
    ARTIST_DASHBOARD_BOOK_CANCEL_FAIL,
    ARTIST_DASHBOARD_BOOK_CANCEL_REQUEST,
    ARTIST_DASHBOARD_BOOK_CANCEL_SUCCESS,
    ARTIST_DASHBOARD_BOOK_END_FAIL,
    ARTIST_DASHBOARD_BOOK_END_REQUEST,
    ARTIST_DASHBOARD_BOOK_END_SUCCESS,
    ARTIST_DASHBOARD_BOOK_START_FAIL, 
    ARTIST_DASHBOARD_BOOK_START_REQUEST, 
    ARTIST_DASHBOARD_BOOK_START_SUCCESS,

} from './constants';

const API = `${ARTIST_API}/dashboard/book`;
export const start = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_START_REQUEST
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/${id}/start`,
            {},
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_START_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_START_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
export const end = (id, elapsedTime) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_END_REQUEST
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/${id}/end`,
            { elapsedTime },
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_END_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_END_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
export const cancel = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CANCEL_REQUEST
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/${id}/cancel`,
            {},
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CANCEL_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CANCEL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};