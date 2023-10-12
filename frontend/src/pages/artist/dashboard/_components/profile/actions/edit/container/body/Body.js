import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import SubmitButton from './submit-btn/SubmitButton';
import { editName } from '../../../../../../../../../redux/artist/account/name/actions';
import { editMobile } from '../../../../../../../../../redux/artist/account/mobile/actions';
import { ARTIST_ACCOUNT_NAME_EDIT_RESET } from '../../../../../../../../../redux/artist/account/name/constants';
import { getArtistDetails } from '../../../../../../../../../redux/artist/account/details/actions';

const Body = () => {
    const dispatch = useDispatch();
    const { artist: { firstName, lastName, mobile } } = useSelector(state => state.artistAccountDetails);
    const { loading: loadingName, success: successNameEdit } = useSelector(state => state.artistAccountNameEdit);
    const { loading: loadingMobile, success: successMobileEdit } = useSelector(state => state.artistAccountMobileEdit);  
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        verfiy: false,
    });
    useEffect(() => {
        setData({
            firstName,
            lastName,
            mobile,
        });
    }, [firstName, lastName, mobile]);
    useEffect(() => {
        if (successNameEdit) {
            dispatch({
                type: ARTIST_ACCOUNT_NAME_EDIT_RESET,
            });
            dispatch(getArtistDetails());
        };
        if (successMobileEdit) {
            setData({
                ...data,
                verfiy: true
            });
        };
    }, [successMobileEdit, successNameEdit]);
    const changeHandler = (event) => setData({
        ...data,
        [event.target.name]: event.target.value,
    });
    const editNameHandler = () => {
        dispatch(editName({
            firstName: data.firstName,
            lastName: data.lastName,
        }))
    };
    const editMobileHandler = () => {
        dispatch(editMobile(data.mobile));
    };
    return (
        <form className = {styles.body}>
            
            <div className = {styles.name}>

                <div className={styles.part}>
                    <label htmlFor = 'artistAccountEditFormFirstName'>نام کوچک</label>
                    <input id = 'artistAccountEditFormFirstName'
                    type='text' 
                    name = 'firstName'
                    value = {data.firstName}
                    onChange = {changeHandler}
                    />
                </div>
            
                <div className={styles.part}>
                    <label htmlFor = 'artistAccountEditFormLastName'>نام خانوادگی</label>
                    <input id = 'artistAccountEditFormLastName'
                    type='text' 
                    name = 'lastName'
                    value = {data.lastName}
                    onChange = {changeHandler}
                    />
                </div>

                <SubmitButton title = 'ذخیره‌'
                loading = {loadingName}
                onSubmit = {editNameHandler}
                />

            </div>

            <div className = {styles.mobile}>

                <div className={styles.part}>
                    <label htmlFor = 'artistAccountEditFormMobile'>موبایل</label>
                    <input id = 'artistAccountEditFormMobile'
                    type='text' 
                    name = 'mobile'
                    value = {data.mobile}
                    onChange = {changeHandler}
                    />
                </div>

                <SubmitButton title = 'دریافت کد تایید'
                loading = {loadingMobile}
                onSubmit = {editMobileHandler}
                />
                
            </div>
            
        </form>
    );
};

export default Body;