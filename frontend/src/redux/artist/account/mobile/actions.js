import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_MOBILE_EDIT_REQUEST,
    ARTIST_ACCOUNT_MOBILE_EDIT_SUCCESS,
    ARTIST_ACCOUNT_MOBILE_EDIT_FAIL,
    ARTIST_ACCOUNT_MOBILE_VERIFY_REQUEST,
    ARTIST_ACCOUNT_MOBILE_VERIFY_SUCCESS,    
    ARTIST_ACCOUNT_MOBILE_VERIFY_FAIL,
} from './constants';

const ARTIST_API_ACCOUNT = `${ARTIST_API}/account`;

export const editMobile = (mobile) => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_EDIT_REQUEST,
        });
        
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
     
        const { data } = await axios.patch(
            `${ARTIST_API_ACCOUNT}/mobile/edit`,
            mobile,
            config,
        );
    
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_EDIT_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const verifyMobile = (mobile, verificationCode) => async(dispatch, getState) => {
    try {
     
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_VERIFY_REQUEST,
        });
      
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
      
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
      
        const { data } = await axios.patch(
            `${ARTIST_API_ACCOUNT}/mobile/verify`,
            { mobile, verificationCode },
            config,
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_VERIFY_SUCCESS,
            payload: data,
        });
      
        localStorage.setItem('artistInfo', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_VERIFY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
