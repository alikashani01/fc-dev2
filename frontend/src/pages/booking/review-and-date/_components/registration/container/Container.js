import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';


const Container = ({ open }) => {
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <Header />
            
            <Body />

            <Footer />

        </div>
    );
};

export default Container;