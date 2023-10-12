import React from 'react';
import styles from './styles.module.css';
import Submit from './submit/SubmitButton';


const Footer = ({ onClose }) => {
    return (
        <div className = {styles.footer}>
            
            <Submit />
            
            <button className={styles.close_btn} onClick = {onClose}>
                <span></span>
                <span></span>
            </button>
            
        </div>
    );
};

export default Footer;