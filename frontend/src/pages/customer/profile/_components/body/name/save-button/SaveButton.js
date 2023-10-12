import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { editName } from '../../../../../../../redux/customer/account/name/actions';


const SaveButton = ({ data }) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.customerAccountNameEdit)

    const sumbitHandler = () => {
        dispatch(editName(data));
    };

    const styling = {
        backgroundColor: loading ? '#0000' : '#1110',
        color: loading ? '#777' : '#0288e0',
        padding: '8px',
        borderRadius: '10px',
        margin: '0 auto',
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
                ذخیره‌ی نام
            </span>
        </Button>
    );
};

export default SaveButton;