import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Booking = () => {
    return (
        <div className = {styles.booking}>
            
            <Link className = {styles.btn} to = '/booking'>
                رزرو نوبت
            </Link>
            
        </div>
    );
};

export default Booking;