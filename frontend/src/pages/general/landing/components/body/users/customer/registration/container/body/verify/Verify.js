import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { UsersContext } from '../../../../../Users';
import VerificationCodeInput from './input/InputContainer';


const Verify = () => {
    
    const { customer: { verify } } = useContext(UsersContext);
    
    const { customer } = useSelector(state => state.customerAccountRegistrationMobileAdd);
    
    return (
        <form className={styles.form} id = {verify ? styles.show : styles.hide}>

            <label htmlFor = 'userRegisterFormMobile'>
                <span>لطفا کد دریافتی را وارد کنید</span>
                <span className={styles.mobile}>{customer && customer.mobile}</span>
            </label>

            <VerificationCodeInput />
            
        </form>
    );
};

export default Verify;