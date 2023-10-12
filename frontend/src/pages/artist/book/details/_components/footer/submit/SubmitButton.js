import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { getBookDetails } from '../../../../../../../redux/artist/dashboard/book/details/actions';
import { start } from '../../../../../../../redux/artist/dashboard/book/edit/actions';


const Submit = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    
    const { success, loading } = useSelector(state => state.artistDashboardBookStart);

    useEffect(() => {
        success && dispatch(getBookDetails(id));
    }, [success]);
    

    const submitHandler = () => {
        if (window.confirm('شروع نوبت؟')) dispatch(start(id));
    }

    const styling = {
        backgroundColor: loading ? '#222' : '#0288e0',
        padding: '5px 15px',
        color: loading ? '#999' : '#fff',
        borderRadius: '8px',
        gap: '10px',
        fontSize: '.9rem',
    };

    return (
        <Button
        id = {loading ? styles.loading : ''}
        sx = {styling}
        type = 'button'
        onClick = {submitHandler}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {14} sx = {{ color: '#aaa' }} />}
            <span className = {styles.title}>
                {loading ? 'شروع نوبت...' : 'شروع نوبت'}
            </span>
        </Button>
    );
};

export default Submit;