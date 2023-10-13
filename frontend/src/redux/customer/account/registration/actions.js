import axios from 'axios';
import { CUSTOMER_API } from '../../../apis';
import { 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET, 
    CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
} from './constants';

const API = `${CUSTOMER_API}/account/registration`
export const addMobile = (mobile) => async(dispatch) => {
    try {
        
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_REQUEST,
        });
        
        const { data } = await axios.post(
            `${API}/add`,
            { mobile },
        );
        
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_SUCCESS,
            payload: data,
        });

        localStorage.setItem('customerInfo', JSON.stringify(data));
        
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        });

        if (document.location.pathname === '/booking/review-and-date') {
            document.location.pathname = '/booking/review-and-date';
        } else {
            document.location.pathname = '/customer';
        };

    } catch (error) {
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};

export const verifyMobile = (mobile, verificationCode) => async(dispatch) => {
    // try {
    //     dispatch({
    //         type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_REQUEST,
    //     });
    //     const { data } = await axios.patch(
    //         `${API}/verify`,
    //         { mobile, verificationCode },
    //     );
    //     dispatch({
    //         type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_SUCCESS,
    //         payload: data,
    //     });
    //     localStorage.setItem('customerInfo', JSON.stringify(data));
    //     dispatch({
    //         type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_RESET,
    //     });
    //     if (document.location.pathname === '/booking/review-and-date') return;
    //     document.location.pathname = '/customer';
    // } catch (error) {
    //     dispatch({
    //         type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_VERIFY_FAIL,
    //         payload: error.response && error.response.data.message
    //             ? error.response.data.message
    //             : error.response,
    //     });
    // }
};