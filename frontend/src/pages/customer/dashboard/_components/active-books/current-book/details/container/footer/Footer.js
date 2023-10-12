import React from 'react';
import styles from './styles.module.css';


const Footer = ({ onClose }) => {
    return (
        <div className = {styles.footer}>
            
            <button onClick = {onClose}>
                <span></span>
                <span></span>
            </button>
            
        </div>
    );
};

export default Footer;