import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { addMobile } from '../../../../../../../../../../redux/customer/account/registration/actions';
import { UsersContext } from '../../../../Users';
import { CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../../../../redux/customer/account/registration/constants';
import Submit from './submit/Submit';
import Resend from './resend/Resend';


const Header = () => {
    const dispatch = useDispatch();
    const { customer: { verify }, setcustomer, data } = useContext(UsersContext);
    const { loading } = useSelector(state => state.customerAccountRegistrationMobileAdd);
    const addMobileHandler = () => {
        if (!data) return alert('لطفا شماره موبایل خود را وارد کنید');
        dispatch(addMobile(data));
    };
    const toggleHandler = () => {
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        })
        setcustomer({ add: true });
    }
    return (
        <div className = {styles.header}>
            
            <div>
                {verify 
                ? <button className = {styles.btn} onClick = {toggleHandler}>
                    <ArrowForwardIosRoundedIcon sx = {{ fontSize: '.9rem', color: '#0288e0' }} />
                    <span>تغییر شماره</span>
                </button>
                : <span className={styles.role}>مشتری</span>
                }
            </div>
            <div></div>
            <div>
                {verify 
                ? <Resend />
                : <Submit title = 'دریافت کد تایید'
                onSubmit = {addMobileHandler}
                loading = {loading}
                />
                }
                
            </div>
            
        </div>
    );
};

export default Header;