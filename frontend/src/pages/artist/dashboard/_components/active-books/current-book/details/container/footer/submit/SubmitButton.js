import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { end } from '../../../../../../../../../../redux/artist/dashboard/book/edit/actions';


const Submit = () => {

    const dispatch = useDispatch();
    
    const { loading } = useSelector(state => state.artistDashboardBookEnd);

    const { book: { _id } } = useSelector(state => state.artistDashboardBookCurrentDetails);

    const submitHandler = () => {
        if (window.confirm('پایان نوبت؟')) dispatch(end(_id));
    }

    const styling = {
        width: '100%',
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
                {loading ? 'پایان نوبت...' : 'پایان نوبت'}
            </span>
        </Button>
    );
};

export default Submit;