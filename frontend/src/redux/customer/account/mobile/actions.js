import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_MOBILE_EDIT_REQUEST,
    CUSTOMER_ACCOUNT_MOBILE_EDIT_SUCCESS,
    CUSTOMER_ACCOUNT_MOBILE_EDIT_FAIL,
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_REQUEST,
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_SUCCESS,    
    CUSTOMER_ACCOUNT_MOBILE_VERIFY_FAIL,
} from './constants';

const CUSTOMER_API_ACCOUNT = `${CUSTOMER_API}/account`;
export const editMobile = (mobile) => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_EDIT_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${CUSTOMER_API_ACCOUNT}/mobile/edit`,
            mobile,
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_EDIT_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_EDIT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
export const verifyMobile = (mobile, verificationCode) => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_VERIFY_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${CUSTOMER_API_ACCOUNT}/mobile/verify`,
            { mobile, verificationCode },
            config,
        );
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_VERIFY_SUCCESS,
            payload: data,
        })
        localStorage.setItem('customerInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_MOBILE_VERIFY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
