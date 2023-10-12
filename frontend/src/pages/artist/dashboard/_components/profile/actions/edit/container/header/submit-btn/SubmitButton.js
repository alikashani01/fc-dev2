import React from 'react';
import styles from './styles.module.css';
import { CircularProgress } from '@mui/material';


const SubmitButton = ({ onSubmit, loading, title }) => {
    return (
        <button className = {styles.btn} 
        id = {loading ? styles.loading : ''}
        type = 'button'
        onClick = {onSubmit}
        disabled = {loading ? true : false}
        >
            {loading && <CircularProgress size = {14} sx = {{ color: '#333' }} />}
            <span id = {styles.title}>
                {title}
            </span>
        </button>
    );
};

export default SubmitButton;