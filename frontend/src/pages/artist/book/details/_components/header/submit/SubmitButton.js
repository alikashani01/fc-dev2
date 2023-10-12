import React from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { cancel } from '../../../../../../../redux/artist/dashboard/book/edit/actions';


const Submit = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    
    const { loading } = useSelector(state => state.artistDashboardBookCancel);

    const submitHandler = () => {
        if (window.confirm('لغو نوبت؟')) dispatch(cancel(id));
    }

    const styling = {
        backgroundColor: loading ? '#222' : '#151515',
        padding: '3px 9px',
        color: loading ? '#999' : '#ff6666',
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
                {loading ? 'لغو نوبت...' : 'لغو نوبت'}
            </span>
        </Button>
    );
};

export default Submit;