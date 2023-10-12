import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_NAME_EDIT_FAIL,
    CUSTOMER_ACCOUNT_NAME_EDIT_REQUEST,
    CUSTOMER_ACCOUNT_NAME_EDIT_SUCCESS,
} from './constants';


const CUSTOMER_API_ACCOUNT = `${CUSTOMER_API}/account`;
export const editName = (name) => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: CUSTOMER_ACCOUNT_NAME_EDIT_REQUEST
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${CUSTOMER_API_ACCOUNT}/name`,
            { name },
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_NAME_EDIT_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_NAME_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    };

};