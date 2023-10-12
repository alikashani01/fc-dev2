import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import { 
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
    ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
    ARTIST_DASHBOARD_BOOK_DETAILS_REQUEST,
    ARTIST_DASHBOARD_BOOK_DETAILS_SUCCESS,
    ARTIST_DASHBOARD_BOOK_DETAILS_FAIL,
} from './constants';

const API = `${ARTIST_API}/dashboard/book`;

export const getBookDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_DETAILS_REQUEST,
        });
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${API}/details/${id}`,
            config,
        );
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const getCurrentBook = () => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
        });
        
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        
        const { data } = await axios.get(
            `${API}/details/current-book`,
            config,
        );
        
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
