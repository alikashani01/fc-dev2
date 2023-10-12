import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { editSalon } from '../../../../../../../../redux/artist/dashboard/salon/edit/actions';


const SaveButton = ({ data }) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistDashboardSalonEdit)

    const sumbitHandler = () => {
        dispatch(editSalon(data));
    };

    const styling = {
        backgroundColor: loading ? '#161616' : '#0288e0',
        color: loading ? '#777' : '#fff',
        padding: '7px 21px',
        borderRadius: '10px',
        margin: '30px auto 10px auto',
        gap: '10px',
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
                ذخیره‌ی سالن
            </span>
        </Button>
    );
};

export default SaveButton;