import React, { useState } from 'react';
import styles from './styles.module.css';
import { CircularProgress } from '@mui/material';


const Activation = () => {

    const [isActive, setIsActive] = useState(true);

    const [loading, setLoading] = useState(false);

    const activationHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <section className = {styles.section}>

            <span>
                {isActive ? 'باز است' : 'تعطیل است'}
            </span>

            <button className = {styles.btn} onClick = {activationHandler}>
                {loading
                ? <CircularProgress size = {15} sx = {{ color: '#333333' }} />
                : <span className = {styles.circle} id = {isActive ? styles.active : ''}></span>}
            </button>

        </section>
    );
};

export default Activation;