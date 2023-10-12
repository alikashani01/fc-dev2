import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_DETAILS_FAIL, 
    CUSTOMER_ACCOUNT_DETAILS_REQUEST, 
    CUSTOMER_ACCOUNT_DETAILS_SUCCESS,
} from './constants';

const API = `${CUSTOMER_API}/account`;
export const getCustomerDetails = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ACCOUNT_DETAILS_REQUEST
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${API}/details`,
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
