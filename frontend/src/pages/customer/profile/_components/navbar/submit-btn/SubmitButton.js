import React from 'react';
import styles from './styles.module.css';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeAccount } from '../../../../../../redux/artist/account/remove/actions';


const SubmitButton = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistAccountRemove);

    const sumbitHandler = () => {
        if (window.confirm('حذف حساب آرایشگری؟')) dispatch(removeAccount());
    };

    return (
        <button className = {styles.btn} 
        id = {loading ? styles.loading : ''}
        type = 'button'
        onClick = {sumbitHandler}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {14} sx = {{ color: '#333' }} />}
            <span id = {styles.title}>
                حذف حساب آرایشگری
            </span>
        </button>
    );
};

export default SubmitButton;