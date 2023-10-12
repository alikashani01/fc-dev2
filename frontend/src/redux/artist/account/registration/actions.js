import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET, 
    ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
} from './constants';

const API = `${ARTIST_API}/account/registration`

export const addMobile = (mobile) => async(dispatch) => {
    try {
      
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST,
        });
      
        const { data } = await axios.post(
            `${API}/add`,
            { mobile },
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const verifyMobile = (mobile, verificationCode) => async(dispatch) => {
    try {
     
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST,
        });
     
        const { data } = await axios.patch(
            `${API}/verify`,
            { mobile, verificationCode },
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
            payload: data,
        });
       
        localStorage.setItem('artistInfo', JSON.stringify(data));
       
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET,
        });
      
        document.location.pathname = '/artist';
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};