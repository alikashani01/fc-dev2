import axios from 'axios';
import { CUSTOMER_API } from '../../../../apis';
import { 
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
    CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_REQUEST,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_SUCCESS,
    CUSTOMER_DASHBOARD_BOOK_DETAILS_FAIL,
} from './constants';

const API = `${CUSTOMER_API}/book`;
export const getBookDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_DETAILS_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${API}/details/${id}`,
            config,
        );
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
export const getCurrentBook = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_REQUEST,
        });
        const { customerAccountRegistrationMobileVerify: { customerInfo } } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${customerInfo.token}`,
            },
        };
        const { data } = await axios.get(
            `${API}/details/current`,
            config,
        );
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: CUSTOMER_DASHBOARD_BOOK_CURRENT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.response,
        });
    }
};
