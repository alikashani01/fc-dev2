import axios from 'axios';
import { ARTIST_API } from '../../../../apis';
import { 
    ARTIST_DASHBOARD_BOOK_LIST_FAIL,
    ARTIST_DASHBOARD_BOOK_LIST_REQUEST,
    ARTIST_DASHBOARD_BOOK_LIST_SUCCESS,
} from './constants';

const API = `${ARTIST_API}/dashboard/book`;

export const getBooks = (status) => async(dispatch, getState) => {

    try {
        
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_LIST_REQUEST,
        });
        
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
       
        const { data } = await axios.get(
            `${API}?status=${status}`,
            config,
        );
      
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_LIST_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: ARTIST_DASHBOARD_BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };

};
