import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className = {styles.footer}>

            <Link to = '/customer'>
                حساب کاربری
            </Link>

        </footer>
    );
};

export default Footer;