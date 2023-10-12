import React from 'react';
import styles from './styles.module.css';
import Footer from './footer/Footer';
import Body from './body/Body';


const Container = ({ open, onClose }) => {
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
                  
            <Body />

            <Footer onClose = {onClose} />

        </div>
    );
};

export default Container;