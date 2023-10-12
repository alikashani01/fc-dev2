import axios from 'axios';
import { CUSTOMER_API } from '../../../../apis';
import { 
    CUSTOMER_DASHBOARD_BOOK_CANCEL_FAIL,
    CUSTOMER_DASHBOARD_BOOK_CANCEL_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_CANCEL_SUCCESS,
} from './constants';

const API = `${CUSTOMER_API}/book`;

export const cancel = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CANCEL_REQUEST
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.patch(
            `${API}/details/${id}/cancel`,
            {},
            config,
        );
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CANCEL_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CANCEL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};