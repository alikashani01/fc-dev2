import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Container from './container/Container';


const Details = ({ open, setOpen }) => {
    
    const closeHandler = () => setOpen(false);

    return (
        <Backdrop id = {styles.backdrop} open = {open} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            
            <Container open = {open} onClose = {closeHandler} />

        </Backdrop>
    );
};

export default Details;