import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_PHOTO_EDIT_REQUEST, 
    ARTIST_ACCOUNT_PHOTO_EDIT_SUCCESS, 
    ARTIST_ACCOUNT_PHOTO_EDIT_FAIL, 
    ARTIST_ACCOUNT_PHOTO_REMOVE_REQUEST, 
    ARTIST_ACCOUNT_PHOTO_REMOVE_SUCCESS,
    ARTIST_ACCOUNT_PHOTO_REMOVE_FAIL,
} from './constants';


const ARTIST_API_ACCOUNT = `${ARTIST_API}/account`;

export const addPhoto = (formData) => async(dispatch, getState) => {
    try {
     
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_EDIT_REQUEST
        });
     
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
     
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
      
        const { data } = await axios.post(
            `${ARTIST_API_ACCOUNT}/photo`,
            formData,
            config,
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_EDIT_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const removePhoto = () => async(dispatch, getState) => {
    try {
    
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_REMOVE_REQUEST
        });
     
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
     
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
     
        const { data } = await axios.delete(
            `${ARTIST_API_ACCOUNT}/photo`,
            config,
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_REMOVE_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_PHOTO_REMOVE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
