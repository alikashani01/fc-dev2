import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { editName } from '../../../../../../redux/artist/account/name/actions';



const SubmitButton = ({ data }) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistAccountNameEdit);
    
    const sumbitHandler = () => {
        if (!data.firstName || !data.lastName) return;
        dispatch(editName(data));
    };

    const styling = {
        width: '100%',
        backgroundColor: loading ? '#111' : '#0288e0',
        color: loading ? '#999' : '#fff',
        padding: '8px 20px',
        borderRadius: '10px',
        margin: '0 auto',
        gap: '10px',
        textTransform: 'capitalize',
        fontSize: '1rem',
        wordSpacing: '1px',
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
                {loading ? 'تکمیل ثبت‌نام...' : 'تکمیل ثبت‌نام'}
            </span>
        </Button>
    );
};

export default SubmitButton;