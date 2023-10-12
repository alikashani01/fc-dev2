import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress } from '@mui/material';
import { removeAccount } from '../../../../../../../redux/artist/account/remove/actions';


const RemoveButton = ({ data }) => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.artistAccountRemove);

    const sumbitHandler = () => {
        dispatch(removeAccount());
    };

    const styling = {
        backgroundColor: loading ? '#222' : '#181818',
        color: loading ? '#999' : '#ff6060',
        padding: '8px',
        borderRadius: '10px',
        margin: '10px auto',
        gap: '10px',
        textTransform: 'capitalize',
        fontSize: '.95rem',
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
                {loading ? 'حذف حساب آرایشگری...' : 'حذف حساب آرایشگری'}
            </span>
        </Button>
    );
};

export default RemoveButton;