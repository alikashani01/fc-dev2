import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import VerificationCodeInput from './input/InputContainer';


const Verify = () => {
        
    const { artist } = useSelector(state => state.artistAccountMobileEdit);
    
    return (
        <form className={styles.form}>

            <label htmlFor = 'userRegisterFormMobile'>
                <span>لطفا کد دریافتی را وارد کنید</span>
                <span className={styles.mobile}>{artist && artist.mobile}</span>
            </label>

            <VerificationCodeInput />
            
        </form>
    );
};

export default Verify;