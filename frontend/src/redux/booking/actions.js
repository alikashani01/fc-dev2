import axios from 'axios';
import { BOOKING_API } from '../apis';
import { 
    BOOKING_ARTIST, 
    BOOKING_DATE_FREE_FAIL, 
    BOOKING_DATE_FREE_REQUEST, 
    BOOKING_DATE_FREE_SUCCESS, 
    BOOKING_DAY, 
    BOOKING_TIME,
    BOOKING_SERVICE, 
    BOOKING_SERVICE_REMOVE_ALL, 
    BOOKING_SUBMIT_FAIL, 
    BOOKING_SUBMIT_REQUEST, 
    BOOKING_SUBMIT_SUCCESS, 
} from './constants';
import { 
    BOOKING_ARTIST_DETAILS_FAIL, 
    BOOKING_ARTIST_DETAILS_REQUEST, 
    BOOKING_ARTIST_DETAILS_SUCCESS,
} from './artist/constants';



export const getFreeDates = (artist, services) => async(dispatch, getState) => {
    
    try {
        dispatch({
            type: BOOKING_DATE_FREE_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.post(
            `${BOOKING_API}/date`,
            { artist, services },
            config,
        );
        dispatch({
            type: BOOKING_DATE_FREE_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: BOOKING_DATE_FREE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };
};
export const editDay = (day) => async(dispatch, getState) => {
    dispatch({
        type: BOOKING_DAY,
        payload: day,
    });
    localStorage.setItem('bookingInfo', JSON.stringify(getState().booking));
};
export const editTime = (time) => async(dispatch, getState) => {
    dispatch({
        type: BOOKING_TIME,
        payload: time,
    });
    localStorage.setItem('bookingInfo', JSON.stringify(getState().booking));
};
export const editArtist = (artist) => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: BOOKING_ARTIST_DETAILS_REQUEST,
        });

        const { data } = await axios.get(
            `${BOOKING_API}/artist/details/${artist}`,
        );

        dispatch({
            type: BOOKING_ARTIST_DETAILS_SUCCESS,
            payload: data,
        });

        dispatch({
            type: BOOKING_ARTIST,
            payload: data,
        });
        
        localStorage.setItem('bookingInfo', JSON.stringify(getState().booking));
        
        document.location.pathname = `/booking/services`;

    } catch (error) {
        
        dispatch({
            type: BOOKING_ARTIST_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
        
    };
};
export const editService = (service) => async(dispatch, getState) => {
    dispatch({
        type: BOOKING_SERVICE,
        payload: service,
    });
    localStorage.setItem('bookingInfo', JSON.stringify(getState().booking));
};
export const removeAllServices = () => async(dispatch, getState) => {
    dispatch({
        type: BOOKING_SERVICE_REMOVE_ALL,
    });
    localStorage.setItem('bookingInfo', JSON.stringify(getState().booking));
};
export const submitBook = (book) => async(dispatch, getState) => {
    try {
        dispatch({
            type: BOOKING_SUBMIT_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.post(
            `${BOOKING_API}/submit`,
            book,
            config,
        );
        dispatch({
            type: BOOKING_SUBMIT_SUCCESS,
            payload: data,
        });
        dispatch({
            type: BOOKING_ARTIST,
            payload: data,
        });
        localStorage.removeItem('bookingInfo');
        document.location.pathname = `/booking/result/${data._id}`;
    } catch (error) {
        dispatch({
            type: BOOKING_SUBMIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };
};