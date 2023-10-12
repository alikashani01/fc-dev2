import axios from 'axios';
import { ARTIST_API } from '../../../apis';
import { 
    ARTIST_ACCOUNT_NAME_EDIT_FAIL,
    ARTIST_ACCOUNT_NAME_EDIT_REQUEST,
    ARTIST_ACCOUNT_NAME_EDIT_SUCCESS,
} from './constants';


const ARTIST_API_ACCOUNT = `${ARTIST_API}/account`;

export const editName = (name) => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: ARTIST_ACCOUNT_NAME_EDIT_REQUEST
        });
       
        const { artistAccountRegistrationMobileVerify: { artistInfo } } = getState();
       
        const config = {
            headers: {
                Authorization: `Bearer ${artistInfo.token}`,
            },
        };
      
        const { data } = await axios.patch(
            `${ARTIST_API_ACCOUNT}/name`,
            name,
            config,
        );
      
        dispatch({
            type: ARTIST_ACCOUNT_NAME_EDIT_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        dispatch({
            type: ARTIST_ACCOUNT_NAME_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };

};