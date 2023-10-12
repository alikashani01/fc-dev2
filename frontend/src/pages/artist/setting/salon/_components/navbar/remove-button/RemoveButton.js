import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { removeSalon } from '../../../../../../../redux/artist/dashboard/salon/remove/actions';


const RemoveButton = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistDashboardSalonRemove);

    const removeHandler = () => {
        if (window.confirm('حذف سالن باعث غیرفعال شدن حساب می‌شود. حذف شود؟')) {
            dispatch(removeSalon());
        };
    };

    return (
        <button className = {styles.btn} 
        id = {loading ? styles.loading : ''}
        type = 'button'
        onClick = {removeHandler}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {14} sx = {{ color: '#333' }} />}
            <span className = {styles.title}>
                حذف 
            </span>
        </button>
    );
};

export default RemoveButton;