import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails } from '../../../../../redux/artist/account/details/actions';
import { ARTIST_ACCOUNT_NAME_EDIT_RESET } from '../../../../../redux/artist/account/name/constants';
import SubmitButton from './button/SubmitButton';


const Container = ({ open }) => {
    
    const dispatch = useDispatch();
    
    const { loading, success } = useSelector(state => state.artistAccountNameEdit);
    
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
    });
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: ARTIST_ACCOUNT_NAME_EDIT_RESET,
            });
            dispatch(getArtistDetails());
        }
    }, [success, ARTIST_ACCOUNT_NAME_EDIT_RESET]);
    
    const changeHandler = (event) => setData({
        ...data,
        [event.target.name]: event.target.value,
    });


    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <div className={styles.header}>
                
                <span className={styles.title}>لطفا نام کامل خود را وارد کنید</span>
                
                <button className={styles.logout_btn}>
                    خروج
                </button>
                
            </div>

            <form className = {styles.form}>

                <div className = {styles.part}>
                    <label htmlFor='registrationCompleteFormFirstName'>نام کوچک</label>
                    <input className = 'form-control'
                    id = 'registrationCompleteFormFirstName'
                    type='text'
                    placeholder='مثال: احمد'
                    name = 'firstName'
                    value={data.firstName}
                    onChange={changeHandler}
                    />
                </div>

                <div className={styles.part}>
                    <label htmlFor='registrationCompleteFormLastName'>نام خانوادگی</label>
                    <input className = 'form-control'
                    id = 'registrationCompleteFormLastName'
                    type='text'
                    placeholder='مثال: یاحقی'
                    name = 'lastName'
                    value={data.lastName}
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