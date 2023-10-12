import axios from 'axios';
import { BOOKING_API } from '../../apis';
import { 
    BOOKING_ARTIST_DETAILS_FAIL, 
    BOOKING_ARTIST_DETAILS_REQUEST, 
    BOOKING_ARTIST_DETAILS_SUCCESS, 
    BOOKING_ARTIST_LIST_FAIL, 
    BOOKING_ARTIST_LIST_REQUEST, 
    BOOKING_ARTIST_LIST_SUCCESS, 
    BOOKING_CUSTOMER_DETAILS_FAIL, 
    BOOKING_CUSTOMER_DETAILS_REQUEST, 
    BOOKING_CUSTOMER_DETAILS_SUCCESS,
} from './constants';


export const getArtists = (queryData) => async(dispatch) => {

    const { state = '', city = '', skill = '' } = queryData;

    try {
        dispatch({
            type: BOOKING_ARTIST_LIST_REQUEST
        });
        const { data } = await axios.get(
            `${BOOKING_API}/artist/list?state=${state}&city=${city}&skill=${skill}`
        );
        dispatch({
            type: BOOKING_ARTIST_LIST_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: BOOKING_ARTIST_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const getArtistDetails = (id) => async(dispatch) => {
    try {
        
        dispatch({
            type: BOOKING_ARTIST_DETAILS_REQUEST
        });

        
        const { data } = await axios.get(`${BOOKING_API}/artist/details/${id}`);
        
        dispatch({
            type: BOOKING_ARTIST_DETAILS_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: BOOKING_ARTIST_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };
};

export const getCustomerDetails = (id) => async(dispatch) => {
    try {
        
        dispatch({
            type: BOOKING_CUSTOMER_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`${BOOKING_API}/customer/details/${id}`);

        dispatch({
            type: BOOKING_CUSTOMER_DETAILS_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: BOOKING_CUSTOMER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };
};