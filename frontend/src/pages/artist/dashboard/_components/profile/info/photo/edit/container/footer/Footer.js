import React from 'react';
import styles from './styles.module.css';

const Footer = ({ setOpen }) => {
    const closeHandler = () => setOpen(false);
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