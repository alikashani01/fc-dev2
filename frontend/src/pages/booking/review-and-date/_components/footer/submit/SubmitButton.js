import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { submitBook } from '../../../../../../redux/booking/actions';


const Submit = () => {

    const dispatch = useDispatch();

    const { services, artist, date } = useSelector(state => state.booking);
    
    const { loading } = useSelector(state => state.bookingSubmit);

    const submitHandler = () => {
        if (window.confirm('ثبت نوبت؟')) {
            if (!date.dayNumber || !date.time) {
                alert('لطفا روز و ساعت نوبت را مشخص کنید');
            } else {
                dispatch(submitBook({ services, artist, date }));
            };
        };
    };

    const styling = {
        width: '150px',
        height: '40px',
        backgroundColor: loading ? '#222' : '#00d199',
        color: loading ? '#999' : '#fff',
        borderRadius: '8px',
        gap: '10px',
        fontSize: '1.1rem',
        wordSpacing: '1px',
    };

    return (
        <Button
        id = {loading ? styles.loading : ''}
        sx = {styling}
        type = 'button'
        onClick = {submitHandler}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {17} sx = {{ color: '#aaa' }} />}
            <span className = {styles.title}>
                {loading ? 'ثبت نوبت...' : 'ثبت نوبت'}
            </span>
        </Button>
    );
};

export default Submit;