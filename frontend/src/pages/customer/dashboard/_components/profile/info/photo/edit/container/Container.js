import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Avatar, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, removePhoto } from '../../../../../../../../../redux/artist/account/photo/actions';
import { ARTIST_ACCOUNT_PHOTO_EDIT_RESET } from '../../../../../../../../../redux/artist/account/photo/constants';
import { getArtistDetails } from '../../../../../../../../../redux/artist/account/details/actions';
import Footer from './footer/Footer';

const Container = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { artist: { photo } } = useSelector(state => state.artistAccountDetails);
    const { loading, success } = useSelector(state => state.artistAccountPhotoEdit);
    const [data, setData] = useState('');
    useEffect(() => {
        if (success) {
            dispatch({ 
                type: ARTIST_ACCOUNT_PHOTO_EDIT_RESET,
            })
            dispatch(getArtistDetails());
        };
    }, [success, ARTIST_ACCOUNT_PHOTO_EDIT_RESET]);
    useEffect(() => {
        if (data) {
            const formData = new FormData();
            formData.append('photo', data);
            dispatch(addPhoto(formData));
        };
    }, [data]);
    const removeHandler = () => dispatch(removePhoto());
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <div className={styles.body}>
                
                <label htmlFor = 'artistPhotoForm' className={styles.photo_label}>
                    <Avatar src = {photo} sx = {{ width: '150px', height: '150px', backgroundColor: '#222222', color: '#111' }} />
                </label>
                
                <form className={styles.form}>
                    
                    <input id = 'artistPhotoForm'
                    name = 'photo'
                    type='file'
                    onChange={e => setData(e.target.files[0])}
                    />

                    <label htmlFor = 'artistPhotoForm'>
                        {loading && <CircularProgress size={16} sx = {{ color: '#444' }} /> }
                        <span>ویرایش تصویر</span>
                    </label>
                    
                    {photo &&
                    <button className = {styles.remove_btn} onClick = {removeHandler}>
                        حذف 
                    </button>
                    }

                </form>

            </div>

            <Footer setOpen = {setOpen} />

        </div>
    );
};

export default Container;