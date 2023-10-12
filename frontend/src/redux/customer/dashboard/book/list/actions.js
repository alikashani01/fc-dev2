import axios from 'axios';
import { CUSTOMER_API } from '../../../../apis';
import { 
    CUSTOMER_DASHBOARD_BOOK_LIST_FAIL,
    CUSTOMER_DASHBOARD_BOOK_LIST_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_LIST_SUCCESS,
} from './constants';

const API = `${CUSTOMER_API}/book`;

export const getBooks = (status = 'فعال') => async(dispatch, getState) => {
    try {
        
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_LIST_REQUEST,
        });
        
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        
        const { data } = await axios.get(
            `${API}/list?status=${status}`,
            config,
        );
        
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_LIST_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
