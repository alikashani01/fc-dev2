import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Price from './price/Price';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


const Footer = () => {

    const { services } = useSelector(state => state.booking);

    return (
        <footer className = {styles.footer}>

            <div>
                <span className={styles.title}>
                    مجموع هزینه
                </span>
                {services.length > 0
                ? <Price services = {services} />
                : <span className={styles.msg}>
                    سرویسی انتخاب نشده
                </span>
                }
                
            </div>

            <Button id = {styles.link} component = {Link} to = '/booking/review-and-date'>
                <span>ادامه</span>
            </Button>

        </footer>
    );
};

export default Footer;