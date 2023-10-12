import React from 'react';
import styles from './styles.module.css';
import Form from './form/Form';


const Location = () => {
    return (
        <div className = {styles.location}>

            <span className={styles.title}>
                لطفا موقعیت مکانی خود را مشخص کنید
            </span>

            <Form />

        </div>
        
    );
};

export default Location;