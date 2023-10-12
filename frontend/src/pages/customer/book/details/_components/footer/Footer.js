import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className = {styles.footer}>

            <Link to = '/customer'>
                نوبت‌های من
            </Link>

            <button>
                نوبت جدید
            </button>

        </footer>
    );
};

export default Footer;