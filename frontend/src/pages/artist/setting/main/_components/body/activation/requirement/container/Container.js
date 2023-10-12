import React from 'react';
import styles from './styles.module.css';
import Footer from './footer/Footer';
import { useSelector } from 'react-redux';


const Container = ({ open, setOpen }) => {
    const { artist: { isActive, skills: { main }, services, salon, schedule } } = useSelector(state => state.artistAccountDetails);
    const skill = !main;
    const service = !services.length;
    const salonName = !salon.name;
    return (
        <div className = {styles.container} id = {open ? styles.open : ''}>
      
            <div className={styles.header}>
                لطفا اطلاعات زیر را وارد کنید و سپس اقدام به فعال‌سازی کنید
            </div>
            
            <div className={styles.body}>
                {skill && <span className={styles.title}>مهارت اصلی</span>}
                {service && <span className={styles.title}>حداقل ۱ سرویس</span>}
                {salonName && <span className={styles.title}>سالن</span>}
            </div>

            <Footer setOpen = {setOpen} />

        </div>
    );
};

export default Container;