import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerDetails } from '../../../../../redux/customer/account/details/actions';
import { CUSTOMER_ACCOUNT_NAME_EDIT_RESET } from '../../../../../redux/customer/account/name/constants';
import SubmitButton from './button/SubmitButton';


const Container = ({ open }) => {
    
    const dispatch = useDispatch();
    
    const { loading, success } = useSelector(state => state.customerAccountNameEdit);
    
    const [data, setData] = useState('');
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: CUSTOMER_ACCOUNT_NAME_EDIT_RESET,
            });
            dispatch(getCustomerDetails());
        }
    }, [success, CUSTOMER_ACCOUNT_NAME_EDIT_RESET]);
    
    const changeHandler = (event) => setData(event.target.value);

    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <div className={styles.header}>
                
                <span className={styles.title}>لطفا نام کامل خود را وارد کنید</span>
                
                <button className={styles.logout_btn}>
                    خروج
                </button>
                
            </div>

            <form className = {styles.form}>

                <div className={styles.part}>
                    <label htmlFor='registrationCompleteFormFullName'>نام کامل</label>
                    <input className = 'form-control'
                    id = 'registrationCompleteFormFullName'
                    type='text'
                    placeholder='مثال: سارا فخیم'
                    name = 'fullName'
                    value={data}
                    onChange={changeHandler}
                    />
                </div>

                <div className={styles.actions}>
                    
                    <SubmitButton title = 'ذخیره‌ی نام'
                    loading = {loading}
                    data={data}
                    setData = {setData}
                    />

                    <button className={styles.remove_btn}>
                        حذف حساب کاربری
                    </button>
                </div>

            </form>

        </div>
    );
};

export default Container;