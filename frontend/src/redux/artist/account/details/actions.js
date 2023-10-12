import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_DETAILS_FAIL, 
    ARTIST_ACCOUNT_DETAILS_REQUEST, 
    ARTIST_ACCOUNT_DETAILS_SUCCESS,
} from './constants';

const API = `${ARTIST_API}/account`;

export const getArtistDetails = () => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: ARTIST_ACCOUNT_DETAILS_REQUEST
        });
        
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
        
        const { data } = await axios.get(
            `${API}/details`,
            config,
        );
     
        dispatch({
            type: ARTIST_ACCOUNT_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
