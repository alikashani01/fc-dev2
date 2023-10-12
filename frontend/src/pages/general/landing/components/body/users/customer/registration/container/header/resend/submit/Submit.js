import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { CircularProgress } from '@mui/material';


const Submit = ({ onSubmit, loading, title, counter }) => {
    
    useEffect(() => {
        console.log(counter)
    }, [counter])
    
    return (
        <button className = {styles.btn} 
        id = {counter > 0 ? styles.loading : ''}
        type = 'button'
        onClick = {onSubmit}
        >
            {loading && <CircularProgress size = {14} sx = {{ color: '#333' }} />}
            <span className = {styles.title}>
                {title}
            </span>
        </button>
    );
};

export default Submit;