import React, { useContext, useRef, useState } from 'react';
import styles from './styles.module.css';
import { ServiceContext } from '../../../scripts/context';


const Price = () => {

    const inputRef = useRef();

    const { data, changeHandler } = useContext(ServiceContext);
    
    return (
        <div className = {styles.part}>
            
            <label htmlFor = 'artistServiceFormPrice'>هزینه</label>

            <div>
                <input className = 'form-control'
                id = 'artistServiceFormPrice'
                inputMode = 'numeric'
                type = 'number'
                placeholder = 'هزینه'
                name = 'price'
                value = {data.price}
                onChange = {changeHandler}
                ref = {inputRef}
                />

                <span className={styles.unit}>
                    تومان
                </span>
            </div>

        </div>
    );
};

export default Price;