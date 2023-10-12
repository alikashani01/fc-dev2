import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_ACTIVATION_REQUEST, 
    CUSTOMER_ACCOUNT_ACTIVATION_SUCCESS,
    CUSTOMER_ACCOUNT_ACTIVATION_FAIL, 
} from './constants';

const API = `${CUSTOMER_API}/account`;

export const activation = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ACCOUNT_ACTIVATION_REQUEST
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/activation`,
            {},
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_ACTIVATION_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_ACTIVATION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};