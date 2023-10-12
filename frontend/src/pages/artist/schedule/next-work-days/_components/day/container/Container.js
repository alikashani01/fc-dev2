import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';


const Container = ({ open, onClose, day }) => {
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <Header day = {day} />
            
            <Body day = {day} />

            <Footer onClose = {onClose} />

        </div>
    );
};

export default Container;