import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Price from './price/Price';
import Submit from './submit/SubmitButton';


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

            <Submit />

        </footer>
    );
};

export default Footer;