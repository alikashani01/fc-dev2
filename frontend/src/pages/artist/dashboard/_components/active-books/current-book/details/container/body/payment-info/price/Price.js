import React from 'react';
import styles from './styles.module.css';


const Price = ({ value = 5600000, unit = 'تومان', startFrom = false }) => {
    return (
        <div className = {styles.price}>
             
            {startFrom && 
            <span className = {styles.start_from}>از</span>}

            <span className={styles.value}>{value.toLocaleString('fa')}</span>
            
            <span className={styles.unit}>{unit}</span>

        </div>
    );
};

export default Price;