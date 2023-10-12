import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_REMOVE_FAIL, 
    ARTIST_ACCOUNT_REMOVE_REQUEST, 
    ARTIST_ACCOUNT_REMOVE_SUCCESS, 
} from './constants';


const ARTIST_API_ACCOUNT = `${ARTIST_API}/account`;

export const removeAccount = () => async(dispatch, getState) => {
    try {
     
        dispatch({
            type: ARTIST_ACCOUNT_REMOVE_REQUEST,
        });
      
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
      
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
       
        const { data } = await axios.delete(
            `${ARTIST_API_ACCOUNT}/details`,
            config,
        );
       
        dispatch({
            type: ARTIST_ACCOUNT_REMOVE_SUCCESS,
            payload: data,
        })
       
        localStorage.removeItem('artistInfo', JSON.stringify(data));
       
        document.location.pathname = '/';
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_REMOVE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};