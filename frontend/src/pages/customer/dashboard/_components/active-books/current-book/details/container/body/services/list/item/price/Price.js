import React from 'react';
import styles from './styles.module.css';


const Price = ({ value = 5600000, unit = 'تومان' }) => {
    return (
        <div className = {styles.price}>

            <span className={styles.value}>{value.toLocaleString('fa')}</span>
            
            <span className={styles.unit}>{unit}</span>

        </div>
    );
};

export default Price;