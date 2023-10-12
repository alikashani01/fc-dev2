import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { addMobile } from '../../../../../../../redux/customer/account/registration/actions';
import { CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../redux/customer/account/registration/constants';
import { RegistrationContext } from '../../Registration';
import Submit from './submit/Submit';
import Resend from './resend/Resend';


const Header = () => {

    const dispatch = useDispatch();

    const { data, step, setStep } = useContext(RegistrationContext);

    const { loading } = useSelector(state => state.customerAccountRegistrationMobileAdd);

    const addMobileHandler = () => {
        if (!data) return alert('لطفا شماره موبایل خود را وارد کنید');
        dispatch(addMobile(data));
    };

    const toggleHandler = () => {
        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        })
        setStep({ add: true });
    };

    return (
        <div className = {styles.header}>
            
            <div>
                {step.verify 
                ? <button className = {styles.btn} onClick = {toggleHandler}>
                    <ArrowForwardIosRoundedIcon sx = {{ fontSize: '.9rem', color: '#0288e0' }} />
                    <span>تغییر شماره</span>
                </button>
                : <span className={styles.role}>مشتری</span>
                }
            </div>
            <div></div>
            <div>
                {step.verify 
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