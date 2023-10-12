import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import VerificationCodeInput from './input/InputContainer';


const Verify = () => {
        
    const { customer } = useSelector(state => state.customerAccountMobileEdit);
    
    return (
        <form className={styles.form}>

            <label htmlFor = 'userRegisterFormMobile'>
                <span>لطفا کد دریافتی را وارد کنید</span>
                <span className={styles.mobile}>{customer && customer.mobile}</span>
            </label>

            <VerificationCodeInput />
            
        </form>
    );
};

export default Verify;