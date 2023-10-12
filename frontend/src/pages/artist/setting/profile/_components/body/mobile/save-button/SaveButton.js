import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { editMobile } from '../../../../../../../../redux/artist/account/mobile/actions';


const SaveButton = ({ data }) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistAccountMobileEdit);

    const sumbitHandler = () => {
        dispatch(editMobile(data));
    };

    const styling = {
        backgroundColor: loading ? '#0000' : '#1110',
        // border: `1px solid ${loading ? '#222' : '#0288e0'}`,
        color: loading ? '#777' : '#0288e0',
        padding: '8px',
        borderRadius: '10px',
        margin: '10px auto',
        gap: '10px',
        fontSize: '1rem',
        wordSpacing: '1px',
        width: '100%',
    };

    return (
        <Button className = {styles.btn} 
        id = {loading ? styles.loading : ''}
        sx = {styling}
        type = 'button'
        onClick = {sumbitHandler}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {17} sx = {{ color: '#aaa' }} />}
            <span className = {styles.title}>
                دریافت کد تایید
            </span>
        </Button>
    );
};

export default SaveButton;