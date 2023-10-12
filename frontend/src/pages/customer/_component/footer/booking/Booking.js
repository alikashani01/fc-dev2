import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import Start from './start/Start';

export const BookingContext = createContext();
const Booking = () => {
    const [toggle, setToggle] = useState(false);
    const openHandler = () => setToggle(true);
    const contextValues = {
        toggle, 
        setToggle,
    };
    return (
        <BookingContext.Provider value = {contextValues}>
        <div className = {styles.booking}>
            
            <button className = {styles.btn} onClick = {openHandler}>
                رزرو نوبت
            </button>
            
        </div>
        <Start toggle = {toggle} setToggle = {setToggle} />
        </BookingContext.Provider>
    );
};

export default Booking;