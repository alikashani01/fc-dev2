import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import Container from './container/Container';


const CompleteRegistration = () => {
    
    const { success, customer } = useSelector(state => state.customerAccountDetails);
    
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        if (success) {
            (customer && !customer.fullName) ? setOpen(true) : setOpen(false);
        }
    }, [success, customer.fullName]);
    
    const closeHandler = () => {};

    return (
        <Backdrop id = {styles.backdrop} open = {open} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            
            <Container open = {open} />

        </Backdrop>
    );
};

export default CompleteRegistration;