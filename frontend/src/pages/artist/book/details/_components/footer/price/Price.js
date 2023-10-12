import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Price = ({ services }) => {

    const totalPrice = services.reduce((acc, item) => acc + item.price, 0);
    
    return (
        <div className = {styles.price}>

            <span className={styles.value}>
                {totalPrice.toLocaleString('fa')}
            </span>
            
            <span className={styles.unit}>تومان</span>

        </div>
    );
};

export default Price;