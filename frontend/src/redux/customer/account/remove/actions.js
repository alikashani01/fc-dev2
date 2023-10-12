import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_REMOVE_FAIL, 
    CUSTOMER_ACCOUNT_REMOVE_REQUEST, 
    CUSTOMER_ACCOUNT_REMOVE_SUCCESS, 
} from './constants';


const CUSTOMER_API_ACCOUNT = `${CUSTOMER_API}/account`;
export const removeAccount = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ACCOUNT_REMOVE_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.delete(
            `${CUSTOMER_API_ACCOUNT}/details`,
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_REMOVE_SUCCESS,
            payload: data,
        })
        localStorage.removeItem('customerInfo', JSON.stringify(data));
        document.location.pathname = '/';
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_REMOVE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};