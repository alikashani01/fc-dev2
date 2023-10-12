import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Container from './container/Container';

const Start = ({ toggle, setToggle }) => {
    const closeHandler = () => setToggle(false);
    return (
        <Backdrop id = {styles.backdrop} open = {toggle} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            
            <Container open = {toggle} />

        </Backdrop>
    );
};

export default Start;