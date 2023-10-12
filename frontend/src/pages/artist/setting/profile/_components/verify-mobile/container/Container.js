import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Verify from './verify/Verify';


const Container = ({ open, setOpen }) => {
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <Header setOpen = {setOpen} />
            
            <Verify />

        </div>
    );
};

export default Container;