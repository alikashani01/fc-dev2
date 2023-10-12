import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMobile } from '../../../../../../../../redux/customer/account/registration/actions';
import { CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../../redux/customer/account/registration/constants';
import Submit from './submit/Submit';


const Resend = () => {

    const dispatch = useDispatch();

    const { loading, success, customer } = useSelector(state => state.customerAccountRegistrationMobileAdd);
    
    const [counter, setCounter] = useState(5);
    
    useEffect(() => {
        setCounter(5);
    }, [success]);
    
    useEffect(() => {
        setTimeout(() => {
            counter >= 1 && setCounter(counter - 1);
        }, 1000);
    }, [counter]);
    
    const resendHandler = () => {
        if (counter > 0) return;
        customer({ type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET });
        dispatch(addMobile(customer.mobile));
    };

    const Counter = () => counter >= 1 && (
        <span className={styles.timer}>
            {counter.toLocaleString('fa')}
        </span>
    );

    return (
        <div className = {styles.resend}>
            
            <Submit title = 'ارسال مجدد' 
            onSubmit = {resendHandler}
            loading = {loading}
            counter = {counter}
            />
            
            <Counter />

        </div>
    );
};

export default Resend;