import React, { useContext } from 'react';
import styles from './styles.module.css';
import { BookingContext } from '../../../Booking';


const Footer = () => {
    const { setToggle } = useContext(BookingContext);
    const closeHandler = () => setToggle(false);
    return (
        <div className = {styles.footer}>
            
            <button onClick = {closeHandler}>
                <span></span>
                <span></span>
            </button>
            
        </div>
    );
};

export default Footer;