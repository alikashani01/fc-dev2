import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_ACTIVATION_REQUEST, 
    ARTIST_ACCOUNT_ACTIVATION_SUCCESS,
    ARTIST_ACCOUNT_ACTIVATION_FAIL, 
} from './constants';

const API = `${ARTIST_API}/account`;

export const activation = () => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: ARTIST_ACCOUNT_ACTIVATION_REQUEST
        });
        
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        
        const { data } = await axios.patch(
            `${API}/activation`,
            {},
            config,
        );
        
        dispatch({
            type: ARTIST_ACCOUNT_ACTIVATION_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_ACTIVATION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};